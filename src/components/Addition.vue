<template>
	<h3>{{ $store.getters.showNum }}</h3>
	<button @click="addhandle1">+1</button>
	<button @click="addhandle2">+N</button>
	<button @click="addhandle3">+1 Async</button>
	<button @click="addhandle4">+N Async</button>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		addhandle1() {
			this.$store.commit("add");
		},
		addhandle2() {
			this.$store.commit("addN", 3);
		},
		addhandle3() {
			this.$store.dispatch("addAsync");
		},
		addhandle4() {
			this.$store.dispatch("addNAsync", 5);
		},
	},
};
</script>
