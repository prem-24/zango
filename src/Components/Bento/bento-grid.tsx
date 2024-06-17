import { cn } from "../../utils/cn";
import classnames from 'classnames';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid  md:auto-rows-[18rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-full h-auto mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  bgImage,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  bgImage?: string; // Assuming bgImage is a URL string
}) => {
  return (
    <div
      className={cn(
        "row-span-1 h-96 lg:xl:h-auto relative group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none rounded-custom dark:border-white/[.2] border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",  // Ensures the background image covers the entire element
        backgroundRepeat: "no-repeat",  // Prevents the background image from repeating
      }}
    >
      {header}
      <div className="group-hover/bento:translate-x-2  rounded-custom absolute bottom-6 left-6 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-xl dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans text-sm font-normal text-neutral-600  dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
