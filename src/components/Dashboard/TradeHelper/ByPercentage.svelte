<script lang="ts">
  import Textfield from "@smui/textfield";
  import { TradeDirection } from "lib/types/Dashboard";
  export let tradeDirection: TradeDirection;
  let capital = 0.0;
  let percentageTake = 0.0;
  let open = 0.0;
  // let direction = TradeDirection.BUY;
  $: lotSize = Math.floor((capital / 830) * 100) / 100;
  $: commision = lotSize * 30;
  $: desiredGains = capital * (percentageTake / 100);
  $: closedProfit = commision + desiredGains;
  $: pipsNeeded = Math.floor(closedProfit / lotSize) || 0;
  $: closingValue =
    tradeDirection === TradeDirection.BUY
      ? open + pipsNeeded * 0.00001
      : open - pipsNeeded * 0.00001;
</script>

<div class="form-content">
  <div class="field-wrapper">
    <Textfield
      style="width: 100%;"
      bind:value={capital}
      label="Capital"
      prefix="$"
      input$pattern={"\\d+(\\.\\d{2})?"}
      inputmode="numeric"
    />
  </div>
  <div class="field-wrapper">
    <Textfield
      style="width: 100%;"
      bind:value={percentageTake}
      label="Desired Gains (%)"
      suffix="%"
      input$pattern={"\\d+(\\.\\d{2})?"}
      inputmode="numeric"
    />
  </div>
  <div class="field-wrapper">
    <Textfield style="width: 100%;" bind:value={open} label="Open Value" 
    type="number"
    inputmode="numeric"/>
  </div>
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
  {#if open}
    <div class="data-group">
      <span class="amount-label">Close At or TP: </span>
      <span class="amount-value">{closingValue.toFixed(5)}</span>
    </div>
  {/if}
</div>

<style>
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
    width: 100%;
  }
  .amount-value {
    font-size: 20px;
    font-weight: bold;
  }
  .data-group {
    width: 45%;
    display: flex;
    flex-direction: column;
  }
  .calc-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  @media only screen and (min-width: 768px) {
    .field-wrapper {
      width: 49%;
    }
    .data-group {
      width: 49%;
    }
  }
</style>
