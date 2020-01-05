import React, { useEffect, useRef, useState } from 'react';
import useVisibilitySensor from '@rooks/use-visibility-sensor';

export const LazyImage: React.FunctionComponent<any> = ({
  children,
  src,
  placeholderSrc,
  onImageError,
  useSensor = true
}) => {
  const rootNode = useRef(null);
  const { isVisible } = useVisibilitySensor(rootNode, {
    intervalCheck: false,
    scrollCheck: useSensor,
    resizeCheck: useSensor,
  });

  if (!children || typeof children !== 'function') {
    throw new Error(`LazyImage requires a function as its only child`);
  }

  const [imageElement, setImageElement] = useState<any>(null);
  const [imageSrc, setImageSrc] = useState(placeholderSrc);
  const [loading, setLoading] = useState(true);

  const onLoad = () => {
    setImageSrc(src);
    setLoading(false);
  };

  const onError = (error: any) => {
    if (onImageError) {
      onImageError(error);
    }
  };

  const loadImage = () => {
    if (imageElement) {
      imageElement.onload = null;
      imageElement.onerror = null;
    }
    const image = new Image();
    setImageElement(() => {
      image.onload = onLoad;
      image.onerror = onError;
      image.src = src;

      return image;
    });
  };

  useEffect(() => {
    if (loading){
      if(isVisible || !useSensor){
        loadImage();
      }
    }
  }, [isVisible, useSensor]);

  return (
    <div ref={rootNode} style={{ minWidth: "1px", minHeight:"1px" }}>
      {children(imageSrc, loading, isVisible)}
    </div>
  );
};
