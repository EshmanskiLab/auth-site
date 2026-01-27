<script setup lang="ts">

</script>

<template>
	<div class="logo">
		<img src="/images/flask.svg" alt="Auth Space" />
		<div class="name">AUTH SERVICE</div>
		<div class="additional">
			<span>by</span> <span class="organization-name">EshmanskiLab</span>
		</div>
	</div>

</template>

<style lang="less" scoped>
.logo {
	width: fit-content;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	position: relative;

	z-index: 3;

	font-size: 16px;
	padding: 2em;
}

.logo > img {
	width: 50%;
}

.logo>.name {
	font-family: 'Bungee-Regular';
	font-size: 3em;
	color: #1f1f1f;
}

.logo>.additional {
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	font-style: italic;
	font-weight: bold;
	font-size: 1.5em;
	color: #1f1f1f;

	position: absolute;
	right: -2%;
	bottom: -3%;
}

.logo>.additional>.organization-name {
	font-family: 'Modak-Regular';
	font-weight: 100;
	font-size: 2em;
	color: #ff6f00;
	text-shadow: 2px 2px #3e3e3e;
}

@media (max-width: 1200px) {
	.logo {
		font-size: 12px;
	}
}

@media (max-width: 900px) {
	.logo {
		font-size: 10px;
	}

	.logo>.additional {
		right: 8%;
	}
}

@media (max-width: 700px) {
	.logo {
		font-size: 8px;
	}

	.logo>.additional {
		right: 15%;
	}
}
</style>