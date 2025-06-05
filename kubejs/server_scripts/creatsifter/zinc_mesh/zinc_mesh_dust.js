ServerEvents.recipes(event => {
  // andesite_mesh | dust
  event.custom({
    "type": "createsifter:sifting",
    "ingredients": [
      {
        "item": "createsifter:zinc_mesh"
      },
      {
        "item": "createsifter:dust"
      }
    ],
    "results": [
      {
        "item": "minecraft:redstone",
        "chance": 0.15,
        "amount": 2
      },
      {
        "item": "minecraft:glowstone_dust",
        "chance": 0.15,
        "amount": 2
      },
      {
        "item": "create:experience_nugget",
        "chance": 0.15
      },
      {
        "item": "minecraft:blaze_powder",
        "chance": 0.04,
        "amount": 2
      },
    ],
    "processingTime": 200,
  }).id("gac:kjs/createsifter/zinc_mesh/dust");
});