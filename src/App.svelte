<script lang="ts">
  import Cookies from "components/Cookies.svelte";
  import Navbar from "components/Navbar.svelte";
  import Home from "pages/Home.svelte";
</script>

<main>
  <Navbar />
  <Home />
  <Cookies />
</main>

<style>
  main {
    margin: 0 auto;
    padding: 0;
  }
  :global(body) {
    padding: 0;
  }
</style>
