// kubejs/startup_scripts/disable_tool_stats.js
ItemEvents.modification(event => {
    const ids = [
        'minecraft:wooden_pickaxe','minecraft:wooden_axe','minecraft:wooden_shovel','minecraft:wooden_hoe','minecraft:wooden_sword',
        'minecraft:stone_pickaxe','minecraft:stone_axe','minecraft:stone_shovel','minecraft:stone_hoe','minecraft:stone_sword',
        'minecraft:iron_pickaxe','minecraft:iron_axe','minecraft:iron_shovel','minecraft:iron_hoe','minecraft:iron_sword',
        'minecraft:golden_pickaxe','minecraft:golden_axe','minecraft:golden_shovel','minecraft:golden_hoe','minecraft:golden_sword'
    ]

    ids.forEach(id => {
        event.modify(id, item => {
            item.maxDamage = 1 // always breaks instantly
        })
    })
})
