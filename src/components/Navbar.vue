<template>
<div>
    <nav class="rounded-full text-right p-7 pr-24 font-light space-x-12 fixed text-black">
        <router-link :to="{ name: 'Home' }"><svg class="absolute left-14 top-3" width="26" height="46" viewBox="0 0 26 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.968 12.664L12.416 27.224V35H7.936V27.224L0.352 12.664H5.408L10.208 22.872L14.976 12.664H19.968Z" fill="black"/>
<path d="M16.0138 45.7709C14.4564 45.7709 13.0484 45.5042 11.7898 44.9709C10.5524 44.4375 9.57108 43.6695 8.84575 42.6669C8.12042 41.6642 7.74708 40.4802 7.72575 39.1149H12.5258C12.5898 40.0322 12.9098 40.7575 13.4858 41.2909C14.0831 41.8242 14.8938 42.0909 15.9178 42.0909C16.9631 42.0909 17.7844 41.8455 18.3818 41.3549C18.9791 40.8429 19.2778 40.1815 19.2778 39.3709C19.2778 38.7095 19.0751 38.1655 18.6698 37.7389C18.2644 37.3122 17.7524 36.9815 17.1338 36.7469C16.5364 36.4909 15.7044 36.2135 14.6378 35.9149C13.1871 35.4882 12.0031 35.0722 11.0858 34.6669C10.1898 34.2402 9.41108 33.6109 8.74975 32.7789C8.10975 31.9255 7.78975 30.7949 7.78975 29.3869C7.78975 28.0642 8.12042 26.9122 8.78175 25.9309C9.44308 24.9495 10.3711 24.2029 11.5658 23.6909C12.7604 23.1575 14.1258 22.8909 15.6618 22.8909C17.9658 22.8909 19.8324 23.4562 21.2618 24.5869C22.7124 25.6962 23.5124 27.2535 23.6618 29.2589H18.7338C18.6911 28.4909 18.3604 27.8615 17.7418 27.3709C17.1444 26.8589 16.3444 26.6029 15.3418 26.6029C14.4671 26.6029 13.7631 26.8269 13.2298 27.2749C12.7178 27.7229 12.4618 28.3735 12.4618 29.2269C12.4618 29.8242 12.6538 30.3255 13.0378 30.7309C13.4431 31.1149 13.9338 31.4349 14.5098 31.6909C15.1071 31.9255 15.9391 32.2029 17.0058 32.5229C18.4564 32.9495 19.6404 33.3762 20.5578 33.8029C21.4751 34.2295 22.2644 34.8695 22.9258 35.7229C23.5871 36.5762 23.9178 37.6962 23.9178 39.0829C23.9178 40.2775 23.6084 41.3869 22.9897 42.4109C22.3711 43.4349 21.4644 44.2562 20.2698 44.8749C19.0751 45.4722 17.6564 45.7709 16.0138 45.7709Z" fill="black"/>
</svg>
</router-link>
        <router-link :to="{ name: 'Home' }" class="hover:text-black">Home</router-link>
        <router-link :to="{ name: 'About' }" class="hover:text-black">About</router-link>
        <router-link :to="{ name: 'Resume' }" class="hover:text-black">Resume</router-link>
        <router-link :to="{ name: 'Contact' }" class="hover:text-black">Contact</router-link>
    </nav>
<router-view />
</div>
</template>

<script>
export default {

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
nav{
    font-family: 'cabin', sans-serif;
    background-color: rgba($color: #ffffff, $alpha: .75);
    width: 95%;
    z-index: 1000;
    // position: absolute;
    height: 76px;
    left: 40px;
    top: 20px;

                @include for-size(phone-only) {
                left: 11px;
            }

    a{
        border-bottom: 2.5px solid rgba($color: #195670, $alpha: 0);
        transition: .2s ease all;

        @include for-size(phone-only) {
               display: none;
            }

        &:hover{
            transition: .2s ease all;
            border-color: rgba($color: #195670, $alpha: 1.0);
            color: #195670;
        }
    }

    a.router-link-exact-active {
    color: #195670;
    border-color: #195670;
    font-weight: 700;

  }

}
</style>