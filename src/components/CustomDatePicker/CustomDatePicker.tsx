import { forwardRef, useRef, useState } from "react"
import DatePicker, { registerLocale } from "react-datepicker"
import { Input } from "../CustomInput/CustomInput";
import uk from "date-fns/locale/uk";
registerLocale('uk', uk)

interface CustomDatePickerParams {
    placeholder: string
    date: Date | null
    updateData: (value: Date | null) => void
}

const CustomInput = forwardRef((props: any, ref) => {
    return <Input {...props} ref={ref} />;
});

export function CustomDatePicker({ date, updateData }: CustomDatePickerParams) {
    const [startDate, setStartDate] = useState<Date | null>(date);
    const inputRef = useRef(null);

    const onChangeSaveDate = (date: Date | null) =>{
        setStartDate(date)
        updateData(date);
    }
    return (
        <DatePicker
            selected={startDate}
            onChange={(date: Date | null) => onChangeSaveDate(date)}
            locale='uk'
            closeOnScroll={true}
            customInput={<CustomInput inputRef={inputRef} />}
            minDate={new Date()}
            showPopperArrow={false}
        />
    );
}