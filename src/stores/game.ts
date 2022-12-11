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
    /* eslint-disable prettier/prettier */
    actions: [
      new Action(1, "Make somebody else unwrap their gift"),
      new Action(2, "Keep your gift or swap it with someone else of your choice"),
      new Action(3, "Swap your gift with someone wearing red"),
      new Action(4, "Swap your gift with the person on your right"),
      new Action(5, "Everyone pass their gift once to the right"),
      new Action(6, "If you were born on an even year, pass your gift once to the left"),
      new Action(7, "Unwrap your gift, if unwrapped roll again"),
      new Action(8, "If you were born on an odd year, pass your gift once to the right"),
      new Action(9, "Everyone pass their gift once to the left"),
      new Action(10, "Everyone swap gifts across the room"),
      new Action(11, "Swap your gift with someone wearing green"),
      new Action(12, "Swap your gift with the person on your left"),
    ] as Action[],
    players: [] as Player[],
    playerCounter: 0 as number,
    currentPlayer: undefined as Player | undefined,
    currentAction: undefined as Action | undefined,
    nextPlayer: undefined as Player | undefined,
  }),
  actions: {
    addPlayer(name: string) {
      this.players.push(new Player(++this.playerCounter, name));
    },
    // TODO: Refactor to expect Player instance instead of just id
    deletePlayer(id: number) {
      const player = this.players.find(i => i.id == id);
      if (player === undefined) {
        return;
      }
      
      const index = this.players.indexOf(player);
      this.players.splice(index, 1);
    }
  },
});
