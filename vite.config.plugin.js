import path from 'path'
import vitePluginPackageVersion from 'vite-plugin-package-version';
import vitePluginHandlebars from 'vite-plugin-handlebars';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import viteEslintPlugin from 'vite-plugin-eslint';
export default [
  vitePluginPackageVersion(),
  vitePluginHandlebars({
    runtimeOptions: {},
    partialDirectory: path.resolve(__dirname, 'src/partial'),
    reloadOnPartialChange: true,
    helpers: {},
  }),
  viteTsconfigPaths(),
  viteEslintPlugin()
]