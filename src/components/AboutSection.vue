<template>
  <v-card class="mb-4 about-card" id="about" elevation="3">
    <v-card-text>
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/3 text-center mb-4 md:mb-0">
          <div class="custom-avatar mx-auto">
            <v-img
              src="/avatar.JPG"
              alt="Melvin Perez"
              cover
              class="custom-avatar-image"
            ></v-img>
          </div>
        </div>
        <div class="md:w-2/3">
          <h1 class="text-3xl font-bold mb-2 gradient-text">Melvin Perez</h1>
          <p class="text-xl font-medium mb-3 text-primary">Junior Software Engineer</p>
          <v-divider class="mb-4"></v-divider>
          <div class="flex flex-wrap">
            <div class="w-full sm:w-1/2 flex items-center mb-2 hover-effect">
              <v-icon color="primary" class="mr-2">mdi-email</v-icon>
              <a
                href="mailto:perezmelvin74@gmail.com"
                class="no-underline text-gray-700 hover:text-primary transition-colors duration-300"
                >perezmelvin74@gmail.com</a
              >
            </div>
            <div class="w-full sm:w-1/2 flex items-center mb-2 hover-effect">
              <v-icon color="primary" class="mr-2">mdi-phone</v-icon>
              <span class="text-gray-700">09097350166</span>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6">
        <p class="text-base leading-relaxed text-gray-600">
          As a Computer Science graduate with hands-on experience in developing and
          maintaining software applications across various industries, including the
          retail sector, I am focused on creating robust systems that meet industry
          standards. My expertise includes working with databases, APIs, and software
          development tools, alongside collaborating with cross-functional teams to
          deliver high-quality software solutions on time and within budget.
        </p>
      </div>
      <div class="mt-4 flex flex-wrap justify-center">
        <v-chip class="ma-2" color="primary" outlined>Vue.js</v-chip>
        <v-chip class="ma-2" color="success" outlined>Node.js</v-chip>
        <v-chip class="ma-2" color="info" outlined>JavaScript</v-chip>
        <v-chip class="ma-2" color="warning" outlined>SQL</v-chip>
        <v-chip class="ma-2" color="error" outlined>Git</v-chip>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
// You can add any necessary imports or logic here
</script>

<style scoped>
.about-card {
  background: linear-gradient(145deg, #f3f4f6 0%, #ffffff 100%);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.about-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
}

.gradient-text {
  background: linear-gradient(90deg, #2196f3, #4caf50);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.custom-avatar {
  width: 50%;
  padding-top: 70%; /* This creates a 5:7 aspect ratio */
  position: relative;
  border: 4px solid #2196f3;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(33, 150, 243, 0.3);
  overflow: hidden;
  margin: 0 auto; /* This centers the avatar */
}

.custom-avatar-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top; /* Adjust this to center the face in the portrait */
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
</style>
