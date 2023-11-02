import { useState } from "react";

import { useDispatch } from "react-redux";
import { myAction, clearData } from "./action";

const PostalCode = () => {
  const dispatch = useDispatch();

  const [code, setCode] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    dispatch(myAction(code));
    dispatch(clearData());
  };

  return (
    <div>
      <div className=" text-blue-600 text-2xl my-2 font-bold">
        Enter Postal Code
      </div>

      <form onSubmit={handleForm}>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="border-2 my-4 border-black-400 text-center bg-blue-100"
          placeholder="Enter Postal numer"
        />
        <br />

        <button
          type="submit"
          class="bg-transparent hover:bg-blue-600 text-white-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-3"
        >
          Get Location data
        </button>
      </form>
    </div>
  );
};

export default PostalCode;
