<script setup lang="ts">
import useBubbles from '../composables/useBubbles';
import AuthLogo from './AuthLogo.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import '../styles/bubbles.css'

const visitBackgroundRef = ref<HTMLDivElement | null>(null);
const { startBubbles, stopBubbles } = useBubbles(visitBackgroundRef);

onMounted(() => {
	startBubbles();
});

onUnmounted(() => {
	stopBubbles();
});
</script>

<template>
	<div ref="visitBackgroundRef" class="visit-background">
		<AuthLogo />
	</div>
</template>

<style lang="less" scoped>
.visit-background {
	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;
	height: 100%;
	background: linear-gradient(270deg,
			#6366f1,
			#22d3ee,
			#a855f7,
			#f43f5e);
	background-size: 800% 800%;
	animation: gradient 30s ease infinite;
	overflow: hidden;
}

@keyframes gradient {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>