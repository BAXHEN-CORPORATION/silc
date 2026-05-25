import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import createEsbuildPlugin from '@bahmutov/cypress-esbuild-preprocessor'
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/features/**/*.feature',
    supportFile: 'cypress/support/e2e.ts',
    viewportWidth: 1280,
    viewportHeight: 800,
    video: false,
    screenshotOnRunFailure: true,
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config)
      on('file:preprocessor', createEsbuildPlugin())
      return config
    },
  },
})
