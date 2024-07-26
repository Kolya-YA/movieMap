

const InputComponent = ({ type, id, req, label, onChange, value, placeholder, Icon, autocomplete, PswdToggler, togglePsdwShow, psdwShow }) => {

    return (
        <div className="relative">
            <label htmlFor={id} className="sr-only">{label}</label>

            <input className="
             ${endButton ? 'pe-10' : ''} w-full pe-4 ps-10 py-2
             border border-white border-opacity-70 bg-black/70 rounded
            hover:border-gray-600
                focus:shadow-diffused focus:outline-none focus:border-gray-600
                 transition duration-300"
                placeholder={placeholder}
                autoComplete={autocomplete}
                type={psdwShow? 'text' : type}
                value={value}
                onChange={onChange}
                id={id}
                required={req}
            // TODO: Add validation attributes
            // TODO: Add autocomplete attributes
            />

            {Icon && <span className="absolute start-2 inset-y-0 block my-auto max-h-fit">
                {<Icon size={24} aria-hidden="true" />}
            </span>}
            {PswdToggler
                && <PswdToggler psdwShow={psdwShow} togglePsdwShow={togglePsdwShow} />
            }
        </div>
    )
}

export default InputComponent;