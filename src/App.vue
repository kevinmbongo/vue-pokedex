<template>
  <main id="app">
    <section class="max-w-xl mx-auto grid gap-10">
      <header class="flex justify-center items-center pt-20">
        <v-search-input v-model="searchFilter" />
      </header>

      <VCardPoke
        v-for="pokemon in filteredPokemon"
        :key="pokemon.name"
        :name="pokemon.name"
        :height="pokemon.height"
        :weight="pokemon.weight"
        :image="pokemon.sprites.front_default"
      />
    </section>
    <button class="border bg-red" @click="handlePrevPage">
      <span>Prev</span>
    </button>

    <button class="border" @click="handleNextPage">
      <span>next</span>
    </button>
  </main>
</template>

<script>
import VSearchInput from '@/components/VSearchInput'
import VCardPoke from '@/components/VCardPoke'
import { getPokemon, getPokemons } from '@/api/poke-api'

export default {
  name: 'App',

  components: { VCardPoke, VSearchInput },

  data: () => ({
    searchFilter: '',
    props: {},
    filteredPokemon: [],
    pokemons: [],
    nextPage: null,
    prevPage: null,
  }),

  watch: {
    searchFilter() {
      this.searchPokemon()
    },
  },

  mounted() {
    this.getPokemons()

    this.filteredPokemon = this.pokemons
  },

  methods: {
    searchPokemon() {
      this.filteredPokemon = this.pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(this.searchFilter.toLowerCase())
      )
    },

    async getPokemons(paginationUrl = null) {
      try {

        const { data } = await getPokemons(paginationUrl)

        this.nextPage = data.next
        this.prevPage = data.previous

        const pokemonsPromise = data.results.map((pokemon) =>
          getPokemon(pokemon.url)
        )

        const pokemons = await Promise.all(pokemonsPromise)
        const cleanedPokemon = pokemons.map((pokemon) => pokemon.data)

        this.pokemons = cleanedPokemon
        this.filteredPokemon = cleanedPokemon
      } catch (error) {
        console.error(error)
      }
    },

    handleNextPage() {
      this.getPokemons(this.nextPage)
    },

    handlePrevPage() {
      this.getPokemons(this.prevPage)
    },
  },
}
</script>
