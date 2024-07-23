const Checkbox = ({ id, req, label, onChange, value }) => {

    return (
        <div>
            <input
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