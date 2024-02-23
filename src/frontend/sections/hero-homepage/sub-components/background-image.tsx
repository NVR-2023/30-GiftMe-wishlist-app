import Image from "next/image";

const BackgroundImage = () => {
  return (
    <div className="w-screen h-screen">
      <Image
        src="/images/homepage/homepage.png"
        width={1920}
        height={1080}
        alt="blurry reddish background"></Image>
    </div>
  );
};

export default BackgroundImage;
