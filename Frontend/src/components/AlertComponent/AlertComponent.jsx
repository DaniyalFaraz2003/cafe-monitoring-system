import React, { useState, useEffect } from 'react';
import { Alert, Button } from "@material-tailwind/react";

function ValidIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function InvalidIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm6.22-3.22a.75.75 0 011.06 0L12 10.94l2.47-2.47a.75.75 0 111.06 1.06L13.06 12l2.47 2.47a.75.75 0 11-1.06 1.06L12 13.06l-2.47 2.47a.75.75 0 01-1.06-1.06L10.94 12l-2.47-2.47a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}
function useAutoDismissAlert(duration = 3000) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return [show, setShow];
}
export function ValidAlert({ message }) {
  const [open, setOpen] = useAutoDismissAlert();
  return (

    <>
      <Alert
        open={open}
        onClose={() => setOpen(false)}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
        icon={<ValidIcon />} 
        className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]">
        {message}
      </Alert>
    </>
  );
}

export function InvalidAlert({ message }) {
  const [open, setOpen] = useAutoDismissAlert();
  return (

    <>
      <Alert
        open={open}
        onClose={() => setOpen(false)}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
        icon={<InvalidIcon />} className="rounded-none border-[#f73636] bg-[#ff4c4c]/10 font-medium text-[#ff4c4c]"
        // border-[#ff4c4c] bg-[#ff4c4c]/10 font-medium text-[#ff4c4c]
        >
        {message}
      </Alert>
    </>
  );
}
