<template>
  <div class="contact mt-32 ml-16 md:ml-24">
      <div class="space-y-12 C-text place-items-center align-middle text-left text-lg tracking-wider leading-snug">
          <h2 class="text-4xl uppercase pt-12 font-bold">Say Hello.</h2>
          <p class="sm:w-8/12 md:w-6/12">Whether you just want to give me a shout or looking to start a project, feel free to email me & I'll be in touch.
</p>
          <br><br>
          <span style="color: #E1895D;" class="text-md font-bold">Email:</span>
          <a href="mailto:yaasiensalaam@gmail.com"><p class="mb-20 mt-6"><i class="fa-solid fa-at"></i> yaasiensalaam@gmail.com</p></a>
      </div>

  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>

.contact{
    @media (min-height:710px) {
        height: 68.6vh;

    }
    span{
        font-family: 'Open Sans', sans-serif;
    }

    h2{
        font-family: 'Nunito', sans-serif;
        color: #1B383A;
    }

    p{
        font-family: 'Open Sans', sans-serif;
    }
    a{
        color: #1B383A;
        transition: .3s ease all;

        &:hover{
            color: #E1895D;
            transition: .3s ease all;
        }
    }
}

</style>