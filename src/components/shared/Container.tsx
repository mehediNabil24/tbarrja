import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div
      className={twMerge(
        // Centered container with max width for large screens
        "w-full max-w-[1500px] mx-auto",
        // Responsive horizontal padding
        "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
