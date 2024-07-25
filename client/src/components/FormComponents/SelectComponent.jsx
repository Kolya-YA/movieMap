const SelectComponent = ({ id, req, label, values, onChange, value, icon, }) => {

    return (
        <div className="">
            <label htmlFor={id} className="block sr-only">
                {label}
                {req && <span className="text-red-500">*</span>}
            </label>
            {icon && <span className="absolute flex items-center pl-2 pt-2 ">{icon}</span>}
            <select className="w-full px-4 py-2 pl-10 border border-white border-opacity-70 shadow-diffused bg-black bg-opacity-70 text-white text-opacity-70 rounded focus:outline-none focus:ring-2 focus:ring-gray-200 duration-900  hover:border-gray-600"
                value={value}
                onChange={onChange}
                id={id}
                required={req}>
                

                <option value="" className="" >Country</option>
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