const BASE_API = 'https://pokeapi.co/api/v2/';

class Api {
  async getSuggestion(id) {
    const query = await fetch(`${BASE_API}pokemon`);
    const data = await query.json();

    const arrPokemon = [];
    let data1, query1;

    data.results.map(async pokemon => {
      query1 = await fetch(`${BASE_API}pokemon/${pokemon.name}`);
      data1 = await query1.json();
      arrPokemon.push(data1);
    });

    data.results.map(pokemon => {
      arrPokemon.push(
        fetch(`${BASE_API}pokemon/${pokemon.name}`).then(response =>
          response.json(),
        ),
      );
    });

    async function fetchURLs(urls) {
      try {
        let data = await Promise.all(urls);
        status = 200;
        return data;
      } catch (error) {
        status = 500;
      }
    }

    let datasourcesAll = await fetchURLs(arrPokemon);

    return datasourcesAll;
  }
  async getMovies() {
    const query = await fetch(`${BASE_API}item`);
    const data = await query.json();

    const arrPokemon = [];
    let data1, query1;

    data.results.forEach(async pokemon => {
      query1 = await fetch(`${BASE_API}item/${pokemon.name}`);
      data1 = await query1.json();
      arrPokemon.push(data1);
    });

    data.results.forEach(pokemon => {
      arrPokemon.push(
        fetch(`${BASE_API}item/${pokemon.name}`).then(response =>
          response.json(),
        ),
      );
    });

    async function fetchURLs(urls) {
      try {
        let data = await Promise.all(urls);
        status = 200;
        return data;
      } catch (error) {
        status = 500;
      }
    }

    let datasourcesAll = await fetchURLs(arrPokemon);

    return datasourcesAll;
  }
}

export default new Api();
