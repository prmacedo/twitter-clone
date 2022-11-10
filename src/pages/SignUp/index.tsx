import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Heading } from "../../components/Heading/Heading";
import { Icon } from "../../components/Icon/Icon";
import { Input } from "../../components/Input/Input";
import { Modal, resetScroll } from "../../components/Modal/Modal";
import { IOption, Select } from "../../components/Select/Select";
import { Text } from "../../components/Text/Text";

export function SignUp() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [useEmail, setUseEmail] = useState(false);

  const months = [
    { value: '0', label: 'January'},
    { value: '1', label: 'February'},
    { value: '2', label: 'March'},
    { value: '3', label: 'May'},
    { value: '4', label: 'April'},
    { value: '5', label: 'June'},
    { value: '6', label: 'July'},
    { value: '7', label: 'August'},
    { value: '8', label: 'September'},
    { value: '9', label: 'October'},
    { value: '10', label: 'November'},
    { value: '11', label: 'December'},
  ] as IOption[];

  function getAllDatesInMonth(month: string, year: number) {
    const date = new Date(year, Number(month), 1);

    const dates = [];

    while (date.getMonth() === Number(month)) {
      const currentDate = String(new Date(date).getDate());
      dates.push({ value: currentDate, label: currentDate });
      date.setDate(date.getDate() + 1);
    }

    return dates;
  }

  function createYearsArray() {
    const currentYear = new Date().getFullYear();
    const finalYear = currentYear - 120;

    const years = [];

    for (let index = currentYear; index >= finalYear; index--) {
      const yearString = String(index);
      years.push({ value: yearString, label: yearString });
    }

    return years;
  }

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    resetScroll();
    setIsOpen(false);
  }

  return (
    <>
      <div className="grid grid-cols-[3fr_2fr] grid-rows-[1fr_auto] h-screen bg-white dark:bg-dark-1">
        <div className="bg-signup bg-no-repeat bg-center bg-cover w-full h-full"></div>

        <div className="flex flex-col justify-center pl-10 pr-4">
          <Icon icon="logo" size="2.5rem" color="blue" />

          <Heading size="5xl">Happening now</Heading>

          <Heading size="3xl">Join Twitter today</Heading>

          <div className="w-[70%]">
            <Button
              size="big"
              color="black"
              style="outline"
              className="mt-8"
              onClick={() => setIsOpen(true)}
            >
              <Icon icon="google" />
              Sign up with Google
            </Button>

            <Button
              size="big"
              color="black"
              style="outline"
              className="my-4"
              onClick={() => setIsOpen(true)}
            >
              <Icon icon="apple" />
              Sign up with Apple
            </Button>

            <Button
              size="big"
              color="black"
              style="outline"
              className="mb-6"
              onClick={() => setIsOpen(true)}
            >
              Sign up with phone or email
            </Button>

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
      {
        isOpen &&
        <Modal.Container>
          <Modal.Content>
            <form className="w-[750px]" onSubmit={(evt) => handleSubmit(evt)}>
              <Icon icon="logo" color="blue" size="2rem" className="block mx-auto" />

              <Heading size="2xl" className="mt-5">Create an account</Heading>

              <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(evt) => setName(evt.target.value)}
                className="mt-3"
              />

              {
                useEmail ?
                <Input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(evt) => setEmail(evt.target.value)}
                  className="mt-2"
                />
                :
                <Input
                  type="text"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(evt) => setPhone(evt.target.value)}
                  className="mt-2"
                />
              }

              <Text color="blue" className="hover:underline cursor-pointer inline-block mt-2 mb-3" asChild>
                <span onClick={() => setUseEmail(!useEmail)}>Use { useEmail ? 'phone number' : 'email'}</span>
              </Text>

              <Heading size="sm">Date of Birth</Heading>

              <Text className="inline-block mt-1 mb-2">Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</Text>

              <div className="grid grid-cols-[2fr_1fr_1fr] gap-x-4">
                <Select
                  options={months}
                  placeholder="Month"
                  value={ month }
                  setValue={ setMonth }
                />

                <Select
                  options={ getAllDatesInMonth(month, year) }
                  placeholder="Day"
                  value={ day }
                  setValue={ setDay }
                />

                <Select
                  options={ createYearsArray() }
                  placeholder="Year"
                  value={ year }
                  setValue={ setYear }
                />
              </div>

              <Button type="submit" size="big" className="mt-4">Next</Button>
            </form>
          </Modal.Content>
        </Modal.Container>
      }
    </>
  )
}