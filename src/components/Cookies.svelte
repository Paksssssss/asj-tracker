<script lang="ts">
  import Dialog, { Title, Content, Actions } from "@smui/dialog";
  import Button, { Label } from "@smui/button";
  import { allowCookies, hasAnsweredCookies } from "store/cookies";
  import { onDestroy } from "svelte";
  let showCookieModal: boolean;

  const unsAnswered = hasAnsweredCookies.subscribe((answered) => {
    showCookieModal = !answered;
  });

  const onCloseClick = (allow: boolean) => {
    if (allow) {
      localStorage.setItem("canStoreCookies", "true");
    }
    allowCookies.set(allow);
  };

  onDestroy(() => {
    unsAnswered();
  });
</script>

<Dialog
  bind:open={showCookieModal}
  aria-labelledby="simple-title"
  aria-describedby="simple-content"
>
  <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
  <Title id="simple-title">Can I Use Cookies?</Title>
  <Content id="simple-content">
    Unfortunately I still have not implemented any backend for my app so please
    let me use your cookies and local to store needed values here
  </Content>
  <Actions>
    <Button on:click={() => onCloseClick(false)}>
      <Label>No</Label>
    </Button>
    <Button on:click={() => onCloseClick(true)}>
      <Label>Yes</Label>
    </Button>
  </Actions>
</Dialog>

<style>
</style>
