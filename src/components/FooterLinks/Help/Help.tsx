import { Header } from "../../Header/Header"
import css from "./Help.module.css"
import { Link, useLocation } from 'react-router-dom'

export function Help() {
    const location = useLocation();
    return (
        <>
            <section className={css.hero}>
                <Header />
                <div>
                    <div className={css.help}>
                        <div className={css.help_info}>
                            Допомога
                        </div>
                        <div className={css.helper}>

                        </div>
                        <div className={css.help_content_top}>
                            In finibus lectus bibendum facilisis hendrerit. Morbi condimentum magna eros, at porttitor ante aliquam cursus. Donec finibus viverra nulla ac viverra. Vivamus eu blandit odio, ut condimentum ligula. Donec vestibulum lacinia semper. Vestibulum vulputate, est ut semper placerat, orci neque posuere nulla, sit amet convallis nisi ex a sem. Nulla luctus arcu tortor, vitae consequat massa facilisis posuere. Maecenas pellentesque vulputate erat, in congue mi scelerisque sit amet. Vestibulum accumsan sem sit amet pellentesque fringilla. Sed gravida aliquet purus eu gravida. Curabitur ac nisl mauris. Quisque ullamcorper egestas lacus. Donec dignissim aliquam ultricies.<br /><br />

                            Ut pretium diam magna, vel ultricies arcu tincidunt quis. Integer quis lectus efficitur, euismod dolor ut, placerat nulla. Ut suscipit ac odio vel varius. Pellentesque consequat risus sed nunc vehicula accumsan. Vestibulum finibus est ut sapien ultrices fermentum. In nec arcu varius, rhoncus magna nec, lobortis purus.
                        </div>
                        <div className={css.help_content_center}>
                            Proin varius turpis aliquam risus commodo, eu posuere lectus gravida. Quisque sed fringilla nisi. Duis luctus efficitur tortor a placerat. Ut vitae dui in elit hendrerit semper. Curabitur ac viverra turpis, vel porta ex. Fusce sed rutrum lacus, sed convallis lorem. In ac elit justo. Sed enim felis, ultricies id turpis aliquet, rhoncus interdum ex.
                        </div>
                        <div className={css.inner}>
                            <input type="text" className={css.search} placeholder="Загальний пошук по сайту">
                            </input>
                            <input type="button" value="" className={css.buttonsearch} />
                        </div>
                        <div className={css.searcharticle}>
                            Пошук статей за заголовками
                        </div>
                        <ul className={css.list}>
                            <li>
                                <a href="#">
                                    <div className={css.adventures}></div>
                                    <span className={css.adventurestext}>Подорожі</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className={css.prices}></div>
                                    <span className={css.pricestext}>Ціни</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className={css.searching}></div>
                                    <span className={css.searchingtext}>Пошук</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className={css.booking}></div>
                                    <span className={css.bookingtext}>Бронювання</span>
                                </a>
                            </li>
                        </ul>

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