<template>
  <div class="app__container">
    <AppHeader />
    <OccupancyPage />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import OccupancyPage from "./views/OccupancyPage.vue";

export default {
  name: "App",
  components: { AppHeader, OccupancyPage },
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
