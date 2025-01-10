"use client";
import { useState, ChangeEvent, MouseEvent } from "react"

const RaceForm = () => {
    // state to manage dropdown selection and button selection
    const [dropdownValue, setDropdownValue] = useState<string>('');
    const [buttonSelection, setButtonSelection] = useState<string | null>(null);
  
    // handle dropdown change
    const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
      setDropdownValue(e.target.value);
    };

    // handle button click
    const handleButtonClick = (selection: string) => {
      setButtonSelection(selection);
    };

    // handle form submission
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(`Selected Option: ${dropdownValue}, Button Clicked: ${buttonSelection}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="dropdown">Choose your race:</label>
                <select
                    id="dropdown"
                    value={dropdownValue}
                    onChange={handleDropdownChange}
                >
                    <option value="">--Choose your race--</option>
                    <option value="human">Human</option>
                    <option value="elf">Elf</option>
                    <option value="pix">Pix</option>
                    <option value="orc">Orc</option>
                </select>
            </div>

            <div>
                <p>Gender</p>
                    <button type="button" onClick={()=> handleButtonClick('male')}>
                        Male
                    </button>
                    <button type="button" onClick={()=> handleButtonClick('female')}>
                        Female
                    </button>
                    <button type="button" onClick={()=> handleButtonClick('nonbinary')}>
                        Nonbinary
                    </button>
                    <button type="button" onClick={()=> handleButtonClick('eunuch')}>
                        Eunuch
                    </button>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default RaceForm;
