<template>
  <section class="appFilter-container">
    <form class="appFilter-form">
      <span class="appFilter-input-icon"
        ><font-awesome-icon icon="fa-solid fa-filter"
      /></span>
      <input type="text" class="appFilter-input" :placeholder="placeholder" />
      <button type="submit" class="appFilter-btn">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </button>
    </form>
    <div class="appFilter-divider"></div>
    <ul class="appFilter-list">
      <slot></slot>
    </ul>
  </section>
</template>

<script>
export default {
  name: "AppFilter",
  props: {
    placeholder: String,
  },
};
</script>

<style>
.appFilter-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  background-color: white;
  border-radius: var(--border-radius-md);
  box-shadow: var(--box-shadow);
}

.appFilter-form {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  position: relative;
}

.appFilter-input-icon,
.appFilter-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: var(--color-orange);
  color: var(--color-white);
  padding: 0.4rem;
  border-radius: var(--border-radius-lg);
}

.appFilter-input-icon {
  left: 0.6rem;
  font-size: 0.8rem;
}

.appFilter-input {
  width: 100%;
  border: none;
  outline: none;
  padding: 1rem 3rem;
  background-color: var(--color-grey);
  border-radius: var(--border-radius-lg);
}

.appFilter-btn {
  border: none;
  right: 0.6rem;
}

.appFilter-divider {
  align-self: flex-start;
  width: 95%;
  height: 1.3px;
  background-color: var(--color-grey);
}

.appFilter-list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 0.7rem;
  background-color: var(--color-grey);
  overflow-y: scroll;
}
</style>
