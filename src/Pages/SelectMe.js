import React, { useState } from 'react';
import Select from 'react-select';

const SelectMe = () => {
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
    ];

    const [selectedOption, setSelectedOption] = useState(options[1]);

    const handleSelectChange = selectedOption => {
        setSelectedOption(selectedOption);
    };

    return (
        <div>
            <h3>Select an Option:</h3>
            <Select
                options={options}
                value={selectedOption}
                onChange={handleSelectChange}
            />
        </div>
    );
};

export default SelectMe;
