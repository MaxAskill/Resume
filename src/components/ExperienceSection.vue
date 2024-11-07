<template>
  <v-card class="mb-4 experience-card" id="experience" elevation="3">
    <v-card-text>
      <h2 class="text-3xl font-bold mb-4 gradient-text">Experience</h2>
      <div class="experience-item">
        <h3 class="text-2xl font-semibold mb-2 text-primary">Junior Software Engineer</h3>
        <p class="text-lg mb-3 text-gray-600">
          New Barbizon Fashion Inc. | September 2022 - February 2024
        </p>
        <ul class="list-disc pl-6 space-y-3">
          <li class="text-base text-gray-700 hover-effect mt-2">
            <span class="font-medium"
              >Web Development & Maintenance: Developed and maintained web applications,
              utilizing Vue.js, Laravel, and MySQL to enhance user experience and
              functionality.</span
            >
          </li>
          <li class="text-base text-gray-700 hover-effect mt-2">
            <span class="font-medium"
              >Database Management: Managed databases and optimized SQL queries to ensure
              smooth data operations for various e-commerce and business processes.</span
            >
          </li>
          <li class="text-base text-gray-700 hover-effect mt-2">
            <span class="font-medium"
              >Reporting & Analytics: Generated comprehensive reports and analytics using
              tools like Excel and SAP, providing actionable insights to support business
              decisions.</span
            >
          </li>
          <li class="text-base text-gray-700 hover-effect mt-2">
            <span class="font-medium"
              >Collaboration & Troubleshooting: Collaborated with cross-functional teams
              to resolve technical issues, improve system performance, and implement
              new</span
            >
            features.
          </li>
          <li class="text-base text-gray-700 hover-effect mt-2">
            <span class="font-medium"
              >Server & Cloud Management: Managed hosting environments using Linux and
              Google Cloud to ensure the scalability and availability of web
              applications.</span
            >
          </li>
        </ul>
      </div>
      <div class="mt-4 flex flex-wrap justify-center">
        <v-chip class="ma-2" color="primary" outlined>Vue.js</v-chip>
        <v-chip class="ma-2" color="success" outlined>Laravel</v-chip>
        <v-chip class="ma-2" color="info" outlined>MySQL</v-chip>
        <v-chip class="ma-2" color="warning" outlined>Google Cloud</v-chip>
        <v-chip class="ma-2" color="error" outlined>Linux</v-chip>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
// You can add any necessary imports or logic here
</script>

<style scoped>
.experience-card {
  background: linear-gradient(145deg, #f3f4f6 0%, #ffffff 100%);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
}

.gradient-text {
  background: linear-gradient(90deg, #2196f3, #4caf50);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hover-effect {
  transition: transform 0.3s ease;
}

.hover-effect:hover {
  transform: translateX(5px);
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

.v-chip {
  animation: fadeIn 0.5s ease-out forwards;
  opacity: 0;
  font-size: 0.875rem !important; /* Smaller font size for chips */
  height: 24px !important; /* Reduced height for chips */
}

.v-chip:nth-child(1) {
  animation-delay: 0.1s;
}
.v-chip:nth-child(2) {
  animation-delay: 0.2s;
}
.v-chip:nth-child(3) {
  animation-delay: 0.3s;
}
.v-chip:nth-child(4) {
  animation-delay: 0.4s;
}
.v-chip:nth-child(5) {
  animation-delay: 0.5s;
}

.experience-item {
  animation: fadeIn 0.5s ease-out forwards;
}
</style>
