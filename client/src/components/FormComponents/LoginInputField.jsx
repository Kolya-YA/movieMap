import { forwardRef } from "react";

const LoginInputField = forwardRef(({ onChange, Icon, ...props }, ref) => {

    return (
        <div className="relative">
            <label htmlFor={props.id} className="sr-only">{props.placeholder}</label>
            <input
                ref={ref}
                onChange={onChange}
                {...props}
                className="
                    w-full ps-10 pe-4 py-2 border border-current shadow-diffused bg-black/70 rounded
                   hover:border-gray-600 transition"
            />
            <Icon
                size={20} aria-hidden="true"
                className="absolute inset-y-0 left-3 my-auto stroke-current"
            />
        </div>
    );
})

export default LoginInputField;