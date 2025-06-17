import { createRoot } from "react-dom/client";
import App from "./components/App.tsx";
import "./app/global.css";
import { Provider } from "react-redux";
import store from "./store/index.store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
