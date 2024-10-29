<template>
    <v-app>
      <!-- AppBar fixo no topo -->
      <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-toolbar-title>Fiscaliza Brasil</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>
          <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>
  
        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>
  
      <!-- Navigation Drawer -->
      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'top' : 'left'"
        temporary
      >
        <v-list :items="items"></v-list>
      </v-navigation-drawer>
  
      <!-- Conteúdo principal -->
      <v-main>
        <v-container>
          <router-view />
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    data: () => ({
      drawer: false,
      items: [
        { title: 'Deputados', value: 'users' },
        { title: 'Leis', value: 'leis' },
        { title: 'Sobre', value: 'about' },
      ],
    }),
  }
  </script>
  