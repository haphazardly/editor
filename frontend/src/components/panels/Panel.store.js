import { writable } from 'svelte/store';

export const dialogOpen = writable(false);

export function openDialog() {
  dialogOpen.set(true);
}

export function closeDialog() {
  dialogOpen.set(false);
}