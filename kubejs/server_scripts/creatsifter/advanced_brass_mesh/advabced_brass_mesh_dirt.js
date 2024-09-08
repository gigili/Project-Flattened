ServerEvents.recipes(event => {
  // brass_mesh | dirt
  event.custom({
    "type": "createsifter:sifting",
    "ingredients": [
      {
        "item": "createsifter:advanced_brass_mesh"
      },
      {
        "item": "minecraft:dirt"
      }
    ],
    "results": [
      {
        "item": "minecraft:sugar_cane",
        "chance": 0.55
      },
      {
        "item": "minecraft:cactus",
        "chance": 0.55
      },
      {
        "item": "minecraft:pumpkin_seeds",
        "chance": 0.10
      },
      {
        "item": "minecraft:melon_seeds",
        "chance": 0.10
      },
      {
        "item": "minecraft:wheat_seeds",
        "chance": 0.10
      },
      {
        "item": "minecraft:oak_sapling",
        "chance": 0.55
      },
      {
        "item": "minecraft:spruce_sapling",
        "chance": 0.55
      },
      {
        "item": "minecraft:dark_oak_sapling",
        "chance": 0.55
      },
      {
        "item": "minecraft:jungle_sapling",
        "chance": 0.55
      },
      {
        "item": "minecraft:birch_sapling",
        "chance": 0.55
      },
      {
        "item": "minecraft:acacia_sapling",
        "chance": 0.55
      },
      {
        "item": "minecraft:cherry_sapling",
        "chance": 0.55
      },
      {
        "item": "integrateddynamics:menril_sapling",
        "chance": 0.55
      },
    ],
    "processingTime": 200,
    "waterlogged": false
  }).id("gac:kjs/createsifter/advanced_brass_mesh/dirt");
});