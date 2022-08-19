import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import yaml from 'yaml';

// next.config.js
export default {
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  exportPathMap: async function () {
    const UnityCatalog = yaml.parse(readFileSync(join(dirname(fileURLToPath(import.meta.url)), './components/catalog/Unity.yml'), 'utf-8'))
    const UnrealCatalog = yaml.parse(readFileSync(join(dirname(fileURLToPath(import.meta.url)), './components/catalog/Unreal.yml'), 'utf-8'))

    const paths = {
      '/': { page: '/' },
    }

    UnityCatalog.forEach(iterUnity)
    function iterUnity(item) {
      if (item.md) {
        paths[`/unity/en/${item.md}`] = { page: '/unity/[lang]/[...doc]', query: { lang: 'en', doc: item.md } }
        paths[`/unity/zhcn/${item.md}`] = { page: '/unity/[lang]/[...doc]', query: { lang: 'zhcn', doc: item.md } }
      }
      if (item.child) {
        item.child.forEach(iterUnity);
      }
    }
    UnrealCatalog.forEach(iterUnreal)
    function iterUnreal(item) {
      if (item.md) {
        paths[`/unreal/en/${item.md}`] = { page: '/unreal/[lang]/[...doc]', query: { lang: 'en', doc: item.md } }
        paths[`/unreal/zhcn/${item.md}`] = { page: '/unreal/[lang]/[...doc]', query: { lang: 'zhcn', doc: item.md } }
      }
      if (item.child) {
        item.child.forEach(iterUnreal);
      }
    }

    return paths
  }
  // assetPrefix: isProd ? 'https://raw.githubusercontent.com/Tencent/puerts/master/doc/pic/' : ''
}