import React from "react";

function SignUp({ data, setData, handleChange }) {
  //   console.log(data, "d");
  return (
    <>
      <div className="flex flex-col gap-1 my-4">
        <label htmlFor="" className="font-semibold">
          Email :
        </label>
        <input
          //  onChange={(e)=> setData({...data,password:e.target.value})}
          defaultValue={data.email}
          onChange={handleChange("email")}
          name="email"
          type="text"
          placeholder="email"
          className=" p-1 rounded-sm outline-none font-semibold"
        />
      </div>
      <div className="flex flex-col gap-1 my-4">
        <label htmlFor="" className="font-semibold">
          Password :
        </label>
        <input
          type="text"
          // onChange={(e)=> setData({...data,password:e.target.value})}
          onChange={handleChange("password")}
          //to get password value after change
          defaultValue={data.password}
          placeholder="password"
          className="p-1 rounded-sm outline-none font-semibold"
        />
      </div>
      <div className="flex flex-col gap-1 my-4">
        <label htmlFor="" className="font-semibold">
          Confirm Password :
        </label>
        <input
          type="text"
          //   onChange={(e)=> setData({...data,confirmPassword:e.target.value})}

          onChange={handleChange("confirmPassword")}
          defaultValue={data.confirmPassword}
          placeholder="confirm password"
          className="p-1 rounded-sm outline-none font-semibold"
        />
      </div>
    </>
  );
}

export default SignUp;
