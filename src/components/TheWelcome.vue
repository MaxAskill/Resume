<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import AboutSection from "./AboutSection.vue";
import ExperienceSection from "./ExperienceSection.vue";
import EducationSection from "./EducationSection.vue";
import SkillsSection from "./SkillsSection.vue";

const drawer = ref(null);
const sections = [
  { title: "About", icon: "mdi-account", component: AboutSection },
  { title: "Experience", icon: "mdi-briefcase", component: ExperienceSection },
  { title: "Education", icon: "mdi-school", component: EducationSection },
  { title: "Skills", icon: "mdi-lightbulb", component: SkillsSection },
];

const activeSection = ref(sections[0]);

const setActiveSection = (section) => {
  activeSection.value = section;
  if (window.innerWidth < 960) {
    drawer.value = false;
  }
};

onMounted(() => {
  gsap.from(".section-content", { opacity: 0, y: 20, duration: 0.5 });
});

onUnmounted(() => {
  gsap.killTweensOf(".section-content");
});
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :permanent="$vuetify.display.mdAndUp" temporary>
      <v-list>
        <v-list-item v-if="$vuetify.display.mdAndUp">
          <v-list-item-title class="text-h6">Melvin Perez</v-list-item-title>
          <v-list-item-subtitle>Resume</v-list-item-subtitle>
        </v-list-item>
        <v-divider v-if="$vuetify.display.mdAndUp" class="my-2"></v-divider>
        <v-list-item
          v-for="section in sections"
          :key="section.title"
          :prepend-icon="section.icon"
          :title="section.title"
          @click="setActiveSection(section)"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        v-if="$vuetify.display.smAndDown"
      ></v-app-bar-nav-icon>
      <v-app-bar-title v-if="$vuetify.display.smAndDown"
        >Melvin Perez - Resume</v-app-bar-title
      >
      <v-app-bar-title v-else>{{ activeSection.title }}</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid class="fill-height">
        <v-row justify="center" align="start" class="fill-height">
          <v-col cols="12" sm="11" md="10" lg="9" xl="8">
            <transition
              @enter="
                (el, done) =>
                  gsap.from(el, { opacity: 0, y: 20, duration: 0.5, onComplete: done })
              "
              @leave="
                (el, done) =>
                  gsap.to(el, { opacity: 0, y: -20, duration: 0.5, onComplete: done })
              "
              :css="false"
            >
              <component
                :is="activeSection.component"
                :key="activeSection.title"
                class="section-content"
              ></component>
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.v-main {
  background-color: #f5f5f5;
}

.section-content {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin-top: 24px;
}

@media (max-width: 600px) {
  .section-content {
    padding: 16px;
    margin-top: 16px;
  }
}
</style>
