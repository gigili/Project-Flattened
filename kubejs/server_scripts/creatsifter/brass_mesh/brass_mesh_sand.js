ServerEvents.recipes(event => {
  // brass_mesh | sand
  event.custom({
    "type": "createsifter:sifting",
    "ingredients": [
      {
        "item": "createsifter:brass_mesh"
      },
      {
        "item": "minecraft:sand"
      }
    ],
    "results": [
      {
        "item": "minecraft:ink_sac",
        "chance": 0.35
      },
      {
        "item": "minecraft:ink_sac",
        "chance": 0.15
      },
      {
        "item": "minecraft:kelp",
        "chance": 0.35
      },
      {
        "item": "minecraft:sea_pickle",
        "chance": 0.15
      },
    ],
    "processingTime": 200,
    "waterlogged": true
  }).id("gac:kjs/createsifter/brass_mesh/sand");
});