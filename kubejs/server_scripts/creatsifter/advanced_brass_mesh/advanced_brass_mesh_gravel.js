ServerEvents.recipes(event => {
  // advanced_brass_mesh | gravel
  event.custom({
    "type": "createsifter:sifting",
    "ingredients": [
      {
        "item": "createsifter:advanced_brass_mesh"
      },
      {
        "item": "minecraft:gravel"
      }
    ],
    "results": [
      {
        "item": "create:crushed_raw_copper",
        "chance": 0.35
      },
      {
        "item": "create:crushed_raw_zinc",
        "chance": 0.35
      },
      {
        "item": "create:crushed_raw_iron",
        "chance": 0.35
      },
      {
        "item": "create:crushed_raw_gold",
        "chance": 0.35
      },
      {
        "item": "powah:uraninite_raw",
        "chance": 0.05
      },
      {
        "item": "minecraft:coal",
        "chance": 0.05
      },
      {
        "item": "minecraft:flint",
        "chance": 0.01
      },
      {
        "item": "minecraft:diamond",
        "chance": 0.10
      },
      {
        "item": "minecraft:emerald",
        "chance": 0.10
      },
    ],
    "processingTime": 200,
    "waterlogged": false
  }).id("gac:kjs/createsifter/advanced_brass_mesh/gravel");
});