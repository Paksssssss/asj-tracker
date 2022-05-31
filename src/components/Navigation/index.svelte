<script>
  import Navbar from "./Navbar";
  import Drawer from "./Drawer";

  let menuOpen = false;
  const handleMenuClick = () => {
    menuOpen = !menuOpen;
    console.log("clicking");
  };
</script>

<Navbar on:clickMenu={handleMenuClick} />
<Drawer open={menuOpen} />

<!-- markup (zero or more items) goes here -->
<style>
  /* your styles go here */
</style>
