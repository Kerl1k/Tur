import ReactDOM from "react-dom/client";
import AppRouter from "./Routers/ManagerRouter/ManagerRouter";
import "./index.css";
import { Provider } from "react-redux";
import * as Store from "./Store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={Store.default}>
    <AppRouter />
  </Provider>
);
