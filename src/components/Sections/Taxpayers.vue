<template>
  <v-container fluid>
    <h2 class="font-weight-light text-center my-5">
      Lista de Contribuyentes de la SUNAT
    </h2>
    <v-data-table
      :headers="headers"
      :items="taxpayers"
      :options.sync="options"
      :server-items-length="total"
      :loading="loading"
      class="elevation-1"
      :footer-props="{
        'items-per-page-options': [15, 30, 40, 50],
      }"
    ></v-data-table>
  </v-container>
</template>
<script>
import ApiClient from "@/services/API";

export default {
  data() {
    return {
      totalDesserts: 0,
      taxpayers: [],
      loading: true,
      options: {},
      headers: [
        { text: "Ruc", align: "start", value: "emp_ruc", sortable: false },
        { text: "Razón Social", value: "emp_descripcion", sortable: false },
        { text: "Estado", value: "emp_estado_con", sortable: false },
        { text: "Domicilio", value: "emp_con_domicilio", sortable: false },
        { text: "Last Update", value: "ultima_actualizacion", sortable: false },
      ],
    };
  },
  watch: {
    options: {
      handler() {
        this.getTaxpayers();
      },
      deep: true,
    },
  },
  mounted() {
    this.getTaxpayers();
  },
  methods: {
    getTaxpayers() {
      this.loading = true;
      let params = {
        itemsPerPage: this.options.itemsPerPage,
        page: this.options.page,
      };
      ApiClient.get("contribuyentes", { params }).then((res) => {
        console.log(res);
        this.taxpayers = res.data.data;
        this.total = res.data.meta.total;
        this.loading = false;
      });
    },
  },
};
</script>
