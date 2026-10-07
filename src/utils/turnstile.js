let loading
export function loadTurnstile() {
  if (window.turnstile) return Promise.resolve()
  if (loading) return loading
  loading = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    const fail = () => { clearTimeout(timeout); loading = null; script.remove(); reject(new Error('Security check unavailable')) }
    const timeout = setTimeout(fail, 15000)
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    script.onload = () => { if (!window.turnstile) { fail(); return }; clearTimeout(timeout); resolve() }
    script.onerror = fail
    document.head.append(script)
  })
  return loading
}
