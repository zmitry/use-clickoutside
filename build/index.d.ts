import { RefObject } from "react";
export default function useOutsideClick<T>(cb: (el: Event) => any, event?: string, ref?: any): RefObject<T>;
