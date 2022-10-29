import { Header } from "../../Header/Header"
import css from "./Contacts.module.css"

export function Contacts() {
    return (
        <>
            <section className={css.hero}>
                <Header />
                <div>
                    <div className={css.contacts}>
                        <div className={css.contacts_info}>
                            Контактна інформація
                        </div>
                        <div className={css.contact}>

                        </div>
                        <div className={css.contacts_content_top}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.<br /><br />

                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                        </div>
                        <div className={css.contacts_content_center}>
                            In at dui turpis. Cras porta velit gravida massa faucibus, at tempor enim lacinia. Ut vel lacus sem. Vestibulum hendrerit lorem neque, vel hendrerit ex pellentesque eget. Mauris ut gravida ex. Aenean eget lobortis augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean consequat eget ex nec vulputate.
                        </div>
                        <div className={css.line1}>

                        </div>
                        <div className={css.contacts_content_bottom}>
                            <div>
                                <ul>
                                    <li>
                                        <div className={css.email}>

                                        </div>
                                        <span className={css.textemail}>triplanner.support@gmail.com</span>
                                    </li>
                                    <li>
                                        <div className={css.number}>

                                        </div>
                                        <span className={css.textnumber}>+1 098 765 4320</span>
                                    </li>
                                    <li>
                                        <div className={css.location}>

                                        </div>
                                        <span className={css.textlocation}>330 Congress St, Бостон, Масачуссетс 02210,<br />
                                            Сполучені Штати Америки</span>
                                    </li>
                                    <li>
                                        <div className={css.whatsapp}>

                                        </div>
                                        <div className={css.telegram}>

                                        </div>
                                        <div className={css.messenger}>

                                        </div>
                                        <div className={css.viber}>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className={css.line2}>

                            </div>
                            <div className={css.calendar}>

                            </div>
                            <span className={css.textcalendar}>Пн-Пт	с 9:00 до 00:00<br />
                                Сб, Нд	с 10:00 до 19:00</span>
                            <a href="/TriPlanner">
                                <div className={css.buttonlink}>

                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}