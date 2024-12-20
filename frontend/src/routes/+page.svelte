<script>
   import "../styles/app.css";
   import { onDestroy, onMount } from "svelte";
   import { getOS } from "../lib/index";
   import { operatingSystem } from "../stores/index.js";

   // Components
   import Editor from "../components/editor/Editor.svelte";
   import Widget from "../components/Widget.svelte";
   import Panel from "../components/panels/Panel.svelte";

   onMount(async () => {
      const os = getOS();
      $operatingSystem = { os: os, mounted: true };
   });

   const unsubscribe = operatingSystem.subscribe((value) => ({} = value));

   onDestroy(unsubscribe);
</script>

<svelte:head>
   <title>ezConf</title>
   <meta name="description" content="Build a CS2 config....... ez" />
</svelte:head>

<div class="bg-[#282c34] w-screen h-screen flex flex-col">
   <div class="w-full flex overflow-hidden p-2">
      <Editor class="panel__editor h-full w-full grow " />
      <div id="panel" class="flex flex-col overflow-hidden rounded-xl h-full data-[orientation=vertical]:flex-row">
         <Panel />
      </div>
   </div>

   <!-- <div class="app__widget">
      <Panel class="min-h-[400px] w-full">
         <Widget slot="content"/>
      </Panel>
   </div> -->
</div>
