import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Force local resolution of tailwindcss v3 (root workspace hoists v4 for the CRM app)
export default {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
