<template>
  <v-app dark>

  <Header/>
    <v-main>
      <div class="add2">
        <Nuxt />
      </div>
    </v-main>

    <v-footer
width="100%"
color="primary"
height="500px"
data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500"
    >
     <Footer/>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style>
*{
  font-family: "Noto Sans Lao", sans-serif;
  /* font-size:40px */
}

</style>
