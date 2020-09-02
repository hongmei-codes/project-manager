<template>
  <div>
    <p>Hello from {{ filename }}</p>
  </div>
</template>

<script>
export default {
  name: "Project",

  data: () => ({
    filename: "Project.vue",
  }),
};
</script>
