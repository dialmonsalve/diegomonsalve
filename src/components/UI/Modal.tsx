import { Dispatch, SetStateAction } from "react";

interface Props {
  selectedImage: string;
  setShowModal: Dispatch<SetStateAction<boolean>>
}

export const Modal = ({ selectedImage, setShowModal }: Props) => {

  const handleHideModal = () => {
    setShowModal(false)
  }

  return (
    <div className={`modal-video`} >
      <div
        className='modal-video__container'
        onClick={handleHideModal}
      >
        <video
          className="modal-video__container--video"
          controls
          autoPlay
          controlsList="nodownload"
          onContextMenu={(e) => e.preventDefault()}
          onClick={(e) => e.stopPropagation()}

        >
          <source src={`/media/${selectedImage}.mp4`} type="video/mp4" />
          Tu navegador no soporta la etiqueta video
        </video>
      </div>
    </div>
  )
}
