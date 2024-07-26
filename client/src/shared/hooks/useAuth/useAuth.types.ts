export interface UseAuthReturn<T> {
  authenticate: (params: T) => Promise<void>;
  loading: boolean;
  error: string | null;
}
