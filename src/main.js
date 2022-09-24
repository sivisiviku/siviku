import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";
import firebase from "firebase";
import store from "./store/index";

const firebaseConfig = {
  apiKey: "AIzaSyDOXH5S6AK8kw6KJyoc8ias7Peqh6RLjEc",
  authDomain: "siviku-b91d0.firebaseapp.com",
  projectId: "siviku-b91d0",
  storageBucket: "siviku-b91d0.appspot.com",
  messagingSenderId: "958746909398",
  appId: "1:958746909398:web:4143b328bb58ae3e900777",
};

firebase.initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);
app.use(store);
app.mount("#app");
