StartupEvents.registry('item', e => {
    e.create('incomplete_final_star_shard')
        .texture('prf:item/final_star_shard_progress')
        .tag('gac:final_star_shard_progress')
        .unstackable()
        .displayName('Incomplete Final Star Shard');
});