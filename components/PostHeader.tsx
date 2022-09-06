import Heading from './Heading';
import Image from 'next/image';
import Author from './Author';
import PublishDate from './PublishDate';
import WelcomeImage from './WelcomeImage';

const PostHeader = ({
  title,
  date,
  welcomeImageUrl,
  welcomeImageAltText,
}: { title: string, date: string, welcomeImageUrl: string, welcomeImageAltText: string }) => {
  return (
      <div
          className='border-solid border-b-gray-[200] dark:border-b-gray border-b-1.5 mb-6'>
        <Heading>{title}</Heading>
        <div className='flex mb-12 items-center'>
          <Image
              className='inline-block h-9 w-9 rounded-full'
              src='/will-avatar.jpeg'
              width='50'
              height='50'
              layout='intrinsic'
              alt='author'
          />
          <div className='flex flex-col items-start ml-3'>
            <Author/>
            <PublishDate date={date} className='mt-1.5'/>
          </div>
        </div>
        <WelcomeImage src={welcomeImageUrl} alt={welcomeImageAltText}/>
      </div>
  );
};

export default PostHeader;