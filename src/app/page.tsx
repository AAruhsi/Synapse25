import Image from "next/image";
import HomePage from "./homePage";
export default function Home() {
  return (
    <>
      {/* <div className="bg-black min-h-screen flex flex-col items-center justify-center">
        <div className="bg-black overflow-hidden text-center animation-container">
          <Image
            className="mx-auto"
            src="/logo.svg"
            alt="logo"
            width={600}
            height={600}
            // style={{
            //   maxWidth: '100%',
            //   height: 'auto',
            // }}
          />
        </div>
        <div className="mt-6">
          <Image
            className="h-24 w-48"
            src="/bat.gif"
            alt="bat"
            width={200}
            height={100}
          />
        </div>
      </div> */}
      <HomePage />
    </>
  );
}
