import { PricingCard } from '@/components/views';

export const metadata = {
  title: 'dialmonsalve | Servicios',
  description:
    'Descubre los servicios profesionales ofrecidos por Diego Monsalve. Desde desarrollo web y diseño, nuestro portafolio abarca soluciones para satisfacer tus necesidades. Explora cómo podemos potenciar tu proyecto o negocio.',
  openGraph: {
    title: 'dialmonsalve | Servicios',
    description:
      'Descubre los servicios profesionales ofrecidos por Diego Monsalve. Desde desarrollo web y diseño, nuestro portafolio abarca soluciones para satisfacer tus necesidades. Explora cómo podemos potenciar tu proyecto o negocio.',
  },
};

export default function ServicesPage() {
  return (
    <>
      <h2 className="title-page" >Estos son nuestros servicios</h2>
      <PricingCard />
    </>
  );
}
