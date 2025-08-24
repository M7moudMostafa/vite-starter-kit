import { resolve } from 'path';

export default {
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/index.js'),
        resolve(__dirname, 'src/log.js')
      ],
      name: 'Pluck',
      fileName: (format, entryName) => {
        if(format === "es") {
          return `${entryName}.js`;
        }

        return `${entryName}.${format}`
      }
    }
  }
}