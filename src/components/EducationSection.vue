<template>
  <v-card class="mb-4 education-card" id="education" elevation="3">
    <v-card-text>
      <h2 class="text-3xl font-bold mb-4 gradient-text">Education</h2>
      <div class="education-item">
        <h3 class="text-2xl font-semibold mb-2 text-primary">
          Bachelor of Science in Computer Science
        </h3>
        <p class="text-lg mb-3 text-gray-600">Bicol University | 2022</p>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
// You can add any necessary imports or logic here
</script>

<style scoped>
.education-card {
  background: linear-gradient(145deg, #f3f4f6 0%, #ffffff 100%);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.education-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
}

.gradient-text {
  background: linear-gradient(90deg, #2196f3, #4caf50);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.education-item {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
