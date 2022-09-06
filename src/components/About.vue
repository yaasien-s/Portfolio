<template>
  <div class="about py-20 space-y-5">
    <h2 class="uppercase pt-12 text-md font-bold" style="color:#1B383A;
    opacity: 75%;">{{ name }}
      {{ name2 }}</h2>
    <h1 class=" uppercase font-bold text-4xl" style="color:#1B383A;">about me</h1>
    <div class="grid grid-cols-2 gap-6">
      <div class="desc">
        <p class="text-left text-lg font-extra-light space-y-6">I'm Yaasien, a creative yet structured
          developer/designer based in Cape Town. My field of
          expertise lie in Web Development and UI/UX Designing. I have worked on a few projects using my skills to
          produce
          Wireframes, Mockup Design, Web Design/Development, and Software Development. I enjoy solving problems,
          learning new skills,
          and breaking code to see how everything runs.
          <br><br>
          I have knowledge with various languages and framworks, such as HTML, CSS, JavaScript, Vue, Bootstrap, etc to
          build my
          websites and applications. I have knowledge with Adobe Creative Suite for UI Design projects. Currently
          I am learning how to use and understand Adobe Premiere for video editing, and Spline for 3D designing.
          <br><br>
          Other than work, I enjoy gaming, streaming, photography, martial arts and learning new things, and recently discovering a small hobby of 3D designing.
        </p>
        <hr class="my-4">
        <div class="grid grid-cols-2">
          <div>
            <p class="font-extrabold"><span style="color: #1B383A;
            opacity: 75%;">D.O.B:</span> <br><span class="font-light">11
                May 2001</span></p>
          </div>
          <div>
            <p class="font-extrabold"><span style="color: #1B383A;
            opacity: 75%;">Location:</span> <br><span
                class="font-light">Cape Town, South Africa</span></p>
          </div>
        </div>
        <br>
        <p><a href="https://docs.google.com/document/d/1T8YQVrsKe5R1IgvDqwaSvlEj7YtPNfvLB1QrzUdD8fY/edit?usp=sharing" target="_blank"><button class="px-5 py-2.5 text-white">Download CV</button></a></p>
      </div>
      <div class="image">
        <img class="mx-auto duration-500 w-7.5/12 -mt-6" src="../assets/images/Me.png" alt="">
      </div>
    </div>

    <div class="testimonials space-y-12">
      <h2 class="text-4xl uppercase mt-20 font-bold">Testimonials</h2>
      <div class="gap-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div class="test1 place-content-center">
          <p class="text-left ">

            <span class="absolute right-6 space-y-5">
              <a href="https://portfoliov6-547e2.web.app/" target="_blank">
                <svg class="fill-white hover:fill-black duration-300" width="30" height="30" viewBox="0 0 20 20"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.41 6.64013C19.41 6.64013 19.41 6.64013 19.41 6.59013C18.7053 4.66635 17.4269 3.00541 15.7474 1.83199C14.068 0.658569 12.0687 0.0292969 10.02 0.0292969C7.9712 0.0292969 5.97189 0.658569 4.29246 1.83199C2.61304 3.00541 1.33455 4.66635 0.629951 6.59013C0.629951 6.59013 0.629951 6.59013 0.629951 6.64013C-0.156924 8.81102 -0.156924 11.1892 0.629951 13.3601C0.629951 13.3601 0.629951 13.3601 0.629951 13.4101C1.33455 15.3339 2.61304 16.9948 4.29246 18.1683C5.97189 19.3417 7.9712 19.971 10.02 19.971C12.0687 19.971 14.068 19.3417 15.7474 18.1683C17.4269 16.9948 18.7053 15.3339 19.41 13.4101C19.41 13.4101 19.41 13.4101 19.41 13.3601C20.1968 11.1892 20.1968 8.81102 19.41 6.64013ZM2.25995 12.0001C1.91318 10.6893 1.91318 9.31091 2.25995 8.00013H4.11995C3.95998 9.32866 3.95998 10.6716 4.11995 12.0001H2.25995ZM3.07995 14.0001H4.47995C4.71467 14.892 5.05016 15.7542 5.47995 16.5701C4.49925 15.9021 3.67945 15.0242 3.07995 14.0001ZM4.47995 6.00013H3.07995C3.67082 4.97921 4.48014 4.10159 5.44995 3.43013C5.03051 4.24737 4.70509 5.10954 4.47995 6.00013ZM8.99995 17.7001C7.77172 16.7988 6.9091 15.4854 6.56995 14.0001H8.99995V17.7001ZM8.99995 12.0001H6.13995C5.95334 10.6733 5.95334 9.32693 6.13995 8.00013H8.99995V12.0001ZM8.99995 6.00013H6.56995C6.9091 4.51489 7.77172 3.20144 8.99995 2.30013V6.00013ZM16.92 6.00013H15.52C15.2852 5.10828 14.9497 4.24606 14.52 3.43013C15.5007 4.0982 16.3205 4.97607 16.92 6.00013ZM11 2.30013C12.2282 3.20144 13.0908 4.51489 13.43 6.00013H11V2.30013ZM11 17.7001V14.0001H13.43C13.0908 15.4854 12.2282 16.7988 11 17.7001ZM13.86 12.0001H11V8.00013H13.86C14.0466 9.32693 14.0466 10.6733 13.86 12.0001ZM14.55 16.5701C14.9797 15.7542 15.3152 14.892 15.55 14.0001H16.95C16.3505 15.0242 15.5307 15.9021 14.55 16.5701ZM17.74 12.0001H15.88C15.9613 11.3366 16.0014 10.6686 16 10.0001C16.0011 9.33163 15.961 8.6637 15.88 8.00013H17.74C18.0867 9.31091 18.0867 10.6893 17.74 12.0001Z" />
                </svg>
              </a>

            </span>
            <span class="text-3xl font-extrabold tracking-wider" style="color: #E1895D;">Abdul-Muhaymien Salaam</span>
            <br>
            <span class="my-6">
              Yaasien has a unique way of solving complex problems that others tend to miss. That ability
              sets him apart from other developers. He will work tireslessly to produce the best he possibly can and is
              always looking to improve himself and learn more.
            </span>
            <br>
            <span class="text-base font-bold tracking-widest" style="color: #E1895D;">Junior Software Developer</span>
          </p>
        </div>
        <div class="test2 place-content-center">
          <p class="text-left ">

            <span class="absolute right-6 space-y-5">
              <a href="https://www.alexsexwale.com/" target="_blank">
                <svg class="fill-white hover:fill-black duration-300" width="30" height="30" viewBox="0 0 20 20"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.41 6.64013C19.41 6.64013 19.41 6.64013 19.41 6.59013C18.7053 4.66635 17.4269 3.00541 15.7474 1.83199C14.068 0.658569 12.0687 0.0292969 10.02 0.0292969C7.9712 0.0292969 5.97189 0.658569 4.29246 1.83199C2.61304 3.00541 1.33455 4.66635 0.629951 6.59013C0.629951 6.59013 0.629951 6.59013 0.629951 6.64013C-0.156924 8.81102 -0.156924 11.1892 0.629951 13.3601C0.629951 13.3601 0.629951 13.3601 0.629951 13.4101C1.33455 15.3339 2.61304 16.9948 4.29246 18.1683C5.97189 19.3417 7.9712 19.971 10.02 19.971C12.0687 19.971 14.068 19.3417 15.7474 18.1683C17.4269 16.9948 18.7053 15.3339 19.41 13.4101C19.41 13.4101 19.41 13.4101 19.41 13.3601C20.1968 11.1892 20.1968 8.81102 19.41 6.64013ZM2.25995 12.0001C1.91318 10.6893 1.91318 9.31091 2.25995 8.00013H4.11995C3.95998 9.32866 3.95998 10.6716 4.11995 12.0001H2.25995ZM3.07995 14.0001H4.47995C4.71467 14.892 5.05016 15.7542 5.47995 16.5701C4.49925 15.9021 3.67945 15.0242 3.07995 14.0001ZM4.47995 6.00013H3.07995C3.67082 4.97921 4.48014 4.10159 5.44995 3.43013C5.03051 4.24737 4.70509 5.10954 4.47995 6.00013ZM8.99995 17.7001C7.77172 16.7988 6.9091 15.4854 6.56995 14.0001H8.99995V17.7001ZM8.99995 12.0001H6.13995C5.95334 10.6733 5.95334 9.32693 6.13995 8.00013H8.99995V12.0001ZM8.99995 6.00013H6.56995C6.9091 4.51489 7.77172 3.20144 8.99995 2.30013V6.00013ZM16.92 6.00013H15.52C15.2852 5.10828 14.9497 4.24606 14.52 3.43013C15.5007 4.0982 16.3205 4.97607 16.92 6.00013ZM11 2.30013C12.2282 3.20144 13.0908 4.51489 13.43 6.00013H11V2.30013ZM11 17.7001V14.0001H13.43C13.0908 15.4854 12.2282 16.7988 11 17.7001ZM13.86 12.0001H11V8.00013H13.86C14.0466 9.32693 14.0466 10.6733 13.86 12.0001ZM14.55 16.5701C14.9797 15.7542 15.3152 14.892 15.55 14.0001H16.95C16.3505 15.0242 15.5307 15.9021 14.55 16.5701ZM17.74 12.0001H15.88C15.9613 11.3366 16.0014 10.6686 16 10.0001C16.0011 9.33163 15.961 8.6637 15.88 8.00013H17.74C18.0867 9.31091 18.0867 10.6893 17.74 12.0001Z" />
                </svg>
              </a>

            </span>
            <span class="text-3xl font-extrabold tracking-wider" style="color: #E1895D;">Alex Sexwale</span>
            <br>
            <span class="my-6">
              Yaasien is committed to helping others as well as producing quality work. He thrives to always doing his
              best.
            </span>
            <br>
            <span class="text-base font-bold tracking-widest" style="color: #E1895D;">Senior Software Developer</span>
          </p>
        </div>
        <div class="test3 place-content-center">
          <p class="text-left ">

            <span class="absolute right-6 space-y-5">
              <a href="https://dev-p0rtf0li01.pantheonsite.io/" target="_blank">
                <svg class="fill-white hover:fill-black duration-300" width="30" height="30" viewBox="0 0 20 20"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.41 6.64013C19.41 6.64013 19.41 6.64013 19.41 6.59013C18.7053 4.66635 17.4269 3.00541 15.7474 1.83199C14.068 0.658569 12.0687 0.0292969 10.02 0.0292969C7.9712 0.0292969 5.97189 0.658569 4.29246 1.83199C2.61304 3.00541 1.33455 4.66635 0.629951 6.59013C0.629951 6.59013 0.629951 6.59013 0.629951 6.64013C-0.156924 8.81102 -0.156924 11.1892 0.629951 13.3601C0.629951 13.3601 0.629951 13.3601 0.629951 13.4101C1.33455 15.3339 2.61304 16.9948 4.29246 18.1683C5.97189 19.3417 7.9712 19.971 10.02 19.971C12.0687 19.971 14.068 19.3417 15.7474 18.1683C17.4269 16.9948 18.7053 15.3339 19.41 13.4101C19.41 13.4101 19.41 13.4101 19.41 13.3601C20.1968 11.1892 20.1968 8.81102 19.41 6.64013ZM2.25995 12.0001C1.91318 10.6893 1.91318 9.31091 2.25995 8.00013H4.11995C3.95998 9.32866 3.95998 10.6716 4.11995 12.0001H2.25995ZM3.07995 14.0001H4.47995C4.71467 14.892 5.05016 15.7542 5.47995 16.5701C4.49925 15.9021 3.67945 15.0242 3.07995 14.0001ZM4.47995 6.00013H3.07995C3.67082 4.97921 4.48014 4.10159 5.44995 3.43013C5.03051 4.24737 4.70509 5.10954 4.47995 6.00013ZM8.99995 17.7001C7.77172 16.7988 6.9091 15.4854 6.56995 14.0001H8.99995V17.7001ZM8.99995 12.0001H6.13995C5.95334 10.6733 5.95334 9.32693 6.13995 8.00013H8.99995V12.0001ZM8.99995 6.00013H6.56995C6.9091 4.51489 7.77172 3.20144 8.99995 2.30013V6.00013ZM16.92 6.00013H15.52C15.2852 5.10828 14.9497 4.24606 14.52 3.43013C15.5007 4.0982 16.3205 4.97607 16.92 6.00013ZM11 2.30013C12.2282 3.20144 13.0908 4.51489 13.43 6.00013H11V2.30013ZM11 17.7001V14.0001H13.43C13.0908 15.4854 12.2282 16.7988 11 17.7001ZM13.86 12.0001H11V8.00013H13.86C14.0466 9.32693 14.0466 10.6733 13.86 12.0001ZM14.55 16.5701C14.9797 15.7542 15.3152 14.892 15.55 14.0001H16.95C16.3505 15.0242 15.5307 15.9021 14.55 16.5701ZM17.74 12.0001H15.88C15.9613 11.3366 16.0014 10.6686 16 10.0001C16.0011 9.33163 15.961 8.6637 15.88 8.00013H17.74C18.0867 9.31091 18.0867 10.6893 17.74 12.0001Z" />
                </svg>
              </a>

            </span>
            <span class="text-3xl font-extrabold tracking-wider" style="color: #E1895D;">Cameron Bowers</span>
            <br>
            <span class="my-6">
              Yaasien is committed to helping others as well as producing quality work. He thrives to always doing his best.
            </span>
            <br>
            <span class="text-base font-bold tracking-widest" style="color: #E1895D;">Aspiring Software Developer</span>
          </p>
        </div>
        <div class="test4 place-content-center">
          <p class="text-left ">

            <span class="absolute right-6 space-y-5">
              <a href="https://dev-ddkportfolio.pantheonsite.io/" target="_blank">
                <svg class="fill-white hover:fill-black duration-300" width="30" height="30" viewBox="0 0 20 20"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.41 6.64013C19.41 6.64013 19.41 6.64013 19.41 6.59013C18.7053 4.66635 17.4269 3.00541 15.7474 1.83199C14.068 0.658569 12.0687 0.0292969 10.02 0.0292969C7.9712 0.0292969 5.97189 0.658569 4.29246 1.83199C2.61304 3.00541 1.33455 4.66635 0.629951 6.59013C0.629951 6.59013 0.629951 6.59013 0.629951 6.64013C-0.156924 8.81102 -0.156924 11.1892 0.629951 13.3601C0.629951 13.3601 0.629951 13.3601 0.629951 13.4101C1.33455 15.3339 2.61304 16.9948 4.29246 18.1683C5.97189 19.3417 7.9712 19.971 10.02 19.971C12.0687 19.971 14.068 19.3417 15.7474 18.1683C17.4269 16.9948 18.7053 15.3339 19.41 13.4101C19.41 13.4101 19.41 13.4101 19.41 13.3601C20.1968 11.1892 20.1968 8.81102 19.41 6.64013ZM2.25995 12.0001C1.91318 10.6893 1.91318 9.31091 2.25995 8.00013H4.11995C3.95998 9.32866 3.95998 10.6716 4.11995 12.0001H2.25995ZM3.07995 14.0001H4.47995C4.71467 14.892 5.05016 15.7542 5.47995 16.5701C4.49925 15.9021 3.67945 15.0242 3.07995 14.0001ZM4.47995 6.00013H3.07995C3.67082 4.97921 4.48014 4.10159 5.44995 3.43013C5.03051 4.24737 4.70509 5.10954 4.47995 6.00013ZM8.99995 17.7001C7.77172 16.7988 6.9091 15.4854 6.56995 14.0001H8.99995V17.7001ZM8.99995 12.0001H6.13995C5.95334 10.6733 5.95334 9.32693 6.13995 8.00013H8.99995V12.0001ZM8.99995 6.00013H6.56995C6.9091 4.51489 7.77172 3.20144 8.99995 2.30013V6.00013ZM16.92 6.00013H15.52C15.2852 5.10828 14.9497 4.24606 14.52 3.43013C15.5007 4.0982 16.3205 4.97607 16.92 6.00013ZM11 2.30013C12.2282 3.20144 13.0908 4.51489 13.43 6.00013H11V2.30013ZM11 17.7001V14.0001H13.43C13.0908 15.4854 12.2282 16.7988 11 17.7001ZM13.86 12.0001H11V8.00013H13.86C14.0466 9.32693 14.0466 10.6733 13.86 12.0001ZM14.55 16.5701C14.9797 15.7542 15.3152 14.892 15.55 14.0001H16.95C16.3505 15.0242 15.5307 15.9021 14.55 16.5701ZM17.74 12.0001H15.88C15.9613 11.3366 16.0014 10.6686 16 10.0001C16.0011 9.33163 15.961 8.6637 15.88 8.00013H17.74C18.0867 9.31091 18.0867 10.6893 17.74 12.0001Z" />
                </svg>
              </a>

            </span>
            <span class="text-3xl font-extrabold tracking-wider" style="color: #E1895D;">Dale De Kock</span>
            <br>
            <span class="my-6">
              Yaasien works with speed, still producing extremely high quality work. He then turns his attention to helping others. A fantastic addition to any team.
            </span>
            <br>
            <span class="text-base font-bold tracking-widest" style="color: #E1895D;">Writer, Aspiring UI/UX Designer</span>
          </p>
        </div>
        <!-- <div class="test5 place-content-center">
          <p class="text-left ">

            <span class="absolute right-6 space-y-5">
              <a href="">
                <svg class="fill-white hover:fill-black duration-300" width="30" height="30" viewBox="0 0 20 20"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.41 6.64013C19.41 6.64013 19.41 6.64013 19.41 6.59013C18.7053 4.66635 17.4269 3.00541 15.7474 1.83199C14.068 0.658569 12.0687 0.0292969 10.02 0.0292969C7.9712 0.0292969 5.97189 0.658569 4.29246 1.83199C2.61304 3.00541 1.33455 4.66635 0.629951 6.59013C0.629951 6.59013 0.629951 6.59013 0.629951 6.64013C-0.156924 8.81102 -0.156924 11.1892 0.629951 13.3601C0.629951 13.3601 0.629951 13.3601 0.629951 13.4101C1.33455 15.3339 2.61304 16.9948 4.29246 18.1683C5.97189 19.3417 7.9712 19.971 10.02 19.971C12.0687 19.971 14.068 19.3417 15.7474 18.1683C17.4269 16.9948 18.7053 15.3339 19.41 13.4101C19.41 13.4101 19.41 13.4101 19.41 13.3601C20.1968 11.1892 20.1968 8.81102 19.41 6.64013ZM2.25995 12.0001C1.91318 10.6893 1.91318 9.31091 2.25995 8.00013H4.11995C3.95998 9.32866 3.95998 10.6716 4.11995 12.0001H2.25995ZM3.07995 14.0001H4.47995C4.71467 14.892 5.05016 15.7542 5.47995 16.5701C4.49925 15.9021 3.67945 15.0242 3.07995 14.0001ZM4.47995 6.00013H3.07995C3.67082 4.97921 4.48014 4.10159 5.44995 3.43013C5.03051 4.24737 4.70509 5.10954 4.47995 6.00013ZM8.99995 17.7001C7.77172 16.7988 6.9091 15.4854 6.56995 14.0001H8.99995V17.7001ZM8.99995 12.0001H6.13995C5.95334 10.6733 5.95334 9.32693 6.13995 8.00013H8.99995V12.0001ZM8.99995 6.00013H6.56995C6.9091 4.51489 7.77172 3.20144 8.99995 2.30013V6.00013ZM16.92 6.00013H15.52C15.2852 5.10828 14.9497 4.24606 14.52 3.43013C15.5007 4.0982 16.3205 4.97607 16.92 6.00013ZM11 2.30013C12.2282 3.20144 13.0908 4.51489 13.43 6.00013H11V2.30013ZM11 17.7001V14.0001H13.43C13.0908 15.4854 12.2282 16.7988 11 17.7001ZM13.86 12.0001H11V8.00013H13.86C14.0466 9.32693 14.0466 10.6733 13.86 12.0001ZM14.55 16.5701C14.9797 15.7542 15.3152 14.892 15.55 14.0001H16.95C16.3505 15.0242 15.5307 15.9021 14.55 16.5701ZM17.74 12.0001H15.88C15.9613 11.3366 16.0014 10.6686 16 10.0001C16.0011 9.33163 15.961 8.6637 15.88 8.00013H17.74C18.0867 9.31091 18.0867 10.6893 17.74 12.0001Z" />
                </svg>
              </a>

            </span>
            <span class="text-3xl font-extrabold tracking-wider text-black">Tursha Arendse</span>
            <br>
            <span class="my-6">
              Yaasien is a very hard-working and determined individual who strives on only delivering he's best work!
            </span>
            <br>
            <span class="text-base font-bold tracking-widest text-black">Aspiring UI/UX Designer</span>
          </p>
        </div> -->
        <!-- <div class="test6 place-content-center">
          <p class="text-left">

            <span class="absolute right-6 space-y-5">
              <a href="">
                <svg class="fill-white hover:fill-black duration-300" width="30" height="30" viewBox="0 0 20 20"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.41 6.64013C19.41 6.64013 19.41 6.64013 19.41 6.59013C18.7053 4.66635 17.4269 3.00541 15.7474 1.83199C14.068 0.658569 12.0687 0.0292969 10.02 0.0292969C7.9712 0.0292969 5.97189 0.658569 4.29246 1.83199C2.61304 3.00541 1.33455 4.66635 0.629951 6.59013C0.629951 6.59013 0.629951 6.59013 0.629951 6.64013C-0.156924 8.81102 -0.156924 11.1892 0.629951 13.3601C0.629951 13.3601 0.629951 13.3601 0.629951 13.4101C1.33455 15.3339 2.61304 16.9948 4.29246 18.1683C5.97189 19.3417 7.9712 19.971 10.02 19.971C12.0687 19.971 14.068 19.3417 15.7474 18.1683C17.4269 16.9948 18.7053 15.3339 19.41 13.4101C19.41 13.4101 19.41 13.4101 19.41 13.3601C20.1968 11.1892 20.1968 8.81102 19.41 6.64013ZM2.25995 12.0001C1.91318 10.6893 1.91318 9.31091 2.25995 8.00013H4.11995C3.95998 9.32866 3.95998 10.6716 4.11995 12.0001H2.25995ZM3.07995 14.0001H4.47995C4.71467 14.892 5.05016 15.7542 5.47995 16.5701C4.49925 15.9021 3.67945 15.0242 3.07995 14.0001ZM4.47995 6.00013H3.07995C3.67082 4.97921 4.48014 4.10159 5.44995 3.43013C5.03051 4.24737 4.70509 5.10954 4.47995 6.00013ZM8.99995 17.7001C7.77172 16.7988 6.9091 15.4854 6.56995 14.0001H8.99995V17.7001ZM8.99995 12.0001H6.13995C5.95334 10.6733 5.95334 9.32693 6.13995 8.00013H8.99995V12.0001ZM8.99995 6.00013H6.56995C6.9091 4.51489 7.77172 3.20144 8.99995 2.30013V6.00013ZM16.92 6.00013H15.52C15.2852 5.10828 14.9497 4.24606 14.52 3.43013C15.5007 4.0982 16.3205 4.97607 16.92 6.00013ZM11 2.30013C12.2282 3.20144 13.0908 4.51489 13.43 6.00013H11V2.30013ZM11 17.7001V14.0001H13.43C13.0908 15.4854 12.2282 16.7988 11 17.7001ZM13.86 12.0001H11V8.00013H13.86C14.0466 9.32693 14.0466 10.6733 13.86 12.0001ZM14.55 16.5701C14.9797 15.7542 15.3152 14.892 15.55 14.0001H16.95C16.3505 15.0242 15.5307 15.9021 14.55 16.5701ZM17.74 12.0001H15.88C15.9613 11.3366 16.0014 10.6686 16 10.0001C16.0011 9.33163 15.961 8.6637 15.88 8.00013H17.74C18.0867 9.31091 18.0867 10.6893 17.74 12.0001Z" />
                </svg>
              </a>

            </span>
            <span class="text-3xl font-extrabold tracking-wider text-black">Yaaseen Davids</span>
            <br>
            <span>
              Yaasien is an amazing developer and is always willing to help the next person when needed
            </span>
            <br>
            <span class="text-base font-bold tracking-widest text-black">Assistant Lecturer, Aspiring Software developer</span>
          </p>
        </div> -->
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
  .about {
    height: 100%;

    @media (max-width:600px) {
      height: 100%;
    }

    .grid {
      margin-left: 3.6%;
      @media (max-width:1000px) {
        grid: none;
        margin-left: 0;
        width: 95%;
      }

      .desc {
        .grid {
          @media (max-width:1000px) {
            grid-auto-flow: column;
            margin-left: 3.5%;
          }
        }

      }
        button{
          background-color: #E1895D;
          transition: .3s ease all;
          border-radius: 10px;
          &:hover{
            transition: .3s ease all;
            background-color: #dd682d !important;
          }
        }


      .image {
        @media (max-width:1000px) {
          display: none;
        }
      }

      hr {
        border: 2px solid black;
        width: 100px;
        margin-left: 7.3%;
      }

    }

    h1 {
      font-family: 'Nunito', sans-serif;
      margin-left: 7%;
    }

    h2 {
      font-family: 'Nunito', sans-serif;
      margin-left: 7%;
      color: rgba($color: #1B383A, $alpha: 1);
    }

    p {
      font-family: 'Open Sans', sans-serif;
      margin-left: 7%;
    }

    .testimonials {
      .grid {
        margin-inline: auto;
        width: 85.7%;

        .test1 {
          background-image: url(../assets/images/testimonial/Abdul.jpg);
          border-radius: 20px;
          background-position: top;
          background-size: cover;
          background-repeat: no-repeat;
          transition: .3s ease all;
          width: fit-content;
          height: 300px;

          &:hover {
            transition: .3s ease all;
          }

          p {
            padding: 100px;
            opacity: 0;
            transition: .3s ease all;
            font-family: 'Cabin', sans-serif;
          }

          &,
          p {
            position: relative;
            color: rgba($color: #F5F3EE, $alpha: 1);
          }

          &:hover p {
            padding: 15px 80px 0 20px;
            border-radius: 20px;
            opacity: 1;
            transition: .3s ease all;
            background: rgba($color: #1B383A, $alpha: .85);
            width: fit-content;
            margin-inline: auto;
            height: 300px;
          }

          .absolute {
            top: 45%;
          }
        }

        .test2 {
          background-image: url(../assets/images/testimonial/Alex.jpg);
          border-radius: 20px;
          background-position: top;
          background-size: cover;
          background-repeat: no-repeat;
          transition: .3s ease all;
          width: fit-content;
          height: 300px;

          &:hover {
            transition: .3s ease all;
          }

          p {
            padding: 100px;
            opacity: 0;
            transition: .3s ease all;
            font-family: 'Cabin', sans-serif;
          }

          &,
          p {
            position: relative;
            color: rgba($color: #F5F3EE, $alpha: 1);
          }

          &:hover p {
            padding: 15px 80px 0 20px;
            border-radius: 20px;
            opacity: 1;
            transition: .3s ease all;
            background: rgba($color: #1B383A, $alpha: .85);
            width: fit-content;
            margin-inline: auto;
            height: 300px;
          }

          .absolute {
            top: 45%;
          }
        }

        .test3 {
          background-image: url(../assets/images/testimonial/Cameron.jpg);
          border-radius: 20px;
          background-position: top;
          background-size: cover;
          background-repeat: no-repeat;
          transition: .3s ease all;
          width: fit-content;
          height: 300px;

          &:hover {
            transition: .3s ease all;
          }

          p {
            padding: 100px;
            opacity: 0;
            transition: .3s ease all;
            font-family: 'Cabin', sans-serif;
          }

          &,
          p {
            position: relative;
            color: rgba($color: #F5F3EE, $alpha: 1);
          }

          &:hover p {
            padding: 15px 80px 0 20px;
            border-radius: 20px;
            opacity: 1;
            transition: .3s ease all;
            background: rgba($color: #1B383A, $alpha: .85);
            width: fit-content;
            margin-inline: auto;
            height: 300px;
          }

          .absolute {
            top: 45%;
          }
        }

        .test4 {
          background-image: url(../assets/images/testimonial/Dale.jpg);
          border-radius: 20px;
          background-position: top;
          background-size: cover;
          background-repeat: no-repeat;
          transition: .3s ease all;
          width: fit-content;
          height: 300px;

          &:hover {
            transition: .3s ease all;
          }

          p {
            padding: 100px;
            opacity: 0;
            transition: .3s ease all;
            font-family: 'Cabin', sans-serif;
          }

          &,
          p {
            position: relative;
            color: rgba($color: #F5F3EE, $alpha: 1);
          }

          &:hover p {
            padding: 15px 80px 0 20px;
            border-radius: 20px;
            opacity: 1;
            transition: .3s ease all;
            background: rgba($color: #1B383A, $alpha: .85);
            width: fit-content;
            margin-inline: auto;
            height: 300px;
          }

          .absolute {
            top: 45%;
          }
        }

        .test5 {
          background-image: url(../assets/images/testimonial/Tursha.jpg);
          background-position: top;
          background-size: cover;
          background-repeat: no-repeat;
          transition: .3s ease all;
          width: fit-content;
          height: 300px;

          &:hover {
            transition: .3s ease all;
          }

          p {
            opacity: 0;
            transition: .3s ease all;
            font-family: 'Cabin', sans-serif;
          }

          &,
          p {
            position: relative;
            color: rgba($color: #F5F3EE, $alpha: 1);
          }

          &:hover p {
            padding: 15px 80px 0 20px;
            opacity: 1;
            transition: .3s ease all;
            background: rgba($color: #1B383A, $alpha: .85);
            width: fit-content;
            margin-inline: auto;
            height: 300px;
          }

          .absolute {
            top: 45%;
          }
        }

        .test6 {
          background-image: url(../assets/images/testimonial/Yaaseen.jpg);
          background-position: top;
          background-size: cover;
          background-repeat: no-repeat;
          transition: .3s ease all;
          width: fit-content;
          height: 300px;

          &:hover {
            transition: .3s ease all;
          }

          p {
            opacity: 0;
            transition: .3s ease all;
            font-family: 'Cabin', sans-serif;
          }

          &,
          p {
            position: relative;
            color: rgba($color: #F5F3EE, $alpha: 1);
          }

          &:hover p {
            padding: 15px 80px 0 20px;
            opacity: 1;
            transition: .3s ease all;
            background: rgba($color: #1B383A, $alpha: .85);
            width: fit-content;
            margin-inline: auto;
            height: 300px;
          }

          .absolute {
            top: 45%;
          }
        }

        img {
          height: 300px;
          width: 400px;
          object-fit: cover;
        }
      }
    }

  }
</style>