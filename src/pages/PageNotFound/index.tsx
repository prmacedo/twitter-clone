import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Footer } from "../../components/Footer/Footer";
import { Sidemenu } from "../../components/Sidemenu/Sidemenu";
import { Text } from "../../components/Text/Text";

import './styles.css';

export function PageNotFound() {
  return (
    <div className="not-found overflow-y-auto">
      <main className="not-found__container flex justify-center bg-white dark:bg-dark-1">
        <div className="not-found__left">
          <Sidemenu currentPage="" />
        </div>

        <div className="not-found__center flex flex-col items-center text-center pt-12">
          <Text color="gray" className="mb-7">Hmm...this page doesn’t exist. Try searching for something else.</Text>
          <Link to={"/"}>
            <Button>Search</Button>
          </Link>
        </div>

      </main>
      <Footer />
    </div>
  )
}