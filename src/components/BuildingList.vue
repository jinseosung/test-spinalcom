<template>
  <AppFilter>
    <li class="buildingList__container">
      <img
        class="buildingList__img"
        src="https://www.svgrepo.com/show/501866/factory.svg"
        alt="item img"
      />
      <div class="buildingList__content">
        <div class="buildingList__description">
          <div class="buildingList__name">Usine</div>
          <span class="buildingList__type">geographicbuilding</span>
        </div>
        <span class="buildingList__dynamic-id">19274064</span>
      </div>
    </li>
  </AppFilter>
</template>

<script>
export default {
  name: "BuildingList",
};
</script>

<style>
.buildingList__container {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.3rem 0.5rem;
  background-color: var(--color-white);
  border-radius: var(--border-radius-sm);
}

.buildingList__img {
  width: 4.5rem;
  height: 4.5rem;
}

.buildingList__content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.buildingList__name {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
  color: var(--color-font);
}

.buildingList__type {
  padding: 0.2rem 0.3rem;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-white);
  background-color: var(--color-dark-grey);
  border-radius: var(--border-radius-xs);
}

.buildingList__dynamic-id {
  color: var(--color-dark-grey);
  font-style: italic;
  font-size: 0.8rem;
}
</style>
