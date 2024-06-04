import { ReactNode } from 'react';

interface ISkeleton {
  children?: ReactNode;
  width?: number | 'fit-content' | 'min-content' | 'max-content' | 'auto';
  height?: number | 'fit-content' | 'min-content' | 'max-content' | 'auto';
  isLoaded: boolean;
  rounded?: boolean;
}

const Skeleton = ({ children, width = 'auto', height = 'auto', isLoaded, rounded }: ISkeleton) => {
  if (isLoaded) return children;
  return (
    <div
      style={{
        width,
        height,
        maxHeight: '100%',
      }}
      className={`bg-gray-300 dark:bg-gray-700 ${rounded ? 'rounded-full' : 'rounded-md'} animate-pulse`}
    >
      <div className="invisible">{children}</div>
    </div>
  );
};

export default Skeleton;
