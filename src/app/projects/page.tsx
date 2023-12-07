import { ProjectCarrusel } from "@/components/UI/ProjectCarrusel";

export const metadata = {
  title: 'dialmonsalve | Proyectos',
  description:
    'Explora los proyectos destacados en el portafolio de Diego Monsalve. Descubre nuestra experiencia y habilidades a través de una variedad de trabajos realizados con pasión y dedicación.',
  openGraph: {
    title: 'dialmonsalve | Proyectos',
    description:
      'Explora los proyectos destacados en el portafolio de Diego Monsalve. Descubre nuestra experiencia y habilidades a través de una variedad de trabajos realizados con pasión y dedicación.',
  },
};

export default function ProjectPage() {
  return (
    <>
      <h1>Acá encontrarás lo que hemos logrado construir</h1>
      <ProjectCarrusel />
    </>
  );
}


