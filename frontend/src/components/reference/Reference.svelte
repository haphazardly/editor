<script>
   import { createCombobox, melt } from "@melt-ui/svelte";
   import { commands, flags } from "codemirror-lang-autoexec";
   import { fly } from "svelte/transition";

   const toOption = (command) => ({
      value: command,
      label: command.label,
      disabled: command.disabled,
   });

   export let convar = null;

   const {
      elements: { menu, input, option, label },
      states: { open, inputValue, touchedInput, selected },
      helpers: { isSelected },
   } = createCombobox({
      forceVisible: false,
   });


   if(convar) {
      $selected = { disabled: false, label: convar.label, value: convar };
   }

   $: if (!$open) {
      $inputValue = $selected?.label ?? "";
   }

   $: filteredcommands = $touchedInput
      ? commands.filter(({ label }) => {
            console.log(label);
            const normalizedInput = $inputValue.toLowerCase();
           return label.toLowerCase().includes(normalizedInput);
        })
      : commands;
</script>

<div class={"flex flex-col w-full"}>
   <!-- svelte-ignore a11y-label-has-associated-control - $label contains the 'for' attribute -->
   <label class={"hidden"} use:melt={$label}> Search Convars </label>

   <div class={"relative"}>
      <input
         use:melt={$input}
         class={"bg-slate-100 w-full font-mono truncate flex h-10 items-center justify-between rounded-lg px-3 pr-12 text-black"}
         placeholder="Search Convars"
      />
      <div class={"absolute right-2 top-1/2 z-10 -translate-y-1/2 text-slate-900"}>
         {#if $open}
            <i class={"bx bxs-chevron-up"}></i>
         {:else}
            <i class={"bx bxs-chevron-down"}></i>
         {/if}
      </div>
   </div>
   {#if $selected}
      <div class="my-4 mt-6">
         <dl>
            <dt class={"font-mono break-all first:font-semibold mb-4"}>{$selected.label}</dt>

            {#if $selected.value.detail}
               <dd>{$selected.value.detail}</dd>
            {/if}
         </dl>
         {#if $selected.value.value}
            <div class="my-4 text-sm">
               <span class="mr-2 font-semibold">Default Value:</span>
               <span class="font-mono">{$selected.value.value}</span>
            </div>
         {/if}
         {#if $selected.value.flags.length > 0}
            <div class="my-2 flex">
               <div class="mr-2 text-sm mb-2 font-semibold">Flags:</div>
               <div class="flex flex-wrap">
                  {#each $selected.value.flags as flag, i}
                     <span data-flag-type={flag} class={"font-mono font-semibold text-xs me-2 px-3 py-1 mb-2 rounded"}>
                        {flag}
                     </span>
                  {/each}
               </div>
            </div>
         {/if}
      </div>
   {/if}
</div>
{#if $open}
   <ul class={"z-10 flex max-h-[300px] flex-col overflow-hidden rounded-lg shadow-md"} {...$menu} use:menu>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <div
         class={"scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-transparent flex max-h-full flex-col gap-0 overflow-y-auto bg-white px-2 py-2 text-black"}
         tabindex="0"
      >
         {#each filteredcommands as command, index (index)}
            <li
               use:melt={$option(toOption(command))}
               class={"relative cursor-pointer scroll-my-2 rounded-md py-2 pl pr-4 hover:bg-slate-100 data-[highlighted]:bg-slate-200 data-[highlighted]:text-slate-900 data-[disabled]:opacity-50"}
            >
               {#if $isSelected(command)}
                  <div class={"check absolute left-2 top-1/2 z-10 text-slate-900"}>
                     <i class={"bx bx-check"}></i>
                  </div>
               {/if}
               <div class={"pl-8 truncate"}>
                  <span class={"font-medium "}>{command.label}</span>
                  <!-- <span class={"block text-sm opacity-75"}>{command.detail}</span> -->
               </div>
            </li>
         {:else}
            <li class={"relative cursor-pointer rounded-md py-1 pl-8 pr-4"}>No results found</li>
         {/each}
      </div>
   </ul>
{/if}

<style lang="postcss">
   .check {
      @apply absolute left-2 top-1/2 text-slate-500;
      translate: 0 calc(-50% + 1px);
   }

   [data-flag-type="norecord"] {
      @apply bg-cyan-600 text-cyan-100;
   }

   [data-flag-type="release"] {
      @apply bg-amber-600 text-amber-100;
   }

   [data-flag-type="a"] {
      @apply bg-lime-600 text-lime-100;
   }

   [data-flag-type="sv"] {
      @apply bg-teal-600 text-teal-100;
   }

   [data-flag-type="cheat"] {
      @apply bg-red-600 text-red-100;
   }

   [data-flag-type="cl"] {
      @apply bg-indigo-600 text-indigo-100;
   }

   [data-flag-type="rep"] {
      @apply bg-pink-600 text-pink-100;
   }

   [data-flag-type="clientcmd_can_execute"] {
      @apply bg-blue-600 text-blue-100;
   }

   [data-flag-type="nf"] {
      @apply bg-green-600 text-green-100;
   }

   [data-flag-type="server_can_execute"] {
      @apply bg-stone-600 text-stone-100;
   }

   [data-flag-type="user"] {
      @apply bg-violet-600 text-violet-100;
   }

   [data-flag-type="per_user"] {
      @apply bg-rose-600 text-rose-100;
   }

   [data-flag-type="vconsole_fuzzy"] {
      @apply bg-slate-600 text-slate-100;
   }

   [data-flag-type="disconnected"] {
      @apply bg-zinc-600 text-zinc-100;
   }

   [data-flag-type="demo"] {
      @apply bg-yellow-600 text-yellow-100;
   }

   [data-flag-type="execute_per_tick"] {
      @apply bg-orange-600 text-orange-100;
   }

   [data-flag-type="nolog"] {
      @apply bg-gray-600 text-gray-100;
   }

   [data-flag-type="vconsole_set_focus"] {
      @apply bg-orange-600 text-orange-100;
   }

   [data-flag-type="server_cant_query"] {
      @apply bg-emerald-600 text-emerald-100;
   }

   [data-flag-type="sp"] {
      @apply bg-sky-600 text-sky-100;
   }

   [data-flag-type="prot"] {
      @apply bg-amber-600 text-amber-100;
   }

   [data-flag-type="//localhost"]
   {
      @apply bg-fuchsia-600 text-fuchsia-100;
   }
</style>
