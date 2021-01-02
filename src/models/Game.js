import { randomNumberRangeArray, shuffle } from "GameUtils";

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
  constructor(number, winner, type = 1) {
    this.number = number;
    this.winner = winner;
    this.type = type;
    this.created_at = Date.now();
  }

  get localeType() {
    switch (this.type) {
      case 1:
        return "En rad";
      case 2:
        return "To rader";
      case 3:
        return "Fullt hus";
      default:
        return null;
    }
  }

  toJSON() {
    return {
      number: this.number,
      winner: this.winner,
      type: this.type,
      created_at: Date.now(),
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

  reset() {
    this.bingo_numbers = [];
    this.bingo_pool = randomNumberRangeArray(90);
    this.bingos = [];
    this.tombola_numbers = [];
    this.tombola_pool = randomNumberRangeArray(
      this.max_ticket,
      this.min_ticket
    );
    this.tombolas = [];
  }

  shuffleTombola() {
    this.tombola_pool = shuffle(this.tombola_pool);
  }

  shuffleBingo() {
    this.bingo_pool = shuffle(this.bingo_pool);
  }

  drawBingoNumber() {
    const number = this.bingo_pool.pop();
    if (number) {
      this.bingo_numbers.push(number);
      this.shuffleBingo();
    }
    return number;
  }

  drawTombolaNumber() {
    const number = this.tombola_pool.pop();
    if (number) {
      this.tombola_numbers.push(number);
      this.shuffleTombola();
    }
    return number;
  }

  getBingo(number) {
    return this.bingos.find((b) => b.number === number);
  }

  newBingo(number) {
    if (this.bingos.length < 3) {
      return new BingoModel(number, null, this.bingos.length + 1);
    }
  }

  addBingo(bingo) {
    const index = this.bingos.findIndex((b) => b.number === bingo.number);
    this.bingos[index !== -1 ? index : this.bingos.length] = bingo;
  }

  removeBingo(bingo) {
    this.bingos = this.bingos.filter((b) => b.number !== bingo.number);
  }

  lastBingo() {
    return this.bingos.slice(-1)[0];
  }

  isLastBingo(bingo) {
    return (this.lastBingo() || {}).number === bingo.number;
  }

  bingoAfter(number) {
    const lastBingo = this.lastBingo();
    const lastBingoPos =
      lastBingo && this.bingo_numbers.indexOf(lastBingo.number);
    const numberPos = this.bingo_numbers.indexOf(number);
    return lastBingoPos > numberPos;
  }

  getTombola(number) {
    return this.tombolas.find((t) => t.number === number);
  }

  newTombola(number) {
    return new TombolaModel(number, null);
  }

  addTombola(tombola) {
    const index = this.tombolas.findIndex(
      ({ number }) => number === tombola.number
    );
    this.tombolas[index !== -1 ? index : this.tombolas.length] = tombola;
  }

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
