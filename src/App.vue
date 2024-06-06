<template>
  <div class="app__container">
    <AppHeader  />
    <OccupancyPage :buildings="buildings" :floors="floors" />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import OccupancyPage from "./views/OccupancyPage.vue";

export default {
  name: "App",
  components: { AppHeader, OccupancyPage },
  data() {
    return {
      buildings: [],
      floors: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const API_URL =
        "https://api-developers.spinalcom.com/api/v1/geographicContext/space";
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        this.buildings = data.children;
        this.floors = data.children.map((building) => building.children).flat();
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
</script>

<style>
.app__container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  background-color: var(--color-grey);
  color: var(--color-font);
}
</style>
