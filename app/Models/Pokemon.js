export class Pokemon {
  constructor(data) {
    this.name = data.name;
    this.base_experience = data.base_experience;
    this.height = data.height;
    this.id = data.id;
    this.weight = data.weight;
    this.moves = data.moves;
    this.types = data.types;
    this.img = data.sprites.back_default;
  }

  static PokeList(pokemon) {
    return `
    <section class="row selectable border-dark p-1 m-1" onclick="app.pokemonsController.getOnePokemon('${pokemon.name}')">
              <h3 class="text-uppercase">${pokemon.name}</h3>
            </section>
    `;
  }
  get ActivePokemon() {
    return `
    
    <section class="row text-uppercase card sticky-top">
    <div class="col-12">
      <section class="row justify-content-evenly">
    <div class="col-12 text-center"><h1><b>${this.name}</b></,b></div>
    <div class ="col-8 text-center"><img class="img-fluid selectable fw-1" onclick="app.pokemonsController.getThatPokemon('${this.name}')" src="${this.img}" alt="">
    </div>
    <div class="col-6"><h4>Type:${this.types[0].type.name}</div>
    <div class="col-6"><h4>Base EXP:${this.base_experience}</div>
    <div class="col-6"><h4>Height:${this.height}</h4></div>
    <div class="col-6"><h4>Weight:${this.weight}</h4></div>
    </div>
    <div class="col-12">
    <section class="row">
    <div class="col-12 text-center"><h3>Moves!</h3></div>
    <div class="col-6"><h4>Moves:${this.moves[0].move.name}</h4></div>
    <div class="col-6"><h4>Moves:${this.moves[1].move.name}</h4></div>
    <div class="col-6"><h4>Moves:${this.moves[2].move.name}</h4></div>
    <div class="col-6"><h4>Moves:${this.moves[3].move.name}</h4></div></div></section>
    </section>
    </section>

    `;
  }
}
