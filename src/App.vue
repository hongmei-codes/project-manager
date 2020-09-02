<template>
  <v-app>
    <h1>Hello from {{ filename }}</h1>
    <v-main>
      <AppHeader />
      <Projects />
      <AddProject />
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader";
import Projects from "./components/Projects";
import AddProject from "./components/AddProject";

const mockProjects = {
  p1: {
    name: "Markdown Previewer",
    flow: ["Design", "Plan", "Create", "Test"],
  },
  p2: {
    name: "Chess Game",
    flow: ["Plan", "Design"],
  },
  p3: {
    name: "Recommandation Engine",
    flow: ["Plan", "Design", "Create", "Test"],
  },
  p4: {
    name: "Message App",
    flow: ["Create", "Test"],
  },
  p5: {
    name: "Password Generator",
    flow: ["Test"],
  },
  p6: {
    name: "Future projects",
    flow: [],
  },
};

export default {
  name: "App",

  components: {
    AppHeader,
    Projects,
    AddProject,
  },

  data: () => ({
    filename: "App.vue",
    projects: mockProjects,
  }),
};
</script>
