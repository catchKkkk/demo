import { createStore } from "vuex";
import axios from "axios";

export default createStore({
	state: {
		count: 0,
		list: [],
		inputValue: "aaa",
		nextId: 5,
		viewKey: "all",
	},
	mutations: {
		add(state) {
			state.count++;
		},
		addN(state, step) {
			state.count += step;
		},
		sub(state) {
			state.count--;
		},
		subN(state, step) {
			state.count -= step;
		},
		initList(state, data) {
			state.list = data;
		},
		setInputValue(state, val) {
			state.inputValue = val;
		},
		addItem(state) {
			const item = {
				id: state.nextId++,
				info: state.inputValue,
				done: false,
			};
			state.list.push(item);
			state.inputValue = "";
		},
		removeItem(state, id) {
			state.list = state.list.filter((x) => x.id !== id);
		},
		toggleItemDone(state, id) {
			const item = state.list.find((x) => x.id === id);
			item.done = !item.done;
		},
		finishDoneItems(state) {
			state.list = state.list.filter((x) => !x.done);
		},
		changeViewKey(state, key) {
			state.viewKey = key;
		},
	},
	actions: {
		addAsync(context) {
			setTimeout(() => {
				context.commit("add");
			}, 1000);
		},
		addNAsync(context, step) {
			setTimeout(() => {
				context.commit("addN", step);
			}, 1000);
		},
		subAsync(context) {
			setTimeout(() => {
				context.commit("sub");
			}, 1000);
		},
		subNAsync(context, step) {
			setTimeout(() => {
				context.commit("subN", step);
			}, 1000);
		},
		getList(context) {
			axios.get("/list.json").then(({ data }) => {
				context.commit("initList", data);
			});
		},
	},
	getters: {
		showNum(state) {
			return "当前最新的count是：【" + state.count + "】";
		},
		unDone(state) {
			return state.list.filter((x) => !x.done).length;
		},
		dataSource(state) {
			switch (state.viewKey) {
				case "all":
					return state.list;
				case "undone":
					return state.list.filter((x) => !x.done);
				case "done":
					return state.list.filter((x) => x.done);
			}
		},
	},
	modules: {},
});
