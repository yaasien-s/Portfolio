<template>
  <div class="resume py-12 space-y-5">
    <h2 class="font-light uppercase opacity-50 pt-12 text-md font-extrabold">resume</h2>
    <h1 class="font-bold uppercase text-4xl">Resume</h1>

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
  .resume {
    height: 100vh;
    .grid {
      margin-left: 3.5%;
    }

    h1 {
      font-family: 'Poppins', sans-serif;
      margin-left: 6.7%;
    }

    h2 {
      font-family: 'Poppins', sans-serif;
      margin-left: 7%;
    }

    p {
      font-family: 'Cabin', sans-serif;
      margin-left: 7%;
    }
  }
</style>