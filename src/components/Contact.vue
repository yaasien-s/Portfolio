<template>
  <div class="contact grid grid-cols-2 gap-4 pt-14">
      <div class="C-text text-center leading-snug space-y-6">
          <h2 class="text-4xl font-bold pt-12 uppercase">Get in touch</h2>
          <p class="w-10/12 mx-auto">If you’d like to discuss things further. Please fill out the form and we’ll get back to you as soon as possible.</p>
          <p>Or contact us directly at:</p>
          <p><i class="fa-solid fa-at"></i> johndoe@gmail.com</p> <p><i class="fa-solid fa-phone"></i> 0123456789</p>
      </div>
      <div class="form mt-14 w-9/12 m-4">
          <form action="" class="grid shadow-2xl p-12 rounded-xl">
              <label for="name">Fullname</label>
              <input type="text" class="rounded-full mt-2" required>
              <br>
              <label for="email">Email</label>
              <input type="email" class="rounded-full mt-2" required>
              <br>
              <label for="contact">Contact No.</label>
              <input type="text" class="rounded-full mt-2" required>
              <br>
              <label for="message">Message</label>
              <textarea name="" id="" cols="30" rows="5" class="rounded-xl mt-2" required></textarea>
              <br>
              <button class="py-2.5 px-7 rounded-full w-2/5 text-white">Send</button>
          </form>
      </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>

.contact{
    height: 100vh;

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
                background: #000;
                transition: .3s ease all;
            }
        }
    }
}

</style>