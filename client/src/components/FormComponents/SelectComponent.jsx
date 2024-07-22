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
                {Object.entries(values)
                    .sort((a, b) => a[1] > b[1] ? 1 : -1)
                    .map(([key, value]) => {
                        return <option key={key} value={key}>{value}</option>
                    })}
            </select>
        </div>
    )
}

export default SelectComponent;