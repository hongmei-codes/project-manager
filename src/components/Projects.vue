<template>
  <v-container>
    <v-main>
        <h1>List of Projects</h1>
    </v-main>
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
