import css from './Navigation.module.css';
import sprite from '../../images/sprite.svg';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();
  return (
    <>
      <nav>
        <div className={css.header}>
          <ul className={css.header__features}>
            <li className={css.header__feature}>
              <svg
                width="8px"
                height="14px"
                aria-label=""
                className={css.header__images__left}
              >
                <use href={sprite + '#icon-currency'}></use>
              </svg>
              $ USD
              <svg
                width="24px"
                height="24px"
                aria-label=""
                className={css.header__images__right}
              >
                <use href={sprite + '#icon-arrow-black'}></use>
              </svg>
            </li>
            <li className={css.header__feature}>
              <svg
                width="20px"
                height="20px"
                aria-label=""
                className={css.header__images__left}
              >
                <use href={sprite + '#icon-support-black'}></use>
              </svg>
              Допомога
            </li>
            <li className={css.header__feature}>
              <svg
                width="18px"
                height="18px"
                aria-label=""
                className={css.header__images__left}
              >
                <use href={sprite + '#icon-flag-ukraine'}></use>
              </svg>
              UA
              <svg
                width="24px"
                height="24px"
                aria-label=""
                className={css.header__images__right}
              >
                <use href={sprite + '#icon-arrow-black'}></use>
              </svg>
            </li>
            <Link to={`/cabinet/settings`} state={{ from: location }} >
                  
            <button type="button" className={css.button__login}>
              <svg
                width="20px"
                height="20px"
                aria-label="Увійти"
                className={css.login__icon}
              >
                <use href={sprite + '#icon-login'}></use>
              </svg>
              <span className={css.login__text}>Увійти</span>
            </button>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}
