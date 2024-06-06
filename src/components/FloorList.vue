<template>
  <div class="floorList__container">
    <NameCard class="floorList__nameCard" />
    <AppFilter class="floorList__appFilter">
      <li class="floorList__appFilter-container">
        <div class="floorList__appFilter-content">
          <div class="floorList__appFilter-name">RDC</div>
          <span class="floorList__appFilter-type">geographicbuilding</span>
        </div>
        <div class="">90%</div>
      </li>
    </AppFilter>
  </div>
</template>
<script>
export default {
  name: "FloorList",
};
</script>

<style scoped>
.floorList__container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.floorList__nameCard {
  flex: 27%;
}

.floorList__appFilter {
  flex: 73%;
}

.floorList__appFilter-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.7rem;
  background-color: var(--color-white);
  border-radius: var(--border-radius-sm);
}

.floorList__appFilter-content {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.floorList__appFilter-name {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
  color: var(--color-font);
}

.floorList__appFilter-type {
  padding: 0.2rem 0.3rem;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-white);
  background-color: var(--color-dark-grey);
  border-radius: var(--border-radius-xs);
}
</style>
