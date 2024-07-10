import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Toaster } from "sonner";

function App() {
  return (
    <Provider store={store}>
      <Toaster richColors position="top-center" />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
