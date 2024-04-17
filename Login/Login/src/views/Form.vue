<script setup>
import { ref } from "vue";
const firstName = ref("");
const lastName = ref("");
const address = ref("");
const phoneNumber = ref("");
const email = ref("");
const courseName = ref("");


const nameRules = [
  v => !!v || "Name is required",
  v => (v && v.length <= 10) || "Name must be less than 10 characters",
];

const numberRules = [
  v => !!v || "Phone number is required",
  v => (v && v.length === 10) || "Phone number must be 10 digits",
];

const emailRules = [
  v => !!v || "E-mail is required",
  v => /.+@.+\..+/.test(v) || "E-mail must be valid",
];


const studentDetails = ref([]);

const addStudent = () => {
  if (
    firstName.value.trim() !== "" &&
    lastName.value.trim() !== "" &&
    address.value.trim() !== "" &&
    phoneNumber.value.trim() !== "" &&
    email.value.trim() !== "" &&
    courseName.value.trim() !== ""
  ) {
    studentDetails.value.push({
      FirstName: firstName.value.trim(),
      LastName: lastName.value.trim(),
      Address: address.value.trim(),
      PhoneNumber: phoneNumber.value.trim(),
      Email: email.value.trim(),
      CourseName: courseName.value.trim(),
    });
    firstName.value = "";
    lastName.value = "";
    address.value = "";
    phoneNumber.value = "";
    email.value="";
    courseName.value = "";
  }
};
const removeStudent = (index) => {
  if (index >= 0 && index < studentDetails.value.length) {
    studentDetails.value.splice(index, 1);
  }
};
</script>
<template>
  <v-row class="justify-center align-center ma-3">
    <v-col cols="6">
      <v-card class=" pa-5 align-center">
        <v-form>
          <v-text-field label="FirstName" v-model="firstName" variant="outlined" 
          :counter="10"
          :rules="nameRules"></v-text-field>
          <v-text-field label="LastName" v-model="lastName" variant="outlined"
          :counter="10"
            :rules="nameRules"></v-text-field>
          <v-text-field label="Address" v-model="address" variant="outlined"></v-text-field>
          <v-text-field label="PhoneNumber" v-model="phoneNumber" variant="outlined"
          :counter="10"
            :rules="numberRules"></v-text-field>
            <v-text-field label="E-mail" v-model="email" variant="outlined"
            :rules="emailRules" 
            ></v-text-field>
          <v-text-field label="CourseName" v-model="courseName" variant="outlined"></v-text-field>
          <v-btn @click="addStudent" variant="outlined">Submit</v-btn>
          <v-list>
            <v-list-item v-for="(detail, index) in studentDetails" :key="index">
              <v-card class="text-align-flex-start pa-5 ma-3" width="250px">
                <v-list-item-content>
                  <v-list-item-title>FirstName: {{ detail.FirstName }}</v-list-item-title>
                  <v-list-item-title>LastName: {{ detail.LastName }}</v-list-item-title>
                  <v-list-item-title>Address: {{ detail.Address }}</v-list-item-title>
                  <v-list-item-title>PhoneNumber: {{ detail.PhoneNumber }}</v-list-item-title>
                   <v-list-item-title>E-mail: {{ detail.Email }}</v-list-item-title>
                  <v-list-item-title>Course:{{ detail.CourseName }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn @click="removeStudent(index)">Remove</v-btn>
                </v-list-item-action>
              </v-card>
            </v-list-item>
          </v-list>
        
        </v-form>
      </v-card>
      
    </v-col>
  </v-row>
</template>

<style scoped>
.text-align-center {
  text-align: center;
  height: auto;
  width: 50%;
 
}

</style>
