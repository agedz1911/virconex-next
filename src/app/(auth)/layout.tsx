import Image from "next/image";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-gradient-to-t from-[#F1EAFF] to-[#E5D4FF] relative flex flex-col h-screen w-screen items-center pt-28 md:pt-0 md:justify-center">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={200}
        height={54}
        className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
      />
      {children}
    </div>
  );
};

export default AuthLayout;
