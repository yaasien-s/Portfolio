<template>
  <div class="text-center mb-0 mt-6">
    <footer>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10 mb-10 text-4xl">
        <div class="1">
          <i class="fa-solid fa-location-dot"></i>
          <h2 class="text-lg mt-6 font-semibold">Where to find me:</h2>
          <p class="text-sm font-extralight normal-case px-10 my-5">Remotely,
            Let's chat some more my contact details are on the right.</p>
        </div>
        <div class="2">
          <i class="fa-solid fa-envelope"></i>
          <h2 class="text-lg mt-6 font-semibold">Email me at:</h2>
          <p class="text-sm font-extralight normal-case px-10 my-5">yaasiensalaam@gmail.com</p>
        </div>
        <div class="3">
          <i class="fa-solid fa-phone"></i>
          <h2 class="text-lg mt-6 font-semibold">Call me at:</h2>
          <p class="text-sm font-extralight normal-case px-10 my-5">Mobile: (+27) 61 505 3706</p>
        </div>
      </div>
      <div class="copyright grid md:grid-cols-2">
        <p class="text-sm mt-3">© 2022 Yaasien Salaam. All rights reserved</p>
        <div class="text-2xl">
          <div class="space-x-12 links">
            <a href="https://www.linkedin.com/in/yaasien-salaam/" target="_blank"><i
                class="fa-brands fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/yaasien_salaam/" target="_blank"><i
                class="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  footer {
    font-weight: lighter;
    background: #1B383A;
    padding: 25px;
    text-transform: uppercase;
    color: #F5F3EE;

    p {
      font-family: 'Open Sans', sans-serif;
    }

    h2 {
      color: #E1895D;
      font-family: 'Nunito', sans-serif;
    }

    .links {
      a {
        color: rgba($color: #ffffff, $alpha: 1.0);
        transition: .3s ease all;

        &:hover {
          color: rgba($color: #E1895D, $alpha: 1.0);
          transition: .3s ease all;
        }
      }
    }
  }
</style>