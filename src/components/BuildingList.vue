<template>
  <AppFilter class="buildingList-appFilter" placeholder="Référence du bâtiment">
    <li
      @click="displayBuildingDescription(building)"
      class="buildingList-appFilter-container"
      v-for="building in buildings"
      :key="building.staticId"
    >
      <img
        class="buildingList-appFilter-img"
        src="https://www.svgrepo.com/show/501866/factory.svg"
        alt="item img"
      />
      <div class="buildingList-appFilter-content">
        <div class="buildingList-appFilter-description">
          <div class="buildingList-appFilter-name">{{ building.name }}</div>
          <span class="buildingList-appFilter-type">{{ building.type }}</span>
        </div>
        <span class="buildingList-appFilter-dynamic-id">{{
          building.dynamicId
        }}</span>
      </div>
    </li>
  </AppFilter>
</template>

<script>
export default {
  name: "BuildingList",
  data() {
    return {
      selectedBuilding: null,
    };
  },
  props: {
    buildings: {
      type: Array,
      required: true,
    },
  },
  methods: {
    displayBuildingDescription(building) {
      this.selectedBuilding = building;
      this.$emit("building-selected", building);
    },
  },
};
</script>

<style>
.buildingList-appFilter {
  max-height: 100%;
}

.buildingList-appFilter-container {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.3rem 0.5rem;
  background-color: var(--color-white);
  border-radius: var(--border-radius-sm);
}

.buildingList-appFilter-img {
  width: 4.5rem;
  height: 4.5rem;
}

.buildingList-appFilter-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.buildingList-appFilter-name {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
  color: var(--color-font);
}

.buildingList-appFilter-type {
  padding: 0.2rem 0.3rem;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-white);
  background-color: var(--color-dark-grey);
  border-radius: var(--border-radius-xs);
}

.buildingList-appFilter-dynamic-id {
  color: var(--color-dark-grey);
  font-style: italic;
  font-size: 0.8rem;
}
</style>
