import { defineStore } from "pinia";

export const mainStore = defineStore("main", {
  state: () => {
    return {
      msg: "First Data"
    };
  },
  getters: {},
  actions: {}
});
