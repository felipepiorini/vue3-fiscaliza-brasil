<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <div class="text-center">
        <div class="text-body-4 font-weight-light mb-n1">Olá, bem vindo ao Fiscaliza Brasil</div>
        <br />

        <h3 class="text-h3 font-weight-bold">O que você deseja fazer?</h3>
      </div>

      <div class="py-4" />

      <v-row>
        <v-col cols="12">
          <v-card
            class="py-4"
            color="surface-variant"
            prepend-icon="mdi-account"
            rounded="lg"
            variant="outlined"
            @click="goToUsers"
          >
            <template #image>
              <v-img position="top right" />
            </template>

            <template #title>
              <h2 class="text-h5 font-weight-bold">Listar Deputados</h2>
            </template>

            <template #subtitle>
              <div class="text-subtitle-1">
                Veja todos os deputados do Brasil.
              </div>
            </template>

            <v-overlay
              opacity=".12"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            @click="goToLeis"
            class="py-4"
            color="surface-variant"
            prepend-icon="mdi-book"
            rounded="lg"
            variant="outlined"
          >
            <template #image>
              <v-img position="top right" />
            </template>

            <template #title>
              <h2 class="text-h5 font-weight-bold">Listar Leis</h2>
            </template>

            <template #subtitle>
              <div class="text-subtitle-1">Veja todas as leis do Brasil.</div>
            </template>

            <v-overlay
              opacity=".12"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            @click="goToAbout"
            class="py-4"
            color="surface-variant"
            prepend-icon="mdi-information-outline"
            rounded="lg"
            variant="outlined"
          >
            <template #image>
              <v-img position="top right" />
            </template>

            <template #title>
              <h2 class="text-h5 font-weight-bold">Sobre</h2>
            </template>

            <template #subtitle>
              <div class="text-subtitle-1">
                Acessar mais informações sobre essa aplicação
              </div>
            </template>

            <v-overlay
              opacity=".12"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  methods: {
    goToUsers() {
      this.$router.push({ name: "/users" });
    },

    goToLeis() {
      this.$router.push({ name: "/leis" });
    },
  },
};
</script>
