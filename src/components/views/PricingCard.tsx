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
          <li>✔️ Página web de una sección</li>
          <li>✔️ Diseño para laptops, tablets, móviles; entre otros.</li>
          <li>✔️ Formulario de contacto</li>
          <li>✔️ Animaciones</li>
          <li>✔️ Integraciones con whatsapp</li>
          <li>✔️ Integraciones con facebook</li>
          <li>✔️ Incluye dominio y hoisting</li>
          <li>Y Mucho más</li>
        </ul>
        <Button backgroundColor="green" onClick={handleNavigation}>
          Pregunta
        </Button>
      </article>

      <article className="section-services__web-card">
        <h5 className="section-services__title">Sitios web</h5>
        <ul>
          <li>✔️ Sitio web con páginas requeridas</li>
          <li>✔️ Diseño para laptops, tablets, móviles; entre otros.</li>
          <li>✔️ Formulario de contacto</li>
          <li>✔️ Animaciones</li>
          <li>✔️ Integraciones con whatsapp</li>
          <li>✔️ Integraciones con facebook</li>
          <li>✔️ Incluye dominio y hoisting</li>
          <li>Y Mucho más</li>
        </ul>
        <Button backgroundColor="green" onClick={handleNavigation}>
          Pregunta
        </Button>
      </article>

      <article className="section-services__software-card">
        <h5 className="section-services__title">Software a tu medida</h5>
        <ul>
          <li>✔️ Sitio web con páginas requeridas</li>
          <li>✔️ Diseño para laptops, tablets, móviles; entre otros.</li>
          <li>✔️ Inventarios</li>
          <li>✔️ Ventas</li>
          <li>✔️ Autenticación</li>
          <li>✔️ Reportes</li>
          <li>✔️ Agilidad en entregas</li>
          <li>✔️ Incluye dominio y hoisting</li>
          <li>Y Mucho más</li>
        </ul>
        <Button backgroundColor="green" onClick={handleNavigation}>
          Pregunta
        </Button>
      </article>
    </section>
  );
};
