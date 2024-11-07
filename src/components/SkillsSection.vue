<template>
  <v-card class="mb-4 skills-card" id="skills" elevation="3">
    <v-card-text>
      <h2 class="text-h4 font-weight-bold mb-6 gradient-text">Skills</h2>
      <v-row>
        <v-col cols="12" md="6" v-for="(category, index) in skillCategories" :key="index">
          <h3 class="text-h6 font-weight-medium mb-3">{{ category.name }}</h3>
          <v-progress-linear
            v-for="skill in category.skills"
            :key="skill.name"
            :value="skill.level"
            height="25"
            rounded
            class="mb-3 skill-bar"
          >
            <template v-slot:default>
              <strong>{{ skill.name }}</strong>
            </template>
          </v-progress-linear>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const skillCategories = ref([
  {
    name: "Web Development",
    skills: [
      { name: "Vue.js", level: 90 },
      { name: "Laravel", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 88 },
    ],
  },
  {
    name: "Backend Development",
    skills: [
      { name: "PHP", level: 92 },
      { name: "RESTful APIs", level: 88 },
    ],
  },
  {
    name: "Database Management",
    skills: [{ name: "MySQL", level: 90 }],
  },
  {
    name: "Other Skills",
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "Linux", level: 80 },
      { name: "Agile", level: 85 },
      { name: "Problem Solving", level: 95 },
    ],
  },
]);
</script>

<style scoped>
.skills-card {
  background: linear-gradient(145deg, #f3f4f6 0%, #ffffff 100%);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.gradient-text {
  background: linear-gradient(90deg, #2196f3, #4caf50);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.skill-bar {
  border-radius: 4px;
  overflow: hidden;
}

.skill-bar:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
  transition: all 0.3s ease;
}

.skill-bar >>> .v-progress-linear__content {
  padding-left: 8px;
}

@media (min-width: 960px) {
  .skills-card {
    padding: 24px;
  }
}
</style>
