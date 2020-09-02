<template>
  <v-container>
    <h2>Hello from {{ filename }}</h2>
  </v-container>
</template>

<script>
export default {
  name: "AppHeader",

  data: () => ({
    filename: "AppHeader.vue",
  }),
};
</script>
