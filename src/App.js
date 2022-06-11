import logo from "./logo.svg";
import Layout from "./Component/Layout/Layout";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastProvider, useToasts } from "react-toast-notifications";

function App() {
  return (
    <ToastProvider>
      <div className="App">
        <Layout></Layout>
      </div>
    </ToastProvider>
  );
}

export default App;
