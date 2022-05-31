<script lang="ts">
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import Tab, { Label } from "@smui/tab";
  import TabBar from "@smui/tab-bar";
  import AccountBalance from "components/Dashboard/AccountBalance.svelte";
  import TradeHelper from "components/Dashboard/TradeHelper/index.svelte";
  import UpdateDashboard from "components/Dashboard/UpdateDashboard.svelte";
  import SimpleProjection from "components/Projections/SimpleProjection.svelte";
  import { DashboardTabs } from "lib/types/Dashboard";
  const tabs = [
    DashboardTabs.HOME,
    DashboardTabs.PROJECTIONS,
    DashboardTabs.CALCULATORS,
  ];
  let currentTab = DashboardTabs.HOME;
  let updatingValues = false;
  const onEditClick = (event: CustomEvent<{ editMode: boolean }>) => {
    updatingValues = event.detail.editMode;
  };
</script>

<TabBar {tabs} let:tab bind:active={currentTab}>
  <Tab {tab}>
    <Label>{tab}</Label>
  </Tab>
</TabBar>
{#if currentTab === DashboardTabs.HOME}
  <LayoutGrid>
    <Cell span={6}>
      <div class="bordered-div" id="accountBalance">
        <TradeHelper />
      </div>
    </Cell>
    <Cell span={6}>
      <div class="bordered-div" id="accountBalance">
        {#if !updatingValues}
          <AccountBalance on:onEditClick={onEditClick} />
        {:else}
          <UpdateDashboard on:onEditClick={onEditClick} />
        {/if}
      </div>
    </Cell>
    <!-- <Cell span={3}>
    <div class="bordered-div">
      <Button color="secondary" variant="raised">
        <Label>Add One Day Trade</Label>
      </Button>
      <Button color="secondary" variant="raised">
        <Label>Add Trade Series</Label>
      </Button>
      <Button color="secondary" variant="raised">
        <Label>Import Trade Data (CSV)</Label>
      </Button>
    </div>
  </Cell> -->
  </LayoutGrid>
{:else if currentTab === DashboardTabs.PROJECTIONS}
  <SimpleProjection />
{/if}

<style>
  .bordered-div {
    min-height: 200px;
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
