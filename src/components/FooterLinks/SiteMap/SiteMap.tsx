import {Header} from "../../Header/Header"
import css from "./SiteMap.module.css"
import { Link, useLocation } from 'react-router-dom';

export default function SiteMap() {
    const location = useLocation();
    return (
        <>
            <section className={css.hero}>
                <Header></Header>
                <div className={css.map}>
                    <div className={css.navbuttons}>
                        <ul className={css.links}>
                            <li>
                                <a href="#" className={css.link}>
                                    <div className={css.flight}>

                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className={css.link}>
                                    <div className={css.railway}>

                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className={css.link}>
                                    <div className={css.bus}>

                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className={css.link}>
                                    <div className={css.shelter}>

                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className={css.link}>
                                    <div className={css.car}>

                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={css.sitemap}>
                        <div className={css.sitemap_info}>
                            Карта сайту
                        </div>
                        <div className={css.leftlist}>
                            <ul className={css.left}>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Сполучені Штати – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Мексика – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Сполучені Штати – Канада
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Сполучені Штати – Китай
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Японія – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Сполучені Штати – Італія
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Сполучені Штати – Іспанія
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Німеччина – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Сполучені Штати – Бразилія
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Колумбія – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Сполучені Штати – Домініканська Республіка
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Сполучене Королівство – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Іспанія – Сполучене Королівствo
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Мексика – Канада
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Греція – Франція
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Іспанія – Польща
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Гватемала – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Іспанія – Сполучене Королівствo
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Мексика – Канада
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Греція – Франція
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Іспанія – Китай
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={css.rightlist}>
                            <ul className={css.right}>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Сполучені Штати – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Мексика – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Сполучені Штати – Канада
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Сполучені Штати – Китай
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Японія – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Сполучені Штати – Італія
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Сполучені Штати – Іспанія
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Німеччина – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Сполучені Штати – Бразилія
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Колумбія – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Сполучені Штати – Домініканська Республіка
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Сполучене Королівство – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Іспанія – Сполучене Королівствo
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Мексика – Канада
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Греція – Франція
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Іспанія – Польща
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Гватемала – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Іспанія – Сполучене Королівствo
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Мексика – Канада
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Греція – Франція
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#" className={css.link}>
                                            Рейси Іспанія – Китай
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Link
                            to={`/`}
                            state={{ from: location }}
                        >
                            <a href="/#">
                                <div className={css.buttonlink}>

                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}