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
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Open+Sans:wght@400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cabin&display=swap');
html{
  scroll-behavior: smooth;
}
            
body{
  margin: 0;
  padding: 0;


}
</style>
