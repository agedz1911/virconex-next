import Image from "next/image";

const Lobby = () => {
  return (
    <div className=" w-full flex justify-start items-center">
      <Image
        src="/images/lobby-new.png"
        alt="lobby"
        priority
        fill
        className="w-full absolute top-0 left-0 -z-10 object-cover brightness-[60%]"
      />
      <div className="top-[410px] left-[157px] px-20 relative">
        <Image
          src="/images/lobby_18.png"
          alt="btn"
          width={220}
          height={100}
          className="brightness-[70%]"
        />
        <div className="top-0 cursor-pointer absolute z-10 w-full transform transition duration-500 hover:scale-105 opacity-0 hover:opacity-100">
          <Image
            src="/images/button_18.png"
            alt="btn"
            width={220}
            height={100}
            className="-z-10 "
            priority
          />
        </div>
      </div>
      <div className="top-[410px] left-[1012px] px-20 relative">
        <Image
          src="/images/lobby_14.png"
          alt="btn"
          width={220}
          height={100}
          className="brightness-[70%]"
        />
        <div className="top-0 cursor-pointer absolute z-10 w-full transform transition duration-500 hover:scale-105 opacity-0 hover:opacity-100">
          <Image
            src="/images/button_14.png"
            alt="btn"
            width={220}
            height={100}
            className="-z-10 "
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Lobby;
