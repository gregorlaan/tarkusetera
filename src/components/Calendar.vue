<template>
  <div class="flex justify-center items-center sm:p-4 w-full max-w-screen-lg mx-auto">
    <DatePicker
      v-model="$parent.date"
      :attributes="getQuotes()"
      :first-day-of-week="2"
      :min-date="minDate"
      :max-date="today"
      :change="updateDateUrlParameter()"
      is-expanded
      is-required
      locale="et"
      color="blue"
    />
  </div>
</template>

<script>
  import { DatePicker } from 'v-calendar';
  import Quotes from '../data/quotes.json';

  export default {
    components: {
      DatePicker
    },

    data() {
      return {
        today: new Date(),
        minDate: new Date('2021-07-01')
      }
    },

    methods: {
      getQuotes() {
        return Quotes.map(quote => ({
          dates: new Date(quote.isoDate),
          highlight: {
            fillMode: 'outline',
          }
        }));
      },

      updateDateUrlParameter() {
        const isoDate = this.$parent.date?.toISOString().split('T')[0];
        const dateQueryString = '?date=' + isoDate;
        history.replaceState({}, 'Tarkusetera', dateQueryString);
      }
    }
  }
</script>

<style>
  .vc-arrows-container {
    display: none;
  }

  .vc-title {
    padding: 1rem;
  }

  .vc-nav-container {
    width: 250px;
  }
</style>
