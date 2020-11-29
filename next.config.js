const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const consola = require('consola')
const { version } = require('./package.json')
const { config } = require('dotenv')

config()

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const { SENTRY_DSN, SERVER } = process.env
const env = {
  SENTRY_DSN, SERVER
}

const devConfig = withBundleAnalyzer({
  poweredByHeader: false,
  distDir: '.next',
  env,
  generateBuildId: () => `build-${version}`,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

    config.module.rules.push({
      test: /\.graphql$/,
      exclude: /node_modules/,
      use: [
        defaultLoaders.babel,
        { loader: 'graphql-let/loader' },
      ],
    })

    config.module.rules.push({
      test: /\.graphqls$/,
      exclude: /node_modules/,
      use: ['graphql-let/schema/loader'],
    })

    config.module.rules.push({
      test: /\.ya?ml$/,
      type: 'json',
      use: 'yaml-loader',
    })

    return config
  },
})

const prodConfig = withBundleAnalyzer({
  ...devConfig,
})

module.exports = (phase) => {
  consola.log(`phase is ${phase}`)
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return devConfig
  }
  return prodConfig
}
