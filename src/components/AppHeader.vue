<template>
  <div>
    <v-app-bar app clipped-left color="amber">
      <v-app-bar-nav-icon @click="slideIn = !slideIn"></v-app-bar-nav-icon>
      <span class="title ml-3 mr-5"
        >Project<span class="font-weight-light">Manager</span></span
      >
      <v-spacer></v-spacer>
      <v-btn :href="sourceCode" icon target="_blank">
        <v-icon>mdi-code-tags</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="slideIn" app clipped color="grey lighten-4">
      <v-list dense class="grey lighten-4">
        <template v-for="(item, i) in sideMenuItems">
          <v-list-item :key="i" link>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text">
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "AppHeader",

  data: () => ({
    slideIn: false,
    sourceCode: "https://github.com/hongmei-codes/project-manager",
    sideMenuItems: [
      { icon: "mdi-account-circle", text: "Profile" },
      { icon: "mdi-cog", text: "Settings" },
    ],
  }),
};
</script>
