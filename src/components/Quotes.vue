<template>
  <div>
    <h1>
      Quotes
    </h1>

    <ul>
      <li 
        v-for="quote in quotes" 
        :key="quote"
      >
        {{ quote.desc }}
      </li>
    </ul>
  </div>
</template>

<script setup>
  import quotes from "../data/quotes.json" 
</script>

<style scoped>
</style>
