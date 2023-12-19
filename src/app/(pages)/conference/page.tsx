import Image from "next/image";

const page = () => {
  return (
    <div className="w-full flex justify-start items-center">
      <Image
        src="/images/bg-conference.png"
        alt="hall"
        priority
        fill
        className="w-full absolute top-0 left-0 -z-10 object-cover brightness-[60%]"
      />
    </div>
  );
};

export default page;
