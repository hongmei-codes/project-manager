<template>
  <v-app>
    <AppHeader />
    <v-main>
      <AddProject />
      <Projects />
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader";
import Projects from "./components/Projects";
import AddProject from "./components/AddProject";

export default {
  name: "App",

  components: {
    AppHeader,
    Projects,
    AddProject,
  },

  data: () => ({
    //
  }),
};
</script>
