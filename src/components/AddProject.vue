<template>
  <v-row justify="center">
    <v-dialog v-model="popup" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="amber" class="mt-5" v-bind="attrs" v-on="on">
          Add Project
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add New Project</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="projectName"
              label="Project Name"
              :rules="nameRules"
              color="amber darken-3"
              outlined
              required
            ></v-text-field>

            <v-autocomplete
              v-model="taskFlow"
              :items="tasks"
              color="amber darken-3"
              outlined
              chips
              small-chips
              deletable-chips
              label="Tasks"
              multiple
            ></v-autocomplete>

            <v-spacer></v-spacer>
            <v-btn color="amber darken-3" text @click="close">Close</v-btn>
            <v-btn color="amber darken-3" text @click="add">Save</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "AddProject",

  computed: {
    projects() {
      return this.$store.state.projects;
    },
    tasks() {
      return this.$store.state.tasks;
    },
  },

  data: () => ({
    popup: false,
    valid: true,
    projectName: "",
    nameRules: [(v) => !!v || "Name is required"],
    taskFlow: [],
  }),

  methods: {
    close() {
      this.popup = false;
      this.$refs.form.reset(); // resets the form
    },
    add() {
      if (this.$refs.form.validate()) {
        // submit form
        const project = {
          id: Date.now(),
          name: this.projectName,
          flow: this.taskFlow,
        };
        this.$store.commit("add", project);

        this.$refs.form.reset(); // resets the form
        this.popup = false; // closes the dialog
      } else {
        this.popup = true;
      }
    },
  },
};
</script>
