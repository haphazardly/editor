<script>
   import CodeMirror from "svelte-codemirror-editor";

   import { EditorView, scrollPastEnd } from "@codemirror/view";
   import { autocompletion } from "@codemirror/autocomplete";
   
   import { oneDark } from "./theme";
   import { autoexec, commands } from "codemirror-lang-autoexec";
   import { wordHover } from "./extensions/index";
   import Panel from "../panels/Panel.svelte";
   import file from "./autoexec.cfg?raw";

   import { wordCounter } from './panel/Panel';
   
   let value = file;

   let view = (editorView) => {
      editorView.scrollDOM.classList.add(
         "scrollbar",
         "scrollbar-thumb-slate-700",
         "hover:scrollbar-thumb-slate-600",
         "active:scrollbar-thumb-slate-600",
         "h-32",
         "overflow-y-scroll"
      );
   };

   // console.log(Panel.)

   // let e = keymap.of([
   //    {
   //       key: "Shift-Enter",
   //       run: (EditorView) => {
   //          console.log("hello World");
   //          return true;
   //       },
   //    },
   // ]);

   function sendReference(event) {
      if (event.altKey == true) {
         let textSelected = event.view.getSelection().anchorNode.data;
         let command = commands.filter(function (obj) {
            return obj.label == textSelected && obj.detail ? obj.detail : null;
         });

         // Append to reference

         if (!command[0]) return null;
         document.querySelector("#panel").innerHTML = "";
         const element = new Panel({
            props: {
               opened: true,
               prevActive: "tab-search",
               reference: command[0],
            },
            target: document.querySelector("#panel"),
            hydrate: true,
         });
      }
   }





</script>

<CodeMirror
   class={$$restProps.class || ""}
   bind:value
   theme={oneDark}
   lang={autoexec()}
   extensions={[
      // wordHover,

      wordCounter(),
      autocompletion(),
      // EditorView.editorAttributes.of({ class: "myclass" }),
      EditorView.domEventHandlers({
         click: (event) => sendReference(event),
      }),
      scrollPastEnd(),
   ]}
   on:ready={(e) => view(e.detail)}
/>
