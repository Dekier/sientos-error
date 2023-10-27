<script setup lang="ts">
const characterStore = useCharacterStore();
const { positionCharacter } = storeToRefs(characterStore);
</script>
<template>
  <ModelsCharacterBody />
</template>
