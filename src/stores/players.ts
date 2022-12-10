import { defineStore } from "pinia";

export const usePlayerStore = defineStore("playerStore", {
  state: () => ({
    players: [] as string[],
  }),
  actions: {
    addPlayer(name: string) {
      this.players.push(name);
    },
  },
});
