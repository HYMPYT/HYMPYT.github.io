import css from "./Reg.module.css"
import AuthHeader from "../../components/AuthHeader/AuthHeader"
import { Link, useLocation } from 'react-router-dom';

export default function Auth() {
    const location = useLocation();
    return (
        <>
            <section className={css.hero}>
                <AuthHeader></AuthHeader>
                <div className={css.container}>
                    <div className={css.navbuttons}>
                        <ul className={css.links}>
                            <li>
                                <Link
                                    to={`/auth`}
                                    state={{ from: location }}
                                >
                                    <a href="#">
                                        <div className={css.auth}>

                                        </div>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/reg`}
                                    state={{ from: location }}
                                >
                                    <a href="#">
                                        <div className={css.reg}>

                                        </div>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={css.reg_content}>
                        <div className={css.social}>
                            <p>Увійти через</p>
                            <ul className={css.social_log}>
                                <li><button className={css.google}></button></li>
                                <li><button className={css.facebook}></button></li>
                            </ul>
                            <p>Або</p>
                            <ul className={css.inputs}>
                                <li>
                                    <input type="text" placeholder="Ім'я" className={css.enter} />
                                    <br></br>
                                    <span className={css.attention}>Заповнювати ім'я тільки латиницею</span>
                                    <br></br>
                                </li>
                                <li>
                                    <input type="email" placeholder="Адреса електронної пошти" className={css.enter} />
                                </li>
                                <li>
                                    <input type="password" placeholder="Пароль" className={css.enter} />
                                    <br></br>
                                    <span className={css.attention}>Пароль повинен містити від 8 до 20 символів,<br />
                                        щонайменше одну заголовну літеру, одне число та<br />
                                        один спеціальний символ.</span>
                                </li>
                                <li>
                                    <input type="password" placeholder="Повторити пароль" className={css.enter} />
                                </li>
                                <li>
                                    <input type="radio" className={css.radiobutton} />
                                    <label className={css.attention}>Натискаючи кнопку реєстрації, я приймаю<br />
                                        умови Договору оферти і не заперечую проти<br />
                                        <Link to="/privacy"><a href="#">Обробки моїх персональних даних</a></Link> і передачі їх<br />
                                        третім особам (авіаперевізнику та ін.).
                                    </label>
                                </li>
                                <li>
                                    <Link
                                        to={`/`}
                                        state={{ from: location }}
                                    >
                                        <button type="submit" className={css.btn_login}>Створити аккаунт</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}