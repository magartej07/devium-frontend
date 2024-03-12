import { Box, Button, Container, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import Logo from "../Common/Logo";

const Navbar = () => {
  return (
    <Box className="border-b  md:block hidden">
      <Container component={"header"} size="xl" >
        <Group justify="space-between" className="h-16 " align="center">
          <Link to="/">
            <Logo className="w-12 h-12"/>
          </Link>
          <Group h="100%" gap={0} visibleFrom="sm">
            <Button variant="subtle">Home</Button>
            <Button variant="subtle">Cateories</Button>
            <Button variant="subtle">Authors</Button>
          </Group>

          <Group h="100%" gap={5}>
            <Button variant="outline" component={Link} to="/auth/login">Login</Button>
            <Button component={Link} to="/auth/register">Register</Button>
          </Group>
        </Group>
      </Container>
    </Box>
  );
};
export default Navbar;
