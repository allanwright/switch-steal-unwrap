import type Player from "@/models/Player";
import { useGameStore } from "@/stores/game";

export default class GameService {
  private _gameStore;

  constructor() {
    this._gameStore = useGameStore();
  }

  getPlayers() {
    return this._gameStore.players;
  }

  setupGame(unsortedPlayers: Player[]) {
    const players = [...unsortedPlayers];
    const gameMaster = players.splice(0, 1)[0];

    let currentIndex = players.length;
    let randomIndex = 0;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [players[currentIndex], players[randomIndex]] = [
        players[randomIndex],
        players[currentIndex],
      ];
    }

    players.push(gameMaster);
    this._gameStore.players = players;
  }
}
