import fs from 'fs'
import path from 'path'

export function MarkdownTransform() {
  return {
    name: 'demo-md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.endsWith('.md')) return

      const componentId = path.basename(id, '.md')

      return `${code}\n<script>
        export default {
          setup() {
            const demos = import.meta.globEager('../examples/${componentId}/*.vue')
            return {
              demos
            }
          }
        }
      </script>
      `
    }
  }
}