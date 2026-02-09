import { Header, Footer, Container } from "../components";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};
