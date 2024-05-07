import path from 'path'
import { fileURLToPath } from 'node:url'
import fastGlob from 'fast-glob'

export default {
  input: Object.fromEntries(
    // 폴더 내 html 에 대한 entry 를 자동으로 생성하도록 함
    fastGlob
      .sync('page/**/*.html', {
        ignore: []
      })
      .map((file) => {
        return [
          path.relative(
            'page/',
            file.slice(0, file.length - path.extname(file).length)
          ),
          // @ts-ignore
          fileURLToPath(new URL(file, import.meta.url))
        ];
        // return val;
      })
  ),
  output: {
    entryFileNames: `libs/[name].js`,
    chunkFileNames: `libs/[name].js`,
    assetFileNames: `libs/[name].[ext]`
  }
}