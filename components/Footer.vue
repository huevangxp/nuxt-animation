<template>
  <div style="width:100%" app class="primary white--text" >
      <v-row>
        <v-col cols="12" md="4">
          <div class="footer-section">
            <h3 class="footer-heading">Quick Links</h3>
            <v-btn text color="white">Home</v-btn>
            <v-btn text color="white">About</v-btn>
            <v-btn text color="white">Contact</v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="footer-section">
            <h3 class="footer-heading">Contact Us</h3>
            <p class="footer-text">123 Street Name</p>
            <p class="footer-text">City, Country</p>
            <p class="footer-text">contact@example.com</p>
            <p class="footer-text">+1234567890</p>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="footer-section">
            <h3 class="footer-heading">Follow Us</h3>
            <v-btn icon class="footer-social-icon" dark><v-icon>mdi-facebook</v-icon></v-btn>
            <v-btn icon class="footer-social-icon" dark><v-icon>mdi-twitter</v-icon></v-btn>
            <v-btn icon class="footer-social-icon" dark><v-icon>mdi-instagram</v-icon></v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center" cols="12">
          <span>&copy; 2024 My Nuxt Vuetify App. All rights reserved.</span>
        </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer-section {
  padding: 20px;
}

.footer-heading {
  font-size: 18px;
  margin-bottom: 10px;
  color: white;
}

.footer-text {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 5px;
}


</style>
