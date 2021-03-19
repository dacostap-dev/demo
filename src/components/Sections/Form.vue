<template>
  <v-container fluid>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submit">
        <validation-provider
          v-slot="{ errors }"
          name="El nombre"
          rules="required|max:15"
        >
          <v-text-field
            v-model="name"
            :counter="10"
            :error-messages="errors"
            label="Nombre"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="El teléfono"
          :rules="{
            required: true,
            digits: 9,
          }"
        >
          <v-text-field
            v-model="phoneNumber"
            :counter="7"
            :error-messages="errors"
            label="Teléfono"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="El email"
          rules="required|email"
        >
          <v-text-field
            v-model="email"
            :error-messages="errors"
            label="E-mail"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="La nacionalidad"
          rules="required"
        >
          <v-select
            v-model="select"
            :items="items"
            :error-messages="errors"
            label="Nacionalidad"
            data-vv-name="select"
            required
          ></v-select>
        </validation-provider>

        <v-btn class="mr-4 mt-2" type="submit" :disabled="invalid">
          Enviar
        </v-btn>
      </form>
    </validation-observer>

    <template>
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="font-weight-medium">
            Información del usuario
          </v-card-title>

          <v-card-text v-if="loading">
            Enviando...
            <v-progress-linear
              indeterminate
              color="primary"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
          <v-card-text v-else>
            <div class="font-weight-bold">Nombre: {{ name }}</div>
            <div class="font-weight-bold">Email: {{ email }}</div>
            <div class="font-weight-bold">Teléfono: {{ phoneNumber }}</div>
            <div class="font-weight-bold">Teléfono: {{ select }}</div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="acceptDialog">
              Aceptar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
  </v-container>
</template>
<script>
import { required, digits, email, max } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} debe tener {length} dígitos. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} no puede estar vacío",
});

extend("max", {
  ...max,
  message: "{_field_} no debe tener más de {length} caracteres",
});

extend("email", {
  ...email,
  message: "El email debe ser válido",
});

export default {
  name: "Form",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: "Daniel Acosta",
    phoneNumber: "",
    email: "",
    select: null,
    items: ["Peruano", "Venezolano", "Chileno", "Colombiano"],
    dialog: false,
    loading: false,
  }),

  methods: {
    async submit() {
      const res = await this.$refs.observer.validate();
      if (res) {
        this.dialog = true;
        this.loading = true;
      }
      setTimeout(() => (this.loading = false), 1000);
    },
    acceptDialog() {
      this.dialog = false;
      this.clear();
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    },
  },
};
</script>
