<template>
	<h3>{{ showNum }}</h3>
	<button @click="sub">-1</button>
	<button @click="subN(3)">-N</button>
	<button @click="subAsync">-1 Async</button>
	<button @click="subNAsync(5)">-N Async</button>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
	data() {
		return {};
	},
	computed: {
		...mapState(["count"]),
		...mapGetters(["showNum"]),
	},
	methods: {
		...mapMutations(["sub", "subN"]),
		...mapActions(["subAsync", "subNAsync"]),
	},
};
</script>
