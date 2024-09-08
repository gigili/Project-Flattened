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
    
    event.shaped(
        Item.of('projectexpansion:transmutation_interface', 1),
        [
            'DOD',
            'OMO',
            'DOD'
        ],
        {
            D: 'projecte:dark_matter',
            O: 'projecte:dark_matter_block',
            M: 'projecte:condenser_mk1'
        }
    ).id("gac:kjs/projectexpansion/transmutation_interface");

    event.smelting('1x powah:uraninite', 'powah:uraninite_raw').xp(0.7).id("gac:kjs/powah/uraninite");
    event.shapeless(Item.of('minecraft:firework_star'), ['minecraft:gunpowder', '#forge:dyes', 'minecraft:gold_nugget']).id("gac:kjs/minecraft/firwork_star");
});