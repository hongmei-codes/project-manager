<template>
  <v-container>
    <h2>Hello from {{ filename }}</h2>
    <Project />
  </v-container>
</template>

<script>
import Project from "@/components/Project";

export default {
  name: "Projects",

  components: {
    Project,
  },

  data: () => ({
    filename: "Projects.vue",
  }),
};
</script>
