<template>
  <div class="text-center mb-0 mt-6">
      <footer>
          <div class="space-x-12 text-2xl">
          <a href="https://www.instagram.com/yaasien_salaam/" target="_blank"><i class="fa-brands fa-instagram px-2.5 py-2 rounded-full"></i></a>
          <a href="https://www.linkedin.com/in/yaasien-salaam/" target="_blank"><i class="fa-brands fa-linkedin-in px-2.5 py-2 rounded-full"></i></a>
          </div>
        <p class="text-sm mt-6">© 2022 Yaasien Salaam. All rights reserved</p>
      </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer{
    font-family: 'Cabin', sans-serif;
    font-weight: lighter;
    background: #1B383A;
    padding: 25px;
    text-transform: uppercase;
    color: #F5F3EE;

    i{
        border: 2px solid rgba($color: #F5F3EE, $alpha: .5);
        transition: .3s ease all;

        &:hover{
            border: 2px solid rgba($color: #F5F3EE, $alpha: 1.0);
            transition: .3s ease all;
        }
    }
}
</style>