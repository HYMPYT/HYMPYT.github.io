import css from './Destinations.module.css';
import sprite from '../../images/sprite.svg';

export function Destinations() {
  return (
    <>
      <section className={css.destinations__thumb}>
        <div className={css.popular__destinations}>
          <ul className={css.destinations__list}>
            <li className={css.popular__directions}>
              <svg
                width="16px"
                height="14.5px"
                aria-label="Найпопулярніші напрямки"
                className={css.icon__heart}
              >
                <use href={sprite + '#icon-favorite'}></use>
              </svg>
              Найпопулярніші напрямки
            </li>
            <li className={css.destinations}>Стамбул</li>
            <li className={css.destinations}>Париж</li>
            <li className={css.destinations}>Лондон</li>
            <li className={css.destinations}>Нью-Йорк</li>
            <li className={css.destinations}>Рим</li>
            <li className={css.destinations}>Барселона</li>
            <li className={css.destinations}>Амстердам</li>
          </ul>
          <ul className={css.destinations__list}>
            <li className={css.destinations}>Осло</li>
            <li className={css.destinations}>Мілан</li>
            <li className={css.destinations}>Берлін</li>
            <li className={css.destinations}>Флоренція</li>
            <li className={css.destinations}>Прага</li>
            <li className={css.destinations}>Відень</li>
            <li className={css.destinations}>Сідней</li>
            <li className={css.destinations}>Бангкок</li>
            <li className={css.destinations}>Венеція</li>
          </ul>
        </div>
      </section>
    </>
  );
}
