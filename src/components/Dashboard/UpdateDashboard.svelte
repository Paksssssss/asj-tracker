<script lang="ts">
  import { createEventDispatcher, onDestroy } from "svelte";
  import Button, { Label } from "@smui/button";
  import Textfield from "@smui/textfield";
  import { dashboardSummary } from "store/dashboard";
  // let usePhp = false;
  let startingCapital = 0;
  let addedCapital = 0;
  const dispatch =
    createEventDispatcher<{ onEditClick: { editMode: boolean } }>();

  const dashSub = dashboardSummary.subscribe((dashSum) => {
    startingCapital = dashSum.startingCapital;
    addedCapital = dashSum.addedCapital;
  });

  const onSubmit = () => {
    dashboardSummary.updateDashboard({
      startingCapital,
      addedCapital,
    });
    dispatch("onEditClick", {
      editMode: false,
    });
  };
  onDestroy(dashSub);
</script>

<div class="account-balance">
  <div class="balance-col">
    <div class="field-wrapper">
      <Textfield
        style="width: 100%;"
        bind:value={startingCapital}
        label="Starting Capital"
        prefix="$"
        input$pattern={"\\d+(\\.\\d{2})?"}
      />
    </div>
    <div class="field-wrapper">
      <Textfield
        style="width: 100%;"
        bind:value={addedCapital}
        label="Added capital"
        prefix="$"
        input$pattern={"\\d+(\\.\\d{2})?"}
      />
    </div>
    <br />
    <Button color="primary" variant="raised" on:click={onSubmit}>
      <Label>Update</Label>
    </Button>
  </div>
</div>

<style>
  .account-balance {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
  .balance-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    .balance-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
    }
  }
</style>
