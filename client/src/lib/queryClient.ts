import { QueryClient, QueryFunction } from "@tanstack/react-query";

// Add base URL support for GitHub Pages
const BASE_URL = import.meta.env.MODE === 'production' 
  ? '/api'  // In production, use relative path
  : '/api'; // In development, use absolute path

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  // Ensure URL starts with BASE_URL
  const fullUrl = url.startsWith('/') ? `${BASE_URL}${url}` : url;

  const res = await fetch(fullUrl, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const url = queryKey[0] as string;
    const fullUrl = url.startsWith('/') ? `${BASE_URL}${url}` : url;

    const res = await fetch(fullUrl, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

// Create a static data fallback for GitHub Pages
const staticData = {
  courses: [
    {
      id: 1,
      title: "Web Development Fundamentals",
      description: "Learn the basics of web development with HTML, CSS, and JavaScript",
      instructor: "John Doe",
      duration: "8 weeks"
    },
    {
      id: 2,
      title: "React Mastery",
      description: "Master React.js and modern frontend development",
      instructor: "Jane Smith",
      duration: "10 weeks"
    }
  ]
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
      // Add static data fallback for production
      initialData: (context) => {
        if (import.meta.env.MODE === 'production') {
          const path = context.queryKey[0] as string;
          // Return static data based on the endpoint
          if (path === '/api/courses') {
            return staticData.courses;
          }
        }
        return undefined;
      },
    },
    mutations: {
      retry: false,
    },
  },
});