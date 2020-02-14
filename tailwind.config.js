module.exports = {
  plugins: [require('@tailwindcss/custom-forms')],
  variants: {
    borderColor: ['hover', 'focus', 'active'],
    borderWidth: ['hover', 'focus', 'active'],
    boxShadow: ['hover', 'focus', 'active']
  }
};
