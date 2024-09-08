ServerEvents.recipes(event => {
  // andesite_mesh | gravel
  event.custom({
    "type": "createsifter:sifting",
    "ingredients": [
      {
        "item": "createsifter:andesite_mesh"
      },
      {
        "item": "minecraft:gravel"
      }
    ],
    "results": [
      {
        "item": "create:copper_nugget",
        "chance": 0.10
      },
      {
        "item": "create:zinc_nugget",
        "chance": 0.10
      },
      {
        "item": "minecraft:iron_nugget",
        "chance": 0.10
      },
      {
        "item": "minecraft:gold_nugget",
        "chance": 0.10
      },
      {
        "item": "minecraft:coal",
        "chance": 0.15
      },
      {
        "item": "minecraft:flint",
        "chance": 0.15
      },
      {
        "item": "minecraft:diamond",
        "chance": 0.01
      },
      {
        "item": "minecraft:emerald",
        "chance": 0.01
      },
      {
        "item": "minecraft:pointed_dripstone",
        "chance": 0.02
      },
    ],
    "processingTime": 200,
    "waterlogged": false
  }).id("gac:kjs/createsifter/andesite_mesh/gravel");
});