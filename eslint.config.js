import process from 'node:process'
import cuiqg from '@cuiqg/eslint-config'

export default cuiqg(
  {},
  {
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
  },
)
