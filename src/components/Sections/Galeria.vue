<template>
  <v-container fluid>
    <h2 class="font-weight-light text-center my-5">Galería de Imágenes</h2>

    <v-row>
      <v-col
        v-for="image in images"
        :key="image.url"
        class="d-flex child-flex"
        cols="6"
        md="4"
      >
        <v-img
          :src="image.download_url"
          aspect-ratio="1"
          class="grey lighten-2"
          height="200"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
    <template>
      <div class="text-center mt-5">
        <v-pagination v-model="page" :length="5" circle></v-pagination>
      </div>
    </template>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  name: "Galery",
  data() {
    return {
      images: [],
      page: 1,
    };
  },
  mounted() {
    this.getImages();
  },
  watch: {
    page() {
      this.getImages();
    },
  },

  methods: {
    getImages() {
      axios
        .get(`https://picsum.photos/v2/list?page=${this.page}&limit=9`)
        .then((res) => {
          this.images = res.data;
        })
        .catch((e) => {
          alert("error: " + e.message);
        });
    },
  },
};
</script>
