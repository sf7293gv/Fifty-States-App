<template>

  <div>
<!--    links to different parts of the site-->
    <div>
      <span class="nav-link">
        <router-link to="/">Home</router-link>
      </span>

      <span class="nav-link">
        <router-link to="/about">About Site</router-link>
      </span>

      <span class="nav-link">
        <router-link to="/visited">Visited States List</router-link>
      </span>
    </div>

    <p>Header image by <a href="https://unsplash.com/photos/KpBXAOs80YI">@chrislawton on Unsplash</a> </p>
  </div>

</template>

<script>

export default {
  name: 'PageFooter'
}

</script>

<style scoped>

  .nav-link {
    margin: 1rem;
  }

</style>