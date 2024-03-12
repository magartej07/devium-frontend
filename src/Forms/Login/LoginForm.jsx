import { Anchor, Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form>
      <Stack>
        <TextInput label="Email" type="email" withAsterisk />
        <Stack gap={0}>
          <PasswordInput label="Password" withAsterisk />
          <Anchor
            component={Link}
            className="text-xs self-end"
            to={"/auth/forgot-password"}
          >
            Forget Password?
          </Anchor>
        </Stack>

        <Button type="submit">Login</Button>
      </Stack>
    </form>
  );
};
export default LoginForm;
