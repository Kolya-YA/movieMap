const Checkbox = ({ id, req, label, onChange, value, icon }) => {

    return (
<div className="flex items-center justify-center space-x-3">
<input
    className="w-4 h-4 bg-black bg-opacity-70 border border-white border-opacity-70 rounded focus:outline-none focus:ring-2 focus:ring-gray-200 hover:border-gray-600"
    type="checkbox"
    checked={value}
    onChange={onChange}
    id={id}
    required={req}
/>
<label htmlFor={id}>
    {label}
    {req && <span className="text-red-500">*</span>}
</label>
</div>
    )
}

export default Checkbox;