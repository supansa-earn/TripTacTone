<template>
  <v-select
  :items="items"
  label="Select Mood&Tone"
  solo
></v-select>
</template>
<script>
  export default {
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
  }
</script>
