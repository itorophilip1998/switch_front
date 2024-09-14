declare module "vite-plugin-sass-resources-loader" {
  import { Plugin } from "vite";

  interface SassResourcesLoaderOptions {
    resources: string | string[];
  }

  function sassResourcesLoader(options: SassResourcesLoaderOptions): Plugin;

  export default sassResourcesLoader;
}
