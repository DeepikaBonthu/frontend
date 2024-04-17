<script setup>
import{ref} from 'vue';
const taskInput = ref('')
const taskList = ref([])
const edit = ref(false)
const editTaskIndex =ref(null)

function addTask(){
  taskList.value.push(taskInput.value)
  taskInput.value=''
}

function editTask(){
  taskList.value[editTaskIndex.value] = taskInput.value
  taskInput.value = editTaskIndex.value = null,
  edit.value=false
}

function deleteTask(index){
  taskList.value.splice(index,1)
}

function updateTask(index){
  taskInput.value =taskList.value[index]
  edit.value=true
  editTaskIndex.value=index
}
</script>



<template>
 <div class="todo-app">
 <div class="Input-task">
  <input type="text" placeholder="Enter todo list" v-model="taskInput">
  <button  @click="addTask"  v-if="!edit" >Add Task</button>
  <button @click="editTask" v-else >Edit Task</button>
 </div>
 <ul>
  <li 
  style="display:flex; gap: 1rem;"
   v-for="(task,index) in taskList" :key="index">{{ task }}
    <button @click="updateTask(index)">Edit</button>
    <button @click="deleteTask(index)">Delete</button>
  </li>
 </ul>
 </div>
</template>

<style scope>

.todo-app{
  width: 400px;
  margin: 5rem auto;
  padding: 12px  20px;
}

.Input-task{
  background-color: #f1f1f1;
  border-radius: 12px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
}
</style>
