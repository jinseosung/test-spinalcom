<template>
  <div class="nameCard__container">
    <div class="nameCard__title">usine</div>
    <p class="nameCard__description">geographicbuilding</p>
    <div class="nameCard__dynamic-id--container">
      <div class="nameCard__dynamic-id--title">dynamicid:</div>
      <span class="nameCard__dynamic-id--number">19274064</span>
    </div>
  </div>
</template>

<script>
export default { name: "NameCard" };
</script>

<style scoped>
.nameCard__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 1.3rem;
  border-radius: var(--border-radius-md);
  background-color: var(--color-white);
  box-shadow: var(--box-shadow);
  text-transform: uppercase;
}

.nameCard__title {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.nameCard__description {
  font-size: 0.7rem;
  font-weight: 600;
  font-style: italic;
  color: var(--color-dark-grey);
  margin-bottom: 1.5rem;
}

.nameCard__dynamic-id--container {
  display: flex;
  gap: 0.2rem;
  font-size: 0.6rem;
}

.nameCard__dynamic-id--title {
  color: var(--color-orange);
}
</style>
