<template>
  <div>
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
    }
  }
</script>

<style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
