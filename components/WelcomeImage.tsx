import Image from 'next/image';

const WelcomeImage = ({src, alt}: { src: string, alt: string }) => {
  return (
      <div className='mb-10 rounded'>
        <Image alt={alt} src={src} width='752' height='470' layout='intrinsic'
               loading='eager'/>
      </div>
  );
};

export default WelcomeImage;