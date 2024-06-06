<template>
  <div class="piece-card__container">
    <div class="piece-card__title">57</div>
    <span class="piece-card__description">Pièces</span>
  </div>
</template>
<script>
export default {
  name: "RoomCountCard",
};
</script>
<style>
.piece-card__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: var(--border-radius-md);
  background-color: var(--color-white);
  box-shadow: var(--box-shadow);
}

.piece-card__title {
  font-size: 4rem;
  font-weight: 600;
}

.piece-card__description {
  font-size: 1rem;
}
</style>
