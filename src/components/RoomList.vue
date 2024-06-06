<template>
  <div v-show="selectedFloor" class="roomList-container">
    <div class="roomList-nameCards">
      <NameCard
        class="roomList-nameCard"
        :dynamicId="selectedFloor?.dynamicId"
        :name="selectedFloor?.name"
        :type="selectedFloor?.type"
      />
      <RoomCountCard
        class="roomList-roomCountCard"
        :nbrRooms="selectedFloor?.children.length"
      />
    </div>
    <AppFilter
      class="roomList-appFilter"
      placeholder="Référence de la pièce"
      @handleSearch="getSearchValue"
    >
      <li
        class="roomList-appFilter-container"
        v-for="(room, index) in filteredRooms"
        :key="room.staticId"
      >
        <div class="roomList-appFilter-content">
          <div class="roomList-appFilter-name">{{ room.name }}</div>
          <span class="roomList-appFilter-type">{{ room.type }}</span>
          <span class="roomList-appFilter-dynamic-id">{{
            room.dynamicId
          }}</span>
        </div>
        <div class="roomList-appFilter-occupancy-container">
          <span
            class="roomList-appFilter-occupancy"
            :class="getOccupancyClass(rooms[index])"
            >{{ rooms[index] }}</span
          >
        </div>
      </li>
    </AppFilter>
  </div>
</template>

<script>
import RoomCountCard from "./RoomCountCard.vue";

export default {
  name: "RoomList",
  components: { RoomCountCard },
  data() {
    return {
      rooms: [],
      searchValue: "",
    };
  },
  props: {
    selectedFloor: {
      type: Object,
      default: null,
    },
  },
  watch: {
    selectedFloor: {
      immediate: true,
      handler(newSelectedFloor) {
        if (newSelectedFloor) {
          this.rooms = [];
          newSelectedFloor.children.forEach((room, index) => {
            this.fetchRoomData(room.dynamicId, index);
          });
        }
      },
    },
  },
  computed: {
    filteredRooms() {
      if (!this.searchValue) {
        return this.selectedFloor?.children;
      }
      return this.selectedFloor?.children.filter((room) =>
        room.dynamicId.toString().includes(this.searchValue)
      );
    },
  },
  methods: {
    async fetchRoomData(dynamicId, index) {
      try {
        const response = await fetch(
          `https://api-developers.spinalcom.com/api/v1/room/${dynamicId}/control_endpoint_list`
        );
        const data = await response.json();

        if (data.length !== 0) {
          const occupancyData = data[0].endpoints.find(
            (obj) => obj.type === "Occupation"
          );
          const occupancyValue = occupancyData
            ? occupancyData.currentValue === true
              ? "occupé"
              : "non occupé"
            : "indéfini";
          this.$set(this.rooms, index, occupancyValue);
        } else {
          this.$set(this.rooms, index, "indéfini");
        }
      } catch (error) {
        this.$set(this.rooms, index, "Erreur");
        console.error(error);
      }
    },
    getOccupancyClass(value) {
      if (value === "indéfini") {
        return "undefined";
      } else if (value === "occupé") {
        return "true";
      } else {
        return "false";
      }
    },
    getSearchValue(value) {
      this.searchValue = value;
    },
  },
};
</script>

<style scoped>
.roomList-container {
  min-height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
}

.roomList-nameCards {
  display: flex;
  min-height: 27%;
  max-height: 27%;
  gap: 0.6rem;
}

.roomList-nameCard {
  width: 72%;
}

.roomList-roomCountCard {
  width: 28%;
}

.roomList-appFilter {
  min-height: calc(73% - 1rem);
  max-height: calc(73% - 1rem);
}

.roomList-appFilter-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.7rem;
  background-color: var(--color-white);
  border-radius: var(--border-radius-sm);
}

.roomList-appFilter-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
}

.roomList-appFilter-name {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
  color: var(--color-font);
}

.roomList-appFilter-type,
.roomList-appFilter-occupancy {
  padding: 0.2rem 0.3rem;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-white);
  border-radius: var(--border-radius-xs);
}

.roomList-appFilter-type {
  background-color: var(--color-dark-grey);
}

.roomList-appFilter-dynamic-id {
  color: var(--color-dark-grey);
  font-style: italic;
  font-size: 0.8rem;
}

.roomList-appFilter-occupancy-container {
  min-width: 8%;
  align-items: center;
}

.roomList-appFilter-occupancy {
  text-transform: uppercase;
}

.roomList-appFilter-occupancy.true {
  background-color: var(--color-green);
}

.roomList-appFilter-occupancy.false {
  background-color: var(--color-pink);
}

.roomList-appFilter-occupancy.undefined {
  background-color: var(--color-dark-grey);
}
</style>
