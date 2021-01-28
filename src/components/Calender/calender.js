import react from 'react';
import { Calendar } from 'antd';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

function CalenderDetails() {
    function onPanelChange(value, mode) {
        console.log(value, mode);
    }
    function handleSelect(range) {
        console.log(range); // native Date object
    }
    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }

    return (
        <div>
            
                <div className="calenderside"><DateRangePicker
                    ranges={[selectionRange]}
                    onChange={handleSelect()}   />
                </div>

        </div>
    )
}
export default CalenderDetails;