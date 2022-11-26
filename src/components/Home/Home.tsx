import css from './Home.module.css';
import { Header } from '../Header/Header';
import { Destinations } from '../Destinations/Destinations';
import { JoinUs } from '../JoinUs/JoinUs';
import { Search } from '../Search/Search';

export function Home() {

  return (
    <>
      <section className={css.hero}>
        <Header />
        <Search />
      </section >
      <Destinations />
      <JoinUs />
      {/* <Footer /> */}
    </>
  );
}
