<template>
  <div class="contact mt-36 ml-16 md:ml-24">
      <div class="space-y-12 C-text place-items-center align-middle text-left text-lg tracking-wider leading-snug">
          <h2 class="text-4xl uppercase pt-12 ">Say Hello!</h2>
          <p class="sm:w8/12 md:w-6/12">Whether you just want to give me a shout or looking to start a project, feel free to email me & I'll be in touch.
            <br>
          Or contact me directly at:</p>
          <br><br>
          <span style="color: #195670;" class="text-sm font-medium">Email:</span>
          <a href="mailto:yaasiensalaam@gmail.com"><p class="mb-16 mt-6"><i class="fa-solid fa-at"></i> yaasiensalaam@gmail.com</p></a>
      </div>

  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>

.contact{
    @media (min-height:710px) {
        height: 90vh;

    }

    h2{
        font-family: 'Poppins', sans-serif;
    }

    p{
        font-family: 'cabin', sans-serif;
    }
}

</style>