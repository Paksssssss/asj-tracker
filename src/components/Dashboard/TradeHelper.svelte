<script lang="ts">
  import Textfield from "@smui/textfield";
  import Radio from "@smui/radio";
  import FormField from "@smui/form-field";
  import { TradeDirection } from "lib/types/Dashboard";
  const directionOptions = [
    { label: "Buy", value: TradeDirection.BUY },
    { label: "Sell", value: TradeDirection.SELL },
  ];
  let capital = 0.0;
  let percentageTake = 0.0;
  let direction = TradeDirection.BUY;
  $: lotSize = Math.floor((capital / 830) * 100) / 100;
  $: commision = lotSize * 30;
  $: desiredGains = capital * (percentageTake / 100);
  $: closedProfit = commision + desiredGains;
  $: pipsNeeded = Math.floor(closedProfit / lotSize) || 0;
</script>

<div class="daily-helper">
  <h4 id="daily-helper-title">Daily Helper</h4>
  <div class="form-content">
    <div class="field-wrapper">
      <Textfield
        style="width: 100%;"
        bind:value={capital}
        label="Capital"
        prefix="$"
        input$pattern={"\\d+(\\.\\d{2})?"}
      />
    </div>
    <div class="field-wrapper">
      <Textfield
        style="width: 100%;"
        bind:value={percentageTake}
        label="Desired Gains (%)"
        suffix="%"
        input$pattern={"\\d+(\\.\\d{2})?"}
      />
    </div>
    <!-- <div>
      {#each directionOptions as { label, value }}
        <FormField>
          <Radio bind:group={direction} {value} />
          <span slot="label">{label}</span>
        </FormField>
      {/each}
    </div> -->
  </div>
  <div class="calc-content">
    <div class="data-group">
      <span class="amount-label">Lotsize: </span>
      <span class="amount-value">{lotSize.toFixed(2)}</span>
    </div>
    <div class="data-group">
      <span class="amount-label">Commision: </span>
      <span class="amount-value">{commision.toFixed(2)}</span>
    </div>
    <div class="data-group">
      <span class="amount-label">Desired Gains: </span>
      <span class="amount-value">{desiredGains.toFixed(2)}</span>
    </div>
    <div class="data-group">
      <span class="amount-label">Closed Profit: </span>
      <span class="amount-value">{closedProfit.toFixed(2)}</span>
    </div>
    <div class="data-group">
      <span class="amount-label">Needed Pips: </span>
      <span class="amount-value">{pipsNeeded}</span>
    </div>
  </div>
</div>

<style>
  .daily-helper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  #daily-helper-title {
    width: 100%;
    padding-top: 0;
    margin: 0;
  }
  .form-content {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .field-wrapper {
    width: 100%;
  }
  .amount-label {
    font-size: 20px;
  }
  .amount-value {
    font-size: 20px;
    font-weight: bold;
  }
  .data-group {
    width: 45%;
  }
  .calc-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  @media only screen and (min-width: 768px) {
    .field-wrapper {
      width: 48%;
    }
  }
</style>
