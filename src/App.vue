<script setup lang="ts">
import VisitBackground from './components/VisitBackground.vue';
import LoginSidebar from './components/LoginSidebar.vue';
import { onMounted, ref } from 'vue';

const isMobile = ref(false)

onMounted(() => {
  isMobile.value = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
});
</script>

<template>
  <div class="app">
    <div class="login-view">
      <div class="main">
        <VisitBackground />
      </div>

      <div v-if="!isMobile" class="sidebar">
        <LoginSidebar />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.login-view {
  display: flex;

  width: 100%;
  height: 100%;
}

.main {
  flex-grow: 1;
}

.sidebar {
  width: 400px;
}

@media (max-width: 1200px) {
  .sidebar {
      width: 300px;
      font-size: 14px;
  }
}

@media (max-width: 900px) {
  .sidebar {
      width: 200px;
      font-size: 12px;
  }
}
</style>
