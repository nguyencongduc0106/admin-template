import { useEffect, useRef } from 'react';

export default function useClickOutside(callback?: () => void) {
  const nodeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutSide(this: Document, ev: MouseEvent) {
      if (nodeRef.current && !nodeRef.current.contains(ev.target as Node)) {
        callback?.();
      }
    }
    document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  }, [nodeRef, callback]);
  return {
    nodeRef,
  };
}
