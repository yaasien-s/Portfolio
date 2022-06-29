<template>
  <div class="contact grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:-space-x-12 pt-14 place-items-center">
      <div class="C-text text-center leading-snug space-y-6">
          <h2 class="text-4xl font-bold pt-12 uppercase">Get in touch</h2>
          <p class="w-8/12 mx-auto">If you’d like to discuss things further. Please fill out the form and I’ll get back to you as soon as possible.
            <br>
          Or contact me directly at:</p>
          <a href=""><p class="mt-6"><i class="fa-solid fa-at"></i> yaasiensalaam@gmail.com</p></a>
      </div>
      <div class="form mt-14 w-9/12 m-4">
          <form action="" class="grid shadow-2xl p-12">
              <label for="name">Fullname</label>
              <input type="text" class="mt-2" required>
              <br>
              <label for="email">Email</label>
              <input type="email" class="mt-2" required>
              <br>
              <label for="contact">Contact No.</label>
              <input type="text" class="mt-2" required>
              <br>
              <label for="message">Message</label>
              <textarea name="" id="" cols="30" rows="5" class="mt-2" required></textarea>
              <br>
              <button class="py-2.5 px-7 w-2/5 text-white">Send</button>
          </form>
      </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>

.contact{

    h1{
        font-family: 'Poppins', sans-serif;
    }

    p{
        font-family: 'cabin', sans-serif;
    }

    form{
        font-family: 'cabin', sans-serif;

        button{
            background-color: #195670;
            transition: .3s ease all;

            &:hover{
                background: #134155;
                transition: .3s ease all;
            }
        }
    }
}

</style>