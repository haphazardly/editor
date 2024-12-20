# How to build

Build codemirror language
1. `cd codemirror-lang-autoexec`
2. `npm run prepare`
3. `npm pack`

Run Dev
1. `cd frontend`
2. `npm i`
3. `npm run postinstall`
4. `npm run dev`

# TODO

## Editor
- Create Info Panel
    - Hot link to specific keyword or identifers
        - Provides details, values, flags.
- Remove autocompletion fuzzy matching (specfic word and not letters the word contains) or improve it.
- Have the ability to turn off certain feature (i.e, `tooltip`);
- Identify user made commands (i.e `bunnyhop_toggle`)
- Lint (@see [Grammar](#lintgrammar))
- Identify scancodes.
- Identify colors in strings.
- Add idenfitifers such as `+attack`, `-attack`, `+duck` to command list.
- Add strike out to commands that are not longer valid for CS2
- Crosshair code creator for `apply_crosshair_code`

### Grammar
- ~~Create **CodeMirror** language for `.cfg`~~
- Identify `scancode`
    - (Lint?) <span id="lintgrammar">Also convert or suggest traditional bindings (i.e. `mouse5`, `tab`)</span> 
        - Tooltip or info button on gutter.

# EZ-Mode 
- Create Mouse Layout for Mouse tab
- Switch between default and shift button values for Keyboard
- Bind **CodeMirror** to **Svelte store**
    - Commands
    - Scripts
- Create **Scripts** tab

# Design
- Design Dark Mode.

## Layout
```
╭───────────────────────────────────────────────────────────────────────────────────────╮
│ [Logo]                                                      [Account][Settings][Help] │▒
├──────────────────────────╥────────╥──────────────────────────┬─────╥────────────╥─────┤▒
│                          ║[Editor]║                          │     ║[Info Panel]║ [×] │▒
│                          ╚════════╝                          │     ╚════════════╝     │▒
│                                                              │                        │▒
│                                                              │   • Command Name       │▒
│                                                              │   • Details            │▒
│                                                              │   • Values             │▒
│                                                              │   • Flags              │▒
│                                                              │                        │▒
│                                                              │                        │▒
│                                                              │                        │▒
│                                                              │                        │▒
│                                                              │                        │▒
│                                                              │                        │▒
│                                                              │                        │▒
│                                                              │                        │▒
│                                                              │                        │▒
│                                                              │                        │▒
│                                                              │                        │▒
│                                                              │                        │▒
│                                                              │                        │▒
│                                                              │                        │▒
┝━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━━━━━━━┥▒
│ [Keyboard] [Mouse] [Scripts] │                              [EZ-MODE/EDITOR-MODE] [×] │▒
├──────────────────────────────┘                                                        │▒
│                                                                                       │▒
│                                                                                       │▒
│                                                                                       │▒
│                                                                                       │▒
│                                                                                       │▒
│                                      ╔═════════╗                                      │▒
│                                      ║[EZ-MODE]║                                      │▒
╰──────────────────────────────────────╨─────────╨──────────────────────────────────────╯▒
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
```

# Misc
- Add Grammar to github repo
- Determine application and domain name
    - Landing page for website
    - Create login with Github/Steam?
    - Safest way to store data
- Investigate native desktop app for Windows/Linux

