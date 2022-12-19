import { defineStore } from "pinia";
import Action from "@/models/Action";
import type Player from "@/models/Player";

export const useGameStore = defineStore("gameStore", {
  state: () => ({
    /* eslint-disable prettier/prettier */
    actions: [
      new Action(1, "make somebody else unwrap their gift"),
      new Action(2, "keep your gift or swap it with someone else of your choice"),
      new Action(3, "swap your gift with someone wearing red"),
      new Action(4, "swap your gift with the person on your right"),
      new Action(5, "everyone pass their gift once to the right"),
      new Action(6, "if you were born on an even year, pass your gift once to the left"),
      new Action(7, "unwrap your gift, if unwrapped roll again"),
      new Action(8, "if you were born on an odd year, pass your gift once to the right"),
      new Action(9, "everyone pass their gift once to the left"),
      new Action(10, "everyone swap gifts across the room"),
      new Action(11, "swap your gift with someone wearing green"),
      new Action(12, "swap your gift with the person on your left"),
    ] as Action[],
    players: [] as Player[],
    gameMaster: undefined as Player | undefined,
    currentPlayer: undefined as Player | undefined,
    currentAction: undefined as Action | undefined,
    nextPlayer: undefined as Player | undefined,
    nextAction: undefined as Action | undefined,
    calculatingAction: false as Boolean
  }),
});
