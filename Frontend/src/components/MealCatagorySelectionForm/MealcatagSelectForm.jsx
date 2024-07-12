import React from 'react';
import { Select, Option } from "@material-tailwind/react";

function MealcatagSelectForm() {
  return (
    <div>
      <div className="flex flex-row items-center justify-center w-fit gap-5">
          <label
            htmlFor="mealTypeInput"
            className="text-white font-bold w-full text-xl"
          >
            Select Meal Type:{" "}
          </label>
          <Select
            name="mealTypeInput"
            defaultValue="Normal"
            label="Select Meal Type"
            className="bg-white font-bold"
          >
          {/* Ensure to close your Select component properly and include Option components here */}
          <Option>Normal</Option>
            <Option>Diet</Option>
          </Select>
      </div>
    </div>
  );
}
export default MealcatagSelectForm
