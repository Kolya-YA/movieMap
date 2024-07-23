const InputComponent = ({ type, id, req, label, onChange, value }) => {

    return (
        <div>
            <label htmlFor={id} className="block">
                {label}
                {req && <span className="text-red-500">*</span>}
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                id={id}
                required={req}
                // TODO: Add show/hide toggle for password fields
                // TODO: Add validation attributes
                // TODO: Add autocomplete attributes
                className="w-full border border-gray-300 rounded-md p-1"
            />
        </div>
    )
}

export default InputComponent;