/**
 * HTTP client — thin wrapper around fetch
 *
 * Reads the base URL from the VITE_API_URL env variable.
 * All requests automatically attach the Authorization header when a token
 * is present in localStorage (key: "auth_token").
 */

const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:5000/api'

function getToken() {
  try {
    return JSON.parse(localStorage.getItem('auth_token')) ?? null
  } catch {
    return null
  }
}

async function request(path, options = {}) {
  const token = getToken()

  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers,
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: response.statusText }))
    throw Object.assign(new Error(error.message ?? 'Request failed'), {
      status: response.status,
      data: error,
    })
  }

  // 204 No Content
  if (response.status === 204) return null

  return response.json()
}

export const http = {
  get: (path, options) => request(path, { method: 'GET', ...options }),
  post: (path, body, options) =>
    request(path, { method: 'POST', body: JSON.stringify(body), ...options }),
  put: (path, body, options) =>
    request(path, { method: 'PUT', body: JSON.stringify(body), ...options }),
  patch: (path, body, options) =>
    request(path, { method: 'PATCH', body: JSON.stringify(body), ...options }),
  delete: (path, options) => request(path, { method: 'DELETE', ...options }),
}
