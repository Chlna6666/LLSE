const command = mc.newCommand("f", "fuck死人", PermType.Any);
const allowlist = ["Chlna6666"];

command.setEnum("nbt_mag", ["delete"]);
command.setEnum("crestore", ["restore"]);
command.mandatory("action", ParamType.Enum, "nbt_mag", 1);
command.mandatory("action", ParamType.Enum, "crestore", 1);
command.mandatory("name", ParamType.RawText); // 将'name'添加为必需参数
command.overload(["nbt_mag", "name"]);
command.overload(["crestore"]);

command.setCallback((cmd, origin, output, results) => {
  var playerName = origin.player.realName;
  if (allowlist.includes(playerName)) {
    let pl = origin.player;
    const action = results.action;
    const name = results.name; // 从'results'中获取'name'的值

    switch (action) {
      case "delete":
        let suuid = data.name2uuid(name);
        if (suuid === "") {
          origin.player.tell(`玩家 ${name} 不存在于服务器中。`);
          return;
        }

          let splnbt = mc.getPlayerNbt(suuid); //死人的nbt
          if (splnbt == null) {
            pl.tell("没找到啊");
            return;
          }


        let targetPlayer = mc.getPlayer(name);
        if (targetPlayer === undefined) {
          // 玩家不在线，执行复制NBT的操作
          let plsrnbt = mc.getPlayerNbt(pl.uuid).toSNBT(1);
          
          let pldbnbt = File.readFrom(`./worlds/Bedrock level/PluginsData/LLfksrBag/nbtdb/${pl.uuid}.json`);
          if (pldbnbt == undefined) {
          File.writeTo(`./worlds/Bedrock level/PluginsData/LLfksrBag/nbtdb/${pl.uuid}.json`, plsrnbt);
          }
          
          mc.setPlayerNbtTags(pl.uuid, splnbt, ["Offhand", "Inventory", "Armor", "EnderChestInventory"]);
          origin.player.tell(`uuid  ${suuid} xuid `);
          mc.deletePlayerNbt(suuid);//删除死人数据（nbt）
          origin.player.tell("?成功！！！！！！！！！！！");
        } else {
          origin.player.tell(`玩家 ${name} uuid  ${suuid} ${mc.getPlayer(name)} 当前在线，无法执行复制NBT操作。`);
        }
        break;

      case "restore"://回复自己的nbt
        let dtsnbt = File.readFrom(`./worlds/Bedrock level/PluginsData/LLfksrBag/nbtdb/${pl.uuid}.json`);
        if (dtsnbt == undefined) {
          pl.tell("没找到数据");
        } else {
          let dtnbt = NBT.parseSNBT(dtsnbt);
          mc.setPlayerNbtTags(pl.uuid, dtnbt, ["Offhand", "Inventory", "Armor", "EnderChestInventory"]);
          File.delete(`./worlds/Bedrock level/PluginsData/LLfksrBag/nbtdb/${pl.uuid}.json`);
        }
        break;
    }
  } else {
    origin.player.tell("没有权限");
  }
});

command.setup();


