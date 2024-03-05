"use client";
import { Modal } from "@/components/UI/Modal";
import { useProjects } from "@/hooks/useProjects";
import Image from "next/image";
import Link from "next/link";

export const ProjectCarrusel = () => {
  const images = ["01", "02", "03", "04", "05"];

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
  } = useProjects(images);
  return (
    <>
      <section className="section-projects">
        <article className="section-projects__container">
          <div
            className="section-projects__container--leftArrow"
            onClick={previous}
          >
            &#10092;
          </div>
          <div
            className="section-projects__container--rightArrow"
            onClick={next}
          >
            &#10093;
          </div>
          <Image
            className={`image ${loaded ? "loaded" : ""}`}
            onLoad={() => setLoaded(true)}
            src={`/projects/${selectedImage}.png`}
            alt="project"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 700px"
            onClick={handleShowModal}
          />
        </article>
        <div className="section-projects__dots-container">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`section-projects__dots-container--dots ${
                idx === selectIndex ? "bg" : ""
              }`}
              onClick={() => goToSlide(idx)}
            >
              &#9865;
            </div>
          ))}
        </div>
        {selectedImage === "01" ? (
          <div style={{ height: "0.5rem" }}>
            <Link
              href="https://dialui-components.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="footer__navigation--link"
              style={{ color: "#1d4d87" }}
            >
              <span>visit: dialui-components</span>
            </Link>
          </div>
        ) : (
          <div style={{ height: "0.5rem" }}></div>
        )}
      </section>
      {showModal && (
        <Modal selectedImage={selectedImage} setShowModal={setShowModal} />
      )}
    </>
  );
};
