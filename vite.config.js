import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// 自定义插件：构建时扫描 gallery 图片目录，生成虚拟模块供组件使用
function galleryImageScanner() {
  const virtualId = 'virtual:gallery-images'
  const resolvedId = '\0' + virtualId

  function scanGalleryImages() {
    const galleryDir = path.resolve(__dirname, 'public/images/gallery')
    const result = {}
    if (!fs.existsSync(galleryDir)) return result
    for (const dir of fs.readdirSync(galleryDir)) {
      const dirPath = path.join(galleryDir, dir)
      if (!fs.statSync(dirPath).isDirectory()) continue
      const images = fs.readdirSync(dirPath)
        .filter(f => /\.(jpe?g|png|webp|gif)$/i.test(f))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
        .map(f => `/images/gallery/${dir}/${f}`)
      result[`/images/gallery/${dir}`] = images
    }
    return result
  }

  return {
    name: 'gallery-image-scanner',
    resolveId(id) {
      if (id === virtualId) return resolvedId
    },
    load(id) {
      if (id === resolvedId) {
        return `export default ${JSON.stringify(scanGalleryImages())}`
      }
    },
    // 开发模式下图片变动时自动刷新
    configureServer(server) {
      const galleryDir = path.resolve(__dirname, 'public/images/gallery')
      if (fs.existsSync(galleryDir)) {
        server.watcher.add(galleryDir)
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), galleryImageScanner()],
  base: './',
})
