import Player from "@/models/Player";
import { usePlayerStore } from "@/stores/player";

/**
 * Defines a service for managing players.
 */
export default class PlayerService {
  private _playerStore;

  /**
   * Initializes a new instance of the PlayerService object.
   */
  constructor() {
    this._playerStore = usePlayerStore();
  }

  /**
   * Adds a player.
   * @param name The player's name.
   */
  addPlayer(name: string) {
    const players = this._playerStore.players;
    let id = 1;
    if (players.length > 0) {
      id = players[players.length - 1].id + 1;
    }
    players.push(new Player(id, name));
  }

  /**
   * Deletes the specified player.
   * @param id The player's id.
   */
  deletePlayer(id: number) {
    const players = this._playerStore.players;
    const player = players.find((i) => i.id == id);
    if (player === undefined) {
      return;
    }

    const index = players.indexOf(player);
    players.splice(index, 1);
  }

  /**
   * Gets all players.
   * @returns All players.
   */
  getPlayers() {
    return this._playerStore.players;
  }
}
