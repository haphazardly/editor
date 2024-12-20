import {Text} from "@codemirror/state"
import {showPanel} from "@codemirror/view"
import {EditorView, Panel} from "@codemirror/view"

function countWords(doc: Text) {
  let count = 0, iter = doc.iter()
  
  while (!iter.next().done) {
    let inWord = false
    for (let i = 0; i < iter.value.length; i++) {
      let word = /(bind )/.test(iter.value)
      if (word && !inWord)  {
        count++
        console.log("bind:", iter.value);
      }
   
      inWord = word
     
    }
  }
  return `Binds: ${count}`
}


function wordCountPanel(view: EditorView): Panel {
  let dom = document.createElement("div")
  dom.textContent = countWords(view.state.doc)
  return {
    dom,
    update(update) {
      if (update.docChanged)
        dom.textContent = countWords(update.state.doc)
    }
  }
}



export function wordCounter() {
  return showPanel.of(wordCountPanel)
}