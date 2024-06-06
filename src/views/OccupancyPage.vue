<template>
  <div class="occupancyPage__container"></div>
</template>

<script>
export default {
  name: "OccupancyPage",
};
</script>

<style>
.occupancyPage__container {
  width: 100%;
  height: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: 1fr;
  gap: 1rem;
}
</style>
