<script>
   import { operatingSystem } from "../../stores/index";

   export let key = {};
   export let row = {};

   let scanCodeToString = (value) => {
      return `scancode${value}`;  
   };

   let convertToSafeValue = (string) => {
      return string.replace(/\s+/g, '-').toLowerCase();
   }

   let buttonValueAttributeValue = (row, key) => {
      if(key.friendly) {
         return convertToSafeValue(`${row.section}-${key.friendly}`);
      } 
      return convertToSafeValue(`${row.section}-${key.value}`);
   }

   let buttonAriaLabelValue = (key) => {
      if(key.friendly) {
         return convertToSafeValue(key.friendly);
      } 
      return convertToSafeValue(key.value);
   }

</script>

<button
   formaction="?/update"
   name={buttonValueAttributeValue(row, key.default) }
   value={scanCodeToString(key.scancode)}
   aria-label={buttonAriaLabelValue(key.default)}
   class="keyboard__button rounded-lg border-2 min-w-12 min-h-12 max-h-12 h-12"
>
   {#if key.default.icon}
      <span class="icon">
         {#if key.default.icon.function == "os"}
            
            <i class="bx {($operatingSystem.mounted == true) ? (($operatingSystem.os == "windows") ? key.default.icon.default : key.default.icon.alternative) : ''}"></i>
         {:else}
            <i class="bx {key.default.icon.default}"></i>
         {/if}
      </span>
   {:else if key.name}
      {@html key.name}
   {:else}
      {@html key.default.value}
   {/if}
</button>

<style type="scss">

</style>
