import Image from 'next/image';

import language from  "../../../languages.json"
export const metadata = {
  title: 'dialmonsalve | Nosotros',
  description:
    'Descubre quiénes somos y cómo convertimos ideas de negocios en realidades. Conoce más sobre nuestro compromiso y cómo ayudamos a nuestros clientes a alcanzar sus metas.',
  openGraph: {
    title: 'dialmonsalve | Nosotros',
    description:
      'Descubre quiénes somos y cómo convertimos ideas de negocios en realidades. Conoce más sobre nuestro compromiso y cómo ayudamos a nuestros clientes a alcanzar sus metas.',
  },
};

export default function AboutPage() {

  return (
    <>
      <h2 className="title-page" >Conoce más quien soy</h2>
      <section className="section-about">
        <div className="section-about__container-photo">
          <Image
            className="section-about__container-photo--photo"
            width={100}
            height={100}
            src="/assets/me.png"
            alt="Diego Monsalve"
          />
          <p>Diego Monsalve </p>
          <p>De profesión: Ingeniero de productividad y calidad. </p>
          <p>Por pasión y convicción: desarrollador web</p>
        </div>

        <h1>EJEMPLO</h1>
        {language.en.about.h2}

        <article className="section-about__resume">
          <div className="section-about__background"></div>
          <h4 className="section-about__resume--subtitle">Trayectoria</h4>

          <p className="section-about__resume--content">
            Desde el inicio de mi vida laboral a los 18 años, he mantenido un
            constante progreso, enfrentando los desafíos que la vida nos
            presenta en el camino.
          </p>

          <p className="section-about__resume--content">
            Con más de 10 años de dedicación a la logística, la gestión de
            inventarios y 1 en producción cuento con la experiencia necesaria
            para guiar a las compañías en la creación y mantenimiento de
            software a medida, adaptado a sus necesidades específicas.
          </p>

          <p className="section-about__resume--content">
            Hace dos años, decidí adentrarme en el mundo del desarrollo web, con
            el objetivo de ayudar a otros con mis conocimientos. Ahora, deseo
            compartir lo que he aprendido con aquellas personas que requieran de
            mis servicios.
          </p>
        </article>

        <article className="section-about__hobbies">
          <div className="section-about__background"></div>
          <h4 className="section-about__hobbies--subtitle">¿Y qué me gusta?</h4>
          <p className="section-about__hobbies--content">
            Siento pasión por mi familia, el desarrollo web y las tareas que
            requieren un esfuerzo mental.
          </p>
          <p className="section-about__hobbies--content">
            Valoro las relaciones interpersonales y busco enriquecer mi
            conocimiento a través de la interacción con los demás
          </p>
          <p className="section-about__hobbies--content">
            Me entusiasma abordar cada actividad con pasión y dedicación,
            adicional disfruto pasar tiempo con personas amenas y
            enriquecedoras. Me considero una persona sociable y abierta a nuevos
            retos.
          </p>
          <p className="section-about__hobbies--content">
            Mi vida social no entorpece mi compromiso laboral, lo cual me
            permite llevar una vida tranquila y armoniosa, siempre con un
            profundo amor por los animales y la naturaleza.
          </p>
          <p className="section-about__hobbies--content">
            Como toque final, en mi rutina, la taza de café es un elemento
            imprescindible en mi mesa.
          </p>
        </article>
      </section>
    </>
  );
}
