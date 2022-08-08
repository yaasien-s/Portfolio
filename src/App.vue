<template>
<Navbar/>
<Footer/>
</template>

<script>
import Navbar from '../src/components/Navbar.vue'
import Footer from '../src/components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cabin&display=swap');
html{
  scroll-behavior: smooth;
}
            
body{
  margin: 0;
  padding: 0;


}
</style>
