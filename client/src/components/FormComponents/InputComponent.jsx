const InputComponent = ({ type, id, req, label, onChange, value, placeholder, icon, autocomplete, endButton }) => {

    return (
        <div className="relative">
            <label htmlFor={id} className="block text-white sr-only">
                {label}
                {req && <span className="text-red-500">*</span>}
            </label>
            {icon && <span className="absolute flex items-center pl-2 pt-2 ">{icon}</span>}
            <input className=" ${endButton ? 'pr-10' : ''} w-full px-4 py-2 pl-10 border border-white border-opacity-70 bg-black bg-opacity-70 text-white rounded hover:border-gray-600
            focus:shadow-diffused focus:outline-none focus:border-gray-600
                 transition duration-300"
                placeholder={placeholder}
                autocomplete={autocomplete}
                type={type}
                value={value}
                onChange={onChange}
                id={id}
                required={req}
                // TODO: Add show/hide toggle for password fields
                // TODO: Add validation attributes
                // TODO: Add autocomplete attributes
                //TODO: Style the
            />
            {endButton && <span className="absolute inset-y-0 right-0 flex items-center pr-3">{endButton}</span>}
        </div>
    )
}

export default InputComponent;