<template>
  <div>
    <v-card max-width="1000px" elevation="0" class="mx-auto">
      <v-row>
        <v-col v-for="item in items" :key="item" cols="1">
          <v-card  elevation="0">
            <v-img :src="item.img"  ></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data(){
    return {
      items:[
        {img:'https://www.apb.com.la/images/7.jpg'},
        {img:'https://www.apb.com.la/images/thippaya.jpg'},
        {img:'https://www.apb.com.la/images/12.jpg'},
        {img:'https://www.apb.com.la/images/11.jpg'},
        {img:'https://www.apb.com.la/images/10.jpg'},
        {img:'https://www.apb.com.la/images/9.jpg'},
        {img:'https://www.apb.com.la/images/8.jpg'},
      ]
    }
  }
}
</script>
