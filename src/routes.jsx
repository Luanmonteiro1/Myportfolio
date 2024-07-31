import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages/Homepage";
import { AboutMe } from "./components/pages/AboutPage";
import { Header } from "./components/HeaderSection";
import { Container } from "./components/Container";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutMe />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
