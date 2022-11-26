import {Header} from "../../Header/Header"
import css from "./AboutUs.module.css"
import { Link, useLocation } from 'react-router-dom'

export default function AboutUs() {
    const location = useLocation();
    return (
        <>
            <section className={css.hero}>
                <Header></Header>
                <div>
                    <div className={css.aboutus}>
                        <div className={css.aboutus_info}>
                            Про нас
                        </div>
                        <div className={css.us}>

                        </div>
                        <div className={css.aboutus_content_top}>
                            Ми команда талановитих, цілеспрямованих однодумців з усього світу. Нас не лякають нововведення, ми завжди готові спробувати щось нове. Ми хочемо допомагати людям вирішувати складні проблеми, пов’язані з подорожами.
                            TriPlanner залишається незалежною компанією, яка швидко розвивається. Ми маємо представництва в Європі, Північній Америці та Азії. <br /><br />

                            TriPlanner – це інструмент, який допомагає знайти оптимальні варіанти під час планування подорожі. Ви обираєте поїздку, а потім здійснюєте бронювання безпосередньо в авіакомпанії або туристичному агентстві на власний вибір. Саме там зазвичай ви зможете отримати відповіді на будь-які запитання щодо бронювання.
                        </div>
                        <div className={css.aboutus_content_center}>
                            Ми зберігаємо ваші дані, лише доки ми цього потребуємо або доки від нас цього вимагає закон. Потім ми видаляємо ваші дані або анонімізуємо їх, щоб вас не можна було ідентифікувати за ними. Ми поводимося з даними відповідно до цілі, для якої вони використовуються. Проте ви можете в будь-який час попросити нас видалити їх.
                        </div>
                        <div className={css.aboutus_content_bottom}>
                            <div className={css.common}></div>
                            <div>
                                <ul className={css.list}>
                                    <li className={css.font}>
                                        <div className={css.year}>2022</div> <br />
                                        Aenean non elit ut nisi aliquet vehicula sit amet quis nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut condimentum laoreet elit, viverra congue mi viverra nec. Morbi tempus consequat nulla sit amet faucibus. Aliquam erat orci, tincidunt nec neque ac, venenatis bibendum tellus. Phasellus in congue sem. Donec nec ullamcorper elit, vitae condimentum nisi. Vivamus ac eleifend massa. Suspendisse blandit dapibus lectus, vel lobortis lorem tristique non. Nam imperdiet augue dui, et lacinia elit consectetur ac. Proin sed est est. <br /><br />
                                    </li>
                                    <li className={css.font}>
                                        <div className={css.year}>2023</div> <br />
                                        Phasellus ac ligula enim. Suspendisse massa est, euismod at congue vitae, mattis vel mi. Donec ullamcorper eget nulla at scelerisque. Cras nunc orci, aliquam sed augue vel, venenatis vulputate ex. Vivamus tristique at lectus eget venenatis. Aenean dignissim tellus elementum est cursus tempus. Integer efficitur faucibus sapien nec imperdiet. <br /><br />
                                    </li>
                                    <li className={css.font}>
                                        <div className={css.year}>2025</div> <br />
                                        Aliquam ut erat rutrum, sagittis nulla sed, volutpat mi. Aliquam pharetra ultrices diam, et venenatis orci placerat in. Ut ut velit ipsum. Ut tristique ex mattis lorem volutpat, quis imperdiet orci semper. Cras nec elit tempus, fermentum nulla sed, sodales lectus. Suspendisse cursus volutpat dignissim. Nunc vel lacinia nisl. Fusce eleifend urna ac urna maximus, pretium iaculis massa lobortis. Proin commodo ac lectus ac sodales. Etiam et felis at dui malesuada rutrum. Ut id fringilla lorem, a mattis felis. Nam sed nunc nec turpis vehicula porta. Phasellus in est mollis tortor facilisis consequat in ac magna. Vestibulum ut orci a ipsum bibendum sagittis. Nunc consectetur dignissim rutrum.<br /><br />
                                    </li>
                                    <li className={css.font}>
                                        <div className={css.year}>2025</div> <br />
                                        Pellentesque at pretium enim, vitae suscipit odio. Praesent dictum augue urna, eget efficitur dui volutpat semper. Sed ac hendrerit risus, quis tincidunt nisl. Integer dignissim rutrum iaculis. Vestibulum pellentesque non neque at sollicitudin. In ut venenatis lectus. Maecenas eu urna nulla. Donec vitae enim tempor, feugiat nibh sit amet, convallis nisi. Integer ornare ex diam, eget porta mi porttitor ut. Proin aliquet bibendum elit. Cras euismod finibus felis sed ultrices. Nullam et metus et nulla faucibus ultricies quis eu libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.<br /><br /><br /><br /><br />
                                    </li>
                                    <li className={css.font}>
                                        <div className={css.year}>2028</div> <br />
                                        Maecenas eu urna nulla. Donec vitae enim tempor, feugiat nibh sit amet, convallis nisi. Integer ornare ex diam, eget porta mi porttitor ut. Proin aliquet bibendum elit.
                                    </li>
                                </ul>
                            </div>
                            <div className={css.cookie}>
                                Якщо у вас є запитання щодо цієї політики або ви хотіли б дізнатися більше про файли cookie, які використовуються на наших вебсайтах
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
                </div>
            </section>
        </>
    )
}