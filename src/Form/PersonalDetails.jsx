import React from "react";

function PersonalDetails({ data, handleChange}) {
    // console.log(data);
  return (
    <>
      <div className="flex flex-col  gap-1 my-4">
        <label htmlFor="" className="font-semibold">
          Name :
        </label>
        <input
          type="text"
          defaultValue={data.name}
          onChange={handleChange('name')}

          placeholder="Name"
          className=" p-1 rounded-sm outline-none font-semibold"
        />
      </div>
      <div className="flex flex-col  gap-1 my-4">
        <label htmlFor="" className="font-semibold">
          Address :
        </label>
        <input
          type="text"
          defaultValue={data.address}
          onChange={handleChange('address')}
          placeholder="Address"
          className="p-1 rounded-sm outline-none font-semibold"
        />
      </div>
      <div className="flex flex-col  gap-1 my-4">
        <label htmlFor="" className="font-semibold">
          Occupation :
        </label>
        <input
          type="text"

          defaultValue={data.occupation}
          onChange={handleChange('occupation')}
          placeholder="Occupation"
          className="p-1 rounded-sm outline-none font-semibold"
        />
      </div>
    </>
  );
}

export default PersonalDetails;
