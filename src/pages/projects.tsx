import { Modal } from '@/components/UI/Modal';
import { Layout } from '@/components/layout';
import { useProjects } from '@/hooks/useProjects';
import Image from 'next/image';
import { useState } from 'react';

function ProjectPage() {

  const images = ['01', '02', '03', '04'];

  const {
    loaded,
    selectedImage,
    selectIndex,
    showModal,
    goToSlide,
    handleShowModal,
    next,
    previous,
    setLoaded,
    setShowModal,
  } = useProjects(images)

  return (
    <Layout title='dialmonsalve | Proyectos' pageDescription='Esta es la página de proyectos del portafolio de Diego Monsalve' >
      <h1>Acá encontrarás lo que hemos logrado construir</h1>

      <section className='section-projects' >
        <article className='section-projects__container' >

          <div
            className='section-projects__container--leftArrow'
            onClick={(e) => {
              e.stopPropagation();
              previous()
            }}

          >
            &#10092;
          </div>
          <div
            className='section-projects__container--rightArrow'
            onClick={(e) => {
              e.stopPropagation();
              next()
            }}

          >&#10093;
          </div>
          <Image
            className={`image ${loaded ? "loaded" : ""}`}
            onLoad={() => setLoaded(true)}
            src={`/projects/${selectedImage}.png`}
            alt='project'
            fill
            priority
            sizes='(max-width: 768px) 100vw, 700px'
            onClick={handleShowModal}
          />
        </article>
        <div className='section-projects__dots-container' >
          {
            images.map((_, idx) => (
              <div key={idx}
                className={`section-projects__dots-container--dots ${idx === selectIndex ? 'bg' : ''}`}
                onClick={() => goToSlide(idx)}
              >
                &#9865;
              </div>))
          }
        </div>
      </section>
      {
        showModal &&
        <Modal
          selectedImage={selectedImage}
          setShowModal={setShowModal}
        />
      }


    </Layout>
  )
}

export default ProjectPage