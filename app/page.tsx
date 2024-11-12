"use client"; // Asegúrate de que esta línea esté presente
import Link from "next/link";
import Image from "next/image";
import ImageSlider from '../components/ImageSlider'; // Asegúrate de que esta ruta sea correcta
import { useState } from 'react';

// Categorías para Aplicaciones
const categories1 = [
  {
    label: "Proxmox",
    slug: "http://192.168.4.106:8006/",
    description: "Máquinas virtuales y contenedores",
    image_url: "/proxmox.png",
  },
  {
    label: "Jenkins",
    slug: "http://192.168.4.206:8080/",
    description: "Despliegue de aplicaciones",
    image_url: "/jenkins.png",
  },
  {
    label: "SonarQube",
    slug: "http://192.168.4.206:9000/",
    description: "Sonar, QualityGate y evaluaciones",
    image_url: "/sonar.png",
  },
  {
    label: "Kanboard",
    slug: "http://192.168.4.206:8087/",
    description: "Pizarrón Kanban",
    image_url: "/kanboard.png",
  },
  {
    label: "EmulatorJs",
    slug: "http://192.168.4.206:8088/",
    description: "Videojuegos retro en linea",
    image_url: "/emulatorjs.png",
  },
  {
    label: "EmulatorJs Backend",
    slug: "http://192.168.4.206:8089/",
    description: "Configuración de EmulatorJs",
    image_url: "/emulatorjs_backend.png",
  },
  {
    label: "OpenMediaVault",
    slug: "http://192.168.4.107/",
    description: "Dashboard para NAS",
    image_url: "/omv.png",
  },
  {
    label: "Minecraft Server Manager",
    slug: "http://192.168.4.111:23333/",
    description: "Administrador de servidors de Minecraft",
    image_url: "/minecraft.png",
  },
  {
    label: "Packready",
    slug: "http://192.168.4.206:8081/",
    description: "Aplicación de paquetería",
    image_url: "/packready.png",
  },
  {
    label: "Tecland",
    slug: "http://192.168.4.206:8082/",
    description: "Administrador de servidores Roleplay en Minecraft",
    image_url: "/tecland.png",
  },
  {
    label: "TeachEvolutionPro",
    slug: "http://192.168.4.206:8083/",
    description: "Sistema administrador de escuelas",
    image_url: "/tep.png",
  },
  {
    label: "GymOUT",
    slug: "http://192.168.4.206:8084/",
    description: "Aplicación para control de ejercicios",
    image_url: "/gymout.png",
  },
  {
    label: "pgAdmin4",
    slug: "http://192.168.4.206:8090/",
    description: "Base de datos Postgress SQL",
    image_url: "/pgadmin4.png",
  },
  {
    label: "LubeLogger",
    slug: "http://192.168.4.206:8085/login",
    description: "Administrador de vehículos",
    image_url: "/luberlogger.png",
  },
  {
    label: "Portainer Apps",
    slug: "https://192.168.4.206:9443/",
    description: "Administrador de docker",
    image_url: "/portainer.jpeg",
  },
  {
    label: "Gitea Repository",
    slug: "http://192.168.4.206:3000/",
    description: "Administrador de repositorios",
    image_url: "/gitea.png",
  },
  {
    label: "Tecfood",
    slug: "http://192.168.4.206:8091/",
    description: "Recetas",
    image_url: "/tecfood.png",
  },
  {
    label: "Firefly",
    slug: "http://192.168.4.206:8093/",
    description: "Finanzas personales",
    image_url: "/firefly.png",
  },
  {
    label: "Grafana",
    slug: "http://192.168.4.206:8092/",
    description: "Logs de apps",
    image_url: "/grafana.png",
  },
  {
    label: "Plex",
    slug: "http://192.168.4.206:32400/",
    description: "Contenido audiovisual",
    image_url: "/plex.png",
  },
];

// Categorías para Aplicaciones vpn
const categories2 = [
  {
    label: "Proxmox",
    slug: "https://172.29.34.251:8006/",
    description: "Máquinas virtuales y contenedores",
    image_url: "/proxmox.png",
  },
  {
    label: "Jenkins",
    slug: "http://172.29.195.97:8080/",
    description: "Despliegue de aplicaciones",
    image_url: "/jenkins.png",
  },
  {
    label: "SonarQube",
    slug: "http://172.29.195.97:9000/",
    description: "Sonar, QualityGate y evaluaciones",
    image_url: "/sonar.png",
  },
  {
    label: "Kanboard",
    slug: "http://172.29.195.97:8087/",
    description: "Pizarrón Kanban",
    image_url: "/kanboard.png",
  },
  {
    label: "EmulatorJs",
    slug: "http://172.29.195.97:8088/",
    description: "Videojuegos retro en linea",
    image_url: "/emulatorjs.png",
  },
  {
    label: "EmulatorJs Backend",
    slug: "http://172.29.195.97:8089/",
    description: "Configuración de EmulatorJs",
    image_url: "/emulatorjs_backend.png",
  },
  {
    label: "OpenMediaVault",
    slug: "http://172.29.107.141/",
    description: "Dashboard para NAS",
    image_url: "/omv.png",
  },
  {
    label: "Minecraft Server Manager",
    slug: "http://172.29.6.57:23333/",
    description: "Administrador de servidors de Minecraft",
    image_url: "/minecraft.png",
  },
  {
    label: "Packready",
    slug: "http://172.29.195.97:8081/",
    description: "Aplicación de paquetería",
    image_url: "/packready.png",
  },
  {
    label: "Tecland",
    slug: "http://172.29.195.97:8082/",
    description: "Administrador de servidores Roleplay en Minecraft",
    image_url: "/tecland.png",
  },
  {
    label: "TeachEvolutionPro",
    slug: "http://172.29.195.97:8083/",
    description: "Sistema administrador de escuelas",
    image_url: "/tep.png",
  },
  {
    label: "GymOUT",
    slug: "http://172.29.195.97:8084",
    description: "Aplicación para control de ejercicios",
    image_url: "/gymout.png",
  },
  {
    label: "pgAdmin4",
    slug: "http://172.29.195.97:8090",
    description: "Base de datos Postgress SQL",
    image_url: "/pgadmin4.png",
  },
  {
    label: "LubeLogger",
    slug: "http://172.29.195.97:8085/login",
    description: "Administrador de vehículos",
    image_url: "/luberlogger.png",
  },
  {
    label: "Portainer Apps",
    slug: "https://172.29.195.97:9443/",
    description: "Administrador de docker",
    image_url: "/portainer.jpeg",
  },
  {
    label: "Gitea Repository",
    slug: "http://172.29.195.97:3000/",
    description: "Administrador de repositorios",
    image_url: "/gitea.png",
  },
  {
    label: "Tecfood",
    slug: "http://172.29.195.97:8091/",
    description: "Recetas",
    image_url: "/tecfood.png",
  },
  {
    label: "Firefly",
    slug: "http://172.29.195.97:8093/",
    description: "Finanzas personales",
    image_url: "/firefly.png",
  },
  {
    label: "Grafana",
    slug: "http://172.29.195.97:8092/",
    description: "Logs de apps",
    image_url: "/grafana.png",
  },
  {
    label: "Plex",
    slug: "http://172.29.195.97:32400/",
    description: "Contenido audiovisual",
    image_url: "/plex.png",
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
