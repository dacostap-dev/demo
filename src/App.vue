<template>
  <div class="">
    <div
      class="p-8"
      style="
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #ffea56;
      "
    >
      <div class="">Logotipo Empresa</div>
      <div style="display: flex; width: 150px">
        <div style="margin-right: 15px">Ingresar</div>
        <div class="">Regístrate</div>
      </div>
    </div>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app>
        <v-list class="mt-12">
          <v-list-item class="px-2">
            <v-list-item-avatar class="" size="60">
              <v-img
                src="https://randomuser.me/api/portraits/women/85.jpg"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">
                Nombre del cliente
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-rating
          v-model="rating"
          background-color="indigo lighten-3"
          color="indigo"
          medium
        ></v-rating>

        <google-maps class="mt-5"></google-maps>
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
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
import GoogleMaps from "@/components/GoogleMaps.vue";

export default {
  data: () => ({ drawer: null }),
  components: {
    FooterComponent,
    GoogleMaps,
  },
};
</script>
<style lang=""></style>
