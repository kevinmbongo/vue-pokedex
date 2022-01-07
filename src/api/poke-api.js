import axios from 'axios'

export function getPokemons(paginationUrl = null) {
  const url = paginationUrl
    ? paginationUrl
    : 'https://pokeapi.co/api/v2/pokemon'

  return axios.get(url)
}

export function getPokemon(url) {
  return axios.get(url)
}
