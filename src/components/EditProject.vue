<template>
  <v-row justify="center">
    <v-dialog v-model="open" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="green"
          dark
          x-small
          absolute
          right
          top
          fab
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Edit {{ project.name }}</span>
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
            <v-btn color="amber darken-3" text @click="edit(project.id)"
              >Save</v-btn
            >
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "EditProject",

  props: {
    project: {
      type: Object,
      required: true,
    },
  },

  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },

  data() {
    return {
      open: false,
      valid: true,
      projectName: this.project.name,
      nameRules: [(v) => !!v || "Name is required"],
      taskFlow: this.project.flow,
    };
  },

  methods: {
    close() {
      this.open = false;
    },
    edit(id) {
      if (this.$refs.form.validate()) {
        // edit project
        const name = this.projectName;
        const flow = this.taskFlow;
        this.$store.dispatch("edit", { id, name, flow });

        this.open = false; // closes the dialog
      } else {
        this.open = true;
      }
    },
  },
};
</script>
