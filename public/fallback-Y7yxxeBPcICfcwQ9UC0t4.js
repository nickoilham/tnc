(()=>{"use strict";self.fallback=async e=>{switch(e.destination){case"document":return caches.match("/_offline",{ignoreSearch:!0});case"image":return caches.match("/images/not_found.png",{ignoreSearch:!0});default:return Response.error()}}})();