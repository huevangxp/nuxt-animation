<template>
 <div>
   <div >
     <Background/>
   </div>
<v-container>
  <v-card class="mx-auto" max-width="1200px" elevation="0" contain data-aos="fade-up" data-aos-easing="linear" data-aos-anchor-placement="center-center" data-aos-duration="1500">

    <v-row>
      <v-col cols="12" md="7">
        <div contain data-aos="fade-up" data-aos-easing="linear" data-aos-anchor-placement="center-center" data-aos-duration="1500">
          <h2 class="mt-4" >ຄວາມຮູ້ & ຂ່າວສານ</h2>
          <hr class="teal" >
        </div>

            <ProductNews/>
        <div contain data-aos="fade-up" data-aos-easing="linear" data-aos-anchor-placement="center-center" data-aos-duration="1500">
          <ProductPromotion/>
        </div>
      </v-col>
 
      <v-col cols="12 " md="5" contain data-aos="fade-up" data-aos-easing="linear" data-aos-anchor-placement="center-center" data-aos-duration="1500">
        <ProductTable/>
      </v-col>
    </v-row>
  </v-card>
</v-container>
   <div contain data-aos="fade-up" data-aos-easing="linear" data-aos-anchor-placement="center-center" data-aos-duration="1500">
     <ProductDetail/>
   </div>
   <div contain data-aos="fade-up" data-aos-easing="linear" data-aos-anchor-placement="center-center" data-aos-duration="1500">
     <ProductSPS/>
   </div>
 </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
