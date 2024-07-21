import React from 'react';
import { Select, Option } from "@material-tailwind/react";


function FilterCategorySelectForm({ setSearchField }) {
  const handleSelectChange = (event) => {
    setSearchField(event);
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <Select
        name="filter"
        defaultValue="ID"
        label="Select Field To Filter By"
        className="bg-white font-bold"
        onChange={handleSelectChange}
      >
        <Option value="ID">ID</Option>
        <Option value="Name">Name</Option>
        <Option value="Meal Type">Meal Type</Option>
        <Option value="City">City</Option>
      </Select>
    </div>
  );
}

export default FilterCategorySelectForm;

