<script setup>
defineProps({
  heading: {
    type: String,
    required: true
  }
});
</script>

<template>
  <section class="resume-section">
    <v-card class="mb-4">
      <v-card-title>{{ heading }}</v-card-title>
      <v-card-text>
        <slot></slot>
      </v-card-text>
    </v-card>
  </section>
</template>

<style scoped>
.resume-section {
  margin-bottom: 20px;
}
</style>
