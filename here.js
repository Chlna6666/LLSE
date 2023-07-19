var command = mc.newCommand("h", "command.pscv.here.chlna6666", PermType.Any);
command.setCallback((cmd, origin, output, results) => {
    function cmdcf(pl) {
        var sjscmd = Math.round(Math.random() * 19);
        if (sjscmd === 1) {
            origin.player.talkAs(`${text[sjs]}`);
        }
    }

    var text = [
        `今晚月色真美，我在 ${origin.pos.dim} ${origin.blockPos.x} ${origin.blockPos.y} ${origin.blockPos.z} 等你`,
        `§eOK兄弟们，全体目光向我看齐昂，看我看我，我宣布个事，我在 ${origin.pos.dim} ${origin.blockPos.x} ${origin.blockPos.y} ${origin.blockPos.z}§n 求干`,
        `${origin.pos.dim} ${origin.blockPos.x} ${origin.blockPos.y} ${origin.blockPos.z} 那边是敌人`,
        `艾伦我在 ${origin.pos.dim} ${origin.blockPos.x} ${origin.blockPos.y} ${origin.blockPos.z} 等着你`,
        `吾名〉银色战车·镇魂曲〈奉吾主之命守护此物，抹杀一切靠近此物者 前往 ${origin.pos.dim} ${origin.blockPos.x} ${origin.blockPos.y} ${origin.blockPos.z}`,
        `吾心吾形澄如明镜，所做所为皆为正义来 ${origin.pos.dim} ${origin.blockPos.x} ${origin.blockPos.y} ${origin.blockPos.z} 寻找吾吧`,
        `你必须由我来打败，今天，在 ${origin.pos.dim} ${origin.blockPos.x} ${origin.blockPos.y} ${origin.blockPos.z} 这`,
        `${origin.pos.dim} ${origin.blockPos.x} ${origin.blockPos.y} ${origin.blockPos.z} 这,是我们的距离!`,
        `来 ${origin.pos.dim} ${origin.blockPos.x} ${origin.blockPos.y} ${origin.blockPos.z} 寻找吾吧`,
        `§e杀马特团长奥 你看你领的几个gui物 还有你 人不人鬼不鬼的 就你还要抓我啊 在 ${origin.pos.dim} ${origin.blockPos.x} ${origin.blockPos.y} ${origin.blockPos.z} 别让我看见你`
    ];

    var sjs = Math.round(Math.random() * 9);
    var nx = origin.blockPos.x;
    var ny = origin.blockPos.y;
    var nz = origin.blockPos.z;
    var nd = origin.pos.dim;

    var broadcastMessage;
    if (origin.pos.dimid === 0) {
        broadcastMessage = `§r${origin.player.realName} 在 §a主世界 ${nx} ${ny} ${nz} §c下界 ${nx / 8} ${ny} ${nz / 8}`;
    } else if (origin.pos.dimid === 1) {
        broadcastMessage = `§r${origin.player.realName} 在 §c下界 ${nx} ${ny} ${nz} §a主世界 ${nx * 8} ${ny} ${nz * 8}`;
    } else if (origin.pos.dimid === 2) {
        broadcastMessage = `§r${origin.player.realName} 在 §d末地 ${nx} ${ny} ${nz}`;
    } else {
        broadcastMessage = "我不知道在哪里";
    }

    mc.broadcast(broadcastMessage);
    cmdcf(origin.player);
});

command.overload([]);
command.setup();

