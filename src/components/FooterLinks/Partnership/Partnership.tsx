import { Header } from "../../Header/Header"
import css from "./Partnership.module.css"
import { Link, useLocation } from 'react-router-dom'

export function Partnership() {
    const location = useLocation();
    return (
        <>
            <section className={css.hero}>
                <Header />
                <div>
                    <div className={css.partnership}>
                        <div className={css.partnership_info}>
                            Співробітництво з нами
                        </div>
                        <div className={css.partner}>

                        </div>
                        <div className={css.partnership_content_top}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. <br /><br />

                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                        </div>
                        <div className={css.partnership_content_center}>
                            In at dui turpis. Cras porta velit gravida massa faucibus, at tempor enim lacinia. Ut vel lacus sem. Vestibulum hendrerit lorem neque, vel hendrerit ex pellentesque eget. Mauris ut gravida ex. Aenean eget lobortis augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean consequat eget ex nec vulputate.
                        </div>
                        <ul className={css.list}>
                            <li>
                                <div className={css.computer}></div>
                                <span className={css.computertext}>Заповніть форму з заявою зі<br />	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;співробітництвом</span>
                            </li>
                            <li>
                                <div className={css.blank}></div>
                                <span className={css.blanktext}>Підпишіть з нами контракт</span>
                            </li>
                        </ul>
                        <a href="#">
                            <div className={css.buttonpartner}>

                            </div>
                        </a>
                        <div className={css.line}>

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