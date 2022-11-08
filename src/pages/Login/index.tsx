import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { Button } from "../../components/Button/Button";
import { Heading } from "../../components/Heading/Heading";
import { Icon } from "../../components/Icon/Icon";
import { Input } from "../../components/Input/Input";
import { Text } from "../../components/Text/Text";
import { useData } from "../../context/DataContext/DataContext";
import { useUser } from "../../context/UserContext/UserContext";

export function Login() {
  const [ loginCredential, setLoginCredential ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ isValid, setIsValid ] = useState(true);

  const { users } = useData();
  const { login, logout } = useUser();

  function handleSubmit(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    evt.preventDefault();

    if (!loginCredential || !password) {
      setIsValid(false);
      return;
    }

    const user = users.find(user => (user.email === loginCredential && user.password));

    if (user) {
      setIsValid(true);
      login(user);
    } else {
      setIsValid(false);
    }
  }

  useEffect(() => {
    logout();
  }, []);

  return (
    <div className="h-screen w-full flex justify-center items-center bg-white dark:bg-dark-1">
      <div className="grid w-[450px] max-w-[100%]">
        <Icon icon="logo" color="blue" size="2.5rem" />

        <Heading size="3xl" className="my-9">Log in to Twitter</Heading>

        <form>
          <Input
            type="text"
            placeholder="Phone number, email address"
            value={ loginCredential }
            onChange={ (evt) => setLoginCredential(evt.target.value) }
            className={ clsx("mb-6", { "border-2 border-red": !isValid }) }
            />

          <Input
            type="password"
            placeholder="Password"
            value={ password }
            onChange={ (evt) => setPassword(evt.target.value) }
            className={ clsx("mb-6", { "border-2 border-red": !isValid }) }
          />

          <Button size="big" onClick={ (evt) => handleSubmit(evt) }>Log In</Button>
        </form>

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