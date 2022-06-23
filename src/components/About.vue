<template>
  <div class="about py-12 space-y-5">
      <h2 class="font-light uppercase opacity-50 pt-12 text-md font-extrabold">{{ name }}
        {{ name2 }}</h2>
    <h1 class="font-bold uppercase text-4xl">about me</h1>
    <div class="grid grid-cols-2 space-x-12">
      <div>
        <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <hr class="my-4">
          <div class="grid grid-cols-2">
            <div>
              <p>DOB</p>
              <br>
              <p>Number</p>
            </div>
            <div>
              <p>DOB</p>
              <br>
              <p>Number</p>
            </div>
          </div>
      </div>
        <img class="w-6/12 object-center rounded-full -mt-14" src="../assets/images/Me.png" alt="">
    </div>

      
<h1 class="font-bold uppercase text-4xl pt-12">Location</h1>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.191533266025!2d18.62444311509516!3d-34.01329423400386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc4f5d7f1ebdf9%3A0x6471c64808e4b414!2s8%20Louw%20Way%2C%20Mandalay%2C%20Cape%20Town%2C%207785!5e0!3m2!1sen!2sza!4v1651332653262!5m2!1sen!2sza" class="mx-auto rounded-xl h-80" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

  </div>
</template>

<script setup>
  import {
    computed
  } from 'vue'
  import {
    useStore
  } from 'vuex'

  const store = useStore()

  const name = computed(() => {
    return store.state.user.name
  })

  const name2 = computed(() => {
    return store.state.user.name2
  })
</script>

<style lang="scss" scoped>
  .about {

    .grid{
      margin-left: 3.5%;

      hr{
        border: 2px solid black;
        width: 100px;
        margin-left: 7%;
      }

    }

    h1 {
      font-family: 'Poppins', sans-serif;
      margin-left: 7%;
    }

    h2 {
      font-family: 'Poppins', sans-serif;
      margin-left: 7%;
    }

    p{
      font-family: 'Cabin', sans-serif;
      margin-left: 7%;
    }

    #default-carousel{
      width: 87%;

      img{
        object-fit: cover;
      }
    }

    iframe{
      width: 87%;
    }
  }
</style>