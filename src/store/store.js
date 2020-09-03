import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    tasks: ["Plan", "Design", "Create", "Test"],
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

  mutations: {
    add: (state, project) => {
      state.projects.unshift(project);
    },
    remove: (state, project) => {
      state.projects.splice(state.projects.indexOf(project), 1);
    },
    edit: (state, { id, name, flow }) => {
      state.projects = state.projects.map((p) =>
        p.id === id ? { ...p, name, flow } : p
      );
    },
  },

  actions: {
    add: (context, project) => {
      setTimeout(() => {
        context.commit("add", project);
      }, 2000);
    },
    remove: (context, project) => {
      setTimeout(() => {
        context.commit("remove", project);
      }, 2000);
    },
    edit: (context, { id, name, flow }) => {
      setTimeout(() => {
        context.commit("edit", { id, name, flow });
      }, 2000);
    },
  },
});
