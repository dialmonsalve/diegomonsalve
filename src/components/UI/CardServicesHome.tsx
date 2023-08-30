import Image from 'next/image';
import { Button } from './';

interface Props {
  titleCard: string;
  description: string;
  service: string;
  imageWidth: number;
  imageHeight: number;
  imagePath: string
}

export const CardServicesHome = ({ titleCard, description, service, imageWidth, imageHeight, imagePath }: Props) => {

  return (

    <article className={`section-home__${service}`} >

      <div className='section-home__container-image' >
        <Image
        style={{margin:'0 auto'}}
          className={`section-home__${service}--image`}
          width={imageWidth} height={imageHeight} src={imagePath} alt='service'
          priority
          
          />
      </div>

      <div className={`section-home__${service}--content`} >
        <h2 className={`section-home__${service}--content-title`}>{titleCard}</h2>
        <p className={`section-home__${service}--content-description`} >
          {description}
        </p>
      </div>

    </article>
  )
}
