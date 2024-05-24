<template>
 <div>
   <div>
     <Background/>
   </div>
<v-container>
  <v-card class="mx-auto" max-width="1200px" elevation="0">

    <v-row>
      <v-col cols="12" md="7">
        <div>
          <h2 class="mt-4" >ຄວາມຮູ້ & ຂ່າວສານ</h2>
          <hr class="teal" >
        </div>

            <ProductNews/>
        <div>
          <ProductPromotion/>
        </div>
      </v-col>
<!--      <v-col cols="12" md="7">-->
<!--        <ProductPromotion/>-->
<!--      </v-col>-->
      <v-col cols="12 " md="5">
        <ProductTable/>
      </v-col>
    </v-row>
  </v-card>
</v-container>
   <div >
     <ProductDetail/>
   </div>
   <div>
     <ProductSPS/>
   </div>
 </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
