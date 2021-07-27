<template>
  <div class="quote-container lg:min-h-1/2 flex flex-col lg:justify-between items-center text-center bg-blue-600 text-blue-50">
    <div class="p-8">
      <div class="text-2xl">
        {{ weekDay }}
      </div>

      <div class="text-8xl py-4">
        {{ day }}
      </div>

      <div class="text-2xl">
        {{ month }}
      </div>
    </div>

    <div class="relative w-full max-w-screen-lg mx-auto">
      <button
        class="absolute top-0 bottom-0 left-0 z-10 fill-current text-blue-200 hover:text-white"
        @click="onPreviousDate()"
      >
        <svg width="3rem" height="3rem" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330.002 330.002">
          <path d="M233.25,306.001L127.5,165.005L233.25,24.001c4.971-6.628,3.627-16.03-3-21c-6.627-4.971-16.03-3.626-21,3
            L96.75,156.005c-4,5.333-4,12.667,0,18l112.5,149.996c2.947,3.93,7.451,6.001,12.012,6.001c3.131,0,6.29-0.978,8.988-3.001
            C236.878,322.03,238.221,312.628,233.25,306.001z" />
        </svg>
      </button>

      <button
        class="absolute top-0 bottom-0 right-0 z-10 fill-current text-blue-200 hover:text-white"
        @click="onNextDate()"
      >
        <svg width="3rem" height="3rem" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330">
          <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
            c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
            C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
            C255,161.018,253.42,157.202,250.606,154.389z" />
        </svg>
      </button>

      <div class="p-12 text-4xl md:text-7xl">
        <div v-if="currentQuote">
          {{ currentQuote.desc }}
        </div>

        <div v-else>
          Täna ei ole uut tarkusetera
        </div>
      </div>
    </div>

    <div
      v-if="currentQuote?.socialMedia"
      class="p-6"
    >
      <template v-for="(socialMediaLink, key) in currentQuote.socialMedia">
        <component
          :is="socialMediaToComponent[key]"
          v-if="currentQuote?.socialMedia"
          :key="key"
          :href="currentQuote.socialMedia[key]"
        />
      </template>
    </div>

    <div
      v-else
      class="p-6"
    >
      <template
        v-for="(socialMediaKey, key) in ['instagram', 'facebook', 'twitter', 'pinterest']"
        :key="key"
      >
        <component
          :is="socialMediaToComponent[socialMediaKey]"
        />
      </template>
    </div>
  </div>
</template>

<script>
  import { markRaw } from 'vue';
  import Quotes from '../data/quotes.json';

  import instagramLink from './socialMediaLinks/instagram.vue';
  import facebookLink from './socialMediaLinks/facebook.vue';
  import twitterLink from './socialMediaLinks/twitter.vue';
  import pinterestLink from './socialMediaLinks/pinterest.vue';

  export default {
    components: {
      instagramLink,
      facebookLink,
      twitterLink,
      pinterestLink
    },

    props: {
      date: {
        type: Object,
        default() {
          return new Date();
        }
      }
    },

    data() {
      return {
        weekDays: [
          'Pühapäev',
          'Esmaspäev',
          'Teisipäev',
          'Kolmapäev',
          'Neljapäev',
          'Reede',
          'Laupäev',
        ],
        months: [
          'Jaanuar',
          'Veebruar',
          'Märts',
          'Aprill',
          'Mai',
          'Juuni',
          'Juuli',
          'August',
          'September',
          'Oktoober',
          'November',
          'Detsember'
        ],
        socialMediaToComponent: {
          instagram: markRaw(instagramLink),
          facebook: markRaw(facebookLink),
          twitter: markRaw(twitterLink),
          pinterest: markRaw(pinterestLink)
        }
      };
    },

    computed: {
      isoDate() {
        return this.date.toISOString().split('T')[0];
      },

      weekDay() {
        return this.weekDays[this.date.getDay()];
      },

      day() {
        return this.date.getDate();
      },

      month() {
        return this.months[this.date.getMonth()];
      },

      currentQuote() {
        return Quotes.find(quote => quote.isoDate == this.isoDate);
      }
    },

    methods: {
      onPreviousDate() {
        const minDate = new Date('2021-07-01');

        if(this.$parent.date.getDate() === minDate.getDate()) {
          return;
        }

        this.$parent.date = new Date(this.date.setDate(this.date.getDate() - 1));
      },

      onNextDate() {
        const maxDate = new Date();

        if(this.$parent.date.getDate() === maxDate.getDate()) {
          return;
        }

        this.$parent.date = new Date(this.date.setDate(this.date.getDate() + 1));
      }
    }
  }
</script>

<style scoped>
</style>
