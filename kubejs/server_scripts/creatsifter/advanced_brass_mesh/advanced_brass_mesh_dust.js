ServerEvents.recipes(event => {
  // advanced_brass_mesh | dust
  event.custom({
    "type": "createsifter:sifting",
    "ingredients": [
      {
        "item": "createsifter:advanced_brass_mesh"
      },
      {
        "item": "createsifter:dust"
      }
    ],
    "results": [
      {
        "item": "minecraft:redstone",
        "chance": 0.45,
        "amount": 2
      },
      {
        "item": "minecraft:redstone",
        "chance": 0.05
      },
      {
        "item": "minecraft:glowstone_dust",
        "chance": 0.45,
        "amount": 2
      },
      {
        "item": "minecraft:glowstone_dust",
        "chance": 0.05,
      },
      {
        "item": "create:experience_nugget",
        "chance": 0.10
      },
      {
        "item": "minecraft:blaze_powder",
        "chance": 0.2,
        "amount": 2
      },
      {
        "item": "ae2:sky_dust",
        "chance": 0.1,
        "amount": 2
      },
      {
        "item": "ae2:certus_quartz_dust",
        "chance": 0.25,
        "amount": 2
      },
      {
        "item": "ae2:certus_quartz_dust",
        "chance": 0.05,
      },
      {
        "item": "ae2:fluix_dust",
        "chance": 0.05,
        "amount": 2
      }
    ],
    "processingTime": 200,
  }).id("gac:kjs/createsifter/advanced_brass_mesh/dust");
});