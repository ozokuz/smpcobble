ServerEvents.recipes((event) => {
  event.remove({ output: "sophisticatedbackpacks:feeding_upgrade" });
  event.remove({ output: "sophisticatedbackpacks:advanced_feeding_upgrade" });
});
