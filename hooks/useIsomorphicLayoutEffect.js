import { useLayoutEffect, useEffect } from "react";

export default function useIsomorphicLayoutEffect(cb, deps) {
  const isBrowser = typeof window !== "undefined";
  const useEffectHook = isBrowser ? useLayoutEffect : useEffect;
  return useEffectHook(cb, deps);
}
