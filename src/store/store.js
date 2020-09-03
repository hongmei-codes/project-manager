import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vue.Store({
  state: {
    projects: [
      {
        id: "1",
        name: "Markdown Previewer",
        flow: ["Design", "Plan", "Create", "Test"],
      },
      {
        id: "2",
        name: "Chess Game",
        flow: ["Plan", "Design"],
      },
      {
        id: "3",
        name: "Recommandation Engine",
        flow: ["Plan", "Design", "Create", "Test"],
      },
      {
        id: "4",
        name: "Message App",
        flow: ["Create", "Test"],
      },
      {
        id: "5",
        name: "Password Generator",
        flow: ["Test"],
      },
      {
        id: "6",
        name: "Future projects",
        flow: [],
      },
      {
        id: "7",
        name: "Markdown Previewer",
        flow: ["Design", "Plan", "Create", "Test"],
      },
    ],
  },
});
