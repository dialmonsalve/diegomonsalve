import { ContactForm } from '@/components/views';

export const metadata = {
  title: 'dialmonsalve | Contacto',
  description:
    'Cuéntanos lo que quieres saber de nosotros y serás atendido con gusto. Completa nuestro formulario de contacto y nos pondremos en contacto contigo pronto.',
  openGraph: {
    title: 'dialmonsalve | Contacto',
    description:
      'Cuéntanos lo que quieres saber de nosotros y serás atendido con gusto. Completa nuestro formulario de contacto y nos pondremos en contacto contigo pronto.',
  },
};

export default function ContactPage() {
  return (
    <>
      <h2 className="title-page">Contáctanos y coticemos</h2>
      <ContactForm />
    </>
  );
}
