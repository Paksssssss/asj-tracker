<script lang="ts">
  import Select, { Option } from "@smui/select";
  import { CalculatorType } from "lib/types/Dashboard";
  import ByGains from "./ByGains.svelte";
  import ByPercentage from "./ByPercentage.svelte";
  import ByPips from "./ByPips.svelte";

  let calcTypeOptions = [
    { value: CalculatorType.PERCENTAGE, label: "By Percentage" },
    { value: CalculatorType.GAINS, label: "By Gains" },
    { value: CalculatorType.PIPS, label: "By PIPS" },
  ];

  let calcType = CalculatorType.PERCENTAGE;
  $: console.log(calcType);
</script>

<div class="daily-helper">
  <h2 id="daily-helper-title">Daily Helper</h2>
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
    <ByPercentage />
  {:else if calcType === CalculatorType.PIPS}
    <ByPips />
  {:else if calcType === CalculatorType.GAINS}
    <ByGains />
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
</style>
