import { LuChevronsDown } from "react-icons/lu";

const SelectComponent = ({ id, req, label, values, onChange, value, Icon }) => {

    return (
        <div className="relative">
            <label htmlFor={id} className="sr-only">{label}</label>

            <select className="
                w-full ps-10 pe-8 py-2 appearance-none
                border border-white border-opacity-70 bg-black/70 rounded
                hover:border-gray-600
                focus:shadow-diffused focus:outline-none focus:border-gray-600
                 transition duration-300"
                value={value}
                onChange={onChange}
                id={id}
                required={req}>

                <option value="">——— Select your country ———</option>
                {Object.entries(values)
                    .sort((a, b) => a[1] > b[1] ? 1 : -1)
                    .map(([key, value]) => {
                        return <option key={key} value={key}>{value}</option>
                    })}
            </select>
            <span className="absolute end-2 inset-y-0 block my-auto max-h-fit pointer-events-none">
                {<LuChevronsDown size={24} aria-hidden="true" />}
            </span>
            {
                Icon &&
                <span className="absolute start-2 inset-y-0 block my-auto max-h-fit">
                    {<Icon size={24} aria-hidden="true" />}
                </span>
            }
        </div>
    )
}

export default SelectComponent;