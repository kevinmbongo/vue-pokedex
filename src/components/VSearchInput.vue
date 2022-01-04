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
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VSearchInput',
}
</script>

<style scoped></style>
