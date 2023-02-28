import Cardwidget from "./Components/CardWidget/Cardwidget";
import Footer from "./Components/Footer/Footer";
import ItemListConteiner from "./Components/ItemListConteiner/ItemListConteiner";
import { Navbar } from "./Components/Navbar/Navbar";


function App() {
  return (
    <div>
      <Cardwidget />
      <ItemListConteiner greetin={Bienvenidos} />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
