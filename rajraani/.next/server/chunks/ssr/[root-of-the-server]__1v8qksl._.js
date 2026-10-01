module.exports=[93599,a=>a.a(async(b,c)=>{try{var d=await a.y("sharp-20c6a5da84e2135f");a.n(d),c()}catch(a){c(a)}},!0),13095,(a,b,c)=>{"use strict";function d(a){for(let b=0;b<a.length;b++){let c=a[b];if("function"!=typeof c)throw Object.defineProperty(Error(`A "use server" file can only export async functions, found ${typeof c}.
Read more: https://nextjs.org/docs/messages/invalid-use-server-value`),"__NEXT_ERROR_CODE",{value:"E352",enumerable:!1,configurable:!0})}}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"ensureServerEntryExports",{enumerable:!0,get:function(){return d}})},81672,a=>a.a(async(b,c)=>{try{var d=a.i(37936),e=a.i(58840),f=a.i(35555),g=a.i(13095),h=b([f]);async function i(a,b){return(await (0,e.requireAdmin)(),!Number.isInteger(a)||b.length>300)?{ok:!1}:((0,f.setMediaAlt)(a,b),{ok:!0})}[f]=h.then?(await h)():h,(0,g.ensureServerEntryExports)([i]),(0,d.registerServerReference)(i,"605821bdbba17219ce7dfd786ac4338d53313c7748",null),a.s(["saveMediaAltAction",0,i]),c()}catch(a){c(a)}},!1),79126,a=>a.a(async(b,c)=>{try{a.i(18619);var d=a.i(81672),e=b([d]);[d]=e.then?(await e)():e,a.s([]),c()}catch(a){c(a)}},!1),40556,a=>a.a(async(b,c)=>{try{var d=a.i(79126),e=a.i(18619),f=a.i(81672),g=b([d,f]);[d,f]=g.then?(await g)():g,a.s(["008077104cf3fe063afa6d75c96d01278bcddc5be8",()=>e.$$RSC_SERVER_ACTION_0,"605821bdbba17219ce7dfd786ac4338d53313c7748",()=>f.saveMediaAltAction]),c()}catch(a){c(a)}},!1),35555,a=>a.a(async(b,c)=>{try{a.i(2157);var d=a.i(50227),e=a.i(93599),f=a.i(42116),g=b([e]);[e]=g.then?(await g)():g,process.env.MEDIA_PATH??d.default.join(process.cwd(),"data","media");let i=!1;function h(){return i||((0,f.db)().exec(`CREATE TABLE IF NOT EXISTS media (
      id            INTEGER PRIMARY KEY,
      file          TEXT NOT NULL UNIQUE,
      original_name TEXT NOT NULL,
      width         INTEGER NOT NULL,
      height        INTEGER NOT NULL,
      bytes         INTEGER NOT NULL,
      alt           TEXT NOT NULL DEFAULT '',
      created_at    TEXT NOT NULL
    )`),i=!0),(0,f.db)()}let j=a=>({id:a.id,file:a.file,src:`/media/${a.file}`,originalName:a.original_name,width:a.width,height:a.height,bytes:a.bytes,alt:a.alt,createdAt:a.created_at});a.s(["getMediaByFile",0,function(a){let b=h().prepare(`SELECT id, file, original_name, width, height, bytes, alt, created_at
       FROM media WHERE file = ?`).get(a);return b?j(b):void 0},"listMedia",0,function(){return h().prepare(`SELECT id, file, original_name, width, height, bytes, alt, created_at
       FROM media ORDER BY id DESC`).all().map(j)},"setMediaAlt",0,function(a,b){h().prepare("UPDATE media SET alt = ? WHERE id = ?").run(b.trim(),a)}]),c()}catch(a){c(a)}},!1)];

//# sourceMappingURL=%5Broot-of-the-server%5D__1v8qksl._.js.map