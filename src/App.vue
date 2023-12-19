<template>
	<div>
		<!-- <Addition />

		<Subtraction /> -->
		<a-input placeholder="请输入任务" class="my-ipt" :value="inputValue" @change="handleInputChange"></a-input>
		<a-button type="primary" @click="addItemToList">添加事项</a-button>
		<a-list bordered :dataSource="dataSource" class="dt-list">
			<template #renderItem="{ item }">
				<a-list-item>
					<a-checkbox :checked="item.done" @change="onCheckboxChange(item.id)">{{ item.info }}</a-checkbox>
					<template #actions>
						<a @click="removeItemById(item.id)">删除</a>
					</template>
				</a-list-item>
			</template>

			<template #footer>
				<div class="footer">
					<span>{{ unDone }}条剩余</span>
					<a-button-group>
						<a-button :type="viewKey === 'all' ? 'primary' : 'default'" @click="changeKey('all')">全部</a-button>
						<a-button :type="viewKey === 'undone' ? 'primary' : 'default'" @click="changeKey('undone')">未完成</a-button>
						<a-button :type="viewKey === 'done' ? 'primary' : 'default'" @click="changeKey('done')">已完成</a-button>
					</a-button-group>
					<a @click="finishDone">清除已完成</a>
				</div>
			</template>
		</a-list>
	</div>
</template>

<script>
// import Addition from "./components/Addition.vue";
// import Subtraction from "./components/Subtraction.vue";
import { mapState, mapGetters } from "vuex";

export default {
	data() {
		return {};
	},
	// components: {
	// 	Addition,
	// 	Subtraction,
	// },
	created() {
		this.$store.dispatch("getList");
	},
	computed: {
		...mapState(["inputValue", "viewKey"]),
		...mapGetters(["unDone", "dataSource"]),
	},
	methods: {
		handleInputChange(ev) {
			this.$store.commit("setInputValue", ev.target.value);
		},
		addItemToList() {
			if (this.inputValue.trim().length <= 0) {
				this.$message.warning("请输入任务名称");
			}

			this.$store.commit("addItem");
		},
		removeItemById(id) {
			this.$store.commit("removeItem", id);
		},
		onCheckboxChange(id) {
			this.$store.commit("toggleItemDone", id);
		},
		finishDone() {
			this.$store.commit("finishDoneItems");
		},
		changeKey(key) {
			this.$store.commit("changeViewKey", key);
		},
	},
};
</script>

<style scoped>
#app {
	padding: 10px;
}
.my-ipt {
	width: 500px;
	margin-right: 10px;
}
.dt-list {
	width: 500px;
	margin-top: 10px;
}
.footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
