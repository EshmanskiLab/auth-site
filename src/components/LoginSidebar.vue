<script setup lang="ts">

</script>

<template>
  <div class="login-sidebar">
    <h1>Login</h1>
    <form action="<%= pagePath %>login" method="POST">
      <table>
        <tr>
          <th><label for="email">Email:</label></th>
          <th><input type="text" id="email" name="email" required></th>
        </tr>

        <tr>
          <th><label for="password">Password:</label></th>
          <th><input type="password" id="password" name="password" required></th>
        </tr>

        <tr>
          <th></th>
          <th><button class="login-bt" type="submit">Login</button></th>
        </tr>
      </table>
    </form>
  </div>
</template>

<style lang="less" scoped>
.login-sidebar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 5px;
  background-color: rgb(84, 84, 84);

  color: white;
  margin-left: auto;
}

.login-sidebar form {
  width: calc(100% - 20px);
  max-width: calc(100% - 20px);
}

.login-sidebar table {
  width: 100%;
  border-collapse: collapse;
}

.login-sidebar table th {
  text-align: right;
}

.login-sidebar table th:first-child {
  width: auto;
  white-space: nowrap;
}

.login-sidebar table th:last-child {
  width: 100%;
}

.login-sidebar input {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.login-bt {
  margin-top: 10px;
}
</style>