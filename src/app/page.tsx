import { CardServicesHome } from '@/components/UI';

export const metadata = {
  title: 'dialmonsalve | home',
  description:
    'Transforma tu presencia en línea con servicios de desarrollo web y diseño creativo. Soy Diego Monsalve, un freelancer apasionado comprometido con crear experiencias digitales impactantes para empresas y emprendedores. Descubre cómo puedo ayudarte a destacar en la web',
  openGraph: {
    title: 'dialmonsalve | home',
    description:
      'Experto en desarrollo web y diseño creativo. Crea experiencias digitales impactantes para empresas y emprendedores. ¡Descubre cómo destacar en la web con mis servicios!',
  },
};

export default function HomePage() {
  return (
    <>
      <h2 className="title-page">Descubre un mundo de posibilidades</h2>

      <section className="section-home">
        <CardServicesHome
          titleCard="Landing Page"
          description="Nuestra especialización permitirá diseñar páginas web que cautiven tu público. Estamos comprometidos en resaltar tus aspectos únicos hasta brindar una experiencia intuitiva para tus usuarios."
          imageHeight={180}
          imageWidth={250}
          service="landing"
          imagePath="/assets/landing.jpg"
        />

        <CardServicesHome
          titleCard="Tu sitio web"
          description="Descubre las posibilidades que tienes ante el mundo, compartamos la experiencia de evolucionar y enfocar nuestro trabajo en cumplir tus objetivos."
          imageHeight={180}
          imageWidth={250}
          service="web"
          imagePath="/assets/web.jpg"
        />
        <CardServicesHome
          titleCard="Software a medida"
          description="Ofrecemos soluciones de software a medida diseñadas para satisfacer los requisitos de cada compañía. Estamos altamente calificados para trabajar estrechamente contigo y comprender tus procesos internos, desafíos y metas.."
          imageHeight={200}
          imageWidth={190}
          service="software"
          imagePath="/assets/software.svg"
        />
      </section>
    </>
  );
}
