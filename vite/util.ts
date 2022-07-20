import _ from "lodash";
export function parseEnv(env: Record<string, any>): ImportMetaEnv {
  const envs: any = _.cloneDeep(env);

  Object.entries(env).forEach(([key, value]) => {
    if (value == "true" || value == "false") envs[key] = value == "true" ? true : false;
    else if (/^\d+$/.test(value)) envs[key] = Number(value);
    else if (value == "null") envs[key] = null;
    else if (value == "undefined") envs[key] = undefined;
  });
  return envs;
}

// 重写rollup打包方法，解决GitHub Pages 404 问题
// Issue: https://github.com/vitejs/vite/issues/9119
// eslint-disable-next-line no-control-regex
const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

export function sanitizeFileName(name: string): string {
  const match = DRIVE_LETTER_REGEX.exec(name);
  const driveLetter = match ? match[0] : "";

  // A `:` is only allowed as part of a windows drive letter (ex: C:\foo)
  // Otherwise, avoid them because they can refer to NTFS alternate data streams.
  return driveLetter + name.substring(driveLetter.length).replace(INVALID_CHAR_REGEX, "");
}
