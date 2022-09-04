import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import SectionForm from "./layout/SectionForm";
import SectionWhy from "./layout/SectionWhy";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <SectionWhy />
      <SectionForm />
    </div>
  );
}

export default App;
