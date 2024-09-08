ServerEvents.recipes(event => {
  // zinc_mesh | gravel
  event.custom({
    "type": "createsifter:sifting",
    "ingredients": [
      {
        "item": "createsifter:zinc_mesh"
      },
      {
        "item": "minecraft:gravel"
      }
    ],
    "results": [
      {
        "item": "create:copper_nugget",
        "chance": 0.20
      },
      {
        "item": "create:zinc_nugget",
        "chance": 0.20
      },
      {
        "item": "minecraft:iron_nugget",
        "chance": 0.20
      },
      {
        "item": "minecraft:gold_nugget",
        "chance": 0.20
      },
      {
        "item": "minecraft:coal",
        "chance": 0.25
      },
      {
        "item": "minecraft:flint",
        "chance": 0.25
      },
      {
        "item": "minecraft:diamond",
        "chance": 0.02
      },
      {
        "item": "minecraft:emerald",
        "chance": 0.02
      },
      {
        "item": "minecraft:pointed_dripstone",
        "chance": 0.04
      },
    ],
    "processingTime": 200,
    "waterlogged": false
  }).id("gac:kjs/createsifter/zinc_mesh/gravel");
});