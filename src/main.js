import { createApp } from "vue";
import Store from "./vuex";
import Antd from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/reset.css";

const app = createApp(App);

app.use(Store);
app.use(Antd);

app.mount("#app");
