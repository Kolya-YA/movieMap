const Checkbox = ({ id, req, label, onChange, value }) => {
  return (
    <div className="flex w-fit px-2 py-1 leading-none focus-within:shadow-diffused hover:shadow-diffused ">
      <input
        className="w-4 h-4 bg-black/70 me-2 accent-transparent focus:outline-none"
        type="checkbox"
        checked={value} onChange={onChange}
        id={id}
        required={req}
      />
      <label htmlFor={id}>
        {label}
        {req && <span className="text-red-300">*</span>}
      </label>
    </div>
  );
};
//TODO:Create custom error popup

export default Checkbox;
