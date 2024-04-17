<template>
  <v-layout class="pa0 m-0">
    <v-navigation-drawer class="m-0" v-if="$route.fullPath != '/'">
      <div class="d-flex px-3  pt-4">
        <v-icon size="large">mdi-account</v-icon>
        <span>ByeWind</span> 
      </div>
      <div class="mx-5">
       <div class=" d-flex justify-space-between">
        <span>Favorites</span>
        <span>Recently</span>
       </div>
        <ul class="mx-5">
          <li>Overview</li>
          <li>Projects</li>
        </ul>
      </div>
      <v-list v-model="selectedNav" density="compact" nav class="mx-5">
        <span>Dashboards</span>
        <v-list-item
          v-for="(navTypes, index) in navigationTypes"
          :key="index"
          color="#FFF2F2"
          active-class="active-class text-primary"
          :to="navTypes.route"
          @click="navigateToSelectedPage(navTypes.route)"
        >
          <template v-slot:prepend>
            <v-icon :icon="navTypes.icon"></v-icon>
          </template>
         

          <v-list-item-title
            :class="navTypes.route === $route.fullPath ? 'active-class' : 'nav-title'"
            >{{ navTypes.title }}</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="">
      <v-img :src="band" alt="" class="" />
      <v-breadcrumbs v-if="$route.fullPath != '/' && $route.fullPath != '/OverView'" :items="nav">
        <template v-slot:divider>
          <v-icon icon="mdi-chevron-right"></v-icon>
        </template>
      </v-breadcrumbs>
      <RouterView />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'


const nav = ref([
  {
    title: 'Overview',
    disabled: false,
    href: '/'
  }
])

const navigationTypes = ref([
  {
    title: 'Overview',
    icon: 'mdi-chart-pie',
    route: '/'
  },
  {
    title: 'eCommerce',
    icon: 'mdi-basket-check',
    route: '/'
  },
  {
    title: 'Projects',
    icon: 'mdi-folder',
    route: '/'
  },
  {
    title: 'Online Courses',
    icon: 'mdi-book-open-page-variant',
    route: '/'
  }
])
const navigationType = ref([
  {
    title: 'Overview',
    icon: 'mdi-chart-pie',
    route: '/'
  },
  {
    title: 'eCommerce',
    icon: 'mdi-basket-check',
    route: '/'
  },
  {
    title: 'Projects',
    icon: 'mdi-folder',
    route: '/'
  },
  {
    title: 'Online Courses',
    icon: 'mdi-book-open-page-variant',
    route: '/'
  }
])

const bottomnavigationTypes = ref([
  {
    title: 'Add User',
    icon: 'mdi-account-plus',
    route: '/adduser'
  },
  {
    title: 'HandingOver',
    icon: 'mdi-sync',
    route: 'HandingOver'
  },
  {
    title: 'Log out',
    icon: 'mdi-logout',
    route: '/'
  }
])


const selectedNav = ref('')

function navigateToSelectedPage(item: string) {
  selectedNav.value = item
}

function logout(title:string) {
  if (title === 'Log out') {
    localStorage.removeItem('user')
    router.push('/')
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anek%20Latin');

body {
  background-color: #f9f7f6 !important;
  font-family: 'Anek Latin' !important;
}

.active-class {
  font-weight: bold !important;
  font-size: 1rem !important;
}
.nav-title {
  font-size: 14px !important;
  font-weight: 400px !important;
  line-height: 20px !important;
}

.v-field--variant-filled .v-field__outline::before,
.v-field--variant-underlined .v-field__outline::before {
  border-style: none !important;
  /* background-color: rgb(250, 248, 248); */
}
</style>
