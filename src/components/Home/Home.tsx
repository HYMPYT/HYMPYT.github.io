import css from './Home.module.css';
import sprite from '../../images/sprite.svg';
import { Link, useLocation } from 'react-router-dom';
import place from '../../images/place.svg';
import date from '../../images/date.svg';
import people from '../../images/people.svg';
import { Header } from '../Header/Header';
import { Destinations } from '../Destinations/Destinations';
import { JoinUs } from '../JoinUs/JoinUs';
import { CustomDatePicker } from '../CustomDatePicker/CustomDatePicker';
import { useEffect, useState } from 'react';
import { useGetCitiesQuery, useLazyGetTicketsQuery } from '../../store/triplanner/triplanner.api';
import { useCitySuggest } from '../../hooks/debounce';

const datePickerInputs = [
  {
    placeholder: new Date().toDateString(),
    date: new Date()
  },
  {
    placeholder: "Назад",
    date: null
  }
]

export function Home() {

  const [fromSearch, setFromSearch] = useState('')
  const [toSearch, setToSearch] = useState('')

  const [dropdownFrom, setDropdownFrom] = useState(false)
  const [dropdownTo, setDropdownTo] = useState(false)

  const [fromCitySuggest, toCitySuggest] = useCitySuggest(fromSearch, toSearch)

  const fromData = useGetCitiesQuery(fromCitySuggest, {
    skip: fromCitySuggest.length < 1,
    refetchOnFocus: true
  }).data

  const toData = useGetCitiesQuery(toCitySuggest, {
    skip: toCitySuggest.length < 1,
    refetchOnFocus: true
  }).data

  useEffect(() => {
    setDropdownFrom(fromCitySuggest.length > 0 && fromData?.length! > 0 && fromData?.findIndex((c) => c.name === fromSearch) === -1)
  }, [fromCitySuggest, fromData, fromSearch])

  useEffect(() => {
    setDropdownTo(toCitySuggest.length > 0 && toData?.length! > 0 && toData?.findIndex((c) => c.name === toSearch) === -1)
  }, [toCitySuggest, toData, toSearch])

  const clickHandlerFrom = (cityName: string) => {
    setFromSearch(cityName)
    setDropdownFrom(false)
  }

  const clickHandlerTo = (cityName: string) => {
    setToSearch(cityName)
    setDropdownTo(false)
  }

  const location = useLocation();

  return (
    <>
      <div className={css.hero}>
        <Header />
        <div>
          <div className={css.ticket__thumb}>
            <ul className={css.direction__images}>
              <li className={css.all__directions}>
                <svg
                  width="116px"
                  height="47px"
                  aria-label=""
                  className={css.direction__image}
                >
                  <use href={sprite + '#icon-background-1'}></use>
                  <use href={sprite + '#icon-cars'}></use>
                </svg>
              </li>
              <li className={css.direction}>
                <svg
                  width="116px"
                  height="47px"
                  aria-label=""
                  className={css.direction__image}
                >
                  <use href={sprite + '#icon-background-2'}></use>
                  <use href={sprite + '#icon-flight'}></use>
                </svg>
              </li>
              <li className={css.direction}>
                <svg
                  width="116px"
                  height="47px"
                  aria-label=""
                  className={css.direction__image}
                >
                  <use href={sprite + '#icon-background-2'}></use>
                  <use href={sprite + '#icon-railway'}></use>
                </svg>
              </li>
              <li className={css.direction}>
                <svg
                  width="116px"
                  height="47px"
                  aria-label=""
                  className={css.direction__image}
                >
                  <use href={sprite + '#icon-background-2'}></use>
                  <use href={sprite + '#icon-bus'}></use>
                </svg>
              </li>
              <li className={css.direction}>
                <svg
                  width="116px"
                  height="47px"
                  aria-label=""
                  className={css.direction__image}
                >
                  <use href={sprite + '#icon-background-2'}></use>
                  <use href={sprite + '#icon-shelter'}></use>
                </svg>
              </li>
              <li className={css.direction}>
                <svg
                  width="116px"
                  height="47px"
                  aria-label=""
                  className={css.direction__image}
                >
                  <use href={sprite + '#icon-background-2'}></use>
                  <use href={sprite + '#icon-attractions'}></use>
                </svg>
              </li>
              <li className={css.direction}>
                <svg
                  width="116px"
                  height="47px"
                  aria-label=""
                  className={css.direction__image}
                >
                  <use href={sprite + '#icon-background-2'}></use>
                  <use href={sprite + '#icon-car'}></use>
                </svg>
              </li>
            </ul>
            <ul>
              <div className={css.ticket}>
                <div className={css.input__wrapper}>
                  <img
                    src={place}
                    alt=""
                    className={css.input__icon}
                    width="22px"
                    height="24px"
                  />
                  <input
                    type="text"
                    placeholder="Чернівці, Україна"
                    className={css.ticket__input__place}
                    value={fromSearch}
                    onChange={e => setFromSearch(e.target.value)}
                  />
                  {dropdownFrom && <ul className={css.dropdown__list}>
                    {fromData?.map(city => (
                      <li
                        key={city.id}
                        onClick={() => clickHandlerFrom(city.name)}
                        className={css.dropdown__list__item}
                      >{city.name}</li>
                    ))}
                  </ul>}
                </div>
                <li>
                  <svg
                    width="24px"
                    height="24px"
                    aria-label="Зміна напрямку"
                    className={css.change__icon}
                  >
                    <use href={sprite + '#icon-direction'}></use>
                  </svg>
                </li>
                <div className={css.input__wrapper}>
                  <img
                    src={place}
                    alt=""
                    className={css.input__icon}
                    width="22px"
                    height="24px"
                  />
                  <label>
                    <input
                      type="text"
                      placeholder="Країна, місто, населений пункт"
                      className={css.ticket__input__place}
                      value={toSearch}
                      onChange={e => setToSearch(e.target.value)}
                    />
                  </label>
                  {dropdownTo && <ul className={css.dropdown__list}>
                    {toData?.map(city => (
                      <li
                        key={city.id}
                        onClick={() => clickHandlerTo(city.name)}
                        className={css.dropdown__list__item}
                      >{city.name}</li>
                    ))}
                  </ul>}
                </div>
                {
                  datePickerInputs.map(datePicker => (
                    <div key={datePicker.placeholder} className={css.input__wrapper}>
                      <img
                        src={date}
                        alt=""
                        width="22px"
                        height="24px"
                        className={css.input__date__icon}
                      />
                      <CustomDatePicker placeholder={datePicker.placeholder} date={datePicker.date} />
                    </div>
                  ))
                }
                {/* <div className={css.input__wrapper}>
                  <img
                    src={date}
                    alt=""
                    width="22px"
                    height="24px"
                    className={css.input__date__icon}
                  />
                  <CustomDatePicker placeholder={new Date().toDateString()} />
                </div>
                <div className={css.input__wrapper}>
                  <img
                    src={date}
                    alt=""
                    width="22px"
                    height="24px"
                    className={css.input__date__icon}
                  />
                  <CustomDatePicker placeholder="Назад" useSecondState={true} disable={true} />
                </div> */}
                <div className={css.input__wrapper}>
                  <img
                    src={people}
                    alt=""
                    width="22px"
                    height="24px"
                    className={css.input__date__icon}
                  />
                  <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="1 Дорослий"
                    className={css.ticket__input}
                  />
                </div>
                <li className={css.ticket__search}>
                  <Link to={`/tickets/ticketId`} state={{ from: location }} >
                    <button className={css.ticket__button} type="submit" >
                      <svg width="22px" height="25px" aria-label="Пошук">
                        <use href={sprite + '#icon-search'}></use>
                      </svg>
                    </button>
                  </Link>
                </li>
                <li className={css.route__hard}>
                  <label className={css.radio__route__label}>
                    <input
                      type="radio"
                      id="route__check"
                      className={css.radio__route}
                    />
                    Складний маршрут
                  </label>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div >
      <Destinations />
      <JoinUs />
      {/* <Footer /> */}
    </>
  );
}
