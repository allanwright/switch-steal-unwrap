import Player from "@/models/Player";
import { usePlayerStore } from "@/stores/player";

export default class PlayerService {
  private _playerStore;

  constructor() {
    this._playerStore = usePlayerStore();
  }

  addPlayer(name: string) {
    const players = this._playerStore.players;
    let id = 1;
    if (players.length > 0) {
      id = players[players.length - 1].id + 1;
    }
    players.push(new Player(id, name));
  }

  deletePlayer(id: number) {
    const players = this._playerStore.players;
    const player = players.find((i) => i.id == id);
    if (player === undefined) {
      return;
    }

    const index = players.indexOf(player);
    players.splice(index, 1);
  }

  getPlayers() {
    return this._playerStore.players;
  }
}
