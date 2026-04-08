import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../src/styles/font.css";


// PrimeVue
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura"; // ✅ NEW

import Menubar from "primevue/menubar";
import Badge from "primevue/badge";
import InputText from "primevue/inputtext";
import Avatar from "primevue/avatar";
import Ripple from "primevue/ripple";

import "primeicons/primeicons.css"; // icons
import 'primeflex/primeflex.css';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: Aura // ✅ THIS REPLACES OLD CSS IMPORTS
  }
});

// components
app.component("Menubar", Menubar);
app.component("Badge", Badge);
app.component("InputText", InputText);
app.component("Avatar", Avatar);

app.directive("ripple", Ripple);

app.mount("#app");