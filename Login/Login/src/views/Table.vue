<template>
  <div>
    <input type="text" v-model="searchTerm" placeholder="Enter search term">
    <button @click="search">Search</button>

    <ul>
      <li v-for="(item, index) in filteredData" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const dataArray = ref(['Ramesh', 'Suresh', 'Mahesh', 'Rajesh', 'Sai','Satish','Ramana','Radha','Ravi','Manoj','Kamal','Niteesh','Vani','Durgesh']); // Your array of data
const searchTerm = ref('');
const filteredData = ref([]);

const search = () => {
  
  filteredData.value = dataArray.value.filter(item => {
    return item.toUpperCase().startsWith(searchTerm.value.toUpperCase());
  });
};
</script>
