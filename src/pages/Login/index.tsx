import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Heading } from "../../components/Heading/Heading";
import { Icon } from "../../components/Icon/Icon";
import { Input } from "../../components/Input/Input";
import { Text } from "../../components/Text/Text";

export function Login() {
  const [ loginCredential, setLoginCredential ] = useState("");
  const [ password, setPassword ] = useState("");

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="grid w-[450px] max-w-[100%]">
        <Icon icon="logo" color="blue" size="2.5rem" />

        <Heading size="3xl" className="my-9">Log in to Twitter</Heading>

        <Input
          type="text"
          placeholder="Phone number, email address"
          value={ loginCredential }
          onChange={ (evt) => setLoginCredential(evt.target.value) }
          className="mb-6"
          />

        <Input
          type="password"
          placeholder="Password"
          value={ password }
          onChange={ (evt) => setPassword(evt.target.value) }
          className="mb-6"
        />

        <Button size="big">Log In</Button>

        <div className="flex justify-between mt-10">
          <Link to="not-found">
            <Text color="blue" className="hover:underline">Forgot password?</Text>
          </Link>

          <Link to="not-found">
            <Text color="blue" className="hover:underline">Sign up to Twitter</Text>
          </Link>
        </div>
      </div>
    </div>
  )
}