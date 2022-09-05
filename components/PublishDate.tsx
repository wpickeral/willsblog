import {CalendarIcon} from '@heroicons/react/outline';

const PublishDate = ({
  date,
  className,
}: { date: string, className?: string }) => {

  return (
      <div className={`flex align-center ${className}`}>
        <CalendarIcon
            className='flex-shrink-0 h-5 w-5 text-gray-400'
            aria-hidden='true'
        />
        <span
            className='ml-2 text-sm font-medium text-gray-600 dark:text-gray-400'>{date}</span>
      </div>
  );
};

export default PublishDate;