export interface UseLogoutReturn {
  logout: () => Promise<void>;
  loading: boolean;
  error: string | null;
}
