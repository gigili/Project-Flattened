ServerEvents.recipes(event => {
    event.recipes.create.crushing('createsifter:dust', 'minecraft:sand').id('gac:kjs/create/crushing/sand');
});

ServerEvents.recipes(event => {
    event.recipes.create.crushing('minecraft:sand', 'minecraft:gravel').id('gac:kjs/create/crushing/gravel');
});