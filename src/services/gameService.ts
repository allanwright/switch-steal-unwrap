import Action from "@/models/Action";
import Player from "@/models/Player";
import { useGameStore } from "@/stores/game";

/**
 * Defines a service for managing the game.
 */
export default class GameService {
  private _gameStore;

  /**
   * Initializes a new instance of the GameService object.
   */
  constructor() {
    this._gameStore = useGameStore();
  }

  /**
   * Gets all players.
   * @returns All players.
   */
  getPlayers() {
    return this._gameStore.players;
  }

  /**
   * Gets the current player.
   * @returns The current player.
   */
  getCurrentPlayer() {
    return this._gameStore.currentPlayer;
  }

  /**
   * Gets the next player.
   * @returns The next player.
   */
  getNextPlayer() {
    return this._gameStore.nextPlayer;
  }

  /**
   * Gets the current action.
   * @returns The current action.
   */
  getCurrentAction() {
    return this._gameStore.currentAction;
  }

  /**
   * Gets a value indicating if the the current action is being calculated.
   * @returns True if the current action is being calculated, otherwise false.
   */
  getCalculatingAction() {
    return this._gameStore.calculatingAction;
  }

  /**
   * Sets a value indicating if the current action is being calculated.
   * @param calculatingAction A value indicating if the current action is being calculated.
   */
  setCalculatingAction(calculatingAction: boolean) {
    this._gameStore.calculatingAction = calculatingAction;
  }

  /**
   * Sorts players and sets up initial game state.
   * @param unsortedPlayers An unsorted list of players.
   */
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
    this._gameStore.nextPlayer = players[0];
    this._gameStore.gameMaster = gameMaster;
  }

  /**
   * Gets a value indicating if it is currently the game master's turn.
   * @returns True if it is the game master's turn, otherwise false.
   */
  isGameMastersTurn() {
    return this._gameStore.gameMaster?.id === this._gameStore.nextPlayer?.id;
  }

  /**
   * Progresses the current player's turn.
   */
  playTurn() {
    const players = this._gameStore.players;
    if (this._gameStore.nextPlayer !== undefined) {
      const currentIndex = players.indexOf(
        this._gameStore.currentPlayer ?? new Player(0, "")
      );
      const nextIndex = players.indexOf(
        this._gameStore.nextPlayer ?? new Player(0, "")
      );

      this._gameStore.currentPlayer =
        players[this.getNextIndex(this._gameStore.players, currentIndex)];

      this._gameStore.nextPlayer =
        players[this.getNextIndex(this._gameStore.players, nextIndex)];
    }

    let actionIndex: number;
    if (this._gameStore.nextAction !== undefined) {
      actionIndex = this._gameStore.actions.indexOf(this._gameStore.nextAction);
      this._gameStore.nextAction = undefined;
    } else {
      actionIndex = Math.round(
        Math.random() * this._gameStore.actions.length + 1
      );
    }

    this._gameStore.currentAction = this._gameStore.actions[actionIndex];
  }

  /**
   * Increments the next action from the list of all possible actions.
   */
  setNextAction() {
    const actions = this._gameStore.actions;
    if (this._gameStore.nextAction === undefined) {
      this._gameStore.nextAction = actions[0];
    } else {
      const currentIndex = actions.indexOf(
        this._gameStore.nextAction ?? new Action(0, "")
      );
      this._gameStore.nextAction =
        actions[this.getNextIndex(actions, currentIndex)];
    }
  }

  private getNextIndex<T>(items: T[], index: number) {
    return index >= items.length - 1 ? 0 : index + 1;
  }
}
