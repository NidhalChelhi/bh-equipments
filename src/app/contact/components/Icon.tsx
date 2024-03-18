import React, { ReactNode } from 'react';

interface IconProps {
  icon: string;
  circle?: ReactNode; 
}

const Icon: React.FC<IconProps> = ({ icon, circle }) => {
  return (
    <div
      className="m-5"
      style={{
        backgroundColor: "#ef3646",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        className="p-1"
        stroke="#ef3646"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={icon}
        />
        {circle}
      </svg>
    </div>
  );
}

export default Icon;
