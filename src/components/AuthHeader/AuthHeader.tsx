import css from './AuthHeader.module.css';
import sprite from '../../images/sprite.svg';
import React from "react";
import { Link, useLocation } from 'react-router-dom';

export default function AuthHeader() {
    const location = useLocation();
    return (
        <>
            <div className={css.header}>
                <Link
                    to={`/`}
                    state={{ from: location }}
                >
                    <a href="#">
                        <svg
                            width="126px"
                            height="30px"
                            aria-label="Логотип сервісу"
                            className={css.logo}
                        >
                            <use href={sprite + '#icon-logo'}></use>
                        </svg>
                    </a>
                </Link>
                <ul className={css.header__features}>
                    <li className={css.header__feature}>
                        <Link
                            to={`/help`}
                            state={{ from: location }}
                        >
                            <a href="#">
                                <svg
                                    width="14px"
                                    height="16px"
                                    aria-label=""
                                    className={css.header__images__left}
                                >
                                    <use href={sprite + '#icon-support'}></use>
                                </svg>
                                Допомога
                            </a>
                        </Link>
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
                            width="11px"
                            height="7px"
                            aria-label=""
                            className={css.header__images__right}
                        >
                            <use href={sprite + '#icon-arrow_down'}></use>
                        </svg>
                    </li>
                </ul>
            </div>
        </>
    );
}
