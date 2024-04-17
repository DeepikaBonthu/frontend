<script setup>
import { ref } from 'vue';

const inputText = ref('');
const submitData = ref([]);

const convertToUppercase = () => {
  inputText.value = inputText.value.toUpperCase();
};

const onSubmit = () => {
  if(inputText.value.trim() !== '') {
    submitData.value.push(inputText.value.trim());
    inputText.value = '';
  }
};
const removeTodo = (index) => {
  submitData.value.splice(index, 1);                                                                                                                                                                      
};
</script>

<template>
  <v-row>
    <v-col cols="4">
      <v-form>
        <v-text-field 
          label="Text"
          v-model="inputText"
          @input="convertToUppercase"
        ></v-text-field>
        <v-btn @click="onSubmit">Submit</v-btn>
        <ul>
          <li v-for="(item, index) in submitData" :key="index">
            {{ item }}
            <v-btn @click="removeTodo(index)">Remove</v-btn>
          </li>
        </ul>
      </v-form>
    </v-col>
  </v-row>
</template>

<style scoped>
/* Add your scoped styles here */
</style>
