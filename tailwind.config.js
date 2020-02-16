module.exports = {
  plugins: [require('@tailwindcss/custom-forms')],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Belwe Bold"', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif']
      }
    }
  },
  variants: {
    borderColor: ['hover', 'focus', 'active'],
    borderWidth: ['hover', 'focus', 'active'],
    boxShadow: ['hover', 'focus', 'active']
  }
};
