// Zoom Levels plugin
(function($) {
  'use strict';

  if (!$.version || $.version.major < 2) {
    throw new Error('This version of OpenSeadragonZoomLevels requires OpenSeadragon version 2.0.0+');
  }

  $.Viewer.prototype.zoomLevels = function(options) {
    if (!this.zoomLevelsInstance || options) {
      options = options || {};
      options.viewer = this;
      this.zoomLevelsInstance = new $.ZoomLevels(options);
    }
    return this.zoomLevelsInstance;
  };


  /**
   * @class ZoomLevels
   * @classdesc Allows restricting the image zoom to specific levels
   * @memberof OpenSeadragon
   * @param {Object} options
   */
  $.ZoomLevels = function(options) {
    var self = this;

    $.extend(true, self, {
      // internal state properties
      viewer: null,

      // options
      levels: [],
    }, options);

    sortZoomLevels(options.levels);

    var viewport = self.viewer.viewport;
    var zoom;
    self.viewer.addHandler('zoom', function(e) {
      if (zoom !== e.zoom) {
        zoom = e.zoom;

        if (zoom !== viewport.getHomeZoom()) {
          if (zoom < viewport.zoomSpring.current.value) {
            zoom = self.getLowerZoomLevel(zoom);
          } else if (zoom > viewport.zoomSpring.current.value) {
            zoom = self.getUpperZoomLevel(zoom);
          }
        }

        if (zoom !== e.zoom) {
          e.zoom = zoom;
          viewport.zoomTo(zoom, e.refPoint, e.immediately);
        }
      }
    });
  };

  $.extend($.ZoomLevels.prototype, /** @lends OpenSeadragon.ZoomLevels.prototype */ {
    /**
     * Only used for fixed zoom levels. See zoomLevels in {@link OpenSeadragon.Options}.
     * @function
     * @param {Number} zoom - The desired zoom level
     * @return {Number} The proper zoom level.
     */
    getUpperZoomLevel: function(zoom) {
      if ($.isArray(this.levels) && this.levels.length) {
        var viewport = this.viewer.viewport;
        var imageZoom = viewport.viewportToImageZoom(zoom);
        zoom = viewport.imageToViewportZoom(this.levels[this.levels.length - 1]);
        for (var i = 0; i < this.levels.length; i++) {
          if (this.levels[i] > imageZoom) {
            zoom = viewport.imageToViewportZoom(this.levels[i]);
            break;
          }
        }
        return Math.min(
          zoom,
          viewport.getMaxZoom()
        );
      }
      return zoom;
    },

    /**
     * Only used for fixed zoom levels. See zoomLevels in {@link OpenSeadragon.Options}.
     * @function
     * @param {Number} zoom - The desired zoom level
     * @return {Number} The proper zoom level.
     */
    getLowerZoomLevel: function(zoom) {
      if ($.isArray(this.levels) && this.levels.length) {
        var viewport = this.viewer.viewport;
        var imageZoom = viewport.viewportToImageZoom(zoom);
        zoom = viewport.imageToViewportZoom(this.levels[0]);
        for (var i = this.levels.length - 1; i >= 0; i--) {
          if (this.levels[i] < imageZoom) {
            zoom = viewport.imageToViewportZoom(this.levels[i]);
            break;
          }
        }
        return Math.max(
          zoom,
          viewport.getMinZoom()
        );
      }
      return zoom;
    },
  });

  /**
   * Sort zoom levels (if there are any) in numeric, ascending order
   * @function
   * @return {undefined}
   */
  function sortZoomLevels(levels) {
    if ($.isArray(levels)) {
      levels.sort(function(a, b) {
        // numeric, ascending
        return a - b;
      });
    }
  }

})(OpenSeadragon);

// Intialize OpenSeadragon
var viewer = OpenSeadragon({
  id: "osd-viewer",
  minZoomLevel: 0,
  defaultZoomLevel: 0,
  showNavigator: true,
  navigatorPosition: "BOTTOM_RIGHT",
  navigatorDisplayRegionColor: "#30a3f1",
  navigatorHeight: "25vh",
  navigatorWidth: "17vh",
  tileSources: "/iiif3/info.json"
});

// Initialize Zoom Levels plugin
var zoomLevels = viewer.zoomLevels({
  levels: [0, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
});

var absoluteMapSize;
var relativeMapSize;
var prevMarker;

var MARKER_CLICK_HANDLER = '__noita_onClick';

function addMarker(options) {
  var mapSize = options.mapSize;
  var marker = options.marker;
  var point = marker.point;

  var markerEl = document.createElement('div');
  markerEl.className = 'marker-icon marker-icon_' + marker.icon;

  var markerObj = {
    hidePopup: function() {
      if (!toggled) {
        return;
      }

      toggled = false;

      render();
    },
  };

  var toggled = false;

  markerEl[MARKER_CLICK_HANDLER] = function(event) {
    if (event.target !== markerEl) {
      return;
    }

    if (prevMarker && prevMarker !== markerObj) {
      prevMarker.hidePopup();
    }

    toggled = !toggled;
    render();

    prevMarker = markerObj;
  };

  var popupEl = document.createElement('div');
  popupEl.className = 'marker-icon__popup';
  popupEl.innerHTML = marker.html;

  function render() {
    markerEl.classList[toggled ? 'add' : 'remove']('marker-icon_active');

    if (!toggled) {
      if (popupEl.parentNode) {
        popupEl.parentNode.removeChild(popupEl);
      }
      return;
    }

    markerEl.appendChild(popupEl);
  }

  viewer.addOverlay({
    element: markerEl,
    location: new OpenSeadragon.Point(point.x * mapSize.width, point.y * mapSize.height),
  });
}

function onWorldAddItem(event) {
  var source = event.item.source;
  if (!/iiif3/.test(source['@id'])) {
    return;
  }

  viewer.world.removeHandler('add-item', onWorldAddItem);

  absoluteMapSize = {width: source.dimensions.x, height: source.dimensions.y};
  // Assuming that map is vertical
  relativeMapSize = {width: 1, height: absoluteMapSize.height / absoluteMapSize.width};

  window.NoitaMapViewer.markers.forEach(function(marker) {
    addMarker({
      mapSize: relativeMapSize,
      marker: marker
    });
  });
}
viewer.world.addHandler('add-item', onWorldAddItem);


viewer.addHandler('canvas-click', function (event) {
  var imagePoint = viewer.viewport.viewportToImageCoordinates(viewer.viewport.pointFromPixel(event.position));
  if (absoluteMapSize) {
    var x = imagePoint.x / absoluteMapSize.width;
    var y = imagePoint.y / absoluteMapSize.height;

    console.log('map point: ' + x + ', ' + y);
  }

  var clickHandler;
  var target = event.originalTarget;
  while (target) {
    clickHandler = target[MARKER_CLICK_HANDLER];
    if (typeof clickHandler === 'function') {
      event.preventDefaultAction = true;
      clickHandler({target: event.originalTarget});
      break;
    }

    target = target.parentNode;
  }
});
