import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            "crypto": false,
            "path": false,
            "os": false
        }
    }
}