export class Log {
  static success(msg) {
    console.log(`%c ${msg}`, "color: green");
  }

  static danger(msg) {
    console.log(`%c ${msg}`, "color: red");
  }

  static info(msg) {
    console.log(`%c ${msg}`, "color: black; background: yellow");
  }
}
