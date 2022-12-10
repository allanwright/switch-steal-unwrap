import { defineStore } from "pinia";

class Action {
  id: number;
  description: string;

  constructor(id: number, description: string) {
    this.id = id;
    this.description = description;
  }
}

class Player {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export const useGameStore = defineStore("gameStore", {
  state: () => ({
    // TODO: The wording of these actions is pretty average, make them better
    // TODO: What does action 1 even mean?
    // TODO: Actions 6 and 8 are a gender disaster, fix them
    /* eslint-disable prettier/prettier */
    actions: [
      new Action(1, ""),
      new Action(2, "Exchange with anyone or keep your gift"),
      new Action(3, "Trade gifts with anyone wearing red"),
      new Action(4, "Trade gifts with the person on your right"),
      new Action(5, "Everyone pass their gift once to the right"),
      new Action(6, "Guys only - pass their gift once to the left"),
      new Action(7, "Unwrap your gift, if unwrapped roll again"),
      new Action(8, "Girls only - pass their gift to the right"),
      new Action(9, "Everyone pass their gift once to the left"),
      new Action(10, "Everyone pass across the room"),
      new Action(11, "Trade gifts with anyone wearing green"),
      new Action(12, "Trade gifts with the person on your left"),
    ] as Action[],
    players: [] as Player[],
    playerCounter: 0 as number,
  }),
  actions: {
    addPlayer(name: string) {
      this.players.push(new Player(++this.playerCounter, name));
    },
  },
});
