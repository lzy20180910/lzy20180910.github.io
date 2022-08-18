import path from 'path'
import fs from 'fs'
const mdContainer = require('markdown-it-container');

export const mdPlugin = md => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/);
    },
    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        const sourceFileToken = tokens[idx + 2]
        let source = ''
        const sourceFile = sourceFileToken.children?.[0].content ?? ''
        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(
            path.resolve(__dirname, `../../examples/${sourceFile}.vue`),
            'utf-8'
          )
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)
        return `<Demo
          :demos="demos"
          path="${sourceFile}"
          source="${encodeURIComponent(
            source
          )}"
        >`;
      }
      return '</Demo>';
    }
  });
};
