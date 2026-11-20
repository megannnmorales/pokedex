export const readToken = (): string | null => {
  return localStorage.getItem("token");
};

export const writeToken = (token: string): void => {
  return localStorage.setItem("token", token);
};

export const clearToken = (): void => {
  return localStorage.removeItem("token");
};
