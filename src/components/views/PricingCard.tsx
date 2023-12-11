'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../UI';
export const PricingCard = () => {

  
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/contact');
  };

  return (
    <section className="section-services">
      <article className="section-services__landing-card">
        <h5 className="section-services__title">Landing Page</h5>
        <ul>
          <li>
            <span>Página</span> web de una sección
          </li>
          <li>
            <span>Diseño</span> para laptops, tablets, móviles; entre otros.
          </li>
          <li>
            <span>Formulario</span> de contacto
          </li>
          <li>
            <span>Animaciones</span>
          </li>
          <li>
            <span>Integraciones</span> con whatsapp
          </li>
          <li>
            <span>Integraciones</span> con facebook
          </li>
          <li>
            <span>Incluye</span> dominio y hoisting
          </li>
          <li style={{ marginTop: '4rem' }}>
            <span>Y Mucho</span> más
          </li>
        </ul>
        <Button backgroundColor="green" onClick={handleNavigation}>
          Pregunta
        </Button>
      </article>

      <article className="section-services__web-card">
        <h5 className="section-services__title">Sitios web</h5>
        <ul>
          <li>
            <span>Sitio</span> web con páginas requeridas
          </li>
          <li>
            <span>Diseño</span> para laptops, tablets, móviles; entre otros.
          </li>
          <li>
            <span>Formulario</span> de contacto
          </li>
          <li>
            <span>Animaciones</span>
          </li>
          <li>
            <span>Integraciones</span> con whatsapp
          </li>
          <li>
            <span>Integraciones</span> con facebook
          </li>
          <li>
            <span>Incluye</span> dominio y hoisting
          </li>
          <li style={{ marginTop: '4rem' }}>
            <span>Y Mucho</span> más
          </li>
        </ul>
        <Button backgroundColor="green" onClick={handleNavigation}>
          Pregunta
        </Button>
      </article>

      <article className="section-services__software-card">
        <h5 className="section-services__title">Software a tu medida</h5>
        <ul>
          <li>
            <span>Sitio</span> web con páginas requeridas
          </li>
          <li>
            <span>Diseño</span> para laptops, tablets, móviles; entre otros.
          </li>
          <li>
            <span>Inventarios</span>
          </li>
          <li>
            <span>Ventas</span>
          </li>
          <li>
            <span>Autenticación</span>
          </li>
          <li>
            <span>Reportes</span>
          </li>
          <li>
            <span>Agilidad</span> en entregas
          </li>
          <li>
            <span>Incluye</span> dominio y hoisting
          </li>
          <li style={{ marginTop: '4rem' }}>
            <span>Y Mucho</span> más
          </li>
        </ul>
        <Button backgroundColor="green" onClick={handleNavigation}>
          Pregunta
        </Button>
      </article>
    </section>
  );
};
