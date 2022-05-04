import { writable } from "svelte/store";

const storedCookieAnswer = localStorage.getItem("canStoreCookies");
export const allowCookies = writable(false);
export const hasAnsweredCookies = writable(storedCookieAnswer === "true");
