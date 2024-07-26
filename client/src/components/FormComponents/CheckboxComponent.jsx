const Checkbox = ({ id, req, label, onChange, value, icon }) => {
  return (
    <div className="flex items-center justify-center space-x-3">
      <input
        className="w-4 h-4 bg-black bg-opacity-70
        accent-transparent
        focus:outline-none
        focus:shadow-diffused
        hover:shadow-diffused"
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
  );
};
//TODO:Create custom error popup

export default Checkbox;
