ServerEvents.recipes(event => {
  // andesite_mesh | dirt
  event.custom({
    "type": "createsifter:sifting",
    "ingredients": [
      {
        "item": "createsifter:andesite_mesh"
      },
      {
        "item": "minecraft:dirt"
      }
    ],
    "results": [
      {
        "item": "minecraft:sugar_cane",
        "chance": 0.15
      },
      {
        "item": "minecraft:cactus",
        "chance": 0.15
      },
      {
        "item": "minecraft:pumpkin_seeds",
        "chance": 0.1
      },
      {
        "item": "minecraft:melon_seeds",
        "chance": 0.1
      },
      {
        "item": "minecraft:wheat_seeds",
        "chance": 0.25
      },
      {
        "item": "minecraft:oak_sapling",
        "chance": 0.25
      },
      {
        "item": "minecraft:spruce_sapling",
        "chance": 0.25
      },
      {
        "item": "minecraft:dark_oak_sapling",
        "chance": 0.25
      },
      {
        "item": "minecraft:jungle_sapling",
        "chance": 0.25
      },
      {
        "item": "minecraft:birch_sapling",
        "chance": 0.25
      },
      {
        "item": "minecraft:acacia_sapling",
        "chance": 0.25
      },
      {
        "item": "minecraft:cherry_sapling",
        "chance": 0.25
      },
      {
        "item": "integrateddynamics:menril_sapling",
        "chance": 0.25
      },
    ],
    "processingTime": 200,
    "waterlogged": false
  }).id("gac:kjs/createsifter/andesite_mesh/dirt");
});