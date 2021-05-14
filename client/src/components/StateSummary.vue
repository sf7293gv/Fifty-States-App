<template>
  <div>
    <p>There are a total of {{states.length}} states and the District of Columbia</p>
    <p>You have visited {{totalVisited}} {{units}}</p>
    <p id="all-visited" v-if="allVisited">You have visited all states!</p>
  </div>
</template>

<script>

export default {
  name: 'StateSummary',
  props: {
    states: Array
  },
  computed: {
    totalVisited() {
      let visitedCounter = 0
      this.states.forEach(state => {
        if (state.visited) {
          visitedCounter++
        }
      });
      return visitedCounter
    },
    units() {
      if (this.totalVisited == 1) {
        return 'state'
      } else {
        return 'states'
      }
    },
    allVisited() {
      return this.totalVisited === this.states.length
    }
  }
}

</script>

<style>

#all-visited {
  color: purple;
  font-weight: 600;
}

</style>