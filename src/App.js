import categories from "./data/categories";
import Directory from "./components/Directory/directory.component";

function App() {
  return <Directory categoryItems={categories} />;
}

export default App;
