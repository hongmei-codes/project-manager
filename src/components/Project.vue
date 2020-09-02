<template>
  <v-container>
    <p>Hello from {{ filename }}</p>
  </v-container>
</template>

<script>
export default {
  name: "Project",

  data: () => ({
    filename: "Project.vue",
  }),
};
</script>
