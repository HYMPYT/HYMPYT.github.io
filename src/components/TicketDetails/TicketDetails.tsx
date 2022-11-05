import css from './TicketDetails.module.css';
import sprite from '../../images/sprite.svg';
import { Link, useLocation } from 'react-router-dom';
import settings from '../../images/settings.svg';
import transport from '../../images/transport.svg';
import bell from '../../images/bell.svg';
import { Header } from '../Header/Header';

export function TicketDetails() {
    const location = useLocation();
    return (
        <>
            <section className={css.hero}>
                <Header />
                <div>
                    <div>
                        <ul className={css.ticket__options}>
                            <li className={css.option}>
                                <img
                                    src={settings}
                                    alt=""
                                    width="32px"
                                    height="32px"
                                    className={css.option__icon}
                                />
                            </li>
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
                            <Link
                                to={`/cabinet/notifications`}
                                state={{ from: location }}
                            >
                                <li className={css.option__notification}>
                                    <img
                                        src={bell}
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
                            <li className={css.title}>Налаштування</li>
                            <li>
                                <label className={css.label}>
                                    Логін
                                    <input
                                        type="text"
                                        placeholder="Grigoriy"
                                        className={css.input}
                                    />
                                </label>
                            </li>
                            <li>
                                <label className={css.label}>
                                    Адреса електронної пошти
                                    <input
                                        type="text"
                                        placeholder="gregory19@gmail.com"
                                        className={css.input}
                                    />
                                    <svg
                                        width="33px"
                                        height="33px"
                                        aria-label=""
                                        className={css.icon_edit}
                                    >
                                        <use href={sprite + '#icon-edit'}></use>
                                    </svg>
                                </label>
                            </li>
                            <li>
                                <label className={css.label}>
                                    Пароль
                                    <input
                                        type="text"
                                        placeholder="Greg123._007"
                                        className={css.input}
                                    />
                                </label>
                                <svg
                                    width="33px"
                                    height="33px"
                                    aria-label=""
                                    className={css.icon_edit__password}
                                >
                                    <use href={sprite + '#icon-edit'}></use>
                                </svg>
                            </li>
                            <li className={css.limits}>
                                Пароль повинен містити від 8 до 20 символів, щонайменше одну
                                заголовну літеру, одне число та один спеціальний символ.
                            </li>
                            <li>
                                <label className={css.label}>
                                    Посилання на сторінку у Facebook
                                    <input
                                        type="text"
                                        placeholder="https://www.facebook.com/grigori_tsafsman"
                                        className={css.input}
                                    />
                                    <svg
                                        width="33px"
                                        height="33px"
                                        aria-label=""
                                        className={css.icon_edit}
                                    >
                                        <use href={sprite + '#icon-edit'}></use>
                                    </svg>
                                </label>
                            </li>
                            <li className={css.logout}>
                                <button type="button" className={css.button}>
                                    <svg
                                        width="20px"
                                        height="20px"
                                        aria-label=""
                                        className={css.button_icon}
                                    >
                                        <use href={sprite + '#icon-logout'}></use>
                                    </svg>
                                    <span className={css.button__text}>Вийти з аккаунту</span>
                                </button>
                            </li>
                            <li>
                                <button type="button" className={css.button}>
                                    <svg
                                        width="20px"
                                        height="20px"
                                        aria-label=""
                                        className={css.button_icon}
                                    >
                                        <use href={sprite + '#icon-bin'}></use>
                                    </svg>
                                    <span className={css.button__text}>Видалити аккаунт</span>
                                </button>
                            </li>
                            <li>
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
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
