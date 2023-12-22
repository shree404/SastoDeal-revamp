import React from "react";

function Or() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="w-1/3 bg-gray-200 relative">
          <div className="absolute left-0 top-1/2 w-full border-t border-gray-400"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ng-white px-3">
            <p className=" text-white py-2 px-4 ">
              Or
            </p>
          </div>
          <div className="absolute right-0 top-1/2 w-full border-t border-gray-400"></div>
        </div>
      </div>
    </div>
  );
}

export default Or;
