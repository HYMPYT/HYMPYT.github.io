import css from '../Home/Home.module.css';
import sprite from '../../images/sprite.svg';
import place from '../../images/place.svg';
import date from '../../images/date.svg';
import people from '../../images/people.svg';
import { useEffect, useState } from 'react';
import { useGetCitiesQuery } from '../../store/triplanner/triplanner.api';
import { useCitySuggest } from '../../hooks/debounce';
import { CityProps } from '../../models/models';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { CustomDatePicker } from '../CustomDatePicker/CustomDatePicker';

export function Search() {
    const [selectedTab, setSelectedTab] = useState()
    const [firstData, setFirstData] = useState<Date | null>()
    const updateFirstData = (value: Date | null) => {
        setFirstData(value)
    }
    const [secondData, setSecondData] = useState<Date | null>();
    const updateSecondData = (value: Date | null) => {
        setSecondData(value)
    }
    const datePickerInputs = [
        {
            placeholder: new Date().toDateString(),
            date: new Date(),
            updateFunction: updateFirstData
        },
        {
            placeholder: "Назад",
            date: new Date(),
            updateFunction: updateSecondData
        }
    ]
    const [fromSearch, setFromSearch] = useState<CityProps>({ name: '' })
    const [toSearch, setToSearch] = useState<CityProps>({ name: '' })

    const [dropdownFrom, setDropdownFrom] = useState(false)
    const [dropdownTo, setDropdownTo] = useState(false)

    const [fromCitySuggest, toCitySuggest] = useCitySuggest(fromSearch.name, toSearch.name)

    const fromData = useGetCitiesQuery(fromCitySuggest, {
        skip: fromCitySuggest.length < 1,
        refetchOnFocus: true
    }).data

    const toData = useGetCitiesQuery(toCitySuggest, {
        skip: toCitySuggest.length < 1,
        refetchOnFocus: true
    }).data

    useEffect(() => {
        setDropdownFrom(fromCitySuggest.length > 0 && fromData?.length! > 0 && fromData?.findIndex((c) => c.name === fromSearch.name) === -1)
    }, [fromCitySuggest, fromData, fromSearch])

    useEffect(() => {
        setDropdownTo(toCitySuggest.length > 0 && toData?.length! > 0 && toData?.findIndex((c) => c.name === toSearch.name) === -1)
    }, [toCitySuggest, toData, toSearch])

    const clickHandlerFrom = (cityProps: CityProps) => {
        setFromSearch(fromSearch => ({
            ...fromSearch,
            ...cityProps
        }))
        setDropdownFrom(false)
    }

    const clickHandlerTo = (cityProps: CityProps) => {
        setToSearch(toSearch => ({
            ...toSearch,
            ...cityProps
        }))
        setDropdownTo(false)
    }

    const location = useLocation();
    return (
        <>
            <div>
                <div className={css.ticket__thumb}>
                    <ul className={css.direction__images}>
                        <li className={css.all__directions}>
                            <a href="">
                                <svg
                                    width="116px"
                                    height="47px"
                                    aria-label=""
                                    className={css.direction__image}
                                >
                                    <use href={sprite + '#icon-background-1'}></use>
                                    <use href={sprite + '#icon-cars'}></use>
                                </svg>
                            </a>
                        </li>
                        <li className={css.direction}>
                            <a href="">
                                <svg
                                    width="116px"
                                    height="47px"
                                    aria-label=""
                                    className={css.direction__image}
                                >
                                    <use href={sprite + '#icon-background-2'}></use>
                                    <use href={sprite + '#icon-flight'}></use>
                                </svg>
                            </a>
                        </li>
                        <li className={css.direction}>
                            <a href="">
                                <svg
                                    width="116px"
                                    height="47px"
                                    aria-label=""
                                    className={css.direction__image}
                                >
                                    <use href={sprite + '#icon-background-2'}></use>
                                    <use href={sprite + '#icon-railway'}></use>
                                </svg>
                            </a>
                        </li>
                        <li className={css.direction}>
                            <a href="">
                                <svg
                                    width="116px"
                                    height="47px"
                                    aria-label=""
                                    className={css.direction__image}
                                >
                                    <use href={sprite + '#icon-background-2'}></use>
                                    <use href={sprite + '#icon-bus'}></use>
                                </svg>
                            </a>
                        </li>
                        <li className={css.direction}>
                            <a href="">
                                <svg
                                    width="116px"
                                    height="47px"
                                    aria-label=""
                                    className={css.direction__image}
                                >
                                    <use href={sprite + '#icon-background-2'}></use>
                                    <use href={sprite + '#icon-shelter'}></use>
                                </svg>
                            </a>
                        </li>
                        <li className={css.direction}>
                            <a href="">
                                <svg
                                    width="116px"
                                    height="47px"
                                    aria-label=""
                                    className={css.direction__image}
                                >
                                    <use href={sprite + '#icon-background-2'}></use>
                                    <use href={sprite + '#icon-attractions'}></use>
                                </svg>
                            </a>
                        </li>
                        <li className={css.direction}>
                            <a href="">
                                <svg
                                    width="116px"
                                    height="47px"
                                    aria-label=""
                                    className={css.direction__image}
                                >
                                    <use href={sprite + '#icon-background-2'}></use>
                                    <use href={sprite + '#icon-car'}></use>
                                </svg>
                            </a>
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
                                    value={fromSearch.name}
                                    onChange={e => setFromSearch({ id: '', name: e.target.value })}
                                />
                                {dropdownFrom && <ul className={css.dropdown__list}>
                                    {fromData?.map(city => (
                                        <li
                                            key={city.id}
                                            onClick={() => clickHandlerFrom({ id: city.id, name: city.name })}
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
                                        value={toSearch.name}
                                        onChange={e => setToSearch({ id: '', name: e.target.value })}
                                    />
                                </label>
                                {dropdownTo && <ul className={css.dropdown__list}>
                                    {toData?.map(city => (
                                        <li
                                            key={city.id}
                                            onClick={() => clickHandlerTo({ id: city.id, name: city.name })}
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
                                        <CustomDatePicker placeholder={datePicker.placeholder} date={datePicker.date} updateData={datePicker.updateFunction} />
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
                                <Link to={`/tickets/ticketId`} state={{ fromCity: fromSearch, toCity: toSearch, dDate: firstData, rDate: secondData }} >
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
        </>
    )
}