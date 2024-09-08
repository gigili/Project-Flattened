ServerEvents.recipes(event => {
    event.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "fluid",
            "tag": "minecraft:water"
        },
        "ingredients": [
            {
                "item": "minecraft:quartz"
            },
            {
                "item": "ae2:certus_quartz_dust"
            }
        ],
        "result": {
            "count": 2,
            "item": "ae2:certus_quartz_crystal"
        }
    }).id('gac:kjs/ae2/transform/certus_quartz_crystals');
});
