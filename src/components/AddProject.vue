<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
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
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Project Name" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-autocomplete
                  :items="tasks"
                  label="Tasks"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Close</v-btn
          >
          <v-btn color="blue darken-1" text @click="add()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "AddProject",

  props: {
    projects: {
      type: Array,
      required: true,
    },
    tasks: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    dialog: false,
  }),

  methods: {
      add() {
          this.dialog = false;
          alert('add clicked');
      }
  }
};
</script>
