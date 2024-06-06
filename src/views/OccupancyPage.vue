<template>
  <div class="occupancyPage__container">
    <BuildingList />
    <FloorList />
  </div>
</template>

<script>
import BuildingList from "@/components/BuildingList.vue";
import FloorList from "@/components/FloorList.vue";

export default {
  name: "OccupancyPage",
  components: { BuildingList, FloorList },
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
