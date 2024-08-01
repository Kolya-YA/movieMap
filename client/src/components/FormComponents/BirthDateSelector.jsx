import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const dateMinusXYears = x => {
    const curDate = new Date();
    return new Date(curDate.setFullYear(curDate.getFullYear() - x));
}

const DateOfBirthPicker = ({ id, selectedDate, onChange, label, Icon }) => {
    return (
        <div className="relative">
            <label htmlFor={id} className="block sr-only">{label}</label>

            <DatePicker
                wrapperClassName="w-full"
                className="
                w-full ps-10 pe-4 py-2 appearance-none
                border border-white border-opacity-70 bg-black/70 rounded 
                hover:border-gray-600
                focus:shadow-diffused focus:outline-none focus:border-gray-600
                transition duration-300"
                id={id}
                selected={selectedDate}
                onChange={onChangeDate => onChange({ target: { id, value: onChangeDate } })}
                showYearPicker
                dateFormat="yyyy"
                maxDate={dateMinusXYears(12)}
                placeholderText="Year of birth"
            />

            {
                Icon &&
                <span className="absolute start-2 inset-y-0 block my-auto max-h-fit">
                    {<Icon size={24} aria-hidden="true" />}
                </span>
            }
        </div>
    );
};

export default DateOfBirthPicker;