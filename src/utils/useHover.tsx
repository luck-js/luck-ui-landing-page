import { useRef, useState, useEffect } from 'react';

export default function useHover(onMouseOver:any, onMouseOut:any) {
  const [value, setValue] = useState(false);

  const myRef = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(() => {
    value ? onMouseOver() : onMouseOut()
  }, [value])

  useEffect(() => {
    const node:any = myRef.current;
    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);

      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, []);

  return [myRef, value];
}
