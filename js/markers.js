if (!window.NoitaMapViewer) {
  window.NoitaMapViewer = {};
}
window.NoitaMapViewer.markers = (function () {
  var markers = [
    {
      point: {
        x: 0.46863901399999996,
        y: 0.4118590048106871,
      },
      id: 'achievement_pillars',
      icon: 'pin-blue',
      html: '<b>Achievement Pillars</b><hr>Visit <a href="icons/achievement_pillars.png" target="_blank" rel="noopener noreferrer">this</a> link for details on how to unlock them.',
    },
    {
      point: {
        x: 0.529892786,
        y: 0.5124939978836143,
      },
      id: 'anvil',
      icon: 'pin-blue',
      html: '<b>Anvil</b><hr>Can be used to reforge emerald tablets.',
    },
    {
      point: {
        x: 0.683215354,
        y: 0.48898856837247995,
      },
      id: 'avarice_diamond',
      icon: 'pin-blue',
      html: '<b>Avarice Diamond</b> <a href="https://noita.fandom.com/wiki/The_Tower#Avarice_Diamond" target="_blank" rel="noopener noreferrer">[wiki]',
    },
    {
      point: {
        x: 0.46319291399999996,
        y: 0.4216822724154871,
      },
      id: 'bammalam_monument',
      icon: 'pin-blue',
      html: '<b>Bammalam Monument</b> <a href="https://noita.fandom.com/wiki/Giant_Tree#Left_Side" target="_blank" rel="noopener noreferrer">[wiki]',
    },
    {
      point: {
        x: 0.613901354,
        y: 0.474836988196907,
      },
      id: 'big_fungus',
      icon: 'flag-violet',
      html: '<b>Big Fungus</b><hr>Now comes pre-loaded with Mystery Fungus!',
    },
    {
      point: {
        x: 0.228069924,
        y: 0.43493643531163345,
      },
      id: 'blood_portal',
      icon: 'pin-blue',
      html: '<b>Blood Portal</b><hr>Fill this cavern with blood to open a portal back to The Mountain.',
    },
    {
      point: {
        x: 0.574699336,
        y: 0.4897617278747551,
      },
      id: 'buried_eye_portal',
      icon: 'pin-blue',
      html: '<b>Buried Eye Portal</b> <a href="https://noita.fandom.com/wiki/Buried_Eye" target="_blank" rel="noopener noreferrer">[wiki]</a><hr>Fill the rare Snowy Depths spawn Buried Eye statue with Teleportatium to open a portal here.',
    },
    {
      point: {
        x: 0.25941965600000005,
        y: 0.4332589553200899,
      },
      id: 'cabin',
      icon: 'pin-blue',
      html: '<b>Cabin</b><hr>Throw a Tablet (or a Reforged Tablet) here to open a portal to the containers below. Each container contains a decent wand and unlocks either Glimmer (via Tablet) or Requirement (via Reforged Tablet) spells. Reforged Tablets can be made by throwing tablets from Orb Rooms onto the Anvil in Hiisi Base.',
    },
    {
      point: {
        x: 0.259231518,
        y: 0.4362549483914063,
      },
      id: 'cabin_secret_01',
      icon: 'pin-blue',
      html: '<b>Cabin Secret</b><hr>Throw a regular Tablet in the cabin to access this. Spawns multiple Glimmer spells and an Experimental Wand. Be careful of Damned Alchemist enemy inside.',
    },
    {
      point: {
        x: 0.252438746,
        y: 0.4392233286233557,
      },
      id: 'cabin_secret_02',
      icon: 'pin-blue',
      html: '<b>Cabin Secret</b><hr>Reforge a regular Tablet at the Anvil in Hiisi base, then throw it in the cabin to access this. Spawns multiple Requirements spells and an Experimental Wand. Be careful of Damned Alchemist enemy inside.',
    },
    {
      point: {
        x: 0.57372894,
        y: 0.5049004670576971,
      },
      id: 'cauldron_room',
      icon: 'help',
      html: '<b>Cauldron Room</b> <a href="https://noita.fandom.com/wiki/Cauldron_Room" target="_blank" rel="noopener noreferrer">[wiki]</a><hr> The Cauldron Room spawns here if you aren\'t using any mods. It currently doesn\'t have any known purpose. It exists in NG+, but not in parallel worlds.',
    },
    {
      point: {
        x: 0.72280355,
        y: 0.3650000164049367,
      },
      id: 'coral_chest',
      icon: 'pin-blue',
      html: '<b>Coral Chest</b> <a href="https://noita.fandom.com/wiki/Crystal_Key" target="_blank" rel="noopener noreferrer">[wiki]</a><hr>Bring the Crystal Key (obtained from the High Alchemist) here after charging it at the four music boxes.',
    },
    {
      point: {
        x: 0.47342168000000007,
        y: 0.4248784585722141,
      },
      id: 'curse_of_greed',
      icon: 'pin-blue',
      html: '<b>Curse of Greed</b><hr>Destroy the Green Crystal in the Holy Mountain to remove the curse or bring the curse to the Avarice Diamond in The Tower to unlock the Divide By 10 spell.',
    },
    {
      point: {
        x: 0.46459899799999993,
        y: 0.43887816813126856,
      },
      id: 'dark_cave',
      icon: 'heart',
      html: '<b>Dark Cave</b><hr>Always contains a Health Up and a Health Restore. The All-Seeing Eye Perk, Wormy Vision (from eating worm blood - check the nearby tree branch for small worm eggs) or a Light modifier on your spells is required to be able to see here. The layout of the Dark Cave is determined by your seed. You can see a list of possible cave layouts by visiting <a href="icons/dark_cave.png" target="_blank" rel="noopener noreferrer">this</a> link.',
    },
    {
      point: {
        x: 0.57427355,
        y: 0.6410800876057582,
      },
      id: 'dark_chest',
      icon: 'pin-blue',
      html: '<b>Dark Chest</b>  <a href="https://noita.fandom.com/wiki/Crystal_Key#Dark_Chest" target="_blank" rel="noopener noreferrer">[wiki]</a>',
    },
    {
      point: {
        x: 0.504979354,
        y: 0.9396784293103447,
      },
      id: 'dark_moon',
      icon: 'pin-blue',
      html: '<b>Dark Moon</b>',
    },
    {
      point: {
        x: 0.545300298,
        y: 0.5316780180338175,
      },
      id: 'dragon',
      icon: 'error',
      html: '<b>Suomuhauki (aka Dragon)</b>',
    },
    {
      point: {
        x: 0.40559298,
        y: 0.6352951977583775,
      },
      id: 'end_of_everything_room',
      icon: 'pin-blue',
      html: '<b>End of Everything room</b>  <a href="https://noita.fandom.com/wiki/Summon_Portal" target="_blank" rel="noopener noreferrer">[wiki]</a>',
    },
    {
      point: {
        x: 0.46881724999999996,
        y: 0.4190659558854667,
      },
      id: 'esa_carving',
      icon: 'pin-blue',
      html: "<b>ESA Carving</b><hr>This is a reference to Environmental Station Alpha, another game from one of Nolla's developers.",
    },
    {
      point: {
        x: 0.743112552,
        y: 0.43085663829516346,
      },
      id: 'essence_eater_east',
      icon: 'pin-blue',
      html: '<b>Essence Eater (East)</b>',
    },
    {
      point: {
        x: 0.366895964,
        y: 0.428371482752136,
      },
      id: 'essence_eater_west',
      icon: 'pin-blue',
      html: '<b>Essence Eater (West)</b>',
    },
    {
      point: {
        x: 0.247547158,
        y: 0.3581865482911365,
      },
      id: 'essence_of_air',
      icon: 'pin-blue',
      html: '<b>Essence of Air</b>',
    },
    {
      point: {
        x: 0.8119413539999999,
        y: 0.4065228236030199,
      },
      id: 'essence_of_earth',
      icon: 'pin-blue',
      html: '<b>Essence of Earth</b>',
    },
    {
      point: {
        x: 0.228069924,
        y: 0.4356267562958077,
      },
      id: 'essence_of_fire',
      icon: 'pin-blue',
      html: '<b>Essence of Fire</b>',
    },
    {
      point: {
        x: 0.227723354,
        y: 0.6136260220651467,
      },
      id: 'essence_of_spirits',
      icon: 'pin-blue',
      html: '<b>Essence of Spirits</b>',
    },
    {
      point: {
        x: 0.396057354,
        y: 0.6550314746959204,
      },
      id: 'essence_of_water',
      icon: 'pin-blue',
      html: '<b>Essence of Water</b>',
    },
    {
      point: {
        x: 0.452954246,
        y: 0.42792967732226445,
      },
      id: 'evil_eye',
      icon: 'pin-blue',
      html: '<b>Paha Silmä (aka Evil Eye)</b>',
    },
    {
      point: {
        x: 0.811802726,
        y: 0.5652690371237382,
      },
      id: 'experimental_wand',
      icon: 'pin-blue',
      html: '<b>Experimental Wand</b><hr>Unlocks Funky (bullet) spell.',
    },
    {
      point: {
        x: 0.425783158,
        y: 0.5034853090401398,
      },
      id: 'eye_room',
      icon: 'pin-blue',
      html: '<b>Eye Room</b><hr>Companion to the Hourglass portal. Contains eight spells.',
    },
    {
      point: {
        x: 0.297037354,
        y: 0.48967888935665416,
      },
      id: 'friend_cavern_01',
      icon: 'flag-green',
      html: '<b>Friend Cavern</b><hr>This is one out of six possible spawn locations. Your seed determines at which of the six locations the Friend Cavern spawns.',
    },
    {
      point: {
        x: 0.40595935400000005,
        y: 0.496582099198397,
      },
      id: 'friend_cavern_02',
      icon: 'flag-green',
      html: '<b>Friend Cavern</b><hr>This is one out of six possible spawn locations. Your seed determines at which of the six locations the Friend Cavern spawns.',
    },
    {
      point: {
        x: 0.564391354,
        y: 0.5103885188818826,
      },
      id: 'friend_cavern_03',
      icon: 'flag-green',
      html: '<b>Friend Cavern</b><hr>This is one out of six possible spawn locations. Your seed determines at which of the six locations the Friend Cavern spawns.',
    },
    {
      point: {
        x: 0.40595935400000005,
        y: 0.6070334566662824,
      },
      id: 'friend_cavern_04',
      icon: 'flag-green',
      html: '<b>Friend Cavern</b><hr>This is one out of six possible spawn locations. Your seed determines at which of the six locations the Friend Cavern spawns.',
    },
    {
      point: {
        x: 0.287135354,
        y: 0.5863238271410539,
      },
      id: 'friend_cavern_05',
      icon: 'flag-green',
      html: '<b>Friend Cavern</b><hr>This is one out of six possible spawn locations. Your seed determines at which of the six locations the Friend Cavern spawns.',
    },
    {
      point: {
        x: 0.584195354,
        y: 0.5656141976158253,
      },
      id: 'friend_cavern_06',
      icon: 'flag-green',
      html: '<b>Friend Cavern</b><hr>This is one out of six possible spawn locations. Your seed determines at which of the six locations the Friend Cavern spawns.',
    },
    {
      point: {
        x: 0.614891554,
        y: 0.36573175664816143,
      },
      id: 'fungal_altar_01',
      icon: 'flag-violet',
      html: '<b>Fungal Altar</b><hr>Bring Mystery Fungus.',
    },
    {
      point: {
        x: 0.792285884,
        y: 0.45543206533176794,
      },
      id: 'fungal_altar_02',
      icon: 'flag-violet',
      html: '<b>Fungal Altar</b><hr>Bring Mystery Fungus.',
    },
    {
      point: {
        x: 0.75270759,
        y: 0.5659248420587037,
      },
      id: 'fungal_altar_03',
      icon: 'flag-violet',
      html: '<b>Fungal Altar</b><hr>Bring Mystery Fungus.',
    },
    {
      point: {
        x: 0.43580398200000003,
        y: 0.4554596781711349,
      },
      id: 'fungal_altar_04',
      icon: 'flag-violet',
      html: '<b>Fungal Altar</b><hr>Bring Mystery Fungus.',
    },
    {
      point: {
        x: 0.475639728,
        y: 0.5659041324291786,
      },
      id: 'fungal_altar_05',
      icon: 'flag-violet',
      html: '<b>Fungal Altar</b><hr>Bring Mystery Fungus.',
    },
    {
      point: {
        x: 0.6146935139999999,
        y: 0.43072547730817035,
      },
      id: 'fungus_quest',
      icon: 'flag-violet',
      html: '<b>Hint for Fungus quest</b><hr>Get the Paha Silmä (Evil Eye) and a Powder Pouch filled with Mystery Fungus.',
    },
    {
      point: {
        x: 0.554687394,
        y: 0.5872833733090561,
      },
      id: 'gate_guardian',
      icon: 'error',
      html: '<b>Gate Guardian (aka Triangle Boss)</b><hr>Shoot three eggs (regular or hollow) to awaken it. Drops four random spells when defeated.',
    },
    {
      point: {
        x: 0.7918105879999999,
        y: 0.38610312889114456,
      },
      id: 'gold_biome_01',
      icon: 'pin-blue',
      html: '<b>Gold biome</b><hr>Increasingly slanted Gold biomes are available in parallel worlds.',
    },
    {
      point: {
        x: 0.22799070800000001,
        y: 0.6550038618565533,
      },
      id: 'gold_biome_02',
      icon: 'pin-blue',
      html: '<b>Gold biome</b>',
    },
    {
      point: {
        x: 0.09873000000000001,
        y: 0.38607551605177753,
      },
      id: 'gold_biome_03',
      icon: 'pin-blue',
      html: '<b>Gold biome</b>',
    },
    {
      point: {
        x: 0.18703603599999996,
        y: 0.3458574155137838,
      },
      id: 'gourd_cave',
      icon: 'heart',
      html: '<b>Gourd Cave</b><hr>Can be thrown at feet for healing or thrown at Kolmi.',
    },
    {
      point: {
        x: 0.881374178,
        y: 0.3443870318174926,
      },
      id: 'gourd_cave_404',
      icon: 'pin-blue',
      html: '<b>Gourd Cave</b><hr>This is where it would normally be, but it does not exist in parallel worlds.',
    },
    {
      point: {
        x: 0.7426273539999999,
        y: 0.6360476476311275,
      },
      id: 'grand_master',
      icon: 'error',
      html: '<b>Mestarien mestari (aka Master of Masters aka Wizard Boss)</b> <a href="https://noita.fandom.com/wiki/Mestarien_mestari" target="_blank" rel="noopener noreferrer">[wiki]',
    },
    {
      point: {
        x: 0.405919746,
        y: 0.4428544170001125,
      },
      id: 'high_alchemist',
      icon: 'error',
      html: '<b>Ylialkemisti (aka High Alchemist)</b> <a href="https://noita.fandom.com/wiki/Ylialkemisti" target="_blank" rel="noopener noreferrer">[wiki]',
    },
    {
      point: {
        x: 0.533041622,
        y: 0.5013177011498327,
      },
      id: 'hourglass_room',
      icon: 'pin-blue',
      html: '<b>Hourglass Room</b><hr>This structure can spawn on either the left or the right side of the Hiisi Base. Fill the hourglass with blood for money or fill it with teleportatium to open a portal to the Eye Room.',
    },
    {
      point: {
        x: 0.46784685400000003,
        y: 0.4204742106931822,
      },
      id: 'kantele',
      icon: 'pin-blue',
      html: '<b>Kantele and Note spells</b>',
    },
    {
      point: {
        x: 0.56303478,
        y: 0.46161043814012775,
      },
      id: 'karl_the_mighty',
      icon: 'face-happy',
      html: '<b>Karl the Mighty, First of its Name, Mover of Suns and Friend to All</b>',
    },
    {
      point: {
        x: 0.568649214,
        y: 0.6064397806198926,
      },
      id: 'kolmi',
      icon: 'error',
      html: '<b>Kolmisilmä (aka Kolmi)</b> <a href="https://noita.fandom.com/wiki/Kolmisilmä" target="_blank" rel="noopener noreferrer">[wiki]</a>',
    },
    {
      point: {
        x: 0.22920865399999998,
        y: 0.5662216800818987,
      },
      id: 'leviathan',
      icon: 'error',
      html: '<b>Syväolento (aka Leviathan)</b> <a href="https://noita.fandom.com/wiki/Syväolento" target="_blank" rel="noopener noreferrer">[wiki]</a><hr>Exists in NG+, but not in parallel worlds.',
    },
    {
      point: {
        x: 0.7723333539999999,
        y: 0.5800971318638017,
      },
      id: 'mecha_kolmi',
      icon: 'error',
      html: '<b>Kolmisilmän silmä (aka Mecha Kolmi)</b> <a href="https://noita.fandom.com/wiki/Kolmisilmän_silmä" target="_blank" rel="noopener noreferrer">[wiki]',
    },
    {
      point: {
        x: 0.415999982,
        y: 0.46203843715031584,
      },
      id: 'meditation_cube_room',
      icon: 'pin-blue',
      html: '<b>Meditation Cube room</b><hr>Find a rare black and gold cube spawn in Coal Pits and stand motionless on it for one minute to open a portal here. Contains a low-tier wand and allows wand editing while inside of it.',
    },
    {
      point: {
        x: 0.504939746,
        y: 0.08254137931034482,
      },
      id: 'moon',
      icon: 'pin-blue',
      html: '<b>Moon</b>',
    },
    {
      point: {
        x: 0.8117829219999999,
        y: 0.47554111560076484,
      },
      id: 'moon_radar_perk',
      icon: 'pin-blue',
      html: '<b>Moon Radar Perk</b>',
    },
    {
      point: {
        x: 0.515128904,
        y: 0.41508970701662273,
      },
      id: 'mountain_altar',
      icon: 'pin-blue',
      html: '<b>Mountain Altar</b>',
    },
    {
      point: {
        x: 0.7841662439999999,
        y: 0.43043554249481714,
      },
      id: 'music_box_desert',
      icon: 'pin-blue',
      html: '<b>Desert Music Box</b>',
    },
    {
      point: {
        x: 0.463093894,
        y: 0.4125976482637536,
      },
      id: 'music_box_giant_tree',
      icon: 'pin-blue',
      html: '<b>Music Box (Giant Tree)</b>',
    },
    {
      point: {
        x: 0.264360754,
        y: 0.42512007091667514,
      },
      id: 'music_box_lake',
      icon: 'pin-blue',
      html: '<b>Lake Music Box</b>',
    },
    {
      point: {
        x: 0.554202196,
        y: 0.4337905024779041,
      },
      id: 'music_box_pond',
      icon: 'pin-blue',
      html: '<b>Music Box (Pond)</b>',
    },
    {
      point: {
        x: 0.43566535399999995,
        y: 0.4751821486889943,
      },
      id: 'music_stone',
      icon: 'pin-blue',
      html: '<b>Music Stone</b>',
    },
    {
      point: {
        x: 0.306939354,
        y: 0.3433653567609146,
      },
      id: 'ocarina',
      icon: 'pin-blue',
      html: '<b>Ocarina and Note spells</b>',
    },
    {
      point: {
        x: 0.7030193539999999,
        y: 0.6499783250917647,
      },
      id: 'orb_cement',
      icon: 'circle-blue',
      html: '<b>Orb (Cement)</b>',
    },
    {
      point: {
        x: 0.326743354,
        y: 0.6293446308747952,
      },
      id: 'orb_deercoy',
      icon: 'circle-blue',
      html: '<b>Orb (Deercoy)</b><hr>Unlocks Deercoy and Flock of Ducks spells.',
    },
    {
      point: {
        x: 0.6930777459999999,
        y: 0.4151173198559897,
      },
      id: 'orb_earthquake',
      icon: 'circle-blue',
      html: '<b>Orb (Earthquake)</b><hr>Bring Paha Silmä (Evil Eye) here and look up to find a series of platforms leading to the sky and Coral Chest above.',
    },
    {
      point: {
        x: 0.49507735399999997,
        y: 0.6499369058327141,
      },
      id: 'orb_fireworks',
      icon: 'circle-blue',
      html: '<b>Orb (Fireworks)</b>',
    },
    {
      point: {
        x: 0.415861354,
        y: 0.48436341777851216,
      },
      id: 'orb_holy_bomb',
      icon: 'circle-blue',
      html: '<b>Orb (Holy Bomb)</b>',
    },
    {
      point: {
        x: 0.693117354,
        y: 0.4704534499474004,
      },
      id: 'orb_necromancy',
      icon: 'circle-blue',
      html: '<b>Orb (Necromancy)</b>',
    },
    {
      point: {
        x: 0.567213424,
        y: 0.45659180458518067,
      },
      id: 'orb_nuke',
      icon: 'circle-blue',
      html: '<b>Orb (Nuke)</b>',
    },
    {
      point: {
        x: 0.5151091,
        y: 0.41643583293576264,
      },
      id: 'orb_sea_of_lava',
      icon: 'circle-blue',
      html: '<b>Orb (Sea of Lava)</b>',
    },
    {
      point: {
        x: 0.425763354,
        y: 0.5672157422991098,
      },
      id: 'orb_spiral_shot',
      icon: 'circle-blue',
      html: '<b>Orb (Spiral Shot)</b>',
    },
    {
      point: {
        x: 0.306939354,
        y: 0.47055009488518473,
      },
      id: 'orb_tentacle',
      icon: 'circle-blue',
      html: '<b>Orb (Tentacle)</b>',
    },
    {
      point: {
        x: 0.584195354,
        y: 0.4429372555182134,
      },
      id: 'orb_thundercloud',
      icon: 'circle-blue',
      html: '<b>Orb (Thundercloud)</b><hr>Visit <a href="icons/orb_retrieval.png" target="_blank" rel="noopener noreferrer">this</a> link for safe methods of retrieval.',
    },
    {
      point: {
        x: 0.7723333539999999,
        y: 0.5325547256837189,
      },
      id: 'perk_removal_altar',
      icon: 'pin-blue',
      html: '<b>Perk Removal Altar</b><hr>Fill with blood (left), whiskey (center) and silver (right) to drop all of your perks. You can then choose which perks to pick back up.',
    },
    {
      point: {
        x: 0.576481696,
        y: 0.5294275716254094,
      },
      id: 'portal_to_coral_chest',
      icon: 'pin2-red',
      html: '<b>Portal to Coral Chest</b>',
    },
    {
      point: {
        x: 0.576343068,
        y: 0.5328653701265973,
      },
      id: 'portal_to_hell_orb_room',
      icon: 'pin2-red',
      html: '<b>Portal to Hell Orb Room</b>',
    },
    {
      point: {
        x: 0.5717386379999999,
        y: 0.5310981484071111,
      },
      id: 'portal_to_island',
      icon: 'pin2-red',
      html: '<b>Portal to Island</b>',
    },
    {
      point: {
        x: 0.5766302259999999,
        y: 0.5313949864303061,
      },
      id: 'portal_to_nullifying_altar',
      icon: 'pin2-red',
      html: '<b>Portal to Nullifying Altar</b>',
    },
    {
      point: {
        x: 0.571817854,
        y: 0.5293861523663589,
      },
      id: 'portal_to_ocarina',
      icon: 'pin2-red',
      html: '<b>Portal to Ocarina</b>',
    },
    {
      point: {
        x: 0.571956482,
        y: 0.5327825316084964,
      },
      id: 'portal_to_snowy_chasm_orb_room',
      icon: 'pin2-red',
      html: '<b>Portal to Snowy Chasm Orb Room</b>',
    },
    {
      point: {
        x: 0.17788658799999998,
        y: 0.6616654593538353,
      },
      id: 'power_plant_biome',
      icon: 'pin-blue',
      html: '<b>Power Plant biome</b>',
    },
    {
      point: {
        x: 0.178213354,
        y: 0.6694867961045298,
      },
      id: 'power_plant_infinite',
      icon: 'pin-blue',
      html: '<b>The Power Plant biome extends downwards from here forever.</b>',
    },
    {
      point: {
        x: 0.229228458,
        y: 0.392695694290009,
      },
      id: 'rainbow_trail_spell',
      icon: 'pin-blue',
      html: '<b>Rainbow Trail spell</b>',
    },
    {
      point: {
        x: 0.693117354,
        y: 0.48895405232327116,
      },
      id: 'reward_diamond',
      icon: 'pin-blue',
      html: '<b>Reward Diamond</b> <a href="https://noita.fandom.com/wiki/The_Tower#Reward_Diamond" target="_blank" rel="noopener noreferrer">[wiki]',
    },
    {
      point: {
        x: 0.7526085699999999,
        y: 0.43004205953383773,
      },
      id: 'scales',
      icon: 'pin-blue',
      html: '<b>Scales</b><hr>Restore balance to the world by creating the Sun and Dark Sun at their respective moons. Permanently unlocks the Omega Black Hole spell.',
    },
    {
      point: {
        x: 0.26439046,
        y: 0.4263212294291384,
      },
      id: 'secret_platforms',
      icon: 'pin-blue',
      html: '<b>Secret Platforms</b><hr>Bring Paha Silmä (Evil Eye) here to reveal a series of platforms leading to the sky and Ocarina.',
    },
    {
      point: {
        x: 0.43812105,
        y: 0.8134049148851846,
      },
      id: 'shop_hell_01',
      icon: 'pin-blue',
      html: '<b>Shop (Hell)</b>',
    },
    {
      point: {
        x: 0.564391354,
        y: 0.9174500936199328,
      },
      id: 'shop_hell_02',
      icon: 'pin-blue',
      html: '<b>Shop (Hell)</b>',
    },
    {
      point: {
        x: 0.5643715499999999,
        y: 0.2549007226389801,
      },
      id: 'shop_sky_01',
      icon: 'pin-blue',
      html: '<b>Shop (Sky)</b>',
    },
    {
      point: {
        x: 0.43818046199999994,
        y: 0.15080031822549803,
      },
      id: 'shop_sky_02',
      icon: 'pin-blue',
      html: '<b>Shop (Sky)</b>',
    },
    {
      point: {
        x: 0.643528138,
        y: 0.43125702446598446,
      },
      id: 'skull_portal',
      icon: 'pin-blue',
      html: '<b>Skull Portal</b><hr>Fill eye with water to open a portal to The Lake.',
    },
    {
      point: {
        x: 0.574134922,
        y: 0.5293447331073085,
      },
      id: 'teleport_room',
      icon: 'pin-blue',
      html: '<b>Teleport Room</b> <a href="https://noita.fandom.com/wiki/Teleport_Room" target="_blank" rel="noopener noreferrer">[wiki]</a>',
    },
    {
      point: {
        x: 0.27723335400000004,
        y: 0.6085866788806745,
      },
      id: 'the_forgotten',
      icon: 'error',
      html: '<b>Unohdettu (aka The Forgotten)</b> <a href="https://noita.fandom.com/wiki/Unohdettu" target="_blank" rel="noopener noreferrer">[wiki]</a>',
    },
    {
      point: {
        x: 0.623763746,
        y: 0.6349293276367651,
      },
      id: 'the_work',
      icon: 'pin-blue',
      html: '<b>The Work</b><hr>Kill Kolmi to open a portal here.',
    },
    {
      point: {
        x: 0.69299853,
        y: 0.4196113094629643,
      },
      id: 'three_eyes_legs',
      icon: 'error',
      html: '<b>Kolmisilmän koipi (aka Pyramid Boss)</b> <a href="https://noita.fandom.com/wiki/Kolmisilmän_koipi" target="_blank" rel="noopener noreferrer">[wiki]',
    },
    {
      point: {
        x: 0.78771116,
        y: 0.6812429624650179,
      },
      id: 'tiny',
      icon: 'error',
      html: '<b>Limatoukka (aka Maggot aka Tiny)</b> <a href="https://noita.fandom.com/wiki/Limatoukka" target="_blank" rel="noopener noreferrer">[wiki]</a><hr>Exists in NG+, but not in parallel worlds.',
    },
    {
      point: {
        x: 0.688404002,
        y: 0.5544793201410941,
      },
      id: 'tower_entrance',
      icon: 'pin-blue',
      html: '<b>Entrance to The Tower</b>',
    },
    {
      point: {
        x: 0.415861354,
        y: 0.5782194587868478,
      },
      id: 'tower_portal',
      icon: 'pin-blue',
      html: '<b>Portal to The Tower</b><hr>Drain or destroy the lava to reveal the portal.',
    },
    {
      point: {
        x: 0.9183878539999999,
        y: 0.4171951860183543,
      },
      id: 'warning_01',
      icon: 'error',
      html: '<b>Warning</b><hr>Watch out for High Alchemist and Pit Boss spawns on the surface of parallel worlds.',
    },
    {
      point: {
        x: 0.095036554,
        y: 0.4171951860183543,
      },
      id: 'warning_02',
      icon: 'error',
      html: '<b>Warning</b><hr>Watch out for High Alchemist and Pit Boss spawns on the surface of parallel worlds.',
    },
    {
      point: {
        x: 0.479818372,
        y: 0.42425716968645727,
      },
      id: 'wormy_egg',
      icon: 'pin-blue',
      html: '<b>Wormy Egg</b><hr>Can be useful for the Dark Cave below.',
    },
    {
      point: {
        x: 0.504434744,
        y: 0.42949670595634,
      },
      id: 'you',
      icon: 'pin-blue',
      html: '<b>You</b>',
    },
  ];

  return markers;
})();
