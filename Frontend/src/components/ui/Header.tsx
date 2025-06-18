import React from "react";
import brush from "../../Images/brushLine.png";

type SectionHeaderProps = {
  subtitle: string;
  title: string;
  withBrush: boolean;
  align?: "center" | "left" | "right";
};

const Header: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  withBrush,
  align = "center",
}) => {
  const alignment =
    align === "left"
      ? "text-left"
      : align === "right"
      ? "text-right"
      : "text-center";

  return (
    <div className={`mb-6 mx-4 ${alignment}`}>
      <p className="uppercase tracking-widest text-gray-400 text-sm font-bold">
        {subtitle}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">{title}</h2>
      {withBrush && (
        <div className="relative w-fit mx-auto mt-2">
          <img
            src={brush}
            alt="underline brush"
            className="w-16 sm:w-20 h-auto mx-auto"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
