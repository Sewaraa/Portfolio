// postcss.config.mjs
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  plugins: {
    '@tailwindcss/postcss': {},  // استخدام الملحق الجديد لـ Tailwind
    autoprefixer: {},            // ملحق Autoprefixer لإضافة التلاحقات تلقائياً
  },
};