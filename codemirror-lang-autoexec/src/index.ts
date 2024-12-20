import { parser } from "./syntax.grammar";
import { LRLanguage, LanguageSupport } from "@codemirror/language";
import { globalCompletion, localCompletionSource } from "./complete";

export const AutoexecLanguage = LRLanguage.define({
   parser: parser.configure({}),
   languageData: {
      commentTokens: {
         line: "//",
         block: {
            open: "//=================================================================//\n//",
            close: "\n//=================================================================//",
         },
      },
   },
});

export { commands, flags } from "./commands";

export function autoexec() {
   return new LanguageSupport(AutoexecLanguage, [
      AutoexecLanguage.data.of({ autocomplete: localCompletionSource }),
      AutoexecLanguage.data.of({ autocomplete: globalCompletion }),
   ]);
}
