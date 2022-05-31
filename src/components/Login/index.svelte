<script>
  import Textfield from "@smui/textfield";
  import Paper, { Content } from "@smui/paper";
  import Button, { Label } from "@smui/button";
  let username = "";
  let password = "";
</script>

<div class="login">
  <Paper>
    <Content>
      <div class="login-content">
        <Textfield
          style="width: 100%;"
          bind:value={username}
          label="Username"
        />
        <Textfield
          style="width: 100%;"
          bind:value={password}
          label="Password"
          inputmode="password"
          type="password"
        />
      </div>
      <div class="login-action">
        <!-- <Link to="/reset-password">Reset Password</Link> -->
        <Button color="primary" variant="raised">
          <Label>Login</Label>
        </Button>
      </div>
    </Content>
  </Paper>
</div>

<style>
  .login {
    width: 90%;
  }
  .login-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 20px;
  }
  .login-action {
    margin: 20px;
    display: flex;
    justify-content: space-between;
  }
</style>
