import { defineStore } from "pinia";
import type Player from "@/models/Player";

export const usePlayerStore = defineStore("playerStore", {
  state: () => ({
    players: [] as Player[],
  }),
});
