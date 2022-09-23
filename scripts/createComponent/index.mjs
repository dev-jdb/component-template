import fs from "fs";
import path from "path";
import { promisify } from "util";

import templates from "./templates/index.mjs";

const exists = promisify(fs.exists);
const mkdir = promisify(fs.mkdir);
const writeFile = promisify(fs.writeFile);

async function createComponent([dirName, hooks, styles]) {
  try {
    const filePath = path.join(process.cwd(), 'src/components', dirName);
    const dirExists = await exists(filePath);
    if (!dirExists) {
      await mkdir(filePath);
      await writeFile(
        path.join(filePath, "index.tsx"),
        templates.index(dirName, !!hooks, !!styles)
      );
      await writeFile(
        path.join(filePath, `test.tsx`),
        templates.test(dirName)
      );
      await writeFile(
        path.join(filePath, "stories.tsx"),
        templates.stories(dirName)
      );
      await writeFile(
        path.join(filePath, `types.ts`),
        templates.types(dirName)
      );
      if (!!hooks) {
        await writeFile(
          path.join(filePath, "hooks.ts"),
          templates.hooks(dirName)
        );
      }
      if (!!styles) {
        await writeFile(
          path.join(filePath, "styles.ts"),
          templates.styles(dirName)
        );
      }
    }
    else {
      throw new Error(`Directory already exists for ${dirName}.`)
    }
  } catch (error) {
    console.error(error);
  }
}
createComponent(process.argv.slice(2));
