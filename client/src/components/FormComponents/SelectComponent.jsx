const SelectComponent = ({ id, req, label, values, onChange, value }) => {

    return (
        <div>
            <label htmlFor={id} className="block">
                {label}
                {req && <span className="text-red-500">*</span>}
            </label>
            <select
                value={value}
                onChange={onChange}
                id={id}
                required={req}
                className="w-full border border-gray-300 rounded-md p-1"
            >
                <option value="">Please select</option>
                {values?.map((value) => {
                    return <option key={value} value={value}>{value}</option>
                })}
            </select>
        </div>
    )
}

export default SelectComponent;