import { Flex, Paper } from "@mantine/core";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
   
      <Paper p="lg" withBorder className="max-w-md mx-auto mt-10" shadow="md">
        <Outlet/>
      </Paper>
  
  );
};
export default AuthLayout;
