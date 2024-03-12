import { Outlet } from "react-router-dom";
import Navbar from "../Components/Layouts/Navbar";
import { Container } from "@mantine/core";

const AppLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Container size="xl"><Outlet /></Container>
    </div>
  );
};
export default AppLayout;
