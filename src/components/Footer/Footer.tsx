import css from './Footer.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  return (
    <>
      <section className={css.footer__background}>
        <div className={css.links__thumb}>
          <li className={css.triplanner}>TriPlanner (c) 2022</li>
          <ul className={css.conditions}>
            <Link
              to={`/privacy`}
              state={{ from: location }}
            >
              <li className={css.link}>
                <a href="/#" className={css.footer__links}>
                  Політика конфіденційності
                </a>
              </li>
            </Link>
            <Link
              to={`/cookies`}
              state={{ from: location }}
            >
              <li className={css.link}>
                <a href="/#" className={css.footer__links}>
                  Політика Cookie
                </a>
              </li>
            </Link>
          </ul>

          <ul>
            <Link
              to={`/agreement`}
              state={{ from: location }}
            >
              <li className={css.link}>
                <a href="/#" className={css.footer__links}>
                  Згода на обробку даних
                </a>
              </li>
            </Link>
          </ul>

          <ul>
            <Link
              to={`/contacts`}
              state={{ from: location }}
            >
              <li className={css.link}>
                <a href="/#" className={css.footer__links}>
                  Контакти
                </a>
              </li>
            </Link>

            <Link
              to={`/aboutus`}
              state={{ from: location }}
            >
              <li className={css.link}>
                <a href="/#" className={css.footer__links}>
                  Про нас
                </a>
              </li>
            </Link>

            <Link
              to={`/help`}
              state={{ from: location }}
            >
              <li className={css.link}>
                <a href="/#" className={css.footer__links}>
                  Допомога
                </a>
              </li>
            </Link>

            <Link
              to={`/partnership`}
              state={{ from: location }}
            >
              <li className={css.link}>
                <a href="/#" className={css.footer__links}>
                  Співробітництво
                </a>
              </li>
            </Link>
          </ul>
          <ul>

            <Link
              to={`/sitemap`}
              state={{ from: location }}
            >
              <li className={css.link}>
                <a href="/#" className={css.footer__links}>
                  Мапа сайту
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </section>
    </>
  );
}