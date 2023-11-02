import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearData } from "./action";

const PostalData = () => {
  const error = useSelector((d) => d.error);
  const data = useSelector((d) => d.data);
  const loading = useSelector((d) => d.loading);

  const dispatch = useDispatch();

  const handleclear = () => {
    dispatch(clearData());
  };

  return (
    <>
      {loading && <p className="font-extrabold text-2xl">Loading..........</p>}
      {error && <p className="font-bold text-2xl text-red-600">{error}</p>}

      {data && (
        <div className="flex justify-center xs:w-96   px-8">
        <div className=" border-4 p-4 ">
          <div className="
           flex justify-center gap-4">
            {" "}
            <div className="text-right font-bold text-base">
              <p>Country:</p>
              <p>State:</p>
              <p>Places:</p>{" "}
            </div>
            <div className="text-left font-bold text-lg text-violet-800">
              {" "}
              <p> {data.country}</p> <p> {data.places[0].state}</p>
              <p>
                {data.places.map((el) => {
                  return <span> {el["place name"]}, </span>;
                })}
              </p>{" "}
            </div>
          </div>

          <br />
          <button
            onClick={handleclear}
            class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded my-3 "
          >
            Clear
          </button>
        </div></div>
      )}
    </>
  );
};

export default PostalData;
