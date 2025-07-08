ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:chest', 4),
        ['LLL', 'L L', 'LLL'],
        {
            L: '#minecraft:logs'
        }
    ).id('gac:kjs/minecraft/chest');
    
    event.shaped(
        Item.of('minecraft:stick', 16),
        [
            ' L ',
            ' L ',
            '   '
        ],
        {
            L: '#minecraft:logs'
        }
    ).id('gac:kjs/minecraft/sticks');
    
    // event.shaped(
    //     Item.of('projectexpansion:transmutation_interface', 1),
    //     [
    //         'DOD',
    //         'OMO',
    //         'DOD'
    //     ],
    //     {
    //         D: 'projecte:dark_matter',
    //         O: 'projecte:dark_matter_block',
    //         M: 'projecte:condenser_mk1'
    //     }
    // ).id("gac:kjs/projectexpansion/transmutation_interface");

    event.smelting('1x powah:uraninite', 'powah:uraninite_raw').xp(0.7).id("gac:kjs/powah/uraninite");
    event.shapeless(Item.of('minecraft:firework_star'), ['minecraft:gunpowder', '#forge:dyes', 'minecraft:gold_nugget']).id("gac:kjs/minecraft/firwork_star");

    event.shaped(
        Item.of('cobblefordays:tier_2', 1),
        [
            'CCC',
            'WGL',
            'CCC'
        ],
        {
            C: 'minecraft:cobblestone',
            W: 'minecraft:water_bucket',
            L: 'minecraft:lava_bucket',
            G: 'cobblefordays:tier_1'
        }
    ).id('gac:kjs/cobblefordays/tier_2');

    event.shaped(
        Item.of('projectexpansion:transmutation_interface'),
        [
            'PHV',
            'BIC',
            'LHY'
        ],
        {
            P: "projectexpansion:purple_matter",
            H: "create_enchantment_industry:hyper_experience_bottle",
            V: "projectexpansion:violet_matter",
            B: "projectexpansion:blue_matter",
            C: "projectexpansion:cyan_matter",
            L: "projectexpansion:lime_matter",
            Y: "projectexpansion:yellow_matter",
            I: "ae2:interface",
        }
    ).id("gac:kjs/transmutation_interface");

    event.shaped(
        Item.of('tiab:time_in_a_bottle'),
        [
            'NNN',
            'DCD',
            'NGN'
        ],
        {
            N: "minecraft:netherite_ingot",
            D: "minecraft:diamond",
            C: "minecraft:clock",
            G: "minecraft:glass_bottle"
        }
    ).id("gac:kjs/tiab");

    event.shaped('minecraft:warden_spawn_egg', [
        'SES',
        'PWP',
        'SES'
    ], {
        S: 'hostilenetworks:end_prediction',
        E: 'minecraft:echo_shard',
        P: 'apotheosis:epic_material',
        W: 'minecraft:soul_lantern'
    }).id('gac:kjs/warden_spawn_egg');

    event.shaped('minecraft:hopper', [
        'ILI',
        'ILI',
        ' I '
    ], {
        I: '#forge:ingots/iron',
        L: '#minecraft:logs'
    }).id('gac:kjs/hopper');

    event.shaped('projectflattenedutilities:teleporter_block', [
        'NFN',
        'CEC',
        'NFN'
    ], {
        N: 'minecraft:nether_star',
        F: 'projectexpansion:final_star_shard',
        C: 'minecraft:end_crystal',
        E: 'minecraft:ender_pearl',
    }).id('gac:kjs/teleporter_block');    

    event.shaped(Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:water"}}'), [
        'QBQ',
        'BSB',
        'NNN'
    ], {
        Q: 'ae2:quartz_vibrant_glass',
        B: 'minecraft:water_bucket',
        S: 'ae2:cell_component_256k',
        N: 'minecraft:netherite_ingot'
    }).id('gac:kjs/infinity_cell_water');

    event.shaped(Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:lava"}}'), [
        'QBQ',
        'BSB',
        'NNN'
    ], {
        Q: 'ae2:quartz_vibrant_glass',
        B: 'minecraft:lava_bucket',
        S: 'ae2:cell_component_256k',
        N: 'minecraft:netherite_ingot'
    }).id('gac:kjs/infinity_cell_lava');
    
    
    event.shaped('projecte:gem_leggings', [
        'LR ',
        'TS ',
        '   '
    ], {
        L: 'projecte:rm_leggings',
        R: 'projecte:black_hole_band',
        T: 'projecte:red_matter_block',
        S: 'projecte:klein_star_omega'
    }).id('gac:kjs/gem_leggings');
});
