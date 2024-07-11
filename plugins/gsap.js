import { gsap } from 'gsap'

const gsapPlugin = ({ app }, inject) => {
  inject('gsap', gsap)
}

export default gsapPlugin