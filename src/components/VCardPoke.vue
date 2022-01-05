<template>
  <article class="flex justify-between w-full bg-white rounded-2xl p-6">
    <div class="leading-9 pt-2">
      <div class="flex">
        <h4 class="font-bold">Nom :</h4>
        <p class="pl-3">{{ name }}</p>
      </div>

      <div class="flex">
        <h4 class="font-bold">PV :</h4>
        <p class="pl-3">{{ pv }}</p>
      </div>

      <div class="flex">
        <h4 class="font-bold">Pouvoir :</h4>
        <p class="pl-3">{{ power }}</p>
      </div>
    </div>

    <div class="w-32">
      <img class="rounded-full" :src="image" alt="Salamèche" />
    </div>
  </article>
</template>

<script>
export default {
  name: 'VCardPoke',

  props: {
    name: {
      type: String,
      required: true,
    },

    pv: {
      type: String,
      required: true,
    },

    power: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped></style>
