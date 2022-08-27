import "./App.css";
import ItemListContainer from "./components/main/ItemListContainer";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"ACÁ VA A IR EL CATÁLOGO"} />
    </>
  );
}

export default App;
