<script>
   import { twMerge } from "tailwind-merge";
   import { createTabs, melt } from "@melt-ui/svelte";
   import { cubicInOut } from "svelte/easing";
   import { crossfade } from "svelte/transition";
   import { clsx } from "clsx";
   import Reference from "../reference/Reference.svelte";
  
   export function cn(...inputs) {
      return twMerge(clsx(inputs));
   }

   export let prevActive = "tab-search";
   export let opened = true;
   export let reference = null;

   console.log(reference);

   const clickCloseHandler = (e) => {
      if (prevActive == e.target.dataset.value && opened) {
         opened = false;
         prevActive = null;
      } else if (opened == false) {
         opened = true;
      }

      prevActive = e.target.dataset.value;
   };

   const keydownCloseHandler = (e) => {
      if(e.detail.originalEvent.keyCode == "13") {
         if(!opened) {
            opened = true;
         } else {
            opened = false
         }
      }
   };

   const {
      elements: { root, list, content, trigger },
      states: { value },
   } = createTabs({
      defaultValue: "tab-search",
      orientation: "vertical",
   });

   let className = "";
   export { className as class };

   const triggers = [
      { id: "tab-search", title: "Search", icon: "bx bx-terminal" },
      { id: "tab-binds", title: "Binds", icon: "bx bxs-keyboard" },
      { id: "tab-scripts", title: "Scripts", icon: "bx bx-code-alt" },
      { id: "tab-help", title: "Help", icon: "bx bx-help-circle"}
   ];

   const [send, receive] = crossfade({
      duration: 250,
      easing: cubicInOut,
   });
</script>

<div  {...$root} use:root class={cn("flex h-full flex-col overflow-hidden rounded-xl shadow-lg ml-2 data-[orientation=vertical]:flex-row", className)}>
   <div class="bg-neutral-100">
   <div
      {...$list}
      use:list
      class="h-full flex overflow-x-auto bg-neutral-100 data-[orientation=vertical]:flex-col"
      aria-label="Manage your account"
   >
      {#each triggers as triggerItem}
      <div class="flex {(triggerItem.id == "tab-help") ? "grow items-end" : "items-center"}">
         <button
            {...$trigger(triggerItem.id)}
            on:m-keydown
            on:m-click={clickCloseHandler}
            on:m-keydown={keydownCloseHandler}
            use:trigger
            class="flex trigger justify-center items-center ps-2 pe-2  h-12 w-12 relative"
         >
            <span class="hidden">{triggerItem.title}</span>

            <i class="{triggerItem.icon} text-xl"> </i>
            {#if $value === triggerItem.id}
               <div
                  in:send={{ key: "trigger" }}
                  out:receive={{ key: "trigger" }}
                  class="absolute bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-magnum-400"
               />
            {/if}
         </button>
      </div>
      {/each}
   </div>
</div>
   {#if opened}
      <div class="w-[600px] h-full">
         <div {...$content("tab-search")} use:content class="h-full grow bg-white p-5">
            <Reference convar={reference} />
         </div>
         <div {...$content("tab-binds")} use:content class="h-full grow bg-white p-5">
            binds
         </div>
         <div {...$content("tab-scripts")} use:content class="h-full grow bg-white p-5">
            scripts
         </div>
         <div {...$content("tab-help")} use:content class="h-full grow bg-white p-5">
            help
         </div>
      </div>
   {/if}
</div>
