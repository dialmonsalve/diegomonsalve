import { useState } from 'react';

export const useProjects = (images: string[]) => {

  const [selectIndex, setSelectIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const selectNewImage = (images: string[], next = true) => {
    setLoaded(false)

    setTimeout(() => {
      const condition = next ? selectIndex < images.length - 1 : selectIndex > 0
      const nextIndex =
        next ? condition ? selectIndex + 1 : 0
          : condition ? selectIndex - 1 : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectIndex(nextIndex);
    }, 500);
  }

  const previous = () => {
    selectNewImage(images, false)
  }
  const next = () => {
    selectNewImage(images)
  }

  const handleShowModal = () => {
    setShowModal(true)
  }

  const goToSlide = (idx: number) => {
    if (selectIndex === idx) return;
    setLoaded(false)
    setTimeout(() => {
      setSelectedImage(images[idx])
      setSelectIndex(idx)
    }, 500);
  }

  return {
    selectIndex,
    selectedImage,
    loaded,
    showModal,
    goToSlide,
    handleShowModal,
    next,
    previous,
    setLoaded,
    setShowModal
  }
}
