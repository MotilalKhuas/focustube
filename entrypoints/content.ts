import "@/assets/style/style.css"

export default defineContentScript({
  matches: ['*://*.youtube.com/*'],
  main() {
    console.log('Hello content.');
  },
});
