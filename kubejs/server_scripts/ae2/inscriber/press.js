ServerEvents.recipes(event => {
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": {
                "item": "create:iron_sheet"
            },
            "middle": {
                "item": "ae2:certus_quartz_crystal"
            },
            "top": {
                "item": "ae2:sky_dust"
            }
        },
        "mode": "press",
        "result": {
            "item": "ae2:calculation_processor_press"
        }
    }).id("gac:kjs/ae2/inscriber/calculation_processor_press");
    
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": {
                "item": "create:iron_sheet"
            },
            "middle": {
                "item": "minecraft:diamond"
            },
            "top": {
                "item": "ae2:sky_dust"
            }
        },
        "mode": "press",
        "result": {
            "item": 'ae2:engineering_processor_press'
        }
    }).id("gac:kjs/ae2/inscriber/engineering_processor_press");
    
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": {
                "item": "create:iron_sheet"
            },
            "middle": {
                "item": "minecraft:gold_ingot"
            },
            "top": {
                "item": "ae2:sky_dust"
            }
        },
        "mode": "press",
        "result": {
            "item": 'ae2:logic_processor_press'
        }
    }).id("gac:kjs/ae2/inscriber/logic_processor_press");
    
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": {
                "item": "create:iron_sheet"
            },
            "middle": {
                "item": "ae2:silicon"
            },
            "top": {
                "item": "ae2:sky_dust"
            }
        },
        "mode": "press",
        "result": {
            "item": 'ae2:silicon_press'
        }
    }).id("gac:kjs/ae2/inscriber/silicon_press");
});