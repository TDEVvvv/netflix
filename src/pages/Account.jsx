import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/fedc2344-af3f-4f22-8409-9824202342e4/MN-en-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="banner"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Account</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
