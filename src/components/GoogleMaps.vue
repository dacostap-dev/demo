<template>
  <v-card max-width="250px" height="300px">
    <GmapMap
      :center="{ lat: -8.10392733082397, lng: -79.02831513168364 }"
      :zoom="7"
      style="width: 250px; height: 300px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GmapMap>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      center: { lat: this.latitude, lng: this.longitude },
      markers: [
        {
          position: { lat: this.latitude, lng: this.longitude },
          title: this.title,
        },
      ],
    };
  },

  props: {
    latitude: Number,
    longitude: Number,
    title: String,
  },
};
</script>
