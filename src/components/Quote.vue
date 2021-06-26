<template>
  <div>
    <div v-if="currentQuote">
      {{ currentQuote.desc }}
    </div>

    <div v-else>
      Sorry, no quote today
    </div> 
  </div>
</template>

<script>
  import Quotes from '../data/quotes.json';

  export default {
    computed: {
      date() {
        return this.$parent.date;
      },

      isoDate() {
        return this.date.toISOString().split('T')[0];
      },
      
      currentQuote() {
        return Quotes.find(quote => quote.isoDate == this.isoDate);
      }
    }
  }
</script>

<style scoped>
</style>
