
ServerEvents.loaded(event => {
if(event.world.persistentData.artifactsGamerulesSet) return;
  event.server.runCommandSilent('gamerule artifacts.snorkel.isInfinite false');
  event.server.runCommandSilent('gamerule artifacts.vampiricGlove.maxHealingPerHit 3');
  event.server.runCommandSilent('gamerule artifacts.feralClaws.attackSpeedBonus 20');
  event.server.runCommandSilent('time set day');
event.world.persistentData.artifactsGamerulesSet = true
})
