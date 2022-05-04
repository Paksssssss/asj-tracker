<script lang="ts">
  import Select, { Option } from "@smui/select";
  import Radio from "@smui/radio";
  import FormField from "@smui/form-field";
  import { CalculatorType, TradeDirection } from "lib/types/Dashboard";
  import ByGains from "./ByGains.svelte";
  import ByPercentage from "./ByPercentage.svelte";
  import ByPips from "./ByPips.svelte";

  let calcTypeOptions = [
    { value: CalculatorType.PERCENTAGE, label: "By Percentage" },
    { value: CalculatorType.GAINS, label: "By Gains" },
    { value: CalculatorType.PIPS, label: "By PIPS" },
  ];

  let tradeDirectionOpt = [
    { label: "Buy", value: TradeDirection.BUY },
    { label: "Sell", value: TradeDirection.SELL },
  ];

  let tradeDirection = TradeDirection.BUY;
  let calcType = CalculatorType.PERCENTAGE;
</script>

<div class="daily-helper">
  <h2 id="daily-helper-title">Daily Helper</h2>
  <div class="buy-sell">
    {#each tradeDirectionOpt as { label, value }}
      <FormField style="width: 50%">
        <Radio bind:group={tradeDirection} {value} />
        <span slot="label">
          {label}
        </span>
      </FormField>
    {/each}
  </div>
  <div class="select-wrapper">
    <Select
      bind:value={calcType}
      label="Calculate gains by"
      style="width: 100%;"
    >
      {#each calcTypeOptions as { value, label }}
        <Option {value}>{label}</Option>
      {/each}
    </Select>
  </div>
  {#if calcType === CalculatorType.PERCENTAGE}
    <ByPercentage {tradeDirection} />
  {:else if calcType === CalculatorType.PIPS}
    <ByPips {tradeDirection} />
  {:else if calcType === CalculatorType.GAINS}
    <ByGains {tradeDirection} />
  {/if}
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

  .select-wrapper {
    width: 100%;
    margin-bottom: 10px;
  }

  .buy-sell {
    width: 100%;
  }
</style>
