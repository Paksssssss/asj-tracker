<script lang="ts">
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import Button, { Label } from "@smui/button";
  import AccountBalance from "components/Dashboard/AccountBalance.svelte";
  import TradeHelper from "components/Dashboard/TradeHelper.svelte";
  let updatingValues = false;
</script>

<LayoutGrid>
  <Cell span={6}>
    <div class="bordered-div" id="accountBalance">
      {#if !updatingValues}
        <AccountBalance />
      {:else}
        <div>forms here1</div>
      {/if}
    </div>
  </Cell>
  <Cell span={6}>
    <div class="bordered-div" id="accountBalance">
      {#if !updatingValues}
        <TradeHelper />
      {:else}
        <div>forms here1</div>
      {/if}
    </div>
  </Cell>
  <Cell span={3}>
    <div class="bordered-div">
      <Button color="secondary" variant="raised"
        ><Label>Add One Day Trade</Label></Button
      >
      <Button color="secondary" variant="raised"
        ><Label>Add Trade Series</Label></Button
      >
      <Button color="secondary" variant="raised"
        ><Label>Import Trade Data (CSV)</Label></Button
      >
    </div>
  </Cell>
</LayoutGrid>

<style>
  .bordered-div {
    min-height: 200px;
    max-height: 400px;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    align-items: center;
    border: 2px solid lightsteelblue;
    border-radius: 20px;
    padding: 15px;
  }
  #accountBalance {
    justify-content: flex-start;
  }
</style>
