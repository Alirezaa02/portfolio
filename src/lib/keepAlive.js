import API from './api'

// Ping the backend every 10 minutes to prevent Render free tier from sleeping
export function startKeepAlive() {
  const ping = () => fetch(`${API}/`).catch(() => {})
  ping() // ping immediately on load
  setInterval(ping, 10 * 60 * 1000)
}
