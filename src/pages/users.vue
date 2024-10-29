<template>
  <v-data-table-server
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="serverItems"
    :items-length="totalItems"
    :loading="loading"
    :search="search"
    item-value="name"
    @update:options="loadItems"
  >
    <template v-slot:thead>
      <tr>
        <td>
          <v-text-field
            v-model="name"
            class="ma-2"
            density="compact"
            placeholder="Pesquisar por nome..."
            hide-details
          ></v-text-field>
        </td>
      </tr>
    </template>

    <template v-slot:item="{ item }">
      <tr>
        <td>{{ item.nome }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.siglaPartido }}</td>
        <td>{{ item.siglaUf }}</td>
        <td>
          <v-btn
            @click="viewDetails(item.id)"
            color="primary"
            small
            icon="mdi-information-outline"
           variant="text"
          />
        </td>
      </tr>
    </template>
  </v-data-table-server>
</template>

<script>
import { fetchDeputados } from "@/api/api"; 
import { useRouter } from "vue-router"; 

export default {
  setup() {
    const router = useRouter();

    return { router };
  },

  data: () => ({
    itemsPerPage: 10,
    headers: [
      { title: "Nome", align: "start", sortable: true, key: "nome" },
      { title: "Email", key: "email", align: "start" },
      { title: "Partido", key: "siglaPartido", align: "start" },
      { title: "UF", key: "siglaUf", align: "start" }, 
      { title: "Ações", key: "acoes", align: "start" }, 
    ],
    serverItems: [],
    loading: true,
    totalItems: 0,
    name: "",
    calories: "",
    search: "",
  }),

  watch: {
    name() {
      this.search = String(Date.now());
    },
  },

  methods: {
    async loadItems({ page, itemsPerPage, sortBy }) {
      this.loading = true;

      try {
        const deputados = await fetchDeputados();

        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        const filteredItems = deputados.filter((deputado) => {
          return (
            !this.name ||
            deputado.nome.toLowerCase().includes(this.name.toLowerCase())
          );
        });

        const paginated = filteredItems.slice(start, end);

        this.serverItems = paginated;
        this.totalItems = filteredItems.length;
      } catch (error) {
        console.error("Erro ao carregar itens:", error);
      } finally {
        this.loading = false;
      }
    },

    viewDetails(id) {
      this.router.push({ name: "/user-details", query: { deputadoId: id } }); 
    },
  },
};
</script>
