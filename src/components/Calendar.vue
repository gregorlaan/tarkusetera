<template>
  <div class="flex justify-center items-center sm:p-4">
    <DatePicker
      v-model="$parent.date"
      :attributes="getQuotes()"
      is-expanded
      is-required
      :first-day-of-week="2"
      :min-date="minDate"
      :max-date="today"
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
          popover: {
            label: quote.desc,
          },
          bar: true
        }));
      }
    }
  }
</script>

<style>
  .vc-container .vc-day .vc-focusable,
  .vc-container .vc-day .vc-highlight {
    padding: 1rem;
    margin-bottom: 0.25rem;
  }

  .vc-container {
    border: 0;
  }

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
