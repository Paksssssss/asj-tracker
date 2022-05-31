<script lang="ts">
  import { Link } from "svelte-navigator";
  import { createEventDispatcher } from "svelte";
  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
  import IconButton from "@smui/icon-button";

  const dispatch = createEventDispatcher();

  const clickBurgerMenu = () => {
    dispatch("clickMenu");
  };
</script>


<nav class="top-app-bar-container flexor">
  <TopAppBar variant="static" color="primary">
    <Row>
      <Section>
        <div class="burger-menu">
          <IconButton class="material-icons" on:click={clickBurgerMenu}
            >menu</IconButton
          >
        </div>
        <Title>ASJ Income Tracker</Title>
      </Section>
      <Section align="end" toolbar>
        <div class="link-container">
          <div class="link-wrapper">
            <Link to="/" class="link-text"><span>Dashboard</span></Link>
          </div>
          <div class="link-wrapper">
            <Link to="/profile" class="link-text"><span>Profile</span></Link>
          </div>
          <div class="link-wrapper">
            <Link to="/login" class="link-text"><span>Login</span></Link>
          </div>
        </div>
      </Section>
    </Row>
  </TopAppBar>
</nav>

<style>
  .flexor {
    display: inline-flex;
    flex-direction: column;
  }
  nav {
    display: flex;
    height: 3.5rem;
    width: 100%;
  }
  .link-container {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    nav {
      justify-content: space-between;
    }
    .link-container {
      display: flex;
    }
    .link-wrapper :global(.link-text) {
      color: white;
      font-weight: 500;
      padding: 15px;
      text-decoration: none;
    }
    .link-wrapper :global(.link-text):hover {
      font-weight: 700;
      text-decoration: none;
    }
    .link-wrapper :global(.link-text):visited {
      color: white;
      text-decoration: none;
    }
    .burger-menu {
      display: none;
    }
  }
</style>
