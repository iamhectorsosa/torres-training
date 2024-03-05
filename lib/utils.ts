import * as React from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useServerFunction<TVariables, TData>(
  fn: (variables: TVariables) => Promise<TData | void>,
  callbacks?: {
    onSuccess?: (variables: TVariables, data: TData | void) => void;
    onError?: (error: Error) => void;
  }
) {
  const [isPending, setIsPending] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const execute = React.useCallback<(variables: TVariables) => void>(
    async (variables) => {
      setIsPending(true);
      try {
        const data = await fn(variables);
        setIsError(false);
        callbacks?.onSuccess?.(variables, data);
      } catch (error) {
        setIsError(true);
        callbacks?.onError?.(
          error instanceof Error ? error : new Error("Unknown error")
        );
      } finally {
        setIsPending(false);
      }
    },
    [fn, callbacks]
  );

  return { isPending, isError, execute };
}
