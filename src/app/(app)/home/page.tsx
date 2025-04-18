"use client";
import Image from "next/image";
import React, { useState } from "react";
import img from "./profile.jpg";
import Link from "next/link";
import {
  CircleMinus,
  CirclePlus,
  GithubIcon,
  LinkedinIcon,
  LucideLinkedin,
  Mail,
} from "lucide-react";

const page = () => {
  const workExperience = [
    {
      company: "IIT Hyderabad",
      title: "Freelance Full Stack Developer",
      description:
        "Developed full-stack solutions for internal labs, focusing on performance optimization and scalable deployment using modern web technologies.",
    },
    {
      company: "Innovease India Pvt. Ltd.",
      title: "Frontend Developer Intern",
      description:
        "Contributed to building UI components and improving the user experience across web platforms using React.js and Tailwind CSS.",
    },
  ];

  const projects = [
    {
      title: "ReadCycle",
      description:
        "A second-hand book exchange platform that allows users to buy and sell books in their locality. Features chat, location tracking, and more.",
      url: "https://readcycle-seven.vercel.app",
    },
    {
      title: "AutoResQ",
      description:
        "A mechanic-finding platform where users can locate nearby automobile service providers. Built with Leaflet.js and real-time updates.",
      url: "https://autoresq-next.vercel.app/",
    },
    {
      title: "VidHappens",
      description:
        "A video-sharing platform for uploading, publishing, and managing media content with full auth and real-time like/comment support.",
      url: "https://vidhappens-frontend.vercel.app/",
    },
  ];

  const skills = [
    { name: "Languages", data: ["JavaScript", "TypeScript", "C++"] },
    {
      name: "Frontend",
      data: ["React.js", "Next.js", "ApolloClient", "Redux"],
    },
    {
      name: "Backend",
      data: [
        "Node.js",
        "Express.js",
        "GraphQL",
        "Mongoose",
        "Prisma",
        "SQL",
        "PostgresQL",
        "No SQL",
      ],
    },
    { name: "Platforms", data: ["Docker", "Postman"] },
    { name: "Misc.", data: ["Git/GitHub"] },
  ];

  const [openSkill, setOpenSkill] = useState<Record<string, boolean>>({});
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleSkill = (name: string) => {
    setOpenSkill((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div
      className="min-h-screen"
      onClick={() => {
        if (isProfileOpen) {
          setIsProfileOpen(false);
        }
      }}
    >
      {isProfileOpen ? (
        <Image
          src={img}
          width={250}
          height={250}
          alt="profile.jpg"
          className="z-[100] rounded-full shadow-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      ) : (
        <></>
      )}
      <div
        className={`flex duration-200 justify-center bg-black text-white px-4 sm:px-10 py-10 font-sans ${
          isProfileOpen ? "blur-lg" : ""
        } `}
      >
        <div className="max-w-4xl w-full">
          {/* Header */}
          <div className="flex flex-col-reverse md:flex-row justify-around items-center gap-6 mb-12">
            <div>
              <h1 className="text-5xl font-bold text-center md:text-left">Aryan Chari</h1>
              <em className="text-gray-400 mt-2 block text-lg text-center md:text-left">
                JavaScript/TypeScript Full-Stack Developer
              </em>
            </div>
            <Image
              onClick={() => setIsProfileOpen(true)}
              src={img}
              width={150}
              height={150}
              alt="profile.jpg"
              className="rounded-full shadow-xl"
            />
          </div>

          {/* Summary */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold underline decoration-white mb-3">
              Summary
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Final-year B.Tech student from NIT Goa with a strong foundation in
              full-stack web development. Skilled in JavaScript, TypeScript,
              React.js, Next.js, Node.js, Express, MongoDB, PostgreSQL, and
              Prisma. Experienced in building and deploying scalable, responsive
              web applications. Passionate about crafting clean UIs, optimizing
              performance, and solving real-world problems through tech.
              Actively exploring open-source contributions and freelance
              opportunities.
            </p>
          </section>

          {/* Education */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold underline decoration-white mb-3">
              Education
            </h2>
            <div>
              <h3 className="font-medium text-lg">
                National Institute of Technology Goa
              </h3>
              <p className="text-gray-300">
                <em>Electrical and Electronics Engineering</em>
              </p>
            </div>
          </section>

          {/* Work Experience */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold underline decoration-white mb-4">
              Work Experience
            </h2>
            <ul className="space-y-6">
              {workExperience.map((work, idx) => (
                <li key={idx} className="border-l-4 border-white pl-4">
                  <h3 className="text-lg font-semibold">{work.company}</h3>
                  <p className="italic text-gray-400">{work.title}</p>
                  <p className="text-gray-300">{work.description}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Skills */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold underline decoration-white mb-4">
              Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="transition-all">
                  <div
                    onClick={() => toggleSkill(skill.name)}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <span className="text-white transition-transform group-hover:scale-110">
                      {openSkill[skill.name] ? (
                        <CircleMinus size={15} />
                      ) : (
                        <CirclePlus size={15} />
                      )}
                    </span>
                    <h3 className="text-lg font-semibold group-hover:underline">
                      {skill.name}
                    </h3>
                  </div>
                  {openSkill[skill.name] && (
                    <ul className="list-disc list-inside text-gray-300 mt-2 ml-6 space-y-1 transition-all duration-300 ease-in-out">
                      {skill.data.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-2xl font-semibold underline decoration-white mb-4">
              Projects
            </h2>
            <ul className="space-y-6">
              {projects.map((project, idx) => (
                <li
                  key={idx}
                  className="p-4 transition duration-300 hover:[box-shadow:0px_10px_10px_-10px_rgba(255,255,255,0.8)]"
                >
                  <Link href={project.url} target="_blank">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-sm mt-1">{project.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Links */}
          <section className="flex items-center justify-center gap-8 mt-20">
            <Link
              href="https://www.linkedin.com/in/aryan-chari-7a6402275/"
              target="_blank"
              className="opacity-40 hover:opacity-100"
            >
              <LucideLinkedin />
            </Link>
            <Link
              href="https://github.com/aryanchari06"
              target="_blank"
              className="opacity-40 hover:opacity-100"
            >
              <GithubIcon />
            </Link>
            <Link href={"/"} className="opacity-40 hover:opacity-100">
              <Mail />
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
