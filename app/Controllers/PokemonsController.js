import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokemonsService } from "../Services/PokemonsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawPokeList() {
  let pokemon = appState.pokemons;
  let template = "";
  pokemon.forEach((p) => (template += Pokemon.PokeList(p)));
  setHTML("poke-list", template);
}
function _drawActive() {
  let active = appState.activePokemon;
  let template = "";
  setHTML("active-pokemon", active.ActivePokemon);
}

export class PokemonsController {
  constructor() {
    this.getPokemons();
    appState.on("pokemons", _drawPokeList);
    appState.on("activePokemon", _drawActive);
  }
  async getPokemons() {
    try {
      await pokemonsService.getPokemons();
    } catch (error) {
      Pop.error(error);
      console.error(error);
    }
  }
  async getOnePokemon(name) {
    await pokemonsService.getOnePokemon(name);
  }
  async getThatPokemon() {
    await pokemonsService.getThatPokemon();
  }
}
