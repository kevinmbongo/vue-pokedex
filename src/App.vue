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
        :pv="pokemon.pv"
        :power="pokemon.power"
        :image="pokemon.image"
      />
    </section>
  </main>
</template>

<script>
import VSearchInput from '@/components/VSearchInput'
import VCardPoke from '@/components/VCardPoke'

export default {
  name: 'App',

  components: { VCardPoke, VSearchInput },

  data: () => ({
    searchFilter: '',

    props: {},

    filteredPokemon: [],

    pokemons: [
      {
        name: 'Salamèche',
        pv: '67',
        power: 'Feu',
        image: require(`./assets/images/salameche.png`),
      },
      {
        name: 'Pikachu',
        pv: '190',
        power: 'Tonerre',
        image: require(`./assets/images/pikachu.png`),
      },
      {
        name: 'Dracaufeu',
        pv: '10',
        power: 'Flambée Royale',
        image: require(`./assets/images/dracaufeu.png`),
      },
    ],
  }),

  watch: {
    searchFilter() {
      this.searchPokemon()
    },
  },

  mounted() {
    this.filteredPokemon = this.pokemons
  },

  methods: {
    searchPokemon() {
      this.filteredPokemon = this.pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(this.searchFilter.toLowerCase())
      )
    },
  },
}
</script>
