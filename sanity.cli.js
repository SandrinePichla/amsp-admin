import {defineCliConfig} from 'sanity/cli'

// Vite plugin: injects `globalThis.React` before styled-components initialises,
// which references `React` as an undeclared global in its compiled bundle.
const reactGlobalShim = {
  name: 'react-global-shim',
  resolveId(id) {
    if (id === '\0react-global-shim') return id
  },
  load(id) {
    if (id === '\0react-global-shim') {
      return `import * as _R from 'react'; if (!globalThis.React) globalThis.React = _R;`
    }
  },
  transform(code, id) {
    if (id.includes('styled-components') && !id.includes('\0')) {
      return {code: `import '\0react-global-shim';\n${code}`}
    }
  },
}

export default defineCliConfig({
  api: {
    projectId: 't7u49x1d',
    dataset: 'production'
  },
  deployment: {
    autoUpdates: false,
    appId: 'yfi7ys27leyoensdtzefky3x',
  },
  vite: (config) => ({
    ...config,
    plugins: [...(config.plugins ?? []), reactGlobalShim],
  }),
})