<template>
  <div class="down-up">
    <v-card  elevation="1"  >
     <div class="primary">
       <h1 class="white--text my-5 mx-5 py-4 text-center">ອັດຕາແລກປ່ຽນປະຈຳວັນ</h1>
     </div>
      <div class="d-flex justify-space-between mx-5">
        <div class="white--text primary rounded-lg" style="width:100px; height: 30px" > <p class="d-flex justify-center pt-1">55/55/2023</p> </div>
        <v-btn icon to="/print"><v-icon size="40" color="primary">mdi-printer</v-icon></v-btn>
      </div>
      <v-data-table
        :headers="headers"
        :items="desserts"
        class="elevation-0  primary--text mx-4"
        :mobile-breakpoint="0"
        hide-default-footer
      ></v-data-table>
      <v-card-actions>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="ກວດອັດຕາແລກປ່ຽນຍ່ອນຫຼັງ"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
              class="mx-2"
            ></v-text-field>
            <v-btn class="primary mt-2" dark @click="search">  search <v-icon class="mx-2 " >mdi-magnify</v-icon>  </v-btn>
          </template>
          <v-date-picker
            v-model="date"

            :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substring(0, 10)"
            min="1950-01-01"
            @change="save"
          ></v-date-picker>
        </v-menu>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      date:'',
      menu:'',
      headers: [
        {
          text: '',
          align: 'start',
          sortable: false,
          value: 'flag',
          activePicker: null,
          date: null,
          menu: false,
        },
        { text: 'Currency', value: 'currency' },
        { text: 'Buy', value: 'buy' },
        { text: 'Sale', value: 'sale' },
      ],
      desserts: [
        {
          flag: 'Frozen Yogurt',
          currency: 159,
          buy: 6.0,
          sale: 24,
        },
        {
          flag: 'Ice cream sandwich',
          currency: 237,
          buy: 9.0,
          sale: 37,
        },
        {
          flag: 'Eclair',
          currency: 262,
          buy: 16.0,
          sale: 23,
        },
        {
          flag: 'Cupcake',
          currency: 305,
          buy: 3.7,
          sale: 67,
        },
        {
          flag: 'Gingerbread',
          currency: 356,
          buy: 16.0,
          sale: 49,
        },
        {
          flag: 'Jelly bean',
          currency: 375,
          buy: 0.0,
          sale: 94,
        },
        {
          flag: 'Lollipop',
          currency: 392,
          buy: 0.2,
          sale: 98,
        },
        {
          flag: 'Honeycomb',
          currency: 408,
          buy: 3.2,
          sale: 87,
        },
        {
          flag: 'Donut',
          currency: 452,
          buy: 25.0,
          sale: 51,
        },
        {
          flag: 'KitKat',
          currency: 518,
          buy: 26.0,
          sale: 65,
        },
      ],
    }
  },
  watch: {
    menu (val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
  },
  methods: {
    save (date) {
      this.$refs.menu.save(date)
    },
    search(){
      console.log(this.date)
    }
  },
  mounted() {
    const gsap = this.$gsap.timeline({ delay: 0.4, pause: true });
    gsap.from('.down-up', { y: '200', autoAlpha: 0, stagger:0.2 ,duration: 1});
    gsap.from('.text-p', { x: '100', autoAlpha: 0, stagger:0.25, ease: 'back.out(1.7)' ,duration: 1});
    gsap.from('.h1', { y: '-100', autoAlpha: 0, stagger:0.25, ease: 'back.out(1.7)' ,duration: 1});
    gsap.from('.name', { y: '100', x:'100', autoAlpha: 0, stagger:0.25, ease: 'back.out(1.7)' ,duration: 1});
}
}
</script>
