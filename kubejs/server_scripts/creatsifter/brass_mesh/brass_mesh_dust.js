ServerEvents.recipes(event => {
  // brass_mesh | dust
  event.custom({
    "type": "createsifter:sifting",
    "ingredients": [
      {
        "item": "createsifter:brass_mesh"
      },
      {
        "item": "createsifter:dust"
      }
    ],
    "results": [
      {
        "item": "minecraft:redstone",
        "chance": 0.35,
        "amount": 2
      },
      {
        "item": "minecraft:redstone",
        "chance": 0.15
      },
      {
        "item": "minecraft:glowstone_dust",
        "chance": 0.45,
        "amount": 2
      },
      {
        "item": "minecraft:glowstone_dust",
        "chance": 0.25,
      },
      {
        "item": "create:experience_nugget",
        "chance": 0.25
      },
    ],
    "processingTime": 200,
  }).id("gac:kjs/createsifter/brass_mesh/dust");
});