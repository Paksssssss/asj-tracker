<script lang="ts">
  import Button, { Label } from "@smui/button";
  let usePhp = false;
  let startCapital = 0;
  let addedCapital = 0;
  let todayTrade = 0;
  let currentAccValue = 0;
  let income = 0;
</script>

<div class="account-actions">
  <Button color="secondary" variant="text"><Label>Edit</Label></Button>
</div>
<div class="account-balance">
  <div class="balance-col">
    <div>
      <span class="amount-label">Starting Capital:</span>
      <span class="amount-value">${startCapital}</span>
    </div>
    <br />
    <div>
      <span class="amount-label">Added Capital:</span>
      <span class="amount-value">${addedCapital}</span>
    </div>
    <br />
  </div>
  <div class="balance-col">
    <div>
      <span class="amount-label">Today's Trade Income:</span>
      <span class="amount-value">${todayTrade}</span>
    </div>
    <br />
    <div>
      <span class="amount-label">Current Account Value:</span>
      <span class="amount-value">${currentAccValue}</span>
    </div>
    <br />
    <div>
      <span class="amount-label">Total Income:</span>
      <span class="amount-value">${income}</span>
    </div>
    <br />
  </div>
</div>

<style>
  .account-actions {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    padding-right: 25px;
  }
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
  .amount-label {
    font-size: 20px;
  }
  .amount-value {
    font-size: 20px;
    font-weight: bold;
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
