<template>
  <div class="app__container">
    <AppHeader />
    <OccupancyPage :buildings="buildings" :floors="floors" />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import OccupancyPage from "./views/OccupancyPage.vue";

export default {
  name: "App",
  components: { AppHeader, OccupancyPage },
  data() {
    return {
      buildings: [],
      floors: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchRoomData(dynamicId) {
      try {
        const response = await fetch(
          `https://api-developers.spinalcom.com/api/v1/room/${dynamicId}/control_endpoint_list`
        );
        const data = await response.json();
        if (data.length === 0) {
          return "undefined";
        } else {
          const occupationEndpoint = data[0].endpoints.find(
            (endpoint) => endpoint.type === "Occupation"
          ).currentValue;

          return occupationEndpoint === true ? "true" : "false";
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    async fetchData() {
      try {
        const response = await fetch(
          "https://api-developers.spinalcom.com/api/v1/geographicContext/space"
        );
        const data = await response.json();

        const rooms = data.children
          .map((building) => building.children)
          .flat()
          .map((floor) => floor.children)
          .flat();

        const roomDetailsPromises = rooms.map(async (room) => {
          const currentValue = await this.fetchRoomData(room.dynamicId);
          return { ...room, currentValue };
        });

        const updatedRooms = await Promise.all(roomDetailsPromises);

        const newData = data.children.map((building) => {
          building.children.forEach((floor) => {
            floor.children.forEach((room, index) => {
              if (room.type === "geographicRoom") {
                floor.children[index] = updatedRooms.find(
                  (updatedRoom) => updatedRoom.dynamicId === room.dynamicId
                );
              }
            });
          });
          return building;
        });

        this.buildings = newData;
        this.floors = newData[0].children;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
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
