// place files you want to import through the `$lib` alias in this folder.

export function getOS() {
   let os = "unknown";

   const userAgent = window.navigator.userAgent;
   const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
   const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
   const iosPlatforms = ["iPhone", "iPad", "iPod"];
   const linuxPlatforms = ["Linux"]
   const androidPlatforms = ["Android"]

   let contains = (platforms) => {
      return platforms.some((v) => userAgent.includes(v));
   };
   
   if (contains(windowsPlatforms)) {
      os = "Windows";
   } else if (contains(macosPlatforms)) {
      os = "Mac OS";
   } else if (contains(iosPlatforms)) {
      os = "iOS";
   } else if (contains(androidPlatforms)) {
      os = "Android";
   } else if (contains(linuxPlatforms)) {
      os = "Linux";
   }

   return os.toLowerCase();
}
