import React from "react";

interface LeftAlignedHeadingProps {
  title: string; // The text for the heading
  className?: string; // Additional Tailwind classes for customization
}

const Titlebar: React.FC<LeftAlignedHeadingProps> = ({
  title,
  className = "",
}) => {
  return (
    <div className="w-full px-[17%] text-[#272343] mb-10 mt-7"> {/* 20% padding on left and right */}
      <h2 className={`text-2xl font-semibold text-left ${className}`}>
        {title}
      </h2>
    </div>
  );
};

export default Titlebar;
