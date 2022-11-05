import css from './Ticket.module.css';
import sprite from '../../images/sprite.svg';
import place from '../../images/place.svg';
import date from '../../images/date.svg';
import pink from '../../images/pink.svg';
import { Link, useLocation } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Navigation } from '../Navigation/Navigation';
import logo from '../../images/search_logo.svg';

export function Ticket() {
    const location = useLocation();
    return (
        <>
            <div className={css.ticket__header}>
                <div className={css.ticket__container}>
                    <div className={css.ticket}>
                        <div className={css.main__direction__bg}>
                            <ul className={css.directions__thumb}>
                                <li className={css.all__transport}>
                                    <svg
                                        width="62px"
                                        height="25px"
                                        aria-label=""
                                        className={css.highlighted__direction}
                                    >
                                        <use href={sprite + '#icon-directions_transport'}></use>
                                    </svg>
                                </li>
                                <li className={css.directions__transport}>
                                    <svg width="62px" height="25px" aria-label="">
                                        <use href={sprite + '#icon-background_flight'}></use>
                                        <use href={sprite + '#icon-directions-flight'}></use>
                                    </svg>
                                </li>
                                <li className={css.directions__transport}>
                                    <svg width="62px" height="25px" aria-label="">
                                        <use href={sprite + '#icon-background_railway'}></use>
                                        <use href={sprite + '#icon-directions_railway'}></use>
                                    </svg>
                                </li>
                                <li className={css.directions__transport}>
                                    <svg width="62px" height="25px" aria-label="">
                                        <use href={sprite + '#icon-background_bus'}></use>
                                        <use href={sprite + '#icon-directions_bus'}></use>
                                    </svg>
                                </li>
                                <li className={css.directions__transport}>
                                    <svg width="62px" height="25px" aria-label="">
                                        <use href={sprite + '#icon-background_shelter'}></use>
                                        <use href={sprite + '#icon-directions_shelter'}></use>
                                    </svg>
                                </li>
                                <li className={css.directions__transport}>
                                    <svg width="62px" height="25px" aria-label="">
                                        <use href={sprite + '#icon-background_attractions'}></use>
                                        <use href={sprite + '#icon-directions_attractions'}></use>
                                    </svg>
                                </li>
                                <li className={css.directions__transport}>
                                    <svg width="62px" height="25px" aria-label="">
                                        <use href={sprite + '#icon-background_car'}></use>
                                        <use href={sprite + '#icon-directions_car'}></use>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className={css.search}>
                                <li className={css.search__from}>
                                    <img
                                        src={place}
                                        alt=""
                                        className={css.input__icon}
                                        width="22px"
                                        height="24px"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Чернівці, Україна"
                                        autoComplete="off"
                                        autoFocus
                                        className={css.input__direction}
                                    />
                                </li>

                                <li className={css.input__wrapper}>
                                    <svg
                                        width="19px"
                                        height="19px"
                                        aria-label=""
                                        className={css.add}
                                    >
                                        <use href={sprite + '#icon-add'}></use>
                                    </svg>
                                    <img
                                        src={place}
                                        alt=""
                                        className={css.input__icon}
                                        width="22px"
                                        height="24px"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Lausanne, Schweiz (QLS)"
                                        autoComplete="off"
                                        autoFocus
                                        className={css.input__direction}
                                    />
                                    <svg
                                        width="19px"
                                        height="19px"
                                        aria-label=""
                                        className={css.arrows__direction}
                                    >
                                        <use href={sprite + '#icon-arrows-direction'}></use>
                                    </svg>
                                </li>
                            </ul>
                            <ul className={css.search__dates}>
                                <li className={css.search__date}>
                                    <img
                                        src={date}
                                        alt=""
                                        className={css.input__icon}
                                        width="22px"
                                        height="24px"
                                    />
                                    <input
                                        type="text"
                                        autoComplete="off"
                                        autoFocus
                                        placeholder="01.09.2022"
                                        className={css.input__date}
                                    />
                                </li>

                                <li className={css.search__date}>
                                    <img
                                        src={date}
                                        alt=""
                                        className={css.input__icon}
                                        width="22px"
                                        height="24px"
                                    />
                                    <input
                                        type="text"
                                        autoComplete="off"
                                        autoFocus
                                        placeholder="Назад"
                                        className={css.input__date}
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className={css.transport__thumb}>
                            <ul className={css.radiobuttons__options}>
                                <li className={css.transport__option}>
                                    <label className={css.radio__route__label}>
                                        <input
                                            type="radio"
                                            id="route__check"
                                            className={css.radio__route__input}
                                        />
                                        шукати всі види транспорту
                                    </label>
                                </li>
                                <li className={css.transport__option}>
                                    <label className={css.radio__route__label}>
                                        <input
                                            type="radio"
                                            id="route__check"
                                            className={css.radio__route__input}
                                        />
                                        автобуси
                                    </label>
                                </li>
                            </ul>
                            <ul className={css.radiobuttons}>
                                <li className={css.transport__option}>
                                    <label className={css.radio__route__label}>
                                        <input
                                            type="radio"
                                            id="route__check"
                                            className={css.radio__route}
                                        />
                                        авіаперельоти
                                    </label>
                                </li>
                                <li className={css.transport__option}>
                                    <label className={css.radio__route__label}>
                                        <input
                                            type="radio"
                                            id="route__check"
                                            className={css.radio__route}
                                        />
                                        залізниця
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className={css.transport__filter__thumb}>
                            <ul className={css.transport__filter}>
                                <button
                                    type="button"
                                    className={css.transport__filter__results}
                                >
                                    всі результати
                                </button>
                                <button type="button" className={css.transport__filter__btn}>
                                    найдешевші
                                </button>
                                <button type="button" className={css.transport__filter__btn}>
                                    найшвидші
                                </button>
                                <button type="button" className={css.transport__filter__btn}>
                                    рекомендуємо!
                                </button>
                            </ul>
                        </div>
                        <div className={css.offered__ticket}>
                            <ul className={css.travels__filter__btn}>
                                <li>
                                    <button type="button" className={css.transport__price__btn}>
                                        найдешевший
                                    </button>
                                </li>

                                <li className={css.price__btn}>
                                    <button
                                        type="button"
                                        className={css.transport__filter__price}
                                    >
                                        ~ 37 год
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className={css.transport__filter__price}
                                    >
                                        ~ 79 EUR
                                    </button>
                                </li>
                            </ul>
                            <ul className={css.travel__options__images}>
                                <li>
                                    <svg width="24px" height="24px" aria-label="">
                                        <use href={sprite + '#icon-directions_bus-2'}></use>
                                    </svg>
                                </li>
                                <li className={css.arrow}>
                                    <svg width="34px" height="8px" aria-label="">
                                        <use href={sprite + '#icon-yellow-arrow'}></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="24px" height="24px" aria-label="">
                                        <use href={sprite + '#icon-directions_bus-2'}></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="34px" height="8px" aria-label="">
                                        <use href={sprite + '#icon-yellow-arrow'}></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="24px" height="24px" aria-label="">
                                        <use href={sprite + '#icon-directions_railway-2'}></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="34px" height="8px" aria-label="">
                                        <use href={sprite + '#icon-pink-arrow'}></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="24px" height="24px" aria-label="">
                                        <use href={sprite + '#icon-directions_railway-2'}></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="34px" height="8px" aria-label="">
                                        <use href={sprite + '#icon-pink-arrow'}></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="24px" height="24px" aria-label="">
                                        <use href={sprite + '#icon-flight-2'}></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="34px" height="8px" aria-label="">
                                        <use href={sprite + '#icon-blue-arrow'}></use>
                                    </svg>
                                </li>
                                <li>
                                    <img src={pink} alt="" width="17px" height="20px" />
                                </li>
                            </ul>
                            <ul className={css.routes}>
                                <li className={css.route}>
                                    Залізничний вокзал “Чернівці”
                                    <svg
                                        width="3px"
                                        height="6px"
                                        aria-label=""
                                        className={css.link__icon}
                                    >
                                        <use href={sprite + '#icon-yellow-link'}></use>
                                    </svg>
                                </li>
                                <li className={css.route}>
                                    Автовокзал Катовіце
                                    <svg
                                        width="3px"
                                        height="6px"
                                        aria-label=""
                                        className={css.link__icon}
                                    >
                                        <use href={sprite + '#icon-yellow-link'}></use>
                                    </svg>
                                </li>
                                <li className={css.route}>
                                    Katowice Sadowa
                                    <svg
                                        width="3px"
                                        height="6px"
                                        aria-label=""
                                        className={css.link__icon}
                                    >
                                        <use href={sprite + '#icon-pink-link'}></use>
                                    </svg>
                                </li>
                                <li className={css.route}>
                                    Wien
                                    <svg
                                        width="3px"
                                        height="6px"
                                        aria-label=""
                                        className={css.link__icon}
                                    >
                                        <use href={sprite + '#icon-pink-link'}></use>
                                    </svg>
                                </li>
                                <li className={css.route}>
                                    Zurich (ZRH)
                                    <svg
                                        width="3px"
                                        height="6px"
                                        aria-label=""
                                        className={css.link__icon}
                                    >
                                        <use href={sprite + '#icon-blue-link'}></use>
                                    </svg>
                                </li>
                                <li className={css.route}>Lausanne (QLS)</li>
                                <li className={css.notification}>
                                    <p>
                                        <svg
                                            width="23px"
                                            height="22px"
                                            aria-label=""
                                            className={css.notification__image}
                                        >
                                            <use href={sprite + '#icon-notification'}></use>
                                        </svg>
                                    </p>
                                    Наразі через введення Правового режиму Воєнного стану в
                                    Україні проходження кордону може займати більше часу! Читати
                                    більше: dpsu.gov.ua
                                </li>
                                <div className={css.ticket__buttons}>
                                    <button type="button" className={css.download__btn}>
                                        <svg
                                            width="16px"
                                            height="16px"
                                            aria-label=""
                                            className={css.button__icon}
                                        >
                                            <use href={sprite + '#icon-pdf'}></use>
                                        </svg>
                                        <span className={css.button__text}>Завантажити PDF</span>
                                    </button>

                                    <button type="button" className={css.search__btn}>
                                        <svg
                                            width="16px"
                                            height="16px"
                                            aria-label=""
                                            className={css.button__icon}
                                        >
                                            <use href={sprite + '#icon-search'}></use>
                                        </svg>
                                        <span className={css.button__text}> Відкрити деталі</span>
                                    </button>
                                </div>
                            </ul>
                        </div>
                        <div className={css.offered__ticket}>
                            <ul className={css.travels__filter__btn}>
                                <li>
                                    <button type="button" className={css.transport__recommend}>
                                        рекомендуємо
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className={css.transport__price__button}
                                    >
                                        найдешевший
                                    </button>
                                </li>
                                <li className={css.price__btn}>
                                    <button
                                        type="button"
                                        className={css.transport__filter__price}
                                    >
                                        ~ 37 год
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className={css.transport__filter__price}
                                    >
                                        ~ 79 EUR
                                    </button>
                                </li>
                            </ul>
                            <ul className={css.travel__options__images}>
                                <li>
                                    <svg width="24px" height="24px" aria-label="">
                                        <use href={sprite + '#icon-directions_bus-2'}></use>
                                    </svg>
                                </li>
                                <li className={css.arrow}>
                                    <svg width="34px" height="8px" aria-label="">
                                        <use href={sprite + '#icon-yellow-arrow'}></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="24px" height="24px" aria-label="">
                                        <use href={sprite + '#icon-directions_bus-2'}></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="34px" height="8px" aria-label="">
                                        <use href={sprite + '#icon-yellow-arrow'}></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="24px" height="24px" aria-label="">
                                        <use href={sprite + '#icon-directions_railway-2'}></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="34px" height="8px" aria-label="">
                                        <use href={sprite + '#icon-pink-arrow'}></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="24px" height="24px" aria-label="">
                                        <use href={sprite + '#icon-directions_railway-2'}></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="34px" height="8px" aria-label="">
                                        <use href={sprite + '#icon-pink-arrow'}></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="24px" height="24px" aria-label="">
                                        <use href={sprite + '#icon-flight-2'}></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="34px" height="8px" aria-label="">
                                        <use href={sprite + '#icon-blue-arrow'}></use>
                                    </svg>
                                </li>
                                <li>
                                    <img src={pink} alt="" width="17px" height="20px" />
                                </li>
                            </ul>
                            <ul className={css.routes}>
                                <li className={css.route}>
                                    Залізничний вокзал “Чернівці”
                                    <svg
                                        width="3px"
                                        height="6px"
                                        aria-label=""
                                        className={css.link__icon}
                                    >
                                        <use href={sprite + '#icon-yellow-link'}></use>
                                    </svg>
                                </li>
                                <li className={css.route}>
                                    Автовокзал Катовіце
                                    <svg
                                        width="3px"
                                        height="6px"
                                        aria-label=""
                                        className={css.link__icon}
                                    >
                                        <use href={sprite + '#icon-yellow-link'}></use>
                                    </svg>
                                </li>
                                <li className={css.route}>
                                    Katowice Sadowa
                                    <svg
                                        width="3px"
                                        height="6px"
                                        aria-label=""
                                        className={css.link__icon}
                                    >
                                        <use href={sprite + '#icon-pink-link'}></use>
                                    </svg>
                                </li>
                                <li className={css.route}>
                                    Wien
                                    <svg
                                        width="3px"
                                        height="6px"
                                        aria-label=""
                                        className={css.link__icon}
                                    >
                                        <use href={sprite + '#icon-pink-link'}></use>
                                    </svg>
                                </li>
                                <li className={css.route}>
                                    Zurich (ZRH)
                                    <svg
                                        width="3px"
                                        height="6px"
                                        aria-label=""
                                        className={css.link__icon}
                                    >
                                        <use href={sprite + '#icon-blue-link'}></use>
                                    </svg>
                                </li>
                                <li className={css.route}>Lausanne (QLS)</li>
                                <li className={css.notification}>
                                    <p>
                                        <svg
                                            width="23px"
                                            height="22px"
                                            aria-label=""
                                            className={css.notification__image}
                                        >
                                            <use href={sprite + '#icon-notification'}></use>
                                        </svg>
                                    </p>
                                    Наразі через введення Правового режиму Воєнного стану в
                                    Україні проходження кордону може займати більше часу! Читати
                                    більше: dpsu.gov.ua
                                </li>
                                <div className={css.ticket__buttons}>
                                    <button type="button" className={css.download__btn}>
                                        <svg
                                            width="16px"
                                            height="16px"
                                            aria-label=""
                                            className={css.button__icon}
                                        >
                                            <use href={sprite + '#icon-pdf'}></use>
                                        </svg>
                                        <span className={css.button__text}>Завантажити PDF</span>
                                    </button>

                                    <button type="button" className={css.search__btn}>
                                        <svg
                                            width="16px"
                                            height="16px"
                                            aria-label=""
                                            className={css.button__icon}
                                        >
                                            <use href={sprite + '#icon-search'}></use>
                                        </svg>
                                        <span className={css.button__text}> Відкрити деталі</span>
                                    </button>
                                </div>
                            </ul>
                        </div>
                        <div className={css.offered__ticket}>
                            <div className={css.last__option}>
                                <ul className={css.travels__filter__btn}>
                                    <li className={css.price__btn}>
                                        <button
                                            type="button"
                                            className={css.transport__filter__price}
                                        >
                                            ~ 37 год
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            type="button"
                                            className={css.transport__filter__price}
                                        >
                                            ~ 79 EUR
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <ul className={css.travel__options__images}>
                                <li>
                                    <svg width="24px" height="24px" aria-label="">
                                        <use href={sprite + '#icon-directions_bus-2'}></use>
                                    </svg>
                                </li>
                                <li className={css.arrow}>
                                    <svg width="34px" height="8px" aria-label="">
                                        <use href={sprite + '#icon-yellow-arrow'}></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="24px" height="24px" aria-label="">
                                        <use href={sprite + '#icon-directions_bus-2'}></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="34px" height="8px" aria-label="">
                                        <use href={sprite + '#icon-yellow-arrow'}></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="24px" height="24px" aria-label="">
                                        <use href={sprite + '#icon-directions_railway-2'}></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="34px" height="8px" aria-label="">
                                        <use href={sprite + '#icon-pink-arrow'}></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="24px" height="24px" aria-label="">
                                        <use href={sprite + '#icon-directions_railway-2'}></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="34px" height="8px" aria-label="">
                                        <use href={sprite + '#icon-pink-arrow'}></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="24px" height="24px" aria-label="">
                                        <use href={sprite + '#icon-flight-2'}></use>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="34px" height="8px" aria-label="">
                                        <use href={sprite + '#icon-blue-arrow'}></use>
                                    </svg>
                                </li>
                                <li>
                                    <img src={pink} alt="" width="17px" height="20px" />
                                </li>
                            </ul>
                            <ul className={css.routes}>
                                <li className={css.route}>
                                    Залізничний вокзал “Чернівці”
                                    <svg
                                        width="3px"
                                        height="6px"
                                        aria-label=""
                                        className={css.link__icon}
                                    >
                                        <use href={sprite + '#icon-yellow-link'}></use>
                                    </svg>
                                </li>
                                <li className={css.route}>
                                    Автовокзал Катовіце
                                    <svg
                                        width="3px"
                                        height="6px"
                                        aria-label=""
                                        className={css.link__icon}
                                    >
                                        <use href={sprite + '#icon-yellow-link'}></use>
                                    </svg>
                                </li>
                                <li className={css.route}>
                                    Katowice Sadowa
                                    <svg
                                        width="3px"
                                        height="6px"
                                        aria-label=""
                                        className={css.link__icon}
                                    >
                                        <use href={sprite + '#icon-pink-link'}></use>
                                    </svg>
                                </li>
                                <li className={css.route}>
                                    Wien
                                    <svg
                                        width="3px"
                                        height="6px"
                                        aria-label=""
                                        className={css.link__icon}
                                    >
                                        <use href={sprite + '#icon-pink-link'}></use>
                                    </svg>
                                </li>
                                <li className={css.route}>
                                    Zurich (ZRH)
                                    <svg
                                        width="3px"
                                        height="6px"
                                        aria-label=""
                                        className={css.link__icon}
                                    >
                                        <use href={sprite + '#icon-blue-link'}></use>
                                    </svg>
                                </li>
                                <li className={css.route}>Lausanne (QLS)</li>
                                <li className={css.notification}>
                                    <p>
                                        <svg
                                            width="23px"
                                            height="22px"
                                            aria-label=""
                                            className={css.notification__image}
                                        >
                                            <use href={sprite + '#icon-notification'}></use>
                                        </svg>
                                    </p>
                                    Наразі через введення Правового режиму Воєнного стану в
                                    Україні проходження кордону може займати більше часу! Читати
                                    більше: dpsu.gov.ua
                                </li>
                                <div className={css.ticket__buttons}>
                                    <button type="button" className={css.download__btn}>
                                        <svg
                                            width="16px"
                                            height="16px"
                                            aria-label=""
                                            className={css.button__icon}
                                        >
                                            <use href={sprite + '#icon-pdf'}></use>
                                        </svg>
                                        <span className={css.button__text}>Завантажити PDF</span>
                                    </button>

                                    <button type="button" className={css.search__btn}>
                                        <svg
                                            width="16px"
                                            height="16px"
                                            aria-label=""
                                            className={css.button__icon}
                                        >
                                            <use href={sprite + '#icon-search'}></use>
                                        </svg>
                                        <span className={css.button__text}> Відкрити деталі</span>
                                    </button>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={css.navigation}>
                    <Link to={`/`} state={{ from: location }} >
                        <img
                            src={logo}
                            alt=""
                            className={css.logo}
                            width="126px"
                            height="30px"
                        />
                    </Link>
                    <Navigation />
                </div>

            </div>
        </>
    );
}
