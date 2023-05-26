import { writable } from "svelte/store";

export const sections = writable({
  contactInfo: null,
  about: null,
  projects: null,
});
export const activeSection = writable(""); // This store will keep track of the active section
