import { defineStore } from "pinia";

export const useStore = defineStore("Stores", {
  state: () => ({
    selected: "По популярности",
  }),

  actions: {
    setSelected(name) {
      this.selected = name;
    },
  },
});
