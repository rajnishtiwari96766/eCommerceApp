import React, { useState } from "react";

const Img_arr = ({ imgs = [{ url: "" }] }) => {
  // you need to define the attribute of the array here else mapping would be called undefined
  // console.log(imgs);

  const [mainImg, setmainImg] = useState(imgs[0]);
  return (
    <div className="flex justify-between ">
      <div className="space-y-5 px-4 w-1/2">
        {imgs.map((currEle, index) => {
          return (
            <img
              src={currEle.url}
              alt="loading"
              key={index}
              onClick={() => setmainImg(currEle)}
            />
          );
        })}
      </div>

      <div className="my-5">
        <img src={mainImg.url} alt={mainImg.filename} />
      </div>
    </div>
  );
};

export default Img_arr;
