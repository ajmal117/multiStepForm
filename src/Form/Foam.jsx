import React, { useEffect, useState } from "react";
import SignUp from "./SignUp";
import PersonalDetails from "./PersonalDetails";
import Other from "./Other";

function Foam(props) {
  const [page, setPage] = useState(1);
  const [pageTitle, setpageTitle] = useState("");
  const [buttonName, setButtonName] = useState("Next");
  const [title, setTitle] = useState("");

  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword:"",
    name : "",
    address:"",
    occupation:"",
    nationality:"",
    favouriteGame:"",
    interests:"",
  });

//   console.log(page);

  const pageChange = () => {
    if (page === 1) {
      setpageTitle(<SignUp data={data} handleChange={handleInputData}/>);
      setButtonName("Next");
      setTitle("Sign Up");
    } else if (page === 2) {
      setpageTitle(<PersonalDetails data={data} handleChange={handleInputData} />);
      setButtonName("Next");
      setTitle("Personal Details");
    } else if (page === 3) {
      setpageTitle(<Other data={data} handleChange={handleInputData} />);
      setButtonName("Submit");
      setTitle("Other");
   
    }
    // console.log("clicked");
  };

  const handleNext = () => {
    if (page === 3) {
      console.log(data, "d");
    } else {
      setPage(page + 1);
      pageChange();
    }

    // console.log("clicked");
  };

  const handleInputData = input => e => {
    // input value from the form
    const { value } = e.target;
    console.log(input);
    //updating for data state taking previous state and then adding new value to create new object
      setData(prevState => ({...prevState,[input]: value }));
  }

  const handlePrev = () => {
    setPage(page - 1);
    pageChange();
    // console.log(page);
  };

  useEffect(() => {
    pageChange();
  }, [page]);

  return (
    <div className=" bg-red-400 h-[100vh] flex justify-center items-center">
      <div className="bg-red-300 px-8 py-4 shadow-md shadow-gray-300 ">
        <div
          className="scrollBar bg-red-900 h-1 rounded-lg  mt-3 mb-5 "
          style={{
            width: page === 1 ? "33.3%" : page === 2 ? "66.6%" : "100%",
          }}></div>
        <div className="header">
          <h1 className=" text-3xl font-bold w-[300px] shadow-lg text-center py-1">
            {title}
          </h1>
        </div>
        <div className="content my-6">{pageTitle}</div>
        <div className="Footer flex justify-between mt-8 mb-3">
          <button
            className="prev text-md font-bold  p-1  bg-red-400 hover:bg-red-500 rounded-sm"
            disabled={page === 1 && true}
            onClick={() => handlePrev()}>
            PREV
          </button>
          <button
            className="next text-md font-bold  p-1 bg-red-400 hover:bg-red-500 rounded-sm"
            disabled={page === 4 && true}
            onClick={() => handleNext()}>
            {buttonName}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Foam;
