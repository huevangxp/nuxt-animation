<template>
  <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay='500'>
    <!-- <h1 class="my-5 py-5 font-weight-bold">ສິ່ງທີ່ຫນ້າສົນໃຈ</h1> -->

    <v-card class=" mb-4 ">
      <v-carousel
        dark
        cycle
        hide-delimiter-background
        show-arrows-on-hover
        height="65vh"
      >
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-card>

  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://www.apb.com.la/images/banner/WU-SWIFT-v2.png',
        },
        {
          src: 'https://www.apb.com.la/images/banner/credit-%20size%202000x500%20px-01-01.png',
        },
        {
          src: 'https://www.apb.com.la/images/banner/deposit-%20size%202000x500%20px-01.png',
        },
        {
          src: 'https://www.apb.com.la/images/banner/mepom-%20size%202000x500%20px-01.png',
        },
        {
          src: 'https://www.apb.com.la/images/banner/transfer%20money-%20size%202000x500%20px-01.png',
        },
        {
          src: 'https://www.apb.com.la/images/banner/x2-x3-%20size%202000x500%20px-02.png',
        },
      ],
    }
  },
}
</script>

<style scoped>
.ads{
  margin-left: 10%;
  margin-top:22%;
}
</style>




<!--<template>-->
<!--  <div class="banner" ref="banner">-->
<!--  <div class="d-flex justify-center" style="padding-top:350px; z-index: 9999 ">-->
<!--    <vue-typed-js-->
<!--      :typeSpeed="300"-->
<!--      :startDelay="1000"-->
<!--      :backSpeed="300"-->
<!--      :backDelay="3000"-->
<!--      :showCursor="true"-->
<!--      :loop="true"-->
<!--      :strings="['ສະບາຍດີ', 'ຍີນດີຕ້ອນຮັບເຂົ້າສູ່ລະບົບ']"-->

<!--    >-->
<!--      <h1 style="font-size: 100px; z-index: 1" class="typing"></h1>-->
<!--    </vue-typed-js>-->

<!--  </div>-->
<!--    <canvas id="dotsCanvas"></canvas>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  layout:'Black',-->
<!--  mounted() {-->
<!--    const banner = this.$refs.banner;-->
<!--    const canvas = document.getElementById('dotsCanvas');-->
<!--    canvas.width = banner.offsetWidth;-->
<!--    canvas.height = banner.offsetHeight;-->
<!--    const ctx = canvas.getContext('2d');-->
<!--    let dots = [];-->
<!--    const arrayColors = ['#E5E7E9', '#EBDEF0', '#FAE5D3',  ];-->

<!--    for (let index = 0; index < 100; index++) {-->
<!--      dots.push({-->
<!--        x:  Math.floor(Math.random() * canvas.width),-->
<!--        y:  Math.floor(Math.random() * canvas.height),-->
<!--        size: Math.random() * 3 + 5,-->
<!--        color: arrayColors[Math.floor(Math.random()* 5)]-->
<!--      });-->
<!--    }-->

<!--    const drawDots = () => {-->
<!--      dots.forEach(dot => {-->
<!--        ctx.fillStyle = dot.color;-->
<!--        ctx.beginPath();-->
<!--        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI*2);-->
<!--        ctx.fill();-->
<!--      })-->
<!--    }-->

<!--    drawDots();-->

<!--    banner.addEventListener('mousemove', (event) => {-->
<!--      ctx.clearRect(0, 0, canvas.width, canvas.height);-->
<!--      drawDots();-->
<!--      let mouse = {-->
<!--        x:  event.pageX - banner.getBoundingClientRect().left,-->
<!--        y:  event.pageY - banner.getBoundingClientRect().top-->
<!--      }-->
<!--      dots.forEach(dot => {-->
<!--        let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);-->
<!--        if(distance < 300){-->
<!--          ctx.strokeStyle = dot.color;-->
<!--          ctx.lineWidth = 1;-->
<!--          ctx.beginPath();-->
<!--          ctx.moveTo(dot.x, dot.y);-->
<!--          ctx.lineTo(mouse.x, mouse.y);-->
<!--          ctx.stroke();-->
<!--        }-->
<!--      })-->
<!--    });-->

<!--    banner.addEventListener('mouseout', () => {-->
<!--      ctx.clearRect(0, 0, canvas.width, canvas.height);-->
<!--      drawDots();-->
<!--    });-->

<!--    window.addEventListener('resize', () => {-->
<!--      ctx.clearRect(0, 0, canvas.width, canvas.height);-->
<!--      canvas.width = banner.offsetWidth;-->
<!--      canvas.height = banner.offsetHeight;-->

<!--      dots = [];-->
<!--      for (let index = 0; index < 50; index++) {-->
<!--        dots.push({-->
<!--          x:  Math.floor(Math.random() * canvas.width),-->
<!--          y:  Math.floor(Math.random() * canvas.height),-->
<!--          size: Math.random() * 3 + 5,-->
<!--          color: arrayColors[Math.floor(Math.random()* 5)]-->
<!--        });-->
<!--      }-->
<!--      drawDots();-->
<!--    });-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.banner {-->
<!--  position: relative;-->
<!--  background: url("/background.jpeg")   ;-->
<!--  background-size: contain;-->
<!--  width: 100%;-->
<!--  height: 80vh;-->
<!--}-->

<!--.banner #dotsCanvas{-->
<!--  position: absolute;-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--  top: 0;-->
<!--  left: 0;-->
<!--  pointer-events: none;-->
<!--  opacity: 0.6;-->
<!--}-->
<!--h1{-->
<!--  font-size: 4em;-->
<!--  font-weight: bolder;-->
<!--  background-image: linear-gradient(-->
<!--      #89a5df, #e46e7f, #e8e191-->
<!--  );-->
<!--  -webkit-background-clip: text;-->
<!--  -webkit-text-fill-color: transparent;-->
<!--  text-transform: uppercase;-->

<!--}-->

<!--</style>-->
