<template>
  <div v-show="selectedBuilding" class="floorList-container">
    <NameCard
      class="floorList-nameCard"
      :dynamicId="selectedBuilding?.dynamicId"
      :name="selectedBuilding?.name"
      :type="selectedBuilding?.type"
    />
    <AppFilter
      class="floorList-appFilter"
      placeholder="Référence de l'étage"
      @handleSearch="getSearchValue"
    >
      <li
        @click="displayFloorDescription(floor)"
        class="floorList-appFilter-container"
        v-for="floor in filteredFloors"
        :key="floor.staticId"
      >
        <div class="floorList-appFilter-content">
          <div class="floorList-appFilter-name">{{ floor.name }}</div>
          <span class="floorList-appFilter-type">{{ floor.type }}</span>
        </div>
        <div class="">90%</div>
      </li>
    </AppFilter>
  </div>
</template>
<script>
export default {
  name: "FloorList",
  data() {
    return {
      selectedFloor: {},
      searchValue: "",
    };
  },
  props: {
    selectedBuilding: { type: Object },
    floors: {
      type: Array,
      required: true,
    },
  },
  computed: {
    filteredFloors() {
      if (!this.searchValue) {
        return this.floors;
      }
      const filtered = this.floors.filter((floor) =>
        floor.dynamicId.toString().includes(this.searchValue)
      );
      if (filtered.length > 0) {
        this.$emit("floor-selected", filtered[0]);
      }
      return filtered;
    },
  },
  methods: {
    displayFloorDescription(floor) {
      this.selectedFloor = floor;
      this.$emit("floor-selected", floor);
    },
    getSearchValue(value) {
      this.searchValue = value;
    },
  },
};
</script>

<style>
.floorList-container {
  min-height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
}

.floorList-nameCard {
  min-height: 27%;
  max-height: 27%;
}

.floorList-appFilter {
  min-height: calc(73% - 1rem);
  max-height: calc(73% - 1rem);
}

.floorList-appFilter-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.7rem;
  background-color: var(--color-white);
  border-radius: var(--border-radius-sm);
}

.floorList-appFilter-content {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.floorList-appFilter-name {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
  color: var(--color-font);
}

.floorList-appFilter-type {
  padding: 0.2rem 0.3rem;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-white);
  background-color: var(--color-dark-grey);
  border-radius: var(--border-radius-xs);
}
</style>
