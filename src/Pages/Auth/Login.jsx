import { Anchor, Text } from "@mantine/core";
import LoginForm from "../../Forms/Login/LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Text size="lg" fw="500" component="h1">
        Welcome back
      </Text>
      <Text size="sm">Please login to your account</Text>
      <LoginForm />
      <Anchor component={Link} to={"/auth/register"}>
        don&apos;t have an account? Register
      </Anchor>
    </div>
  );
};
export default Login;
