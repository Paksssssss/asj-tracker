<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import Cookies from "components/Cookies.svelte";
  import Navigation from "components/Navigation/index.svelte";
  import Home from "routes/Home.svelte";
  import Login from "routes/Login.svelte";
  import Profile from "routes/Profile.svelte";
</script>

<main>
  <Router>
    <Navigation />
    <div>
      <Route path="/profile"><Profile /></Route>
      <Route path="/login"><Login /></Route>
      <Route path="/"><Home /></Route>
    </div>
    <Cookies />
  </Router>
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
