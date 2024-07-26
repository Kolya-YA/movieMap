const InputComponent = ({ type, id, req, label, onChange, value, placeholder, icon, autocomplete }) => {

    return (
        <div>
            <label htmlFor={id} className="block text-white sr-only">
                {label}
                {req && <span className="text-red-500">*</span>}
            </label>
            {icon && <span className="absolute flex items-center pl-2 pt-2 ">{icon}</span>}
            <input className="w-full px-4 py-2 pl-10 border border-white border-opacity-70 bg-black bg-opacity-70 text-white rounded focus:outline-none focus:ring-2 focus:ring-gray-200 duration-900  hover:border-gray-600"
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
        </div>
    )
}

export default InputComponent;