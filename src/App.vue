<template>
  <v-app>
    <AppHeader />
    <v-main>
      <AddProject />
      <Projects :projects="projects"/>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader";
import Projects from "./components/Projects";
import AddProject from "./components/AddProject";

const mockProjects = [
  {
    name: "Markdown Previewer",
    flow: ["Design", "Plan", "Create", "Test"],
  },
  {
    name: "Chess Game",
    flow: ["Plan", "Design"],
  },
  {
    name: "Recommandation Engine",
    flow: ["Plan", "Design", "Create", "Test"],
  },
  {
    name: "Message App",
    flow: ["Create", "Test"],
  },
  {
    name: "Password Generator",
    flow: ["Test"],
  },
  {
    name: "Future projects",
    flow: [],
  },
];

export default {
  name: "App",

  components: {
    AppHeader,
    Projects,
    AddProject,
  },

  data: () => ({
    projects: mockProjects,
  }),
};
</script>
