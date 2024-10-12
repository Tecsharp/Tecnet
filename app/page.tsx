"use client"; 

import Link from "next/link";
import Image from "next/image";
import ImageSlider from '../components/ImageSlider';
import { useState } from 'react';

const categories1 = [
  {
    label: "Proxmox",
    slug: "#",
    description: "Máquinas virtuales y contenedores",
    image_url: "/proxmox.png",
  },
  {
    label: "Jenkins",
    slug: "#",
    description: "Despliegue de aplicaciones",
    image_url: "/jenkins.png",
  },
  {
    label: "SonarQube",
    slug: "#",
    description: "Sonar, QualityGate y evaluaciones",
    image_url: "/sonar.png",
  },
  {
    label: "Kanboard",
    slug: "#",
    description: "Pizarrón Kanban",
    image_url: "/kanboard.png",
  },
  {
    label: "EmulatorJs",
    slug: "#",
    description: "Videojuegos retro en linea",
    image_url: "/emulatorjs.png",
  },
  {
    label: "EmulatorJs Backend",
    slug: "#",
    description: "Configuración de EmulatorJs",
    image_url: "/emulatorjs_backend.png",
  },
  {
    label: "OpenMediaVault",
    slug: "#",
    description: "Dashboard para NAS",
    image_url: "/omv.png",
  },
  {
    label: "Minecraft Server Manager",
    slug: "#",
    description: "Administrador de servidors de Minecraft",
    image_url: "/minecraft.png",
  },
  {
    label: "Packready",
    slug: "#",
    description: "Aplicación de paquetería",
    image_url: "/packready.png",
  },
  {
    label: "Tecland",
    slug: "#",
    description: "Administrador de servidores Roleplay en Minecraft",
    image_url: "/tecland.png",
  },
  {
    label: "TeachEvolutionPro",
    slug: "#",
    description: "Sistema administrador de escuelas",
    image_url: "/tep.png",
  },
  {
    label: "GymOUT",
    slug: "#",
    description: "Aplicación para control de ejercicios",
    image_url: "/gymout.png",
  },
  {
    label: "pgAdmin4",
    slug: "#",
    description: "Base de datos Postgress SQL",
    image_url: "/pgadmin4.png",
  },
  {
    label: "LubeLogger",
    slug: "#login",
    description: "Administrador de vehículos",
    image_url: "/luberlogger.png",
  },
  {
    label: "Portainer Apps",
    slug: "#",
    description: "Administrador de docker",
    image_url: "/portainer.jpeg",
  },
  {
    label: "Gitea Repository",
    slug: "#",
    description: "Administrador de repositorios",
    image_url: "/gitea.png",
  },
];


// Categorías para Aplicaciones 2
const categories2 = [
  {
    label: "Proxmox",
    slug: "#",
    description: "Máquinas virtuales y contenedores",
    image_url: "/proxmox.png",
  },
  {
    label: "Jenkins",
    slug: "#",
    description: "Despliegue de aplicaciones",
    image_url: "/jenkins.png",
  },
  {
    label: "SonarQube",
    slug: "#",
    description: "Sonar, QualityGate y evaluaciones",
    image_url: "/sonar.png",
  },
  {
    label: "Kanboard",
    slug: "#",
    description: "Pizarrón Kanban",
    image_url: "/kanboard.png",
  },
  {
    label: "EmulatorJs",
    slug: "#",
    description: "Videojuegos retro en linea",
    image_url: "/emulatorjs.png",
  },
  {
    label: "EmulatorJs Backend",
    slug: "#",
    description: "Configuración de EmulatorJs",
    image_url: "/emulatorjs_backend.png",
  },
  {
    label: "OpenMediaVault",
    slug: "#",
    description: "Dashboard para NAS",
    image_url: "/omv.png",
  },
  {
    label: "Minecraft Server Manager",
    slug: "#",
    description: "Administrador de servidors de Minecraft",
    image_url: "/minecraft.png",
  },
  {
    label: "Packready",
    slug: "#",
    description: "Aplicación de paquetería",
    image_url: "/packready.png",
  },
  {
    label: "Tecland",
    slug: "#",
    description: "Administrador de servidores Roleplay en Minecraft",
    image_url: "/tecland.png",
  },
  {
    label: "TeachEvolutionPro",
    slug: "#",
    description: "Sistema administrador de escuelas",
    image_url: "/tep.png",
  },
  {
    label: "GymOUT",
    slug: "#",
    description: "Aplicación para control de ejercicios",
    image_url: "/gymout.png",
  },
  {
    label: "pgAdmin4",
    slug: "#",
    description: "Base de datos Postgress SQL",
    image_url: "/pgadmin4.png",
  },
  {
    label: "LubeLogger",
    slug: "#login",
    description: "Administrador de vehículos",
    image_url: "/luberlogger.png",
  },
  {
    label: "Portainer Apps",
    slug: "#",
    description: "Administrador de docker",
    image_url: "/portainer.jpeg",
  },
  {
    label: "Gitea Repository",
    slug: "#",
    description: "Administrador de repositorios",
    image_url: "/gitea.png",
  },
];

export default function Home() {
  const [showAdditionalApps, setShowAdditionalApps] = useState(false);

  const toggleApps = () => {
    setShowAdditionalApps(!showAdditionalApps);
  };

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-1 bg-gray-300 dark:bg-slate-900 py-5">
        <div></div>
        <div className="w-full mx-auto sm:col-span-1 md:col-span-4 2xl:col-span-1">
          <ImageSlider />
        </div>
      </div>

      <main className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-1 py-10">
        <div></div>
        <div className="max-w-5xl mx-auto sm:col-span-2 md:col-span-4 2xl:col-span-1">
          <div className="grid grid-cols-1">
            <div className="flex justify-between mb-4">
              <h2
                className={`px-0 pt-0 pb-2 mx-0 mt-0 mb-5 font-sans text-xl leading-9 normal-case border-b border-solid border-neutral-200 cursor-pointer ${!showAdditionalApps ? "text-blue-500 font-bold" : "text-gray-500"}`}
                style={{ fontWeight: "bold" }}
                onClick={() => setShowAdditionalApps(false)}
              >
                LOCAL APPS
              </h2>
              <h2
                className={`px-0 pt-0 pb-2 mx-0 mt-0 mb-5 font-sans text-xl leading-9 normal-case border-b border-solid border-neutral-200 cursor-pointer ${showAdditionalApps ? "text-blue-500 font-bold" : "text-gray-500"}`}
                style={{ fontWeight: "bold" }}
                onClick={() => setShowAdditionalApps(true)}
              >
                VPN APPS
              </h2>
            </div>

            <ul
              className="flex p-0 m-0 sm:-mx-3"
              style={{ flexFlow: "row wrap", listStyle: "none" }}
            >
              {(showAdditionalApps ? categories2 : categories1).map((category) => (
                <li
                  className="w-full text-left basis-auto sm:w-1/2 sm:px-2 sm:py-0"
                  style={{ listStyle: "outside none none" }}
                  key={category.slug}
                >
                  <div className="flex h-full">
                    <Link
                      className="flex py-6 px-2 w-full h-full bg-transparent border-b border-solid cursor-pointer border-neutral-200 hover:outline-0"
                      href={category.slug}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        className="flex items-center my-0 mr-5 ml-0 text-center"
                        style={{
                          flexBasis: 35,
                          minWidth: 35,
                        }}
                      >
                        <Image
                          src={category.image_url}
                          width={35}
                          height={35}
                          className="block my-0 mx-auto border-none"
                          alt={category.label}
                        />
                      </div>
                      <div className="flex flex-wrap items-center w-full">
                        <h2
                          className="self-end m-0 w-full font-sans text-lg leading-tight normal-case"
                          style={{ fontWeight: "bold" }}
                        >
                          {category.label}
                        </h2>
                        <div
                          className="self-start mx-0 mt-2 mb-0 text-sm leading-5 text-zinc-500"
                        >
                          {category.description}
                        </div>
                      </div>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
