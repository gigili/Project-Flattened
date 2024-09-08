ServerEvents.recipes(event => {
  // andesite_mesh | sand
  event.custom({
    "type": "createsifter:sifting",
    "ingredients": [
      {
        "item": "createsifter:andesite_mesh"
      },
      {
        "item": "minecraft:sand"
      }
    ],
    "results": [
      {
        "item": "minecraft:ink_sac",
        "chance": 0.15
      },
      {
        "item": "minecraft:kelp",
        "chance": 0.25
      },
      {
        "item": "minecraft:sea_pickle",
        "chance": 0.15
      },
    ],
    "processingTime": 200,
    "waterlogged": true
  }).id("gac:kjs/createsifter/andesite_mesh/sand");
});