import className from "classnames";
import { FC } from "react";

const Button: FC<any> = ({ children, ...rest }) => {
    const classes = className(rest.className,
        'flex items-center px-3 py-1.5 border border-blue-500 text-blue-500 bg-white rounded-full');
    return (
        <button {...rest} className={classes}>
            {children}
        </button>
    )
}

export default Button;