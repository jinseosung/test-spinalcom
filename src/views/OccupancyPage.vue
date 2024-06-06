<template>
  <div class="occupancyPage-container">
    <BuildingList
      :buildings="buildings"
      @building-selected="handleBuildingSelected"
    />
    <FloorList
      :selectedBuilding="selectedBuilding"
      :floors="floors"
      @floor-selected="handleFloorSelected"
    />
    <RoomList :selectedFloor="selectedFloor" />
  </div>
</template>

<script>
import BuildingList from "@/components/BuildingList.vue";
import FloorList from "@/components/FloorList.vue";
import RoomList from "@/components/RoomList.vue";

export default {
  name: "OccupancyPage",
  components: { BuildingList, FloorList, RoomList },
  data() {
    return {
      selectedBuilding: null,
      selectedFloor: null,
    };
  },
  props: {
    buildings: { type: Array },
    floors: { type: Array },
  },
  methods: {
    handleBuildingSelected(building) {
      this.selectedBuilding = building;
    },
    handleFloorSelected(floor) {
      this.selectedFloor = floor;
    },
  },
};
</script>

<style>
.occupancyPage-container {
  width: 100%;
  min-height: calc(95% - 2.5rem);
  max-height: calc(95% - 2.5rem);
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  gap: 1rem;
}
</style>
