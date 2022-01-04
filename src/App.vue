<template>
  <main id="app">
    <section class="max-w-xl mx-auto grid gap-10">
      <header class="flex justify-center items-center pt-20">
        <v-search-input />
      </header>

      <article class="flex justify-between w-full bg-white rounded-2xl p-6">
        <div class="leading-9 pt-2">
          <div class="flex">
            <h4 class="font-bold">Nom :</h4>
            <p class="pl-3">Salamèche</p>
          </div>

          <div class="flex">
            <h4 class="font-bold">PV :</h4>
            <p class="pl-3">70</p>
          </div>

          <div class="flex">
            <h4 class="font-bold">Pouvoir :</h4>
            <p class="pl-3">Flamboiement</p>
          </div>
        </div>

        <div class="w-32">
          <img
            class="rounded-full"
            src="https://wir.skyrock.net/wir/v1/resize/?c=isi&im=%2F5159%2F80635159%2Fpics%2F3039271005_1_3_62IxStyQ.png&w=256"
            alt="Salamèche"
          />
        </div>
      </article>

      <article class="flex justify-between w-full bg-white rounded-2xl p-6">
        <div class="leading-9 pt-2">
          <div class="flex">
            <h4 class="font-bold">Nom :</h4>
            <p class="pl-3">Pikachu</p>
          </div>

          <div class="flex">
            <h4 class="font-bold">PV :</h4>
            <p class="pl-3">190</p>
          </div>

          <div class="flex">
            <h4 class="font-bold">Pouvoir :</h4>
            <p class="pl-3">Tonerre</p>
          </div>
        </div>

        <div class="w-32">
          <img
            class="rounded-full"
            src="https://www.pngmart.com/files/2/Pikachu-PNG-Picture.png"
            alt="Pikachu"
          />
        </div>
      </article>

      <article class="flex justify-between w-full bg-white rounded-2xl p-6">
        <div class="leading-9 pt-2">
          <div class="flex">
            <h4 class="font-bold">Nom :</h4>
            <p class="pl-3">Dracaufeu</p>
          </div>

          <div class="flex">
            <h4 class="font-bold">PV :</h4>
            <p class="pl-3">170</p>
          </div>

          <div class="flex">
            <h4 class="font-bold">Pouvoir :</h4>
            <p class="pl-3">Flambée Royale</p>
          </div>
        </div>

        <div class="w-32">
          <img
            class="rounded-full"
            src="https://www.media.pokekalos.fr/img/pokemon/newsnap/dracaufeu.png"
            alt="Dracaufeu"
          />
        </div>
      </article>
    </section>
  </main>
</template>

<script>
import VSearchInput from '@/components/VSearchInput'

export default {
  name: 'App',

  components: { VSearchInput },
}
</script>
