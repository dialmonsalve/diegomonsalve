import Link from 'next/link';
import Image from 'next/image';

interface Props {
  href: string;
  alt: string;
  src: string;
}

export const SocialNavigation = ({ alt, href, src, ...props }: Props) => {
  return (
    <>
      <Link href={href} target="_blank" {...props}>
        <Image width={46} height={46} src={src} alt={alt} {...props} />
      </Link>
    </>
  );
};
