<template>
  <div class="quote-container flex flex-col justify-center items-center text-center p-6 bg-blue-600 text-blue-50">
    <div>
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

    <div class="text-7xl mt-8">
      <div v-if="currentQuote">
        {{ currentQuote.desc }}
      </div>

      <div v-else>
        Sorry, no quote today
      </div> 
    </div>
  </div>
</template>

<script>
  import Quotes from '../data/quotes.json';

  export default {
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
        ]
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
  .quote-container {
    min-height: 50vh;
  }
</style>
