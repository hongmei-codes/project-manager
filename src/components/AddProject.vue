<template>
  <v-container>
    <h2>Hello from {{ filename }}</h2>
  </v-container>
</template>

<script>
export default {
  name: 'AddProject',

  data: () => ({
    filename: 'AddProject.vue'
  }),
}
</script>