import Vue from "vue";
import App from "./App.vue";
import "./styles/style.css";
import AppFilter from "./components/AppFilter.vue";
import NameCard from "./components/NameCard.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

library.add(faChevronDown, faMagnifyingGlass, faFilter);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("AppFilter", AppFilter);
Vue.component("NameCard", NameCard);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
