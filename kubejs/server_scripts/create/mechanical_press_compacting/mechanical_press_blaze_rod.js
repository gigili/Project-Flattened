ServerEvents.recipes(event => {        
    event.recipes.create.compacting(
        'minecraft:blaze_rod', [
            'minecraft:blaze_powder',
            'minecraft:blaze_powder',
            'minecraft:blaze_powder',
            'minecraft:blaze_powder'
        ]
    ).id('gac:kjs/create/mechanical_press_blaze_rod');
});