import { writable } from "svelte/store";

export const operatingSystem = writable({
    "os": "unknown",
    "mounted": false,
});