<template>
    <div class="home">
        <div class="landing"></div>
        <h1 class="mb-6 leading-tight text-5xl font-extrabold text-white uppercase"><span
                class="font-extralight text-4xl">Hi. I am</span>
            {{ name }}
            {{ name2 }}
            <br>
            <span class="font-extralight text-4xl">Junior Software Developer, UI UX Designer</span></h1>
            <br>
            <router-link :to="{ name: 'About' }"><button class="absolute py-3 px-6 text-white">Find out more</button></router-link>
    </div>
    <div class="home-2 text-black">
        <h1 class="text-left text-4xl font-light uppercase">Projects</h1>

        <div class="projects w-10/12 grid grid-flow-col gap-6 relative place-items-center my-12 mx-auto">
            <div class="first space-y-6">
                <div class="one bg-black w-96 h-96">
                 <p class="text-3xl text-center text-white">Project</p>
                </div>
                <div class="two bg-black w-96 h-96">
                 <p class="text-3xl text-center text-white">Project</p>
                </div>
            </div>
            <div class="second space-y-6">
                <div class="three bg-black w-96 h-96">
                 <p class="text-3xl text-center text-white">Project</p>
                </div>
                <div class="four bg-black w-96 h-96">
                 <p class="text-3xl text-center text-white">Project</p>
                </div>
            </div>
        </div>

            <h1 class="text-left text-4xl uppercase font-light -my-5">get in touch</h1>
            <hr>
            <p>If you are looking for a designer/developer, <br> or just looking to collab, feel free to send me a message.</p>
            <router-link :to="{ name: 'Contact' }"><button class="py-3 px-7 mb-8 text-white my-5">Send a message</button></router-link>
            
    </div>
</template>

<script setup>
    import {
        computed,
        ref
    } from 'vue'
    import {
        useStore
    } from 'vuex'
    const store = useStore()
    // import {
    //     useRouter
    // } from 'vue-router'
    // const router = useRouter()

    const name = computed(() => {
        return store.state.user.name
    })
    const name2 = computed(() => {
        return store.state.user.name2
    })

    const newName = ref('')

    function saveName() {
        store.dispatch('saveName', newName.value)

        newName.value = ''
        // router.push('/about')
    }

    const newSurname = ref('')

    function saveSurname() {
        store.dispatch('saveSurname', newSurname.value)

        newSurname.value = ''
        router.push('/about')
    }
</script>

<style lang="scss" scoped>
    @mixin for-size($size) {
        @if $size==phone-only {
            @media (max-width: 599px) {
                @content;
            }
        }

        @else if $size==tablet-portrait-up {
            @media (min-width: 600px) {
                @content;
            }
        }

        @else if $size==tablet-landscape-up {
            @media (min-width: 900px) {
                @content;
            }
        }

        @else if $size==desktop-up {
            @media (min-width: 1200px) {
                @content;
            }
        }

        @else if $size==big-desktop-up {
            @media (min-width: 1800px) {
                @content;
            }
        }
    }

    .home {
                    img{
                width: 100vw;
                height: 100vh;
                z-index: 1000;
            }

        .landing {
            background-image: url('../assets/images/portbg.png');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            background-repeat: no-repeat;
            object-fit: cover;
            height: 100vh;
            mix-blend-mode: overlay;

            @include for-size(phone-only) {
                background-position: left;
            }
        }

        h1 {
            position: absolute;
            left: 7%;
            top: 40%;
            font-family: 'Poppins', sans-serif;

            span {
                font-weight: thin;
                font-family: 'Poppins', sans-serif;

                @include for-size(phone-only) {
                    font-size: 1.5rem;
                }

            }

            @include for-size(phone-only) {
                font-size: 2rem;
                background-position: left;
            }

        }

        button{
            left: 7%;
            top: 60%;
            font-family: 'cabin', sans-serif;
            background: rgba($color: #195670, $alpha: 1.0);
            transition: .3s ease all;

            &:hover{
                background: #134155;
                transition: .3s ease all;
            }
        }


    }

    .home-2 {
        position: relative;
        background-color: #ffffff;
        // height: 100vh;
        // z-index: 50;

        button{
            background-color: #195670;
            margin-left: 7%;
            font-family: 'Cabin', sans-serif;
            transition: .2s ease all;

            &:hover{
                background-color: #134155;
                transition: .2s ease all;
            }
        }

        .projects {
            display: grid;

            @include for-size(phone-only) {
                display: grid;
            }

             @include for-size(phone-only) {
                    display: grid;
                    grid: none;
                    margin-left: 23px;
                }
        }

        h1 {
            // position: relative;
            padding: 4% 7%;
            font-family: 'Poppins', sans-serif;

            @include for-size(phone-only) {
                font-size: 1.5rem;
            }
        }

        p {
            margin-inline: auto;
            width: 86%;
            font-family: 'Cabin', sans-serif;

        }

        hr{
            border: 2px solid black;
            width: 100px;
            margin-left: 7%;
            margin-bottom: 2%;
        }

    }
</style>