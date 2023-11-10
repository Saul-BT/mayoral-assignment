import { useCallback } from "react";
import { useRouter } from "next/router";

type SearchParams<T> = {
  params: T;
  updateParams: (params: Partial<T>) => void;
};

const useSearchParams = <T extends Record<string, string>>(): SearchParams<T> => {
  const router = useRouter();
  const params = Object.fromEntries(
    new URLSearchParams(router.asPath.split(/\?/)[1]).entries(),
  ) as T;

  const updateParams = useCallback(
    (newParams: Partial<T>) => {
      const url = new URL(router.asPath, window.location.origin);
      Object.entries(newParams).forEach(([key, value]) => {
        if (value) {
          url.searchParams.set(key, value);
        } else {
          url.searchParams.delete(key);
        }
      });
      router.push(url.pathname + url.search, undefined, { shallow: true });
    },
    [router],
  );

  return {
    params,
    updateParams,
  };
};

export default useSearchParams;
