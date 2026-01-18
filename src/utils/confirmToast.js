"use client";

import { toast } from "react-toastify";

export const confirmWithToast = (message) => {
  return new Promise((resolve) => {
    toast.info(
      ({ closeToast }) => (
        <div>
          <p className="font-semibold">{message}</p>

          <div className="flex gap-3 mt-3">
            <button
              onClick={() => {
                resolve(true);
                closeToast();
              }}
              className="px-3 py-1 bg-red-500 text-white rounded"
            >
              Yes
            </button>

            <button
              onClick={() => {
                resolve(false);
                closeToast();
              }}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              No
            </button>
          </div>
        </div>
      ),
      {
        autoClose: false,
        closeOnClick: false,
        draggable: false,
      }
    );
  });
};
