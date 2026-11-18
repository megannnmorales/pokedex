export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}
export const BASE_URL = "https://pokemon-team-api-xlvv.onrender.com";
export const GET_BASE_URL = import.meta.env.VITE_API_URL;


export const apiGet = async <T>(
  path: string,
  signal?: AbortSignal,
): Promise<T> => {
  const response = await fetch(`${GET_BASE_URL}${path}`, { signal });

  if (!response.ok) {
    throw new ApiError(
      `Request failed with status ${response.status}`,
      response.status,
    );
  }
  return (await response.json()) as T;
};


export const apiPost = async <T>(path: string, body: unknown): Promise<T> => {
  const response = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new ApiError(
      `Request failed with status ${response.status}`,
      response.status,
    );
  }

  return (await response.json()) as T;
};

export const apiDelete = async (path: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}${path}`, { method: "DELETE" });

  if (!response.ok) {
    throw new ApiError(
      `Request failed with status ${response.status}`,
      response.status,
    );
  }
};
