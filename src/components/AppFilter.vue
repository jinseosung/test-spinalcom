<template>
  <section class="appFilter__container">
    <form class="appFilter__form">
      <span class="appFilter__input-icon"
        ><font-awesome-icon icon="fa-solid fa-filter"
      /></span>
      <input
        type="text"
        class="appFilter__input"
        placeholder="Référence du bâtiment"
      />
      <button type="submit" class="appFilter__btn">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </button>
    </form>
    <div class="appFilter__divider"></div>
    <ul class="appFilter__list">
      <slot></slot>
    </ul>
  </section>
</template>

<script>
export default {
  name: "AppFilter",
};
</script>

<style>
.appFilter__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  background-color: white;
  border-radius: var(--border-radius-md);
  box-shadow: var(--box-shadow);
}

.appFilter__form {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  position: relative;
}

.appFilter__input-icon,
.appFilter__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: var(--color-orange);
  color: var(--color-white);
  padding: 0.4rem;
  border-radius: var(--border-radius-lg);
}

.appFilter__input-icon {
  left: 0.6rem;
  font-size: 0.8rem;
}

.appFilter__input {
  width: 100%;
  border: none;
  outline: none;
  padding: 1rem 3rem;
  background-color: var(--color-grey);
  border-radius: var(--border-radius-lg);
}

.appFilter__btn {
  border: none;
  right: 0.6rem;
}

.appFilter__divider {
  align-self: flex-start;
  width: 95%;
  height: 1.3px;
  background-color: var(--color-grey);
}

.appFilter__list {
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
