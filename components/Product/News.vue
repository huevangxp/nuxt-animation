<template>
   <v-container>
     <v-row>
       <v-col cols="12" >
         <v-card elevation="0" >
           <v-img src="https://www.apb.com.la/images/newdir2022b.jpg"></v-img>
           <p class="pt-4">
             ແຈກສູດ Challenge ເກັບເງິນຕາມອາຍຸ ກ່ອນນອນ🌙ສຳລັບຄົນທີ່ຢາກສ້າງວິໄນທາງການເງິນ.🗒️
           </p>
           <p>
             20/05/2024
           </p>
         </v-card>
       </v-col>
       <v-col v-for="item in 2" :key="item" cols="12" md="6">
         <v-card elevation="0">
           <v-img src="https://www.apb.com.la/images/newdir2022b.jpg">

           </v-img>
           <p class="pt-4"> ໃນຕອນບ່າຍຂອງວັນພຸດ ວັນທີ 09 ມີນາ 2022 ເວລາ 14:30 ໂມງ ຢູ່ທີ່ຫ້ອງປະຊຸມຊັ້ນ 8 ຂອງ ທະນາຄານສົ່ງເສີມກະສິກຳ...</p>
         </v-card>
       </v-col>

     </v-row>
   </v-container>
</template>

<script  >
</script>

