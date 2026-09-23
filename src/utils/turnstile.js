let loading
export function loadTurnstile() {
  if (window.turnstile) return Promise.resolve()
  if (loading) return loading
  loading = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => { loading = null; script.remove(); reject(new Error('Security check unavailable')) }
    document.head.append(script)
  })
  return loading
}
