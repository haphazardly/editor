<script>
   import Keyboard from "./keyboard/Keyboard.svelte";

   import { createTabs, melt } from "@melt-ui/svelte";
   import { cubicInOut } from "svelte/easing";
   import { crossfade } from "svelte/transition";

   const {
      elements: { root, list, content, trigger },
      states: { value },
   } = createTabs({
      defaultValue: "keyboard",
   });

   const className = "";
   export { className as class };

   const triggers = [
      { id: "keyboard", title: "Keyboard" },
      { id: "mouse", title: "Mouse" },
      { id: "scripts", title: "Scripts" },
   ];

   const [send, receive] = crossfade({
      duration: 250,
      easing: cubicInOut,
   });
</script>

<div use:melt={$root} class="{$$restProps.class || ''}">
   <div use:melt={$list} class={"flex bg-neutral-100 data-[orientation=vertical]:flex-col"} aria-label="Widget">
      {#each triggers as triggerItem}
         <button use:melt={$trigger(triggerItem.id)} on:m-click={(e) => {
            // e.preventDefault()
            console.log
            // do something else
          }} class={"trigger relative max-w-32"}>
            {triggerItem.title}
            {#if $value === triggerItem.id}
               <div
                  in:send={{ key: "trigger" }}
                  out:receive={{ key: "trigger" }}
                  class={"absolute bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-magnum-400"}
               />
            {/if}
         </button>
      {/each}
   </div>
   <div use:melt={$content("keyboard")} class="grow h-full ">
      <div class="flex items-center justify-center h-full w-full">
         <Keyboard />
      </div>
   </div>
   <div use:melt={$content("mouse")} class="grow p-5">mouse</div>
   <div use:melt={$content("scripts")} class="grow p-5">script</div>
</div>
