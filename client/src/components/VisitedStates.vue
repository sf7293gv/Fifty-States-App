<template>
  <div>
    <p>A list of the states you have visited:</p>
    <p v-for="state in states">{{state.name}}</p>
  </div>

</template>

<script>


export default {
  name: 'VisitedStates',
  data() {
    return {
      states: []
    }
  },
  mounted() {
    this.fetchAllStates()
  },
  methods: {
    fetchAllStates() {
      this.$stateService.getAllVisitedStates().then(states => {
        this.states = states;
      }).catch(err => {
        alert('Can not fetch state list') // for user
        console.error(err) // for developer
      })
    }
  }
}
</script>

<style scoped>


</style>