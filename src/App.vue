<template>
	<div>
		<Addition />

		<Subtraction />
	</div>
</template>

<script>
import Addition from "./components/Addition.vue";
import Subtraction from "./components/Subtraction.vue";

export default {
	data() {
		return {};
	},
	components: {
		Addition,
		Subtraction,
	},
};
</script>
