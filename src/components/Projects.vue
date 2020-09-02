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
            <v-flex v-for="(task, i) in project.flow" :key="i">
              <v-chip small class="my-1" color="amber">{{ task }}</v-chip>
            </v-flex>
          </v-flex>
          <v-btn
            color="green"
            dark
            x-small
            absolute
            right
            top
            fab
            @click="edit"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
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
export default {
  name: "Projects",

  props: {
    projects: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    //
  }),

  methods: {
    edit() {
      alert("clicked edit button");
    },
    remove(project) {
      const index = this.projects.indexOf(project);
      this.projects.splice(index, 1);
    },
  },
};
</script>
