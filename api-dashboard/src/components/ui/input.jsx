
import PropTypes from 'prop-types';
import { cn } from '@/lib/cn';

const base =
    "w-max border border-zinc-200 rounded-md text-sm leading-normal font-normal bg-white placeholder:text-zinc-400 focus:outline-zinc-900";

const sizes = {
    small: "h-8 p-2",
    regular: "h-10 p-3",
};

const Input = ({
    type,
    value,
    onChange,
    disabled,
    readOnly,
    placeholder,
    id,
    name,
    onFocus,
    onBlur,
    className,
    size,
}) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            disabled={disabled}
            readOnly={readOnly}
            placeholder={placeholder}
            id={id}
            name={name}
            onFocus={onFocus}
            onBlur={onBlur}
            className={cn(base, sizes[size || "regular"], className || "")}
        />
    );
};

Input.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    className: PropTypes.string,
    size: PropTypes.oneOf(['small', 'regular']),
};

export default Input;
