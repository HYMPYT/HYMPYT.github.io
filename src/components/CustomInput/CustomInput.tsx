import { forwardRef, Ref } from "react"
import css from './CustomInput.module.css'

interface InputProps {
    value: string;
    onChange: (value: string) => void;
    onClick: () => void;
}

export const Input = forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => (
    <input
        className={css.data__input}
        type="text"
        value={props.value}
        ref={ref}
        onChange={(e) => props.onChange(e.target.value)}
        onClick={props.onClick}
    />
))