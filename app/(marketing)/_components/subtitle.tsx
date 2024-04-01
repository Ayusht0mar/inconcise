import React from 'react';

interface TitleSectionProps {
  pill: string;
}

const Subtitle: React.FC<TitleSectionProps> = ({
  pill,
}) => {
  return (
    <React.Fragment>
      <div
        className="
        md:m-auto
        w-fit
        items-center
        font-semibold
        tracking-wide	
        text-[#2EB67D]
        border
        border-solid
        border-[#2EB67D]
        rounded-full
        px-4
        py-1
        text-sm
      "
      >
        {pill}
      </div>
    </React.Fragment>
  );
};

export default Subtitle;