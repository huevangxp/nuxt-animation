<template>
    <div >
      <v-app-bar
        fixed
        app
        elevation="0"
        height="100px"
        class="white"
      >
       <v-app-bar-title> <v-img src="/1.png" height="80" width="400"/></v-app-bar-title>
        <v-spacer />
        <v-btn text class="teal--text font-weight-bold"> ດາວໂຫຼດ</v-btn>
        <v-btn text class="teal--text font-weight-bold"> ສະໝັກວຽກ </v-btn>
        <v-btn text class="teal--text font-weight-bold"> ຜະລິດຕະພັນອອກໃຫມ່ </v-btn>
        <v-spacer/>

        <v-btn text class="teal--text">ເຂົ້າສູ່ລະບົບ</v-btn>
      </v-app-bar>

      <v-app-bar app   class="add2 teal" style="margin-top: 100px; height: 6% ;">

          <v-row>
            <v-col cols="1">
                <v-icon color="white" size="30">mdi-bank</v-icon>
            </v-col>
            <v-col cols="10" class="d-flex justify-center">
              <v-btn text   dark to="/"> ໜ້າຫຼັກ </v-btn>
              <v-btn text   dark to="/about"> ກຽມກັບພວກເຮົາ </v-btn>
              <v-btn text   dark> ຜະລິດຕະພັນທັງໝົດ</v-btn>
              <v-btn text   dark> ຕິດຕໍ່ພວກເຮົາ </v-btn>
              <v-btn text   dark>ບໍລິການອື່ນໆໆ</v-btn>
            </v-col>
            <v-col cols="1">
              <v-btn   class="white primary--text font-weight-bold rounded-pill" >{{currentDateTime}}</v-btn>
            </v-col>
          </v-row>
      </v-app-bar>

      <v-app-bar elevation="0" app class="yellow" height="10%" style="margin-top: 95px; z-index: 99" t></v-app-bar>

    </div>
  </template>


<script>

export default {
  data() {
    return {
      currentDateTime: '',
      currentDate: '',
    };
  },
  mounted() {
    this.updateDateTime();
    setInterval(this.updateDateTime, 1000); // Update every second
  },
  methods: {
    updateDateTime() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const day = String(now.getDate()).padStart(2, '0');
      this.currentDate = `${year}/${month}/${day}`;
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      this.currentDateTime = `${hours}:${minutes}:${seconds}`;
    }
  }
};
</script>

<style scoped>
.add2{

}
</style>
