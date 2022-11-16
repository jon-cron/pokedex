import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";
import { loadState } from "./Utils/Store.js";

class AppState extends EventEmitter {
  // values = loadState("values", [Value]);
  pokemons = [];

  /** @type {import('./Models/Pokemon').Pokemon | null} */
  activePokemon = null;

  /** @type {import('./Models/Pokemon').Pokemon[]} */
  myPokemon = [];
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
