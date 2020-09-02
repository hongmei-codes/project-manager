<template>
  <div>
    <h2>Hello from {{ filename }}</h2>
  </div>
</template>

<script>
export default {
  name: 'AddProject',

  data: () => ({
    filename: 'AddProject.vue'
  }),
}
</script>