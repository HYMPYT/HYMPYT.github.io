import css from './JoinUs.module.css';
import sprite from '../../images/sprite.svg';
import qrCode from '../../../src/qrCode.jpg';
import googlePlay from '../../images/googlePlay.svg';
import appStore from '../../images/appStore.svg';

export function JoinUs() {
  return (
    <>
      <section className={css.order__section}>
        <div className={css.qr__background}>
          <div className={css.order}>
            <li className={css.download__app}>Завантажте наш додаток</li>

            <li className={css.qr}>
              <img src={qrCode} alt="" className={css.qr__image} />
            </li>
            <li className={css.app__order}>
              При замовленні через додаток Ви можете заощадити до 10%,
            </li>
            <li className={css.app__order}>
              отримуєте нагадування і найкращі пропозиції
            </li>
            <li className={css.order__message}>
              Надіслати посилання на телефон
            </li>

            <div className={css.input__wrapper}>
              <svg
                width="18px"
                height="18px"
                aria-label=""
                className={css.input__icon}
              >
                <use href={sprite + '#icon-flag-ukraine'}></use>
              </svg>
              <input
                type="tel"
                placeholder="+380 _ _ _ _ _ _ _"
                className={css.phone__input}
              />
              <button type="button" className={css.send__button}>
                Надіслати
              </button>
            </div>

            <div className={css.stores}>
              <img
                src={googlePlay}
                alt=""
                width="170px"
                height="53px"
                className={css.store}
              />
              <img
                src={appStore}
                alt=""
                width="179px"
                height="53px"
                className={css.store}
              />
            </div>
          </div>
        </div>
        <div className={css.corona__thumb}>
          <div className={css.corona__btn__thumb}>
            <button type="button" className={css.corona__button}>
              Інтерактивна мапа COVID-правил
            </button>
          </div>

          <svg
            width="79px"
            height="79px"
            aria-label=""
            className={css.corona__big}
          >
            <use href={sprite + '#icon-corona-big'}></use>
          </svg>
          <svg
            width="62px"
            height="62px"
            aria-label=""
            className={css.corona__medium}
          >
            <use href={sprite + '#icon-corona-medium'}></use>
          </svg>
          <svg
            width="31px"
            height="31px"
            aria-label=""
            className={css.corona__small}
          >
            <use href={sprite + '#icon-corona-small'}></use>
          </svg>
        </div>
      </section>
    </>
  );
}
