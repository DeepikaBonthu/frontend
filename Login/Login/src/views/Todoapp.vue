<script setup>
import { ref } from 'vue';

const todoList = ref([]);
const newTodo = ref('');

const addTodo = () => {
  if (newTodo.value.trim() !== '') {
    todoList.value.push(newTodo.value.trim());
    newTodo.value = '';
  }
};

const removeTodo = (index) => {
  todoList.value.splice(index, 1);
};
</script>

<template>
  <div class="container">
    <v-row class="justify-center mt-5">
      <v-col cols="5">
        <v-form class="form" @submit.prevent="addTodo">
          <h2 class="text-center">ToDo App</h2>
          <span class="font-weight-bold">New ToDo</span>
          <v-text-field v-model.trim="newTodo" variant="outlined" color="#EFEFEF"></v-text-field>
          <v-btn type="submit" class="text-capitalize font-weight-bold text-black" color="#a0a4d9" height="48px" width="550px">Add ToDo</v-btn>
        </v-form>
        <div class="mt-4">
          <h4>ToDo List</h4>
          <v-divider :thickness="3" class="ma-2"></v-divider>
          <v-list-item-group class="text-center"> <!-- Centering the list items -->
            <v-list-item v-for="(todo, index) in todoList" :key="index">
              <v-list-item-content class="d-flex">
                <v-list-item-title>{{ todo }}</v-list-item-title>
                <v-btn @click="removeTodo(index)" class="text-capitalize font-weight-bold text-black remove my-1 mr-1" color="#a0a4d9">Remove</v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.container {
  background-color: black;
  color: #fff;
  height: 100vh;
  display: flex;  
}

.form {
  width: 100%;
}

.remove {
  margin-left: auto; 
}

.v-list-item-title {
  text-align: center;
}

.d-flex {
  border: 2px solid hsla(0, 0%, 100%, .35);
  border-radius: 5px;
  height: 48px;
}
</style>
