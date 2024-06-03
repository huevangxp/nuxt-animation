<template>
   <v-container>
     <v-row>
       <v-col cols="12" >
         <v-card elevation="0">
           <v-img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-6/444935418_845431087615411_4729601989568630131_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGfRPsXWDlgethzn4jpnAuW6MZUrpQY_1ToxlSulBj_VKshEJQ7LCze0ST9KtXwFOVzg4RSViZ-sNKS0Uu20JcR&_nc_ohc=R_RXTe0PlSwQ7kNvgFbvpQP&_nc_ht=scontent.fbkk10-1.fna&oh=00_AYCJHpynIpRHS1iUZalB7U73MlEof5gqSyuTlPlP5O_iyQ&oe=666347FA"></v-img>
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
           <v-img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-6/444935418_845431087615411_4729601989568630131_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGfRPsXWDlgethzn4jpnAuW6MZUrpQY_1ToxlSulBj_VKshEJQ7LCze0ST9KtXwFOVzg4RSViZ-sNKS0Uu20JcR&_nc_ohc=R_RXTe0PlSwQ7kNvgFbvpQP&_nc_ht=scontent.fbkk10-1.fna&oh=00_AYCJHpynIpRHS1iUZalB7U73MlEof5gqSyuTlPlP5O_iyQ&oe=666347FA">

           </v-img>
           <p class="pt-4"> ໃນຕອນບ່າຍຂອງວັນພຸດ ວັນທີ 09 ມີນາ 2022 ເວລາ 14:30 ໂມງ ຢູ່ທີ່ຫ້ອງປະຊຸມຊັ້ນ 8 ຂອງ ທະນາຄານສົ່ງເສີມກະສິກຳ...</p>
         </v-card>
       </v-col>

     </v-row>
   </v-container>
</template>

<script  >
</script>

