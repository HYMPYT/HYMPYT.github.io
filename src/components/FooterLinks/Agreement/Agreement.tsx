import { Header } from "../../Header/Header"
import css from "./Agreement.module.css"
import { Link, useLocation } from 'react-router-dom'

export function Agreement() {
    const location = useLocation();
    return (
        <>
            <section className={css.hero}>
                <Header />
                <div>
                    <div className={css.agreement}>
                        <div className={css.agreement_info}>
                            Згода на обробку даних користувача
                        </div>
                        <div className={css.agree}>

                        </div>
                        <div className={css.agreement_content_top}>
                            In finibus lectus bibendum facilisis hendrerit. Morbi condimentum magna eros, at porttitor ante aliquam cursus. Donec finibus viverra nulla ac viverra. Vivamus eu blandit odio, ut condimentum ligula. Donec vestibulum lacinia semper. Vestibulum vulputate, est ut semper placerat, orci neque posuere nulla, sit amet convallis nisi ex a sem. Nulla luctus arcu tortor, vitae consequat massa facilisis posuere. Maecenas pellentesque vulputate erat, in congue mi scelerisque sit amet. Vestibulum accumsan sem sit amet pellentesque fringilla. Sed gravida aliquet purus eu gravida. Curabitur ac nisl mauris. Quisque ullamcorper egestas lacus. Donec dignissim aliquam ultricies. <br /><br />

                            Ut pretium diam magna, vel ultricies arcu tincidunt quis. Integer quis lectus efficitur, euismod dolor ut, placerat nulla. Ut suscipit ac odio vel varius. Pellentesque consequat risus sed nunc vehicula accumsan. Vestibulum finibus est ut sapien ultrices fermentum. In nec arcu varius, rhoncus magna nec, lobortis purus.
                        </div>
                        <div className={css.agreement_content_center}>
                            Proin varius turpis aliquam risus commodo, eu posuere lectus gravida. Quisque sed fringilla nisi. Duis luctus efficitur tortor a placerat. Ut vitae dui in elit hendrerit semper. Curabitur ac viverra turpis, vel porta ex. Fusce sed rutrum lacus, sed convallis lorem. In ac elit justo. Sed enim felis, ultricies id turpis aliquet, rhoncus interdum ex.
                        </div>
                        <div className={css.agreement_content_bottom}>
                            <div className={css.common}></div>
                            <div>
                                <ul className={css.list}>
                                    <li className={css.font}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit metus ut libero cursus sodales. Sed viverra sollicitudin lectus, a elementum felis porta sit amet. Pellentesque finibus efficitur libero vitae sollicitudin. Nullam sodales, ex at porta egestas, lectus nisi pellentesque eros, non ultricies est diam vitae ligula. Vestibulum porta ornare pretium. Nunc feugiat sed sapien et facilisis. Cras eu dictum ex. Fusce eget condimentum tortor. Morbi malesuada in quam eu tincidunt. <br /><br />

                                        Nullam malesuada pharetra est eget tempor. Fusce nec felis vitae ligula pharetra rutrum sit amet in augue. Quisque aliquet elit mi, blandit commodo ex consectetur a. Curabitur a lacinia purus, ac egestas nisl. Donec sagittis, dui ac placerat laoreet, velit velit maximus ex, et faucibus nulla risus quis magna. <br /><br /><br />
                                    </li>
                                    <li className={css.font}>
                                        In finibus lectus bibendum facilisis hendrerit. Morbi condimentum magna eros, at porttitor ante aliquam cursus. Donec finibus viverra nulla ac viverra. Vivamus eu blandit odio, ut condimentum ligula. Donec vestibulum lacinia semper. Vestibulum vulputate, est ut semper placerat, orci neque posuere nulla, sit amet convallis nisi ex a sem. Nulla luctus arcu tortor, vitae consequat massa facilisis posuere. Maecenas pellentesque vulputate erat, in congue mi scelerisque sit amet. Vestibulum accumsan sem sit amet pellentesque fringilla. Sed gravida aliquet purus eu gravida. Curabitur ac nisl mauris. Quisque ullamcorper egestas lacus. Donec dignissim aliquam ultricies. <br /><br />

                                        Ut pretium diam magna, vel ultricies arcu tincidunt quis. Integer quis lectus efficitur, euismod dolor ut, placerat nulla. Ut suscipit ac odio vel varius. Pellentesque consequat risus sed nunc vehicula accumsan. Vestibulum finibus est ut sapien ultrices fermentum. In nec arcu varius, rhoncus magna nec, lobortis purus. Praesent in nibh non leo faucibus fringilla. Proin blandit dui a orci sodales, eu dictum est vulputate. Nunc et vulputate sem, vitae elementum risus. <br /><br /><br />
                                    </li>
                                    <li className={css.font}>
                                        Donec euismod lobortis ipsum, vel semper sem dapibus vel. Praesent id vulputate dolor. Integer tristique laoreet cursus. Cras sagittis sagittis gravida. Pellentesque tempor convallis ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ornare cursus nunc. Suspendisse potenti. Duis id consectetur urna. Ut tempus orci dolor, ut venenatis lectus sollicitudin in. Proin id auctor sem. Morbi neque velit, commodo nec gravida eget, accumsan lobortis lectus. Nam sagittis enim id lacus ullamcorper, eget tincidunt elit consectetur. Cras non feugiat mi. Cras maximus metus sed egestas placerat. Nulla luctus condimentum neque, eu ullamcorper ligula tincidunt eget. <br /><br />

                                        Sed id sodales nulla. Fusce et eros velit. Aenean tincidunt enim urna, sit amet blandit nibh posuere non. Nulla faucibus lacus id fringilla lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus vulputate ultrices dui in faucibus. Nullam tristique eu libero sed interdum. Nulla eget feugiat dolor, ac dictum orci. Fusce et ultricies mi. Quisque eros dolor, sodales sed sapien vitae, pretium consequat enim. Suspendisse porta pulvinar fermentum. Phasellus at ligula sem. Aenean malesuada dapibus nunc semper tempus. Proin molestie ultrices neque et euismod. <br /><br /><br />
                                    </li>
                                    <li className={css.font}>
                                        Quisque in dapibus nibh. In blandit vel purus egestas vehicula. Nullam ultrices diam et ex mattis, accumsan commodo quam tempor. Nulla arcu mauris, dapibus nec erat non, fringilla vestibulum quam. Vivamus porttitor rhoncus lectus id commodo. Suspendisse lorem orci, dapibus ac metus a, consectetur ultrices lacus. Curabitur tempor egestas nibh, at viverra elit tempus in. Aliquam egestas condimentum libero at dapibus. In bibendum euismod elit in aliquam. Fusce non ipsum quis justo interdum malesuada ut vel augue. <br /><br /><br />
                                    </li>
                                    <li className={css.font}>
                                        Nam suscipit metus id posuere ultricies. Nunc a mollis tortor. Proin vel sagittis tellus, nec luctus tellus. Suspendisse vitae lacus ut massa tempor ullamcorper quis ut tortor. Maecenas in ex vitae magna pulvinar suscipit id quis neque. Duis sed odio quis orci imperdiet vulputate sed a augue. Aenean diam lacus, hendrerit sit amet purus ac, aliquet condimentum lorem. Maecenas at eros massa. Mauris enim nisi, ultricies tempus ornare sed, tristique nec enim. Curabitur non ex neque. <br /><br />

                                        Nam quis aliquet magna. Donec odio mauris, malesuada sit amet tristique id, rhoncus vel magna. Etiam venenatis fringilla mi, sit amet sollicitudin enim tincidunt eget. Morbi vitae dui nisl. Integer fringilla lectus at ipsum semper molestie. Duis bibendum congue vehicula. Donec sit amet vulputate enim. <br /><br /><br />
                                    </li>
                                    <li className={css.font}>
                                        Cras malesuada elit libero, et pellentesque enim dignissim ut. Duis sagittis libero a sodales bibendum. Nullam sapien elit, fermentum quis posuere vel, ullamcorper quis ex. Cras sed quam at nisi dapibus dapibus. Donec a tincidunt felis. Cras eget est feugiat, gravida risus ut, dignissim quam. Suspendisse quam purus, blandit eu magna sed, varius lobortis lacus. Curabitur lobortis nulla ut pellentesque lacinia. Nulla ultrices nunc urna, nec ultricies tellus tristique ac. Nunc volutpat ornare eros, eu pharetra ligula hendrerit eget. <br /><br />

                                        In hac habitasse platea dictumst. Nunc molestie sagittis mauris. Praesent sit amet facilisis purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque lacinia magna quis sem efficitur aliquet. Praesent finibus condimentum nisi, ac imperdiet risus mattis eu. Maecenas sed facilisis orci. Donec at sem vel arcu cursus vulputate. <br /><br /><br />
                                    </li>
                                    <li className={css.font}>
                                        Pellentesque ornare, dolor vitae consequat efficitur, leo diam interdum ex, eget malesuada massa libero vel ipsum. Maecenas in ante ut velit auctor sagittis non vitae diam. Nunc sit amet turpis dolor. Etiam consectetur sodales leo, ac imperdiet ipsum pulvinar sed. Nulla facilisi. Integer porttitor condimentum aliquet. Curabitur pulvinar eget nulla vel tincidunt. Praesent eros diam, consequat eu mi eget, mollis vulputate diam. Praesent sit amet ante sed ante mattis tempus. <br /><br />

                                        Aenean viverra, lacus nec tempus congue, nisi massa congue justo, vitae bibendum enim ipsum ac lacus. Praesent nibh nisi, egestas quis commodo et, facilisis quis massa. Duis at leo et turpis sollicitudin eleifend nec id tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent tempus est velit, eu molestie eros posuere et. Ut placerat convallis efficitur. Morbi sodales bibendum ultricies. Aenean odio ex, ultrices quis commodo et, tempor sit amet tortor. <br /><br /><br />
                                    </li>
                                    <li className={css.font}>
                                        Morbi neque velit, commodo nec gravida eget, accumsan lobortis lectus. Nam sagittis enim id lacus ullamcorper, eget tincidunt elit consectetur. Cras non feugiat mi. Cras maximus metus sed egestas placerat. Nulla luctus condimentum neque, eu ullamcorper ligula tincidunt eget. <br /><br />

                                        Sed id sodales nulla. Fusce et eros velit. Aenean tincidunt enim urna, sit amet blandit nibh posuere non. Nulla faucibus lacus id fringilla lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus vulputate ultrices dui in faucibus. <br /><br /><br />
                                    </li>
                                </ul>
                                <div className={css.cookie}>
                                    Якщо у вас є запитання щодо цієї політики або ви хотіли б дізнатися більше про файли cookie, які використовуються на наших вебсайтах
                                </div>
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