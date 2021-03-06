import "neuets";
import "neuets";
import Vue from "vue";
import App from "./App.vue";

if (process.client) {
  require("./registerServiceWorker");
}

Vue.config.productionTip = false;

export default ({ router, store }: any) => {
  return new Vue({
    router,
    store,
    render: h => h(App)
  });
};
