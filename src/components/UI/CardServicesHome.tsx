'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface Props {
  titleCard: string;
  description: string;
  service: string;
  imageWidth: number;
  imageHeight: number;
  imagePath: string;
}

export const CardServicesHome = ({
  titleCard,
  description,
  service,
  imageWidth,
  imageHeight,
  imagePath,
}: Props) => {
  const [articleVisible, setArticleVisible] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setArticleVisible(true);
            return
          }
          setArticleVisible(false);
        });
      },
      {
        root: null,
        threshold: 0.3,
      }
    );
    const targetElement = observerRef.current;

    observer.observe(targetElement as HTMLDivElement);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={observerRef}
      className={`section-home__${service} ${
        articleVisible ? 'article-visible' : ''
      } `}
    >
      <div className="section-home__container-image">
        <Image
          style={{ margin: '0 auto' }}
          className={`section-home__${service}--image`}
          width={imageWidth}
          height={imageHeight}
          src={imagePath}
          alt="service"
          priority
        />
      </div>

      <div className={`section-home__${service}--content`}>
        <h2 className={`section-home__${service}--content-title`}>
          {titleCard}
        </h2>
        <p className={`section-home__${service}--content-description`}>
          {description}
        </p>
      </div>
    </article>
  );
};
