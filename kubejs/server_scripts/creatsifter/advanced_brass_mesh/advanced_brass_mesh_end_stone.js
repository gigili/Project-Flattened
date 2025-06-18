ServerEvents.recipes(event => {
  // advanced_brass_mesh | dust
  event.custom({
    "type": "createsifter:sifting",
    "ingredients": [
      {
        "item": "createsifter:advanced_brass_mesh"
      },
      {
        "item": "createsifter:crushed_end_stone"
      }
    ],
    "results": [
      {
        "item": "minecraft:ender_pearl",
        "chance": 0.85,
        "amount": 2
      },
      {
        "item": "minecraft:chorus_fruit",
        "chance": 0.25
      },
      {
        "item": "minecraft:chorus_flower",
        "chance": 0.15
      },
      {
        "item": "minecraft:ghast_tear",
        "chance": 0.15
      },
      {
        "item": "minecraft:ender_eye",
        "chance": 0.25,
        "amount": 2
      },
      {
        "item": "ae2:ender_dust",
        "chance": 0.1
      },
      {
        "item": "minecraft:echo_shard",
        "chance": 0.30
      },
      {
        "item": "minecraft:sculk",
        "chance": 0.30
      },
      {
        "item": "minecraft:sculk_shrieker",
        "chance": 0.30
      },
      {
        "item": "minecraft:sculk_sensor",
        "chance": 0.30
      },
      {
        "item": "minecraft:sculk_catalyst",
        "chance": 0.30
      },
      {
        "item": "minecraft:ancient_debris",
        "chance": 0.10,
        "count": 2
      },
    ],
    "processingTime": 200,
  }).id("gac:kjs/createsifter/advanced_brass_mesh/crushed_end_stone");
});