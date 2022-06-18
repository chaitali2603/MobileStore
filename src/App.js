import logo from "./logo.svg";
import Layout from "./Component/Layout/Layout";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastProvider, useToasts } from "react-toast-notifications";
import "react-toastify/dist/ReactToastify.css";
import 'react-awesome-slider/dist/styles.css';


function App() {
  return (
    <div className="App">
      <Layout></Layout>
    </div>
  );
}

export default App;
