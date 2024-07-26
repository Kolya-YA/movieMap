const Checkbox = ({ id, req, label, onChange, value, icon }) => {

    return (
<div className="flex items-center justify-center space-x-3">
<input
    className="w-4 h-4 bg-black bg-opacity-70 border hover:border-white border-opacity-100 rounded accent-transparent focus:outline-none focus:ring-1 focus:ring-gray-200 border-gray-600 hover:border-2"
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
//TODO:Create custom error popup

export default Checkbox;