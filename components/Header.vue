<template>
    <div class="banner" ref="banner">
      <h1 class="white--text text-center">this handing 1</h1>
      <canvas id="dotsCanvas"></canvas>
    </div>
  </template>
  
  <script>
  export default {
    layout:'Black',
    mounted() {
      const banner = this.$refs.banner;
      const canvas = document.getElementById('dotsCanvas');
      canvas.width = banner.offsetWidth;
      canvas.height = banner.offsetHeight;
      const ctx = canvas.getContext('2d');
      let dots = [];
      const arrayColors = ['#eee', '#545454', '#596d91', '#bb5a68', '#696541'];
  
      for (let index = 0; index < 50; index++) {
        dots.push({
          x:  Math.floor(Math.random() * canvas.width),
          y:  Math.floor(Math.random() * canvas.height),
          size: Math.random() * 3 + 5,
          color: arrayColors[Math.floor(Math.random()* 5)]
        });
      }
  
      const drawDots = () => {
        dots.forEach(dot => {
          ctx.fillStyle = dot.color;
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI*2);
          ctx.fill();
        })
      }
  
      drawDots();
  
      banner.addEventListener('mousemove', (event) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawDots();
        let mouse = {
          x:  event.pageX - banner.getBoundingClientRect().left,
          y:  event.pageY - banner.getBoundingClientRect().top
        }
        dots.forEach(dot => {
          let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
          if(distance < 300){
            ctx.strokeStyle = dot.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        })
      });
  
      banner.addEventListener('mouseout', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawDots();
      });
  
      window.addEventListener('resize', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = banner.offsetWidth;
        canvas.height = banner.offsetHeight;
  
        dots = [];
        for (let index = 0; index < 50; index++) {
          dots.push({
            x:  Math.floor(Math.random() * canvas.width),
            y:  Math.floor(Math.random() * canvas.height),
            size: Math.random() * 3 + 5,
            color: arrayColors[Math.floor(Math.random()* 5)]
          });
        }
        drawDots();
      });
    }
  }
  </script>
  
  <style scoped>
  .banner {
    position: relative;
    width: 100%;
    height: 100vh;
    background: teal;
  }
  </style>