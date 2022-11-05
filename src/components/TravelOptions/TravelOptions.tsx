import css from './TravelOptions.module.css';
import sprite from '../../images/sprite.svg';
import { Link, useLocation } from 'react-router-dom';
import settingsWhite from '../../images/settingsWhite.svg';
import transport_blue from '../../images/transport_blue.svg';
import bell_white from '../../images/bell_white.svg';
import { Header } from '../Header/Header';

export function TravelOptions() {
  const location = useLocation();
  return (
    <>
      <section className={css.hero}>
        <Header />
        <div>
          <div>
            <ul className={css.ticket__options}>
              <Link
                to={`/cabinet/settings`}
                state={{ from: location }}
              >
                <li className={css.option}>
                  <img
                    src={settingsWhite}
                    alt=""
                    width="32px"
                    height="32px"
                    className={css.option__icon}
                  />
                </li>
              </Link>
              <li className={css.option__transport}>
                <img
                  src={transport_blue}
                  alt=""
                  width="40px"
                  height="40px"
                  className={css.option__icon__transport}
                />
              </li>
              <Link
                to={`/cabinet/notifications`}
                state={{ from: location }}
              >
                <li className={css.option__notification}>
                  <img
                    src={bell_white}
                    alt=""
                    width="28px"
                    height="28px"
                    className={css.option__icon__bell}
                  />
                </li>
              </Link>
            </ul>
          </div>
          <div className={css.details__thumb}>
            <ul className={css.details}>
              <Link
                to={`/cabinet/options/trip`}
                state={{ from: location }}
              >
                <li className={css.travel}>
                  Подорож #1
                  <svg
                    width="25px"
                    height="22px"
                    aria-label=""
                    className={css.icon_printer}
                  >
                    <use href={sprite + '#icon-printer'}></use>
                  </svg>
                  <svg
                    width="25px"
                    height="22px"
                    aria-label=""
                    className={css.icon_details}
                  >
                    <use href={sprite + '#icon-details'}></use>
                  </svg>
                </li>
              </Link>
              <Link
                to={`/cabinet/options/trip`}
                state={{ from: location }}
              >
                <li className={css.travel}>
                  Подорож #2
                  <svg
                    width="25px"
                    height="22px"
                    aria-label=""
                    className={css.icon_printer}
                  >
                    <use href={sprite + '#icon-printer'}></use>
                  </svg>
                  <svg
                    width="25px"
                    height="22px"
                    aria-label=""
                    className={css.icon_details}
                  >
                    <use href={sprite + '#icon-details'}></use>
                  </svg>
                </li>
              </Link>{' '}
              <Link
                to={`/cabinet/options/trip`}
                state={{ from: location }}
              >
                <li className={css.travel}>
                  Подорож #3
                  <svg
                    width="25px"
                    height="22px"
                    aria-label=""
                    className={css.icon_printer}
                  >
                    <use href={sprite + '#icon-printer'}></use>
                  </svg>
                  <svg
                    width="25px"
                    height="22px"
                    aria-label=""
                    className={css.icon_details}
                  >
                    <use href={sprite + '#icon-details'}></use>
                  </svg>
                </li>
              </Link>
              <Link
                to={`/cabinet/options/trip`}
                state={{ from: location }}
              >
                <li className={css.travel}>
                  Подорож #4
                  <svg
                    width="25px"
                    height="22px"
                    aria-label=""
                    className={css.icon_printer}
                  >
                    <use href={sprite + '#icon-printer'}></use>
                  </svg>
                  <svg
                    width="25px"
                    height="22px"
                    aria-label=""
                    className={css.icon_details}
                  >
                    <use href={sprite + '#icon-details'}></use>
                  </svg>
                </li>
              </Link>
              <Link
                to={`/cabinet/options/trip`}
                state={{ from: location }}
              >
                <li className={css.travel}>
                  Подорож #5
                  <svg
                    width="25px"
                    height="22px"
                    aria-label=""
                    className={css.icon_printer}
                  >
                    <use href={sprite + '#icon-printer'}></use>
                  </svg>
                  <svg
                    width="25px"
                    height="22px"
                    aria-label=""
                    className={css.icon_details}
                  >
                    <use href={sprite + '#icon-details'}></use>
                  </svg>
                </li>
              </Link>
              <Link
                to={`/cabinet/options/trip`}
                state={{ from: location }}
              >
                <li className={css.travel}>
                  Подорож #6
                  <svg
                    width="25px"
                    height="22px"
                    aria-label=""
                    className={css.icon_printer}
                  >
                    <use href={sprite + '#icon-printer'}></use>
                  </svg>
                  <svg
                    width="25px"
                    height="22px"
                    aria-label=""
                    className={css.icon_details}
                  >
                    <use href={sprite + '#icon-details'}></use>
                  </svg>
                </li>{' '}
              </Link>
              <Link to={`/`} state={{ from: location }}>
                <button type="button" className={css.button__pink}>
                  <svg
                    width="20px"
                    height="20px"
                    aria-label=""
                    className={css.button_icon}
                  >
                    <use href={sprite + '#icon-search'}></use>
                  </svg>
                  <span className={css.button__text}>До сторінки пошуку</span>
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
