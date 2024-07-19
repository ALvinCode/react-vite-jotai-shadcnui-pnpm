import "./App.css";

import { Route, Routes } from "react-router-dom";

import Layout from "./bc/layout";
import Home from "./pages/home";
import Users from "./pages/users";

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  </Layout>
);

export default App;
