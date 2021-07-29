<template>
  <div class="h-full grid grid-cols-1 lg:grid-cols-2">
    <Calendar />
    <Quote :date="date" />
  </div>
</template>

<script>
  import Quote from './components/Quote.vue'
  import Calendar from './components/Calendar.vue'

  export default {
    components: {
      Quote,
      Calendar
    },

    data() {
      return {
        date: new Date()
      };
    },

    created() {
      this.initDate();
    },

    methods: {
      initDate() {
        this.date = this.getDateFromUrlParameter();
      },

      getDateFromUrlParameter() {
        const isoDate = new URLSearchParams(window.location.search).get('date');

        if(!isoDate) {
          return new Date();
        }

        const date = new Date(isoDate);

        if(!date || date == 'Invalid Date') {
          return new Date();
        }

        if(!this.validateDate(date)) {
          return new Date();
        }

        return date;
      },

      validateDate(date) {
        const minDate = new Date('2021-07-01');
        const maxDate = new Date();

        return date >= minDate && date <= maxDate;
      }
    }
  }
</script>

<style>
  html, body, #app {
    height: 100%;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
