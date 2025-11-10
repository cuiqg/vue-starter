import fs from 'node:fs'
import cuiqg from '@cuiqg/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default cuiqg({},
  fs.existsSync('.eslintrc-auto-import.json')
    ? compat.extends('./.eslintrc-auto-import.json')
    : []
)
