<template>
    <v-card variant="outlined">
      <v-row>
        <v-col cols="12" md="12">
          <v-row align="center">
            <v-col cols="2">
              <v-img
                :src="deputadoData?.ultimoStatus.urlFoto"
                alt="Foto do deputado"
                max-width="200"
                max-height="200"
                class="mr-4"
              />
            </v-col>
            <v-col>
              <h3>{{ deputadoData?.nomeCivil }}</h3>
              <p>Nome Eleitoral: {{ deputadoData?.ultimoStatus.nomeEleitoral }}</p>
              <p>Partido: {{ deputadoData?.ultimoStatus.siglaPartido }}</p>
              <p>Estado: {{ deputadoData?.ultimoStatus.siglaUf }}</p>
              <p>Situação: {{ deputadoData?.ultimoStatus.situacao }}</p>
              <p>Gabinete: {{ deputadoData?.ultimoStatus.gabinete.nome }} - Andar {{ deputadoData?.ultimoStatus.gabinete.andar }}</p>
              <p>Telefone: {{ deputadoData?.ultimoStatus.gabinete.telefone }}</p>
              <p>Email: {{ deputadoData?.ultimoStatus.gabinete.email }}</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  import { fetchDeputadoDetalhes } from "@/api/api";
  
  const route = useRoute();
  const deputadoId = route.query.deputadoId || "No ID found";
  const deputadoData = ref(null);
  
  onMounted(async () => {
    try {
      const data = await fetchDeputadoDetalhes(deputadoId);
      deputadoData.value = data;
    } catch (error) {
      console.error(error);
    }
  });
  </script>
  
  <style scoped>
  h3 {
    margin: 0;
  }
  </style>
  