import css from './Home.module.css';
import sprite from '../../images/sprite.svg';
import { Link, useLocation } from 'react-router-dom';
import place from '../../images/place.svg';
import date from '../../images/date.svg';
import people from '../../images/people.svg';
import { Header } from '../Header/Header';
import { Destinations } from '../Destinations/Destinations';
import { JoinUs } from '../JoinUs/JoinUs';

export function Home() {
  const location = useLocation();
  return (
    <>
      <section className={css.hero}>
        <Header />
        <div>
          <div className={css.ticket__thumb}>
            <ul className={css.direction__images}>
              <li className={css.all__directions}>
                <svg
                  width="116px"
                  height="47px"
                  aria-label=""
                  className={css.direction__image}
                >
                  <use href={sprite + '#icon-background-1'}></use>
                  <use href={sprite + '#icon-cars'}></use>
                </svg>
              </li>
              <li className={css.direction}>
                <svg
                  width="116px"
                  height="47px"
                  aria-label=""
                  className={css.direction__image}
                >
                  <use href={sprite + '#icon-background-2'}></use>
                  <use href={sprite + '#icon-flight'}></use>
                </svg>
              </li>
              <li className={css.direction}>
                <svg
                  width="116px"
                  height="47px"
                  aria-label=""
                  className={css.direction__image}
                >
                  <use href={sprite + '#icon-background-2'}></use>
                  <use href={sprite + '#icon-railway'}></use>
                </svg>
              </li>
              <li className={css.direction}>
                <svg
                  width="116px"
                  height="47px"
                  aria-label=""
                  className={css.direction__image}
                >
                  <use href={sprite + '#icon-background-2'}></use>
                  <use href={sprite + '#icon-bus'}></use>
                </svg>
              </li>
              <li className={css.direction}>
                <svg
                  width="116px"
                  height="47px"
                  aria-label=""
                  className={css.direction__image}
                >
                  <use href={sprite + '#icon-background-2'}></use>
                  <use href={sprite + '#icon-shelter'}></use>
                </svg>
              </li>
              <li className={css.direction}>
                <svg
                  width="116px"
                  height="47px"
                  aria-label=""
                  className={css.direction__image}
                >
                  <use href={sprite + '#icon-background-2'}></use>
                  <use href={sprite + '#icon-attractions'}></use>
                </svg>
              </li>
              <li className={css.direction}>
                <svg
                  width="116px"
                  height="47px"
                  aria-label=""
                  className={css.direction__image}
                >
                  <use href={sprite + '#icon-background-2'}></use>
                  <use href={sprite + '#icon-car'}></use>
                </svg>
              </li>
            </ul>
            <ul>
              <div className={css.ticket}>
                <div className={css.input__wrapper}>
                  <img
                    src={place}
                    alt=""
                    className={css.input__icon}
                    width="22px"
                    height="24px"
                  />
                  <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Чернівці, Україна"
                    className={css.ticket__input__place}
                  />
                </div>
                <li>
                  <svg
                    width="24px"
                    height="24px"
                    aria-label="Зміна напрямку"
                    className={css.change__icon}
                  >
                    <use href={sprite + '#icon-direction'}></use>
                  </svg>
                </li>
                <div className={css.input__wrapper}>
                  <img
                    src={place}
                    alt=""
                    className={css.input__icon}
                    width="22px"
                    height="24px"
                  />
                  <label>
                    <input
                      type="text"
                      autoComplete="off"
                      autoFocus
                      placeholder="Країна, місто, населений пункт"
                      className={css.ticket__input__place}
                    />
                  </label>
                </div>
                <div className={css.input__wrapper}>
                  <img
                    src={date}
                    alt=""
                    width="22px"
                    height="24px"
                    className={css.input__date__icon}
                  />
                  <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="01.09.2022"
                    className={css.ticket__input}
                  />
                </div>
                <div className={css.input__wrapper}>
                  <img
                    src={date}
                    alt=""
                    width="22px"
                    height="24px"
                    className={css.input__date__icon}
                  />
                  <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Назад"
                    className={css.ticket__input}
                  />
                </div>{' '}
                <div className={css.input__wrapper}>
                  <img
                    src={people}
                    alt=""
                    width="22px"
                    height="24px"
                    className={css.input__date__icon}
                  />
                  <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="1 Дорослий"
                    className={css.ticket__input}
                  />
                </div>
                <li className={css.ticket__search}>
                  <Link to={`/tickets/ticketId`} state={{ from: location }}>
                    <button className={css.ticket__button} type="submit">
                      <svg width="22px" height="25px" aria-label="Пошук">
                        <use href={sprite + '#icon-search'}></use>
                      </svg>
                    </button>
                  </Link>
                </li>
                <li className={css.route__hard}>
                  <label className={css.radio__route__label}>
                    <input
                      type="radio"
                      id="route__check"
                      className={css.radio__route}
                    />
                    Складний маршрут
                  </label>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </section>
      <Destinations />
      <JoinUs />
      {/* <Footer /> */}
    </>
  );
}
