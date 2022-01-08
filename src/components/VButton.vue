<template>
  <button :class="side">
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: 'VButton',

  props: {
    side: {
      type: String,
      required: true,
    },

    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
button {
  @apply border  rounded-3xl py-8 px-16 absolute fixed  top-52 text-2xl bg-blue-800 text-white;
}

img {
  @apply mx-5;
}
</style>
