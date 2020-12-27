import { randomNumberRangeArray } from "GameUtils";

export class TombolaModel {
  /**
   * @param {Number} number
   * @param {String} winner
   */
  constructor(number, winner) {
    this.number = number;
    this.winner = winner;
    this.created_at = Date.now();
  }

  /**
   * @param {Number} number
   */
  set number(number) {
    this.number = number;
  }

  /**
   * @param {String} winner
   */
  set winner(winner) {
    this.winner = winner;
  }

  toJSON() {
    return {
      number: this.number,
      winner: this.winner,
      created_at: this.created_at,
    };
  }

  static from(json) {
    return Object.assign(
      new TombolaModel(),
      typeof json === "string" ? JSON.parse(json) : json
    );
  }
}

export class BingoModel {
  /**
   * @param {Number} number
   * @param {String} winner
   * @param {1|2|3} type
   */
  constructor(number, winner, type) {
    this.number = number;
    this.winner = winner;
    this.type = type;
    this.created_at = Date.now();
  }

  /**
   * @param {Number} number
   */
  set number(number) {
    this.number = number;
  }

  /**
   * @param {String} winner
   */
  set winner(winner) {
    this.winner = winner;
  }

  /**
   * @param {1|2|3} type
   */
  set type(type) {
    this.type = type;
  }

  toJSON() {
    return {
      number: this.number,
      winner: this.winner,
      type: this.type,
      created_at: this.Date.now(),
    };
  }

  static from(json) {
    return Object.assign(
      new BingoModel(),
      typeof json === "string" ? JSON.parse(json) : json
    );
  }
}

export class GameModel {
  /**
   * @param {String} name
   * @param {Number} min_ticket
   * @param {Number} max_ticket
   */
  constructor(name, min_ticket, max_ticket) {
    this.name = name;
    this.min_ticket = min_ticket;
    this.max_ticket = max_ticket;
    this.bingo_numbers = [];
    this.bingo_pool = randomNumberRangeArray(90);
    this.bingos = [];
    this.tombola_numbers = [];
    this.tombola_pool = randomNumberRangeArray(max_ticket, min_ticket);
    this.tombolas = [];
    this.created_at = Date.now();
  }

  // create bingo(1|2|3)
  // connect bingo instance with number, support updates

  // create tombola. tombolas must exclude previous tombola winners
  // perhaps via tombola.game.tombolaNumbers()

  toJSON() {
    return {
      name: this.name,
      min_ticket: this.min_ticket,
      max_ticket: this.max_ticket,
      bingo_numbers: this.bingo_numbers,
      bingo_pool: this.bingo_pool,
      bingos: this.bingos.map((m) => m.toJSON()),
      tombola_pool: this.tombola_pool,
      tombola_numbers: this.tombola_numbers,
      tombolas: this.tombolas.map((m) => m.toJSON()),
      created_at: this.created_at,
    };
  }

  static from(json) {
    const { bingos = [], tombolas = [], ...model } =
      typeof json === "string" ? JSON.parse(json) : json;

    return Object.assign(new GameModel(), {
      ...model,
      bingos: bingos.map((j) => BingoModel.from(j)),
      tombolas: tombolas.map((j) => TombolaModel.from(j)),
    });
  }
}
