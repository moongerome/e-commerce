import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
function App() {
  const About = () => {
    return <h1>About page is here</h1>;
  };
  const Contact = () => {
    return <h1>Contact page is here</h1>;
  };
  const SignIn = () => {
    return <h1>Sign In page is here</h1>;
  };
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
