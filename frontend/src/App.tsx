import Navbar from "./Navbar";
import Header from "./Header";
import PoliciesPage from "./pages/Policies/PoliciesPage";

import "./index.css";

const App = () => (
  <div>
    <Navbar />
    <div className="w-full p-8">
      <Header />
      <PoliciesPage />
    </div>
  </div>
);


export default App;
