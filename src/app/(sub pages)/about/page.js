import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
// import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";
const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-3/5 xs:h-1/4 sm:h-3/4 absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center px-4 sm:px-0 top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-4xl xs:text-lg sm:text-2xl lg:text-6xl text-accent leading-tight drop-shadow-lg">
            Hey there, I'm Sanya
          </h1>
          <p className="mt-4 font-medium text-foreground text-base xs:text-sm  sm:text-lg max-w-md sm:max-w-xl leading-relaxed">
           A curious coder who loves turning ideas into real web magic
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}






// // import Image from "next/image";
// import bg from "../../../../public/background/about-background.png";
// import RenderModel from "@/components/RenderModel";
// // import HatModel from "@/components/models/HatModel";
// import AboutDetails from "@/components/about";
// import dynamic from "next/dynamic";
// const HatModel = dynamic(() => import("@/components/models/HatModel"), {
//   ssr: false,
// });

// export const metadata = {
//   title: "About",
// };

// export default function Home() {
//   return (
//     <>
//       <Image
//         src={bg}
//         priority
//         sizes="100vw"
//         alt="Next.js Portfolio website's about page background image"
//         className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
//       />

//       <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
//         <RenderModel>
//           <HatModel />
//         </RenderModel>
//       </div>

//       <div className="relative w-full h-screen flex flex-col items-center justify-center">
//         <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
//           <h1 className="font-bold  text-6xl xs:text-7xl sm:text-8xl  lg:text-9xl text-accent">
//             CodeBucks
//           </h1>
//           <p className="font-light text-foreground text-lg">
//             Meet the wizard behind this portfolio
//           </p>
//         </div>
//       </div>

//       <AboutDetails />
//     </>
//   );
// }