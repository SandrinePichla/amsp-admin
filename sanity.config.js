import * as React from 'react'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

// Workaround: make React available globally for the schema manifest worker
if (typeof globalThis !== 'undefined') {
  globalThis.React = React
}

export default defineConfig({
  name: 'default',
  title: 'amsp-admin',

  projectId: 't7u49x1d',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})