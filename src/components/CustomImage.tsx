import Image from 'next/image';

interface CustomImageProps {
  src?: string | undefined;
  className?: string;
  width?: number;
  height?: number;
  fullSrc?: string | undefined;
}

const CustomImage: React.FC<CustomImageProps> = ({ src, className, width = 100, height = 100 ,fullSrc}) => {
  return (
    <Image
      src={fullSrc ?? `/images/${src}` }
      alt={`${src}`}
      width={width}
      height={height}
      layout="responsive"
      draggable="false"
      loading={'lazy'}
      className={className}
      decoding={"async"}
    />
  );
};

export default CustomImage;
