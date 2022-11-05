import css from './Notifications.module.css';
import sprite from '../../images/sprite.svg';
import { Link, useLocation } from 'react-router-dom';
import settingsWhite from '../../images/settingsWhite.svg';
import bell_blue from '../../images/bell_blue.svg';
import transport from '../../images/transport.svg';
import { Header } from '../Header/Header';

export function Notifications() {
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
                            <Link to={`/cabinet/options`} state={{ from: location }}>
                                <li className={css.option__transport}>
                                    <img
                                        src={transport}
                                        alt=""
                                        width="40px"
                                        height="40px"
                                        className={css.option__icon__transport}
                                    />
                                </li>
                            </Link>
                            <li className={css.option__notification}>
                                <img
                                    src={bell_blue}
                                    alt=""
                                    width="28px"
                                    height="28px"
                                    className={css.option__icon__bell}
                                />
                            </li>
                        </ul>
                        <div className={css.notifications__thumb}>
                            <h2 className={css.notifications__title}>Сповіщення про ціни</h2>
                            <ul className={css.notification__prices}>
                                <li className={css.notification__destination}>
                                    Стамбул - Париж
                                </li>
                                <li className={css.notification__price}>~ 79 EUR</li>
                                <li>
                                    <button type="button" className={css.save__btn}>
                                        <svg
                                            width="16px"
                                            height="16px"
                                            aria-label=""
                                            className={css.button__icon}
                                        >
                                            <use href={sprite + '#icon-saved'}></use>
                                        </svg>
                                        <span className={css.button__text}>
                                            Перейти до маршруту
                                        </span>
                                    </button>
                                </li>
                            </ul>
                            <ul className={css.notification__prices__second}>
                                <li className={css.notification__destination}>
                                    Мюнхен - Нью-Йорк
                                </li>
                                <li className={css.notification__price}>~ 84 EUR</li>
                                <li>
                                    <button type="button" className={css.save__btn}>
                                        <svg
                                            width="16px"
                                            height="16px"
                                            aria-label=""
                                            className={css.button__icon}
                                        >
                                            <use href={sprite + '#icon-saved'}></use>
                                        </svg>
                                        <span className={css.button__text}>
                                            Перейти до маршруту
                                        </span>
                                    </button>
                                </li>
                            </ul>
                            <ul className={css.notification__prices__third}>
                                <li className={css.notification__destination}>
                                    Мюнхен - Нью-Йорк
                                </li>
                                <li className={css.notification__price}>~ 84 EUR</li>
                                <li>
                                    <button type="button" className={css.save__btn}>
                                        <svg
                                            width="16px"
                                            height="16px"
                                            aria-label=""
                                            className={css.button__icon}
                                        >
                                            <use href={sprite + '#icon-saved'}></use>
                                        </svg>
                                        <span className={css.button__text}>
                                            Перейти до маршруту
                                        </span>
                                    </button>
                                </li>
                            </ul>{' '}
                            <Link to={`/`} state={{ from: location }}>
                                <button type="button" className={css.button__search}>
                                    <svg
                                        width="20px"
                                        height="20px"
                                        aria-label=""
                                        className={css.button_icon}
                                    >
                                        <use href={sprite + '#icon-search'}></use>
                                    </svg>
                                    <span className={css.search__text}>До сторінки пошуку</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
