<template>
  <header class="header">
    <h1 class="header-title">Analyse de l'occupation</h1>
    <div class="user-description">
      <img
        class="user-avatar"
        src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
        alt="avatar"
      />
      <span class="user-name">Reviewer</span>
      <font-awesome-icon class="icon-chevron" icon="chevron-down" />
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style>
.header {
  min-height: 5%;
  max-height: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
}

.header-title {
  font-size: 2.5rem;
  font-weight: 800;
}

.user-description {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: 1.5rem;
}

.user-avatar {
  width: 2.5rem;
  height: 2.5rem;
}

.user-name {
  font-weight: 600;
  margin-right: 0.5rem;
}

.icon-chevron {
  font-size: 0.8rem;
  color: var(--color-dark-grey);
  cursor: pointer;
}
</style>
