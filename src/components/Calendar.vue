<template>
  <div>
    <DatePicker v-model="$parent.date" />
  </div>
</template>

<script>
  import { DatePicker } from 'v-calendar';

  export default {
    components: {
      DatePicker
    }
  }
</script>

<style scoped>
</style>
