<template>
  <div class=" flex">

    <!-- Center Page -->
    <div class="flex flex-col max-w-[100%] l lg:max-w-[70%] h-full border-x border-slate-700">

      <!-- Page title -->
      <div class="font-outfit border-b border-slate-700 font-[700] px-10 pt-5 pb-5 text-white font-bold text-2xl capitalize">
        {{ $route.name }}
      </div>

      <section class="w-full h-full px-10 py-2">
        <!--      <!- Genres Bar ->
              <div class="flex w-full">
                <emoji-chip emoji="🍿" text="All" link="/genre/" />
                <emoji-chip emoji="😀" text="Comedy" link="/genre/comedy" />
                <emoji-chip emoji="🦄" text="Fantasy" link="/genre/fantasy" />
                <emoji-chip emoji="😲" text="Thriller" link="/genre/fantasy" class="active-chip" />
                <emoji-chip emoji="👽" text="Sci-Fi" link="/genre/sci-fi" />
              </div>-->

        <div class="flex justify-between items-center">
          <h3 class="font-outfit text-lg mt-2">Premiering Now</h3>
          <router-link to="" class="text-gray-400 text-sm mt-2">See all →</router-link>
        </div>

        <!-- Featured Movies -->
        <div class="flex flex w-full w-full my-3 relative">

          <!--        <div class="hidden w-[90%] aspect-video h-fit">
                    <video controls class="w-full h-full rounded-2xl object-cover">
                      <source :src=vidLink >
                    </video>
                  </div>-->
          <div
              class="flex flex-col p-12 justify-end w-full absolute bg-gradient-to-t from-black to-transparent aspect-video h-fit rounded-md">

            <div id="overlay" class="flex flex-col">
              <h3 class="font-outfit font-bold text-3xl">The Gray Man</h3>
              <h3 class="text-sm text-gray-300 pr-24 my-2">{{ description }}</h3>
              <h3 class="text-sm text-gray-400 my-1">2022 • Thriller • 2h 2m</h3>

              <div class="w-full flex">
                <Button name="Watch now" link="" class="my-2"/>
                <icon-button link="" icon="plus" class="m-2"/>
              </div>
            </div>

          </div>

          <div class="w-full aspect-video h-fit bg-cover rounded-md"
               style="background-image: url('https://m.media-amazon.com/images/M/MV5BMjRhYjYwM2EtZWU1ZC00ZjFlLWExYjItZjlkNTczNzgxMWExXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg')">

          </div>


        </div>

      </section>


      <section class="max-w-full h-full overflow-x-hidden flex flex-col px-10 py-2">

        <div class="flex justify-between items-center">
          <h3 class="font-outfit text-lg mt-2">Continue Watching</h3>
          <router-link to="" class="text-gray-400 text-sm mt-2">See all →</router-link>
        </div>

        <div class="-mr-10">
          <!-- Continuing Watching Movies -->
          <swiper :slides-per-view=2.3 :space-between=10 class="w-full h-fit " >

            <swiper-slide v-for="x in continueWatchingList" class="w-20 flex flex-col">
              <router-link :to="x.link" class="flex w-full w-full my-3 relative">
                <div class="flex flex-col p-4 justify-end w-full absolute bg-gradient-to-t from-black to-transparent aspect-video h-fit rounded-md">

                  <div id="overlay" class="flex flex-col">
                    <h3 class="font-outfit font-bold text-lg">{{ x.title }}</h3>
                    <h3 class="text-sm text-gray-400 my-1">{{ `${x.year} • ${x.genre} • ${x.duration}`}}</h3>
                  </div>

                </div>
                <div class="w-full aspect-video h-fit bg-cover rounded-md"
                     :style="[`background-image: url('${x.banner}')`]">

                </div>
              </router-link>
            </swiper-slide>

          </swiper>
        </div>


      </section>


    </div>

    <!-- Right bar -->
    <div class="lg:max-w-[30%] hidden lg:flex lg:flex-col py-10 px-8 h-full">
    <div class="flex flex-col">
      <p class="font-bold font-outfit">Popular Movies 🔥</p>
      <div class="flex flex-col w-full my-4">
        <movie-card-small name="Top Gun Maverick" img="/img/tgm.jpg" genre="Action, Drama" link="/movie/1" :stars=5 />
        <movie-card-small name="Doctor Strange: Multiverse of madness" img="/img/dsmom.jpg" genre="Action, Adventure, Fantasy" link="/movie/tgm" :stars=4 />
      </div>
      <fade-button class="w-full rounded-lg justify-center" name="See More" link="more" />
    </div>

    <div class="flex flex-col my-12">
      <p class="font-bold font-outfit">Watchlist 🍿</p>
      <div class="flex flex-col w-full my-4">
        <movie-card-small name="She-Hulk: Attorney at Law" img="/img/she-hulk.jpg" genre="Action, Adventure, Comedy" link="/movie/she-hulk" :stars=3 />
        <movie-card-small name="The Gray man" img="/img/the-gray-man.jpg" genre="Action, Thriller" link="/movie/1" :stars=4 />
        <movie-card-small name="The Batman" img="/img/batman.jpg" genre="Action, Crime, Drama" link="/movie/tgm" :stars=4 />

      </div>
      <fade-button class="w-full rounded-lg justify-center" name="See More" link="more" />

    </div>


  </div>

  </div>
</template>

<script setup>

import EmojiChip from "../components/EmojiChip.vue";
import Button from "../components/Button.vue";
import FadeButton from "../components/FadeButton.vue";
import IconButton from "../components/IconButton.vue";
import MovieCardSmall from "../components/MovieCardSmall.vue";


const vidLink = "/videos/trailer-day-shift.mp4";

const description = "When the CIA's most skilled operative-whose true identity is known to none-accidentally uncovers dark agency secrets, a psychopathic former colleague puts a bounty on his head, setting off a global manhunt by international assassins."


const continueWatchingList = [
  {
    title: "She-Hulk: Attorney at Law",
    banner: "/img/she-hulk-banner.jpg",
    genre: "Comedy",
    duration: "35m",
    year: "2022",
    link: ""
  },
  {
    title: "Alchemy of Souls",
    banner: "/img/aos-banner.jpg",
    genre: "Drama",
    duration: "1h 20m",
    year: "2022",
    link: ""
  },
  {
    title: "The Boys",
    banner: "/img/the-boys.jpg",
    genre: "Drama",
    duration: "1h",
    year: "2019",
    link: ""
  },
  {
    title: "Stranger Things",
    banner: "/img/stranger-things.jpg",
    genre: "Drama",
    duration: "51m",
    year: "2016",
    link: ""
  }

]




// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
SwiperCore.use([ Pagination, Autoplay])
const autoplay= {
  delay: 3500,
  disableOnInteraction: false
}

</script>

<style scoped>
  .active-chip {
    background-color: #f59e0b;
  }
</style>