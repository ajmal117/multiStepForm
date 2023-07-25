import React from "react";

function Other({data,handleChange}) {
    console.log(data, "d");
  return (
    <>
      <div className="flex flex-col  gap-1 my-4">
        <label htmlFor="" className="font-semibold">
          Nationality :
        </label>
        <input
          type="text"
          defaultValue={data.nationality}
          onChange={handleChange('nationality')}
          placeholder="Nationality"
          className=" p-1 rounded-sm outline-none font-semibold"
        />
      </div>
      <div className="flex flex-col  gap-1 my-4">
        <label htmlFor="" className="font-semibold">
          Favourite Game :
        </label>
        <input
          type="text"
          defaultValue={data.favouriteGame}
          onChange={handleChange('favouriteGame')}
          placeholder="Favourite Game"
          className="p-1 rounded-sm outline-none font-semibold"
        />
      </div>
      <div className="flex flex-col  gap-1 my-4">
        <label htmlFor="" className="font-semibold">
          Interests :
        </label>
        <input
          type="text"
          defaultValue={data.interests}
          onChange={handleChange('interests')}
          placeholder="Interests"
          className="p-1 rounded-sm outline-none font-semibold"
        />
      </div>
    </>
  );
}

export default Other;
