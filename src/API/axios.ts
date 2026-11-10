import axios from "axios";

const tmdbAccessToken = import.meta.env.VITE_API_KEY?.trim();

if (!tmdbAccessToken) {
  throw new Error(
    "Missing VITE_API_KEY. Add your TMDB Bearer access token to .env.local.",
  );
}

/**
 * Shared TMDB HTTP client.
 *
 * IMPORTANT: VITE_ variables are bundled into browser code. This token is
 * visible to users. For production, proxy TMDB requests through a server or
 * serverless function and keep the TMDB token on the server.
 */
export const axiosTMDBInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 15_000,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${tmdbAccessToken}`,
  },
});
