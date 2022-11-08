import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Heading } from "../../components/Heading/Heading";
import { Icon } from "../../components/Icon/Icon";
import { Text } from "../../components/Text/Text";

export function SignUp() {
  return (
    <div className="grid grid-cols-[3fr_2fr] grid-rows-[1fr_auto] h-screen bg-white dark:bg-dark-1">
      <div className="bg-signup bg-no-repeat bg-center bg-cover w-full h-full"></div>

      <div className="flex flex-col justify-center pl-10 pr-4">
        <Icon icon="logo" size="2.5rem" color="blue" />

        <Heading size="5xl">Happening now</Heading>

        <Heading size="3xl">Join Twitter today</Heading>

        <div className="w-[70%]">
          <Button size="big" color="black" style="outline" className="mt-8">
            <Icon icon="google" />
            Sign up with Google
          </Button>

          <Button size="big" color="black" style="outline" className="my-4">
            <Icon icon="apple" />
            Sign up with Apple
          </Button>

          <Button size="big" color="black" style="outline" className="mb-6">Sign up with phone or email</Button>

          <Text size="sm" className="mb-5" asChild>
            <p>
            By singing up you agree to the <Link to="../not-found" className="text-blue-1 hover:underline">Terms of Service</Link> and <Link to="../not-found" className="text-blue-1 hover:underline">Privacy Policy</Link>, including <Link to="../not-found" className="text-blue-1 hover:underline">Cookie Use</Link>.
            </p>
          </Text>

          <Text size="lg">
            Already have an account? <Link to="../login" className="text-blue-1 hover:underline">Log in</Link>
          </Text>
        </div>

      </div>

      <div className="flex justify-center flex-wrap 2xl:flex-nowrap gap-x-4 gap-2 col-span-2 py-6 px-2">
        <Text color="black" size="xs" className="hover:underline">
          <Link to="../not-found">About</Link>
        </Text>

        <Text color="black" size="xs" className="hover:underline">
          <Link to="../not-found">Help Center</Link>
        </Text>

        <Text color="black" size="xs" className="hover:underline">
          <Link to="../not-found">Terms of Service</Link>
        </Text>

        <Text color="black" size="xs" className="hover:underline">
          <Link to="../not-found">Privacy Policy</Link>
        </Text>

        <Text color="black" size="xs" className="hover:underline">
          <Link to="../not-found">Cookie Policy</Link>
        </Text>

        <Text color="black" size="xs" className="hover:underline">
          <Link to="../not-found">Ads info</Link>
        </Text>

        <Text color="black" size="xs" className="hover:underline">
          <Link to="../not-found">Blog</Link>
        </Text>

        <Text color="black" size="xs" className="hover:underline">
          <Link to="../not-found">Status</Link>
        </Text>

        <Text color="black" size="xs" className="hover:underline">
          <Link to="../not-found">Carrres</Link>
        </Text>

        <Text color="black" size="xs" className="hover:underline">
          <Link to="../not-found">Brand Resources</Link>
        </Text>

        <Text color="black" size="xs" className="hover:underline">
          <Link to="../not-found">Advertsing</Link>
        </Text>

        <Text color="black" size="xs" className="hover:underline">
          <Link to="../not-found">Marketing</Link>
        </Text>

        <Text color="black" size="xs" className="hover:underline">
          <Link to="../not-found">Twitter for Business</Link>
        </Text>

        <Text color="black" size="xs" className="hover:underline">
          <Link to="../not-found">Developers</Link>
        </Text>

        <Text color="black" size="xs" className="hover:underline">
          <Link to="../not-found">Directory</Link>
        </Text>

        <Text color="black" size="xs" className="hover:underline">
          <Link to="../not-found">Settings</Link>
        </Text>

        <Text color="black" size="xs" className="hover:underline">
          <Link to="../not-found">© 2021 Twitter, Inc.</Link>
        </Text>
      </div>
    </div>
  )
}