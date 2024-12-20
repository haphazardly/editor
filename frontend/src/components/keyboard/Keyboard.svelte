<script>
   import { layouts } from "./layouts";
   import Button from "./KeyboardButton.svelte";

</script>

<div class="keyboard__wrapper ">
   <div class="keyboard">
      <div class="keyboard__functions keyboard__section">
         {#each layouts.rows as row}
            {#if row.section == "functions"}
               {#each row.keys as key}
                  <Button {row} {key} />
               {/each}
            {/if}
         {/each}
      </div>

      <div class="keyboard__main keyboard__section">
         {#each layouts.rows as row}
            {#if row.section == "main"}
               {#each row.keys as key}
                  <Button {row} {key} />
               {/each}
            {/if}
         {/each}
      </div>

      <div class="keyboard__controls_1 keyboard__section">
         {#each layouts.rows as row}
            {#if row.section == "controls_1"}
               {#each row.keys as key}
                  <Button {row} {key} />
               {/each}
            {/if}
         {/each}
      </div>

      <div class="keyboard__controls_2 keyboard__section">
         {#each layouts.rows as row}
            {#if row.section == "controls_2"}
               {#each row.keys as key}
                  <Button {row} {key} />
               {/each}
            {/if}
         {/each}
      </div>
      <div class="keyboard__arrows keyboard__section">
         {#each layouts.rows as row}
            {#if row.section == "arrows"}
               {#each row.keys as key}
                  <Button {row} {key} />
               {/each}
            {/if}
         {/each}
      </div>
      <div class="keyboard__numpad keyboard__section">
         {#each layouts.rows as row}
            {#if row.section == "numpad"}
               {#each row.keys as key}
                  <Button {row} {key} />
               {/each}
            {/if}
         {/each}
      </div>
   </div>
</div>

<style lang="postcss">
</style>
