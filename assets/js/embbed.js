function P2pTracker(e){if(p2pml.hlsjs.Engine.isSupported()){const o={segments:{forwardSegmentCount:50},loader:{cachedSegmentExpiration:864e5,cachedSegmentsCount:1e3,requiredSegmentsPriority:3,httpDownloadMaxPriority:9,httpDownloadProbability:.06,httpDownloadProbabilityInterval:1e3,httpDownloadProbabilitySkipIfNoPeers:!0,p2pDownloadMaxPriority:50,httpFailedSegmentTimeout:1e3,simultaneousP2PDownloads:20,simultaneousHttpDownloads:3,httpDownloadInitialTimeout:12e4,httpDownloadInitialTimeoutPerSegment:17e3,httpUseRanges:!0,trackerAnnounce:["wss://tracker.openwebtorrent.com","wss://tracker.files.fm:7073/announce","wss://tracker.btorrent.xyz","wss://spacetradersapi-chatbox.herokuapp.com:443/announce","ws://tracker.files.fm:7072/announce"],rtcConfig:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:global.stun.twilio.com:3478?transport=udp"},{urls:"stun:stun.powerpbx.org:3478"}]}}};var t=new p2pml.hlsjs.Engine(o);p2pml.hlsjs.initVideoJsHlsJsPlugin(),videojs("video",{html5:{hlsjsConfig:{liveSyncDurationCount:3,loader:t.createLoaderClass()}}}).src({src:e})}else document.write("Source Not Supported")}var link=document.createElement("link");function loadScript(e){return new Promise(function(t,o){let n=document.createElement("script");n.src=e,n.async=!1,n.onload=function(){t(e)},n.onerror=function(){o(e)},document.body.appendChild(n)})}link.href="//cdnjs.cloudflare.com/ajax/libs/video.js/7.6.0/alt/video-js-cdn.min.css",link.type="text/css",link.rel="stylesheet",document.getElementsByTagName("head")[0].appendChild(link);let scripts=["//cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js","//cdn.jsdelivr.net/npm/p2p-media-loader-core@latest/build/p2p-media-loader-core.min.js","//cdn.jsdelivr.net/npm/p2p-media-loader-hlsjs@latest/build/p2p-media-loader-hlsjs.min.js","//cdnjs.cloudflare.com/ajax/libs/video.js/7.6.0/video.min.js"],promises=[];scripts.forEach(function(e){promises.push(loadScript(e))}),Promise.all(promises).then(function(){console.log("all scripts loaded");new URLSearchParams(window.location.search).get("u");const e="https://dai2.xumo.com/amagi_hls_data_xumo1212A-revryxumo/CDN/master.m3u8",t=document.getElementById("video").getAttribute("data-id");if(1==t.endsWith(".m3u8")){(async function(){let e=await fetch(t);return await e.text()})().then(o=>{const n=1==o.search("EXTM3U")?t:e;console.log(n),P2pTracker(n)})}else P2pTracker(e)}).catch(function(e){console.log(e+" failed to load")});