<template>
  <div class="text-center mb-0 mt-6">
      <footer>
          <div class="space-x-12 text-2xl text-white">
          <i class="fa-brands fa-instagram px-2.5 py-2 rounded-full"></i>
          <i class="fa-brands fa-linkedin-in px-2.5 py-2 rounded-full"></i>
          </div>
        <p class="text-sm mt-6 text-white">© 2022 Yaasien Salaam. All rights reserved</p>
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
    background: #195670;
    padding: 25px;
    text-transform: uppercase;

    i{
        border: 2px solid rgba($color: #ffffff, $alpha: .5);
        transition: .3s ease all;

        &:hover{
            border: 2px solid rgba($color: #ffffff, $alpha: 1.0);
            transition: .3s ease all;
        }
    }
}
</style>