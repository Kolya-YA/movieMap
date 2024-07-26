import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateOfBirthPicker = ({ selectedDate, onChange, label, Icon }) => {
    return (
        <div className="relative has-[.react-datepicker-wrapper]:w-full">
            <label htmlFor="birthDate" className="block sr-only">{label}</label>

            <DatePicker
                wrapperClassName="w-full"
                className="
                w-full ps-10 pe-4 py-2 appearance-none
                border border-white border-opacity-70 bg-black/70 rounded 
                hover:border-gray-600
                focus:shadow-diffused focus:outline-none focus:border-gray-600
                transition duration-300"
                selected={selectedDate}
                onChange={onChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="Date of birth"
                showYearDropdown
                yearDropdownItemNumber={100}
                scrollableYearDropdown
            />
            {Icon && <span className="absolute start-2 inset-y-0 block my-auto max-h-fit">
                {<Icon size={24} aria-hidden="true" />}
            </span>}
        </div>
    );
};

export default DateOfBirthPicker;