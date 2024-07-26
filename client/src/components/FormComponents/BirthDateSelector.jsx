import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateOfBirthPicker = ({ selectedDate, onChange, label, required, icon }) => {
    return (
        <div className="relative">
            {label && (
                <label htmlFor="birthDate" className="block sr-only">
                    {label}
                    {required && <span className="text-red-500">*</span>}
                </label>
            )}
            {icon && (
    <span className="absolute inset-y-0 left-0 flex items-center pl-2 z-10">
        {icon}
    </span>
)}
            <DatePicker
                selected={selectedDate}
                onChange={onChange}
                className="w-96 min-w-full px-4  py-2 border border-white border-opacity-70  bg-black bg-opacity-70 text-white text-opacity-70 rounded 
                focus:shadow-diffused
                 transition duration-300 hover:border-gray-600"
                dateFormat="dd/MM/yyyy"
                placeholderText="      Date of birth"
                showYearDropdown
                yearDropdownItemNumber={100}
                scrollableYearDropdown
            />
        </div>
    );
};

export default DateOfBirthPicker;