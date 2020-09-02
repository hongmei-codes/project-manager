<template>
  <v-app>
    <AppHeader />
    <v-main>
      <AddProject :projects="projects" :tasks="tasks"/>
      <Projects :projects="projects"/>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader";
import Projects from "./components/Projects";
import AddProject from "./components/AddProject";

const mockTasks = ["Plan", "Design", "Create", "Test"];

const mockProjects = [
  {
    id: '1',
    name: "Markdown Previewer",
    flow: ["Design", "Plan", "Create", "Test"],
  },
  {
    id: '2',
    name: "Chess Game",
    flow: ["Plan", "Design"],
  },
  {
    id: '3',
    name: "Recommandation Engine",
    flow: ["Plan", "Design", "Create", "Test"],
  },
  {
    id: '4',
    name: "Message App",
    flow: ["Create", "Test"],
  },
  {
    id: '5',
    name: "Password Generator",
    flow: ["Test"],
  },
  {
    id: '6',
    name: "Future projects",
    flow: [],
  },
  {
    id: '7',
    name: "Markdown Previewer",
    flow: ["Design", "Plan", "Create", "Test"],
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
    tasks: mockTasks,
  }),
};
</script>
