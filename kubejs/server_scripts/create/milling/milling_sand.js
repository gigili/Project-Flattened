ServerEvents.recipes(event => {
    event.recipes.create.milling('createsifter:dust', 'minecraft:sand').id('gac:kjs/create/milling/sand');
});

ServerEvents.recipes(event => {
    event.recipes.create.milling('minecraft:sand', 'minecraft:gravel').id('gac:kjs/create/milling/gravel');
});