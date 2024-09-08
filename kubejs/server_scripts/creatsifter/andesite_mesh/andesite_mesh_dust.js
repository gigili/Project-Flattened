ServerEvents.recipes(event => {
  // andesite_mesh | dust
  event.custom({
    "type": "createsifter:sifting",
    "ingredients": [
      {
        "item": "createsifter:andesite_mesh"
      },
      {
        "item": "createsifter:dust"
      }
    ],
    "results": [
      {
        "item": "minecraft:redstone",
        "chance": 0.25,
        "amount": 2
      },
      {
        "item": "minecraft:glowstone_dust",
        "chance": 0.25,
        "amount": 2
      },
      {
        "item": "create:experience_nugget",
        "chance": 0.25
      },
    ],
    "processingTime": 200,
  }).id("gac:kjs/createsifter/andesite_mesh/dust");
});