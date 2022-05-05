<script lang="ts">
  import Chart from "svelte-frappe-charts";
  import { dashboardSummary } from "store/dashboard";
  import Textfield from "@smui/textfield";
  import Slider from "@smui/slider";
  import FormField from "@smui/form-field";
  import { calculateAverageProjection } from "lib/utils/projections";
  let capital = 0;
  let projectDays = 5;
  let averagePips = 60;
  const unsDash = dashboardSummary.subscribe((dashSummary) => {
    capital = dashSummary.startingCapital + dashSummary.addedCapital;
  });
  $: projectionValues = calculateAverageProjection(
    Number(capital),
    averagePips,
    projectDays
  );
  $: data = {
    labels: projectionValues.map((pro) => pro.label),
    datasets: [
      {
        name: 'Capital Projection',
        values: projectionValues.map((pro) => pro.capital),
      },
      {
        name: 'Income',
        values: projectionValues.map((pro) => pro.gain),
      },
    ],
  };
  $: console.log();
</script>

<div class="projection-container">
  <h3>This is a simple income projection</h3>
  <p>
    Projection is based on your current capital/wallet and your average pips
    after N days of trading
  </p>

  <Textfield
    style="width: 100%;"
    bind:value={capital}
    label="Capital"
    prefix="$"
    input$pattern={"\\d+(\\.\\d{2})?"}
  />
  <FormField align="end" style="display: flex;">
    <Slider style="flex-grow: 1;" min={5} max={365} bind:value={projectDays} />
    <span
      slot="label"
      style="padding-right: 12px; width: max-content; display: block;"
    >
      {projectDays}-Days projection
    </span>
  </FormField>
  <Textfield
    style="width: 100%;"
    bind:value={averagePips}
    label="averagePips"
    input$pattern={"\\d+(\\.\\d{2})?"}
  />

  <Chart {data} lineOptions={{ regionFill: 1 }} type="line" />
</div>

<style>
  .projection-container {
    margin: 10px;
  }
</style>
