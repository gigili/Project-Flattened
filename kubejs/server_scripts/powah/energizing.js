ServerEvents.recipes(event => {
    event.custom({
        "type": "powah:energizing",
        "ingredients": [
            { "item": "ae2:certus_quartz_dust" },
            { "item": "minecraft:quartz" }
        ],
        "energy": 30000,
        "result": {
            "item": "ae2:certus_quartz_crystal",
            "count": 2
        }
    }).id('gac:kjs/powah/energizing/certus_quartz_crystal');

    event.custom({
        "type": "powah:energizing",
        "ingredients": [
            { "item": "ae2:charged_certus_quartz_crystal" },
            { "item": "minecraft:quartz" },
            { "item": "minecraft:redstone" }
        ],
        "energy": 60000,
        "result": {
            "item": "ae2:fluix_crystal",
            "count": 2
        }
    }).id('gac:kjs/powah/energizing/fluix_crystal');

    event.custom({
        "type": "powah:energizing",
        "ingredients": [
            { "item": "ae2:fluix_dust" },
            { "item": "minecraft:quartz" },
        ],
        "energy": 60000,
        "result": {
            "item": "ae2:fluix_crystal"
        }
    }).id('gac:kjs/powah/energizing/fluix_crystal_from_dust');

    event.custom({
        "type": "powah:energizing",
        "ingredients": [
            { "item": "ae2:charged_certus_quartz_crystal" },
            { "item": "minecraft:iron_ingot" },
            { "item": "ae2:sky_stone_block" }
        ],
        "energy": 120000,
        "result": {
            "item": "megacells:sky_steel_ingot",
            "count": 2
        }
    }).id('gac:kjs/powah/energizing/sky_steel_ingot');
});