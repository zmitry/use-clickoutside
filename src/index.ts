import { useEffect, useRef } from "react";

const onMount: Array<never> = [];
// todo return ref type
export default function useOutsideClick<T>(
  cb: (el: Event) => any,
  event: string = "click",
  ref: any = null
): T {
  ref = ref || useRef(null);
  useEffect(() => {
    function handleClickOutside(e: any) {
      if ((!ref.current || !ref.current.contains(e.target)) && cb) {
        cb(e);
      }
    }
    document.addEventListener(event, handleClickOutside, true);
    return () => document.removeEventListener(event, handleClickOutside, true);
  }, onMount);
  return ref;
}
