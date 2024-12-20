import { hoverTooltip } from "@codemirror/view";
import { commands } from "codemirror-lang-autoexec";

export const wordHover = hoverTooltip((view, pos, side) => {
   let { from, to, text } = view.state.doc.lineAt(pos);
   let start = pos,
      end = pos;
   while (start > from && /\w/.test(text[start - from - 1])) start--;
   while (end < to && /\w/.test(text[end - from])) end++;
   if ((start == pos && side < 0) || (end == pos && side > 0)) return null;
   let textSelected = text.slice(start - from, end - from);

   let command = commands.filter(function (obj) {
      return obj.label == textSelected && obj.detail ? obj.detail : null;
   });

   if (!command[0]) return null;

   return {
      pos: start,
      end,
      above: true,
      create(view) {
         let dom = document.createElement("div");

         dom.innerHTML = `
          <div class="tooltip">
            <div class="tooltip__description">${command[0].detail}</div>
            <div class="tooltip__flags">
              <div class="tooltip__flags__header">flags: </div>
              <ul class="tooltip__flags__list">
              ${commands[0].flags
                 .map((flag) => {
                    return `<li class="tooltip__flags__list-item"><code>${flag}</code></li>`;
                 })
                 .join("")}
              </ul>
            </div>
          </div>`;

         return { dom };
      },
   };
});
