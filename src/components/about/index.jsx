import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
// import Image from "next/image";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Developer in the Making
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base lg:text-xl  ">
            I&apos;m a motivated and detail-oriented individual with a strong inclination toward problem-solving and building efficient, meaningful solutions. Whether working on individual projects or collaborating within a team, I bring a thoughtful and structured approach to my work. I believe in consistent growth through learning and practical application, and I&apos;m always looking for ways to challenge myself and improve. My goal is to contribute to impactful projects, keep refining my technical and analytical abilities, and grow into a reliable professional who delivers with quality and integrity. With each experience, I aim to get one step closer to making a real difference through technology.
          </p>
        </ItemLayout>

        {/* <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout> */}

        {/* GitHub Details */}
        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=Sanyamodi&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5b&text_bold=false"
            alt="GitHub Stats"
            loading="lazy"
          />
        </ItemLayout>

        {/* Popular Languages */}
        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Sanyamodi&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5b&text_bold=false"
            alt="Popular Languages"
            loading="lazy"
          />
        </ItemLayout>

        {/* Skill Set */}

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=java,aws,css,git,github,html,js,linux,mysql,nextjs,npm,react,tailwind,threejs,vercel,vite,vscode`}
            alt="Skill Set"
            loading="lazy"
          />
        </ItemLayout>


        {/* Github Readme Streak Stats */}
        <ItemLayout className={"col-span-full md:col-span-6 !p-0 justify-center"}>
          
          <img className="w-full h-auto"
          src="https://streak-stats.demolab.com/?user=Sanyamodi&theme=dark&hide_border=true&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B" alt="GitHub Streak" loading="lazy" />
        </ItemLayout>

        {/* GitHub Repo Link */}
        {/* <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/codebucks27/Nextjs-contentlayer-blog"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src="https://github-readme-stats.vercel.app/api/pin/?username=Sanyamodi&repo=github-readme-stats&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
              alt="CodeBucks"
              loading="lazy"
            />
          </Link>
        </ItemLayout> */}

      </div>
    </section>
  );
};

export default AboutDetails;
