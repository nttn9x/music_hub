module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@context': './src/context',
          '@context/*': './src/context/*',
          '@constants': './src/constants',
          '@constants/*': './src/constants/*',
          '@screens': './src/screens',
          '@screens/*': './src/screens/*',
          '@styles': './src/styles',
          '@styles/*': './src/styles/*',
          '@components': './src/components',
          '@components/*': './src/components/*',
          '@services': './src/services',
          '@services/*': './src/services/*',
          '@navigation': './src/navigation',
          '@navigation/*': './src/navigation/*',
          '@utils': './src/utils',
          '@utils/*': './src/utils/*',
          '@my-store': './src/store',
          '@my-store/*': './src/store/*',
          '@models': './src/models',
          '@models/*': './src/models/*',
          '@assets': './src/assets',
          '@assets/*': './src/assets/*',
        },
      },
    ],
  ],
};
