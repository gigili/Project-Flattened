ServerEvents.recipes(event => {
  // brass_mesh | dirt
  event.custom({
    "type": "createsifter:sifting",
    "ingredients": [
      {
        "item": "createsifter:brass_mesh"
      },
      {
        "item": "minecraft:dirt"
      }
    ],
    "results": [
      {
        "item": "minecraft:sugar_cane",
        "chance": 0.5
      },
      {
        "item": "minecraft:cactus",
        "chance": 0.5
      },
      {
        "item": "minecraft:pumpkin_seeds",
        "chance": 0.15
      },
      {
        "item": "minecraft:melon_seeds",
        "chance": 0.15
      },
      {
        "item": "minecraft:wheat_seeds",
        "chance": 0.15
      },
      {
        "item": "minecraft:oak_sapling",
        "chance": 0.35
      },
      {
        "item": "minecraft:spruce_sapling",
        "chance": 0.35
      },
      {
        "item": "minecraft:dark_oak_sapling",
        "chance": 0.35
      },
      {
        "item": "minecraft:jungle_sapling",
        "chance": 0.35
      },
      {
        "item": "minecraft:birch_sapling",
        "chance": 0.35
      },
      {
        "item": "minecraft:acacia_sapling",
        "chance": 0.35
      },
      {
        "item": "minecraft:cherry_sapling",
        "chance": 0.35
      },
      {
        "item": "integrateddynamics:menril_sapling",
        "chance": 0.35
      },
    ],
    "processingTime": 200,
    "waterlogged": false
  }).id("gac:kjs/createsifter/brass_mesh/dirt");
});