import ws from '@will-stone/prettier-config'

const config = {
  ...ws,
  plugins: [...ws.plugins, 'prettier-plugin-tailwindcss'],
}

export default config
