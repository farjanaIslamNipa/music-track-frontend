import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-brand min-h-screen flex justify-center items-center">
      <div className="w-full max-w-[400px] mx-auto bg-secondary bg-opacity-70 lg:bg-opacity-35 px-6 py-8 rounded-3xl">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
