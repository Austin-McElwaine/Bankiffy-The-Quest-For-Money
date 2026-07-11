// kubejs/server_scripts/disable_tool_behavior.js
const disabled = [
    'minecraft:wooden_pickaxe','minecraft:wooden_axe','minecraft:wooden_shovel','minecraft:wooden_hoe','minecraft:wooden_sword', 'mekanismtools:wood_paxel',
'minecraft:stone_pickaxe','minecraft:stone_axe','minecraft:stone_shovel','minecraft:stone_hoe','minecraft:stone_sword', 'mekanismtools:stone_paxel',
'minecraft:iron_pickaxe','minecraft:iron_axe','minecraft:iron_shovel','minecraft:iron_hoe','minecraft:iron_sword', 'mekanismtools:iron_paxel',
'minecraft:golden_pickaxe','minecraft:golden_axe','minecraft:golden_shovel','minecraft:golden_hoe','minecraft:golden_sword', 'mekanismtools:gold_paxel',
'create_sa:zinc_pickaxe','create_sa:zinc_axe','create_sa:zinc_shovel','create_sa:zinc_hoe','create_sa:zinc_sword',
'create_sa:copper_pickaxe','create_sa:copper_axe','create_sa:copper_shovel','create_sa:copper_hoe','create_sa:copper_sword',
'cyclic:copper_pickaxe','cyclic:copper_axe','cyclic:copper_shovel','cyclic:copper_hoe','cyclic:copper_sword',
'cyclic:brass_pickaxe','cyclic:brass_axe','cyclic:brass_shovel','cyclic:brass_hoe','cyclic:brass_sword'
]

function isDisabled(stack) {
    return stack && !stack.isEmpty() && disabled.includes(stack.id)
}

// Prevent mining with disabled tools (players only)
BlockEvents.leftClicked(event => {
    const p = event.player
    if (!p) return
        if (isDisabled(p.mainHandItem) || isDisabled(p.offHandItem)) {
            event.cancel()
            if (!p.isCreative()) {
                if (isDisabled(p.mainHandItem)) p.mainHandItem.count = 0
                    if (isDisabled(p.offHandItem)) p.offHandItem.count = 0
            }
            p.playSound('minecraft:item.break')
            p.tell(Text.red('This tool is craftable but not usable.'))
        }
})

// Prevent attacking with disabled tools (players only)
EntityEvents.hurt(event => {
    const a = event.source?.actual
    if (!a || !a.isPlayer()) return // only restrict players
        if (isDisabled(a.mainHandItem) || isDisabled(a.offHandItem)) {
            event.cancel()
            if (!a.isCreative()) {
                if (isDisabled(a.mainHandItem)) a.mainHandItem.count = 0
                    if (isDisabled(a.offHandItem)) a.offHandItem.count = 0
            }
            a.playSound('minecraft:item.break')
            a.tell(Text.red('This tool is craftable but not usable.'))
        }
})
