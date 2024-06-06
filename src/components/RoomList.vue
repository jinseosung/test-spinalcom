<template>
  <div class="roomList__container">
    <div class="roomList__nameCards">
      <NameCard class="roomList__nameCard" />
      <RoomCountCard class="roomList__roomCountCard" />
    </div>
    <AppFilter class="roomList__appFilter">
      <li class="roomList__appFilter-container">
        <div class="roomList__appFilter-content">
          <div class="roomList__appFilter-name">1-Condensateur</div>
          <span class="roomList__appFilter-type">geographicbuilding</span>
          <span class="roomList__appFilter-dynamic-id">19274064</span>
        </div>
        <div class="roomList__appFilter-occupancy-container">
          <span class="roomList__appFilter-occupancy">non occupe</span>
        </div>
      </li>
    </AppFilter>
  </div>
</template>

<script>
import RoomCountCard from "./RoomCountCard.vue";

export default { name: "RoomList", components: { RoomCountCard } };
</script>

<style scoped>
.roomList__container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.roomList__nameCards {
  display: flex;
  flex: 27%;
  gap: 0.6rem;
}

.roomList__nameCard {
  width: 72%;
}

.roomList__roomCountCard {
  width: 28%;
}

.roomList__appFilter {
  flex: 73%;
}

.roomList__appFilter-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.7rem;
  background-color: var(--color-white);
  border-radius: var(--border-radius-sm);
}

.roomList__appFilter-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
}

.roomList__appFilter-name {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
  color: var(--color-font);
}

.roomList__appFilter-type,
.roomList__appFilter-occupancy {
  padding: 0.2rem 0.3rem;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-white);
  border-radius: var(--border-radius-xs);
}

.roomList__appFilter-type {
  background-color: var(--color-dark-grey);
}

.roomList__appFilter-dynamic-id {
  color: var(--color-dark-grey);
  font-style: italic;
  font-size: 0.8rem;
}

.roomList__appFilter-occupancy-container {
  min-width: 11%;
  align-items: center;
}

.roomList__appFilter-occupancy {
  background-color: var(--color-pink);
}
</style>
