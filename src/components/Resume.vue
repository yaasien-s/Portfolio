<template>
  <div class="resume py-12 space-y-5">
    <h2 class="font-light uppercase pt-12 text-md font-extrabold">resume</h2>
    <h1 class="font-bold uppercase text-4xl">Resume</h1>
    <div class="resume-details grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-12">
      <div class="col-span-2">
        <span style="color: #195670;" class="font-bold tracking-wider text-xl">National Senior Certificate</span>
        <br>
        <span class="tracking-wider">2015-2019</span>
        <br><br>
        <p class="text-xl">
          In 2019, I matriculated at Darul Arqam Islamic High School which is based in Mitchell's plain, Cape Town. With
          2019 coming to an end I started my own photography
          business, and with that I started my own bakery.
        </p>
        <br><br>
        <span style="color: #195670;" class="font-bold tracking-wider text-xl">Arabica Coffee.Co Cape Town</span>
        <br>
        <span class="tracking-wider">2017-Present</span>
        <br><br>
        <p class="text-xl">
          Arabica Coffee.Co was established in 2017, I started out as an assistant for the barista, dealing with the
          money and helping where i could.
          By the end of 2019, I started working as the barista for the company part-time doing events, weddings, private
          funtions, etc. I've done design work for them as well, such as banners and digital signatures.
        </p>
        <br><br>
        <span style="color: #195670;" class="font-bold tracking-wider text-xl">Seni Silat Cape Town</span>
        <br>
        <span class="tracking-wider">2012-Present</span>
        <br><br>
        <p class="text-xl">
          I started studying martial arts when I was 11, I progressed rapidly and within 4 years I became the assistant instructor.
          Fought in numerous tournaments and won medals and trophies. I started teaching classes and taking private clients on my own in 2020
          teaching kids and adults.
        </p>
        <br><br>
        <span style="color: #195670;" class="font-bold tracking-wider text-xl">LC Studio</span>
        <br>
        <span class="tracking-wider">2021-Present</span>
        <br><br>
        <p class="text-xl">I am currently sitting at LC studio(Life Choices DevOps) building a number of projects with and without teams,
          I've lead teams on certain projects, I've followed on certain projects as well. Right now we are building plugins for the LC Studio website, and I am working my way up as a developer, designer and a freelancer,
          I am also upskilling in Python and 3D design
        </p>
      </div>
      <div>
        <div class="grid grid-cols-2">
          <ul class="space-y-2">
            <span style="color: #195670;" class="text-xl font-bold tracking-wider">Tech Stack</span>
            <br><br>
            <li>HTML</li>
            <li>CSS</li>
            <li>Boostrap</li>
            <li>Javascript</li>
            <li>Vue.JS</li>
            <li>Node.JS</li>
          </ul>
          <ul class="space-y-2">
            <br><br>
            <li>Sass</li>
            <li>TailwindCSS</li>
            <li>Vite</li>
            <li>VueX</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <br><br>
        <span style="color: #195670;" class="font-bold text-xl tracking-wider">Tools</span>
        <br><br>
        <ul class="space-y-2">
          <li>Figma</li>
          <li>Visual Studio Code</li>
          <li>Adobe XD</li>
          <li>Adobe Illustrator</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Premiere</li>
          <li>Spline</li>
        </ul>
      </div>
    </div>

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
    // height: 100vh;

    .resume-details {
      width: 86.4%;
      margin-inline: auto;
      // margin-left: 2.9%;
    }

    h1 {
      font-family: 'Poppins', sans-serif;
      margin-left: 6.7%;
    }

    h2 {
      color: #195670;
      font-family: 'Poppins', sans-serif;
      margin-left: 7%;
    }

    p {
      font-family: 'Cabin', sans-serif;
      margin-left: 7%;
    }
  }
</style>