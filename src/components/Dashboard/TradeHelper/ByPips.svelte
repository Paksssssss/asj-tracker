<script lang="ts">
  import Textfield from "@smui/textfield";
  let capital = 0.0;
  let pips = 0.0;
  // let direction = TradeDirection.BUY;
  $: lotSize = Math.floor((capital / 830) * 100) / 100;
  $: commision = lotSize * 30;
  $: netProfit = lotSize * pips;
  $: closedProfit = netProfit - commision;
</script>

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
      bind:value={pips}
      label="Pip Goal"
      suffix="%"
      input$pattern={"\\d+(\\.\\d{2})?"}
    />
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
    <span class="amount-label">Net Profit: </span>
    <span class="amount-value">{netProfit}</span>
  </div>
  <div class="data-group">
    <span class="amount-label">Closed Profit: </span>
    <span class="amount-value">{closedProfit.toFixed(2)}</span>
  </div>
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
