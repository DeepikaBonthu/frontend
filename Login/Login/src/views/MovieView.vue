<template>
  <div class="container">
    <v-container>
      <v-card v-for="(test, index) in tests" :key="index" class="ma-4">
        <v-card-title>
          <v-row>
            <v-col cols="4">
              <div class="TestAdd">
                <span
                  v-if="!editMode[index].test"
                  @click="toggleEditMode(index, 'test')"
                >
                  {{ test.name }}
                  <v-icon v-if="!editMode[index].test" size="small" class="mx-1"
                    >mdi-pencil-outline</v-icon
                  >
                </span>
                <v-text-field
                  v-else
                  v-model="test.name"
                  @blur="saveTitle(index, 'test')"
                  @keydown.enter="saveTitle(index, 'test')"
                  :append-icon="
                    !editMode[index].test ? 'mdi-pencil-outline' : ''
                  "
                  @click:append-icon="() => toggleEditMode(index, 'test')"
                ></v-text-field>
              </div>
            </v-col>
          </v-row>

          <v-btn
            class="text-capitalize right mx-5 testTypeButton"
            @click="addNewTestType(index)"
          >
            <v-icon size="large">mdi-plus</v-icon
            ><span class="AddTestType">Add Test Type</span>
          </v-btn>
        </v-card-title>

        

        
        <v-row>
          <v-col cols="10" class="d-flex ma-3">
            <v-text-field
              label="Marks"
              v-model="test.marks"
              class="mx-2"
              :rules="[v => !!v || 'Marks is required', v => /^\d+$/.test(v) || 'Marks must be a number']"
            ></v-text-field>
            <v-text-field
              label="Percentage"
              v-model="test.percentage"
              class="mx-2"
              :rules="[v => !!v || 'Percentage is required', v => /^\d+(\.\d+)?$/.test(v) || 'Percentage must be a valid number']"
            ></v-text-field>
            <v-text-field
              label="Grade"
              class="mx-2"
              v-model="test.grade"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card>
      <v-btn class="text-capitalize NewTestAdd" @click="addNewTest">
        <v-icon size="large">mdi-plus</v-icon>
        <span>Add test</span>
      </v-btn>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tests = ref([
  {
    name: "Initial Test Type",
    marks: "",
    percentage: "",
    textType: "",
  },
]);
const editMode = ref(
  tests.value.map(() => ({
    test: false,
    type: false,
    marks: false,
    percentage: false,
    textType: false,
  }))
);

const toggleEditMode = (index, field) => {
  editMode.value[index][field] = !editMode.value[index][field];
};

const saveTitle = (index, field) => {
  editMode.value[index][field] = false;
  // Logic to save the edited field
};

// Function to add a new test
const addNewTest = () => {
  tests.value.push({
    name: "",
    type: "",
    marks: "",
    percentage: "",
    textType: "",
  });
  editMode.value.push({
    test: true,
    type: true,
    marks: true,
    percentage: true,
    textType: true,
  });
};

// Function to add a new test type
const addNewTestType = (index) => {
  // Logic to add a new test type
};
</script>

<style scoped>
/* Your existing styles */
</style>
