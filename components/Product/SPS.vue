<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col v-for="item in items" :key="item.img" cols="1">
          <v-card elevation="0">
            <v-img :src="item.img" class="ma-2" contain  />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { img: 'https://www.apb.com.la/images/7.jpg' },
        { img: 'https://www.apb.com.la/images/thippaya.jpg' },
        { img: 'https://www.apb.com.la/images/12.jpg' },
        { img: 'https://www.apb.com.la/images/11.jpg' },
        { img: 'https://www.apb.com.la/images/10.jpg' },
        { img: 'https://www.apb.com.la/images/9.jpg' },
        { img: 'https://www.apb.com.la/images/8.jpg' },
      ],
    };
  },
};
</script>

<style>
.v-img {
  object-fit: contain;
}
</style>
