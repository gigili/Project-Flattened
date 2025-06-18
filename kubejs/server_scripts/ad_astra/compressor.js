ServerEvents.recipes(event => {
    event.custom({
        "type": "ad_astra:compressing",
        "cookingtime": 800,
        "energy": 20,
        "ingredient": {
            "tag": "forge:ingots/brass"
        },
        "result": {
            "count": 1,
            "id": "create:brass_sheet"
        }
    }).id('gac:kjs/ad_astra/compressing/brass_sheet');

    event.custom({
        "type": "ad_astra:compressing",
        "cookingtime": 800,
        "energy": 20,
        "ingredient": {
            "tag": "forge:ingots/gold"
        },
        "result": {
            "count": 1,
            "id": "create:golden_sheet"
        }
    }).id('gac:kjs/ad_astra/compressing/golden_sheet');

    event.custom({
        "type": "ad_astra:compressing",
        "cookingtime": 800,
        "energy": 20,
        "ingredient": {
            "item": "create:andesite_alloy"
        },
        "result": {
            "count": 1,
            "id": "createdeco:andesite_sheet"
        }
    }).id('gac:kjs/ad_astra/compressing/andesite_sheet');

    event.custom({
        "type": "ad_astra:compressing",
        "cookingtime": 800,
        "energy": 20,
        "ingredient": {
            "tag": "forge:ingots/zinc"
        },
        "result": {
            "count": 1,
            "id": "createaddition:zinc_sheet"
        }
    }).id('gac:kjs/ad_astra/compressing/zinc_sheet');

    event.custom({
        "type": "ad_astra:compressing",
        "cookingtime": 800,
        "energy": 20,
        "ingredient": {
            "item": "createdeco:industrial_iron_ingot"
        },
        "result": {
            "count": 1,
            "id": "createdeco:industrial_iron_sheet"
        }
    }).id('gac:kjs/ad_astra/compressing/industrial_iron_sheet');
});