<script>
  import { Link } from "svelte-navigator";
  import Drawer, {
    Content,
  } from "@smui/drawer";
  import List, { Item } from "@smui/list";

  export let open = false;
</script>

<div class="drawer-container">
  <Drawer variant="dismissible" bind:open>
    <Content>
      <List>
        <div class="link-wrapper">
          <Link to="/" class="link-text">
            <Item>Dashboard</Item>
          </Link>
        </div>
        <div class="link-wrapper">
          <Link to="/profile" class="link-text">
            <Item>Profile</Item>
          </Link>
        </div>
        <div class="link-wrapper">
          <Link to="/login" class="link-text">
            <Item>Login</Item>
          </Link>
        </div>
      </List>
    </Content>
  </Drawer>
</div>

<style>
  .link-wrapper :global(.link-text) {
    text-decoration: none;
  }
</style>
