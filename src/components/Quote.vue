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

    <div class="p-4 text-4xl md:text-7xl w-full max-w-screen-lg mx-auto">
      <div v-if="currentQuote">
        {{ currentQuote.desc }}
      </div>

      <div v-else>
        Täna ei ole uut tarkusetera
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
    }
  }
</script>

<style scoped>
</style>
