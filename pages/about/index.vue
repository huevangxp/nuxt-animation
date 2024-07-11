<template>
  <div >
    <h1 class="text">this is heading</h1>
    <p class="text-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat alias, ipsam assumenda aut atque nobis quibusdam hic pariatur vel voluptate tempora repudiandae consectetur laudantium tenetur delectus veritatis! Incidunt praesentium ut nulla labore provident at rem ipsum nihil. Sapiente necessitatibus, ullam, nobis ducimus dicta neque, possimus distinctio cum eum voluptatibus ad est nesciunt! Consequuntur inventore commodi nostrum, provident alias, ullam aliquid porro blanditiis quas rerum quibusdam quis dolorem odio, doloremque a dolores dolorum doloribus obcaecati vel error aperiam repellat similique dicta. Quae deleniti voluptates beatae eaque cumque voluptatibus sint et quasi, earum similique facere maiores? A iure voluptas sed atque repellendus?</p>
  <h1 class="h1">this is animal</h1>
  <p class="name">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit vitae quia quas. Nemo accusantium aliquam atque omnis animi, molestiae numquam repellendus, possimus, sit eum earum iure eligendi quo obcaecati adipisci sed velit voluptates nesciunt praesentium! Officiis eum quo architecto explicabo repellat voluptatum omnis quis reiciendis sequi voluptate quod modi beatae rem, recusandae, itaque sapiente harum? Voluptatem nostrum quae sunt explicabo, facere harum quaerat esse laboriosam soluta sapiente magnam officia aspernatur. Fugit error recusandae doloribus possimus sapiente ea numquam rerum obcaecati, suscipit accusantium optio soluta veniam dicta sunt ratione neque magnam, quasi perferendis? Sequi fuga dignissimos corrupti deleniti nesciunt harum commodi consequuntur accusantium hic natus, voluptate itaque repudiandae reprehenderit aperiam ab nobis officia a alias laudantium fugiat atque assumenda quas. Placeat, eius! Dignissimos quos debitis sunt molestiae quas ipsum minus similique odit nostrum. Officia deserunt nihil labore ex facilis illum nisi voluptates reprehenderit ab veritatis enim nobis delectus, repellat reiciendis aliquam. Error nulla, ipsa blanditiis reiciendis aut perferendis. Eius harum minus laborum veritatis, eligendi eveniet modi ut vitae sunt nesciunt incidunt nemo nulla nisi dolores dolorum labore esse laboriosam, possimus dicta culpa, doloribus quaerat fuga fugit delectus? Fuga, minus corporis ipsa necessitatibus quos quia delectus possimus! Aperiam deleniti quisquam deserunt ut.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    const gsap = this.$gsap.timeline({ delay: 0.4, pause: true });
    gsap.from('.text', { y: '200', autoAlpha: 0, stagger:0.2 ,duration: 1});
    gsap.from('.text-p', { x: '100', autoAlpha: 0, stagger:0.25, ease: 'back.out(1.7)' ,duration: 1});
    gsap.from('.h1', { y: '-100', autoAlpha: 0, stagger:0.25, ease: 'back.out(1.7)' ,duration: 1});
    gsap.from('.name', { y: '100', x:'100', autoAlpha: 0, stagger:0.25, ease: 'back.out(1.7)' ,duration: 1});
  },  
}
</script>