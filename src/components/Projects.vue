<template>
  <div>
    <v-container class="ma-auto">
      <v-card
        class="my-10"
        color="amber lighten-4"
        v-for="project in projects"
        :key="project.id"
      >
        <v-layout>
          <v-flex class="pa-3" xs12 md6>
            <div class="caption grey--text">Project Name</div>
            <div>{{ project.name }}</div>
          </v-flex>
          <v-flex class="pa-3" xs6 sm4 md2>
            <div class="caption grey--text">Project Task Flow</div>
            <v-flex v-for="(task, i) in project.flow" :key="task">
              <v-chip small class="my-1" color="amber">{{ task }}</v-chip>
              <span v-if="i < project.flow.length - 1"
                ><v-icon color="amber darken-1">mdi-arrow-right</v-icon></span
              >
            </v-flex>
          </v-flex>
          <EditProject :project="project" />
          <v-btn
            color="red"
            dark
            x-small
            absolute
            right
            bottom
            fab
            @click="remove(project)"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import EditProject from "./EditProject";

export default {
  name: "Projects",

  components: {
    EditProject,
  },

  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },

  data: () => ({
    //
  }),

  methods: {
    remove(project) {
      return this.$store.commit("remove", project);
    },
  },
};
</script>
