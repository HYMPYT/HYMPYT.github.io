import { forwardRef, useRef, useState } from "react"
import DatePicker, { registerLocale } from "react-datepicker"
import { Input } from "../CustomInput/CustomInput";
import uk from "date-fns/locale/uk";
registerLocale('uk', uk)

interface CustomDatePickerParams {
    placeholder: string
    date: Date | null
}

const CustomInput = forwardRef((props: any, ref) => {
    return <Input {...props} ref={ref} />;
});

export function CustomDatePicker({ placeholder, date }: CustomDatePickerParams) {
    const [startDate, setStartDate] = useState<Date | null>(date);

    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const onChange = (dates: Array<Date | null>) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    }
    const inputRef = useRef(null);

    function subDays(date: Date, daysAmount: number): Date {
        return new Date(date.setDate(date.getDate() - daysAmount))
    }

    return (
        <DatePicker
            // renderCustomHeader={({
            //     monthDate,
            //     customHeaderCount,
            //     decreaseMonth,
            //     increaseMonth,
            // }) => (
            //     <div>
            //         <button
            //             aria-label="Previous Month"
            //             className={
            //                 "react-datepicker__navigation react-datepicker__navigation--previous"
            //             }
            //             style={customHeaderCount === 1 ? { visibility: "hidden" } : {}}
            //             onClick={decreaseMonth}
            //         >
            //             <span
            //                 className={
            //                     "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
            //                 }
            //             >
            //                 {"<"}
            //             </span>
            //         </button>
            //         <span className="react-datepicker__current-month">
            //             {monthDate.toLocaleString("en-US", {
            //                 month: "long",
            //                 year: "numeric",
            //             })}
            //         </span>
            //         <button
            //             aria-label="Next Month"
            //             className={
            //                 "react-datepicker__navigation react-datepicker__navigation--next"
            //             }
            //             style={customHeaderCount === 0 ? { visibility: "hidden" } : {}}
            //             onClick={increaseMonth}
            //         >
            //             <span
            //                 className={
            //                     "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
            //                 }
            //             >
            //                 {">"}
            //             </span>
            //         </button>
            //     </div>
            // )}
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date)}
            // startDate={startDate}
            // endDate={endDate}
            // selectsRange
            locale='uk'
            closeOnScroll={true}
            // monthsShown={2}
            customInput={<CustomInput inputRef={inputRef} />}
            minDate={new Date()}
            showPopperArrow={false}
        />
    );
}