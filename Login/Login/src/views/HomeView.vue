<template>
  <v-row>
    <v-col cols="6">
      
      <div style="background-color: #000060; aspect-ratio:1 ">
        <VImg :src="Logo" class="image" />
        <img :src="Banner" class="image2">
      </div>
    </v-col>
    <v-col cols="6">
      <v-form class="font-family">
        <v-container>
          <h2 class="font-size-50px">Create an account</h2>
          <label for="" class="font-weight-medium">User_Name</label>
          <v-text-field v-model="User_Name" type="text"
            variant="outlined"
            placeholder="Text here"
            width="20px"
            height="5px"
            padding="2px"
          >
          </v-text-field>
          <label for="" class="font-weight-medium">Password</label>
          <v-text-field v-model="Password" type="password"  variant="outlined" placeholder="Text here" > 
          </v-text-field>
          
          <label for="" class="font-weight-medium"> Confirm_Password</label>
          <v-text-field v-model="Confirm_Password" type="password" variant="outlined" placeholder="Text here">
          </v-text-field>
          <v-text
            >Use 8 or more characters with a mix of letters, numbers &
            symbols</v-text
          ><br /><br />
          <label for="" class="font-weight-medium">Mobile_Number</label>
          <v-text-field v-model="Mobile_Number" type="number"   variant="outlined" placeholder="Text here">
          </v-text-field>
          <v-btn color="#6926FF" class="text-capitalize" @click="createAccount">Create An account</v-btn><br/>

          <v-text>Already have an Account ? Log in </v-text>
        </v-container>
      </v-form>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
// import Image from "../assets/Image.png";
import Logo from "../assets/Logo.png";
import Banner from "../assets/Banner.png";
import {ref} from 'vue' 
const User_Name = ref('')
const Password = ref('')
const Confirm_Password =ref('')
const Mobile_Number = ref('')

const createAccount = () => {
  // Validation
  if (!User_Name.value || !Password.value || !Confirm_Password.value || !Mobile_Number.value) {
    alert('Please fill in all fields.');
    return;
  }

  if (Password.value !== Confirm_Password.value) {
    alert('Password and Confirm Password do not match.');
    return;
  }

  if (!/^\d{10}$/.test(Mobile_Number.value)) {
    alert('Mobile Number must be a 10-digit number.');
    return;
  }
  alert(`Account created successfully!\n\nUser Name: ${User_Name.value}\nPassword: ${Password.value}\nMobile Number: ${Mobile_Number.value}`);
};

</script>

<style>
.image {
  height: 20px;
  top: 70px;
  right: 200px;
}
.image2{
  position: fixed; 
  bottom: 0;
  left: 0;
  width: 49%; 
}

.font-family {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 25px 15px ;
  
}

h2{
  font-size: 30px;
}
</style>
