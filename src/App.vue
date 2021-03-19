<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar
      app
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="@/assets/spa-background-image-01.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/gallery">Galería de Imagenes</v-tab>

          <v-tab to="/form">Formulario</v-tab>
          <v-tab to="/sectionThree">Sección 3</v-tab>
          <v-tab to="/sectionFour">Sección 4</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <footer-component></footer-component>
  </v-app>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  data: () => ({ drawer: null }),
  components: {
    FooterComponent,
  },
};
</script>
