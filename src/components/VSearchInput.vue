<template>
  <div>
    <div class="text-center pb-5 font-bold text-xl">
      <label class="pr-3" for="name">Rechercher un pokémon</label>
    </div>

    <div>
      <input
        id="name"
        class="border h-10 rounded-2xl"
        type="text"
        name="name"
        required
        size="70"
        :value="value"
        @input="handleInput"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VSearchInput',

  props: {
    value: {
      type: String,
      required: true,
    },
  },

  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>
