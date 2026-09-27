import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages only serves static files, so /story/ needs its own copy of the
// app shell, and 404.html sends unknown paths back to the app.
function pagesRoutes(): Plugin {
  return {
    name: 'pages-routes',
    apply: 'build',
    enforce: 'post',
    generateBundle(_options, bundle) {
      const shell = bundle['index.html']
      if (shell?.type !== 'asset') {
        this.error('index.html was not emitted')
      }
      for (const fileName of ['story/index.html', '404.html']) {
        this.emitFile({ type: 'asset', fileName, source: shell.source })
      }
    },
  }
}

export default defineConfig({
  base: '/juicing4life/',
  plugins: [react(), pagesRoutes()],
})
