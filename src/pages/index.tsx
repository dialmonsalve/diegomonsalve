
import { CardServicesHome } from '@/components/UI';
import {Layout} from '@/components/layout';

export default function Home() {
  return (
    <>
      <Layout title='dialmonsalve | Home' pageDescription='Esta es la página principal del portafolio de Diego Monsalve' >
        <h1 >Descubre un mundo de posibilidades</h1>

        <section className='section-home' >

          <CardServicesHome
            titleCard='Landing Page'
            description='Nuestra especialización permitirá diseñarte páginas web que cautiven tu público. Estamos comprometidos en resaltar tus aspectos únicos hasta brindar una experiencia intuitiva para tus usuarios.'
            imageHeight={180}
            imageWidth={250}
            service='landing'
            imagePath='/assets/landing.jpg'        
          />

          <CardServicesHome
            titleCard='Tu sitio web'
            description='Descubre las posibilidades que tienes ante el mundo, compartamos la experiencia de evolucionar y enfocar nuestro trabajo en cumplir tus objetivos.'
            imageHeight={180}
            imageWidth={250}
            service='web'
            imagePath='/assets/web.jpg'        
          />

          <CardServicesHome
            titleCard='Software a medida'
            description='Ofrecemos soluciones de software a medida diseñadas para satisfacer los requisitos de cada compañía. Estamos altamente calificados para trabajar estrechamente contigo y comprender tus procesos internos, desafíos y metas..'
            imageHeight={200}
            imageWidth={190}
            service='software'    
            imagePath='/assets/software.svg'          
          />
        </section>

      </Layout>

    </>
  )
}
