/* FocusLock website config - the ONE place to edit values. After changing `domain`, run: python3 tools/build.py */
window.FOCUSLOCK = {
  domain: "https://focuslockz.vercel.app",
  apkUrl: "/downloads/FocusLock.apk",
  version: "1.3.0", build: 25, apkSizeBytes: 25016653, releaseDate: "2026-10-01",
  minAndroid: "Android 7.0 (API 24) or newer",
  github: "https://github.com/Zihad077/FocusLock",
  developer: "Zihad", developerSite: "https://focuslockz.vercel.app",
  contactEmail: "zihad.dev.pro@gmail.com", /* [CONFIG NEEDED] add a support email here */
  premium: { payment: "Binance Pay (USDT)", plans: [
    {icon:"⚡",name:"Weekly",days:7,price:"$0.29"},
    {icon:"🔥",name:"Monthly",days:30,price:"$0.49",best:true},
    {icon:"💎",name:"Quarterly",days:90,price:"$1.50"},
    {icon:"👑",name:"Yearly",days:365,price:"$5"}]}
};
