if (self.CavalryLogger) { CavalryLogger.start_js(["+6BPcL\/"]); }

__d("LSComputeParticipantCapabilities",["LSGetViewerFBID"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[];return c.seq([function(f){return c.seq([function(a){return c.sp(b("LSGetViewerFBID")).then(function(a){return a=a,d[0]=a[0],a})},function(b){return c.ftr(c.db.table(14).fetch([[[a[1],d[0]]]]),function(b){return c.i64.eq(b.a,a[1])&&c.i64.eq([0,0],[0,0])&&c.i64.eq(b.b,d[0])}).next().then(function(a,b){var c=a.done;a=a.value;return c?(c=[!1,!1],d[1]=c[0],d[2]=c[1],c):(b=a.item,c=[b.f==null?!1:b.f,b.m],d[1]=c[0],d[2]=c[1],c)})},function(b){return c.ftr(c.db.table(14).fetch([[[a[1],a[0]]]]),function(b){return c.i64.eq(b.a,a[1])&&c.i64.eq([0,0],[0,0])&&c.i64.eq(b.b,a[0])}).next().then(function(a,b){var c=a.done;a=a.value;return c?(c=[!1,!1],d[4]=c[0],d[5]=c[1],c):(b=a.item,c=[b.f==null?!1:b.f,b.m],d[4]=c[0],d[5]=c[1],c)})},function(b){return c.ftr(c.db.table(7).fetch([[[a[0]]]]),function(b){return c.i64.eq(b.a,a[0])&&c.i64.eq([0,1],[0,1])}).next().then(function(a,b){var c=a.done;a=a.value;return c?(c=[[0,1073741823],[0,0],!1],d[7]=c[0],d[8]=c[1],d[9]=c[2],c):(b=a.item,c=[b.G==null?[0,1073741823]:b.G,b.r==null?[0,0]:b.r,b.m==null?!1:b.m],d[7]=c[0],d[8]=c[1],d[9]=c[2],c)})},function(a){return d[12]=c.i64.eq(d[8],[0,4])?d[9]?[0,2612119]:c.i64.or_([0,2612119],c.i64.lsl_([0,1],c.i64.to_int32([0,3]))):d[7],c.sp(b("LSGetViewerFBID")).then(function(a){return a=a,d[11]=a[0],a})},function(e){return d[13]=c.i64.lsl_([0,1],c.i64.to_int32([0,20])),d[15]=d[1]&&!d[4]&&c.i64.neq(d[11],a[0])?d[12]:c.i64.eq(c.i64.and_(d[12],d[13]),[0,0])?d[12]:c.i64.sub(d[12],d[13]),c.sp(b("LSGetViewerFBID")).then(function(a){return a=a,d[14]=a[0],a})},function(e){return d[16]=c.i64.lsl_([0,1],c.i64.to_int32([0,22])),d[19]=d[4]&&d[1]&&c.i64.neq(d[14],a[0])?d[15]:c.i64.eq(c.i64.and_(d[15],d[16]),[0,0])?d[15]:c.i64.sub(d[15],d[16]),d[2]?d[17]=!(d[4]||d[5]):d[17]=!0,c.sp(b("LSGetViewerFBID")).then(function(a){return a=a,d[18]=a[0],a})},function(b){return d[20]=c.i64.lsl_([0,1],c.i64.to_int32([0,21])),e[0]=(d[1]||d[2])&&d[17]&&c.i64.neq(a[0],d[18])?d[19]:c.i64.eq(c.i64.and_(d[19],d[20]),[0,0])?d[19]:c.i64.sub(d[19],d[20])}])},function(a){return c.resolve(e)}])}e.exports=a}),null);
__d("LSAddParticipantIdToGroupThread",["LSComputeParticipantCapabilities"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[];return c.seq([function(e){return c.seq([function(e){return c.sp(b("LSComputeParticipantCapabilities"),a[1],a[0]).then(function(a){return a=a,d[0]=a[0],a})},function(b){return c.ftr(c.db.table(14).fetch([[[a[0],a[1]]]]),function(b){return c.i64.eq(b.a,a[0])&&c.i64.eq([0,0],[0,0])&&c.i64.eq(b.b,a[1])&&c.i64.gt(b.j,a[9])}).next().then(function(b){var e=b.done;b.value;return e?c.db.table(14).put({a:a[0],b:a[1],c:a[2],k:a[3],d:a[4],e:a[5],h:a[10],f:a[6],l:a[11],g:a[7],j:a[9],i:d[0],n:[0,0],m:!1}):0})}])},function(a){return c.resolve(e)}])}e.exports=a}),null);
__d("LSClearMessagePlaceholderRange",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.fe(b.ftr(b.db.table(13).fetch([[[a[0],[0,0]]]]),function(c){return b.i64.eq(c.a,a[0])&&c.c===a[1]&&b.i64.eq([0,0],c.b)&&b.i64.eq([0,0],c.d)}),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSInsertNewMessageRange",["LSClearMessagePlaceholderRange"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[];return c.seq([function(e){return c.seq([function(d){return c.sp(b("LSClearMessagePlaceholderRange"),a[0],a[9])},function(b){return c.ftr(c.db.table(13).fetch([[[a[0],{lte:a[5]}]]]),function(b){return c.i64.eq(b.a,a[0])&&c.i64.le(b.b,a[5])&&c.i64.ge(b.d,a[5])}).next().then(function(b,c){var e=b.done;b=b.value;return e?(e=[a[1],a[3],a[7]],d[0]=e[0],d[1]=e[1],d[2]=e[2],e):(c=b.item,e=[c.b,c.c,c.h],d[0]=e[0],d[1]=e[1],d[2]=e[2],e)})},function(b){return c.ftr(c.db.table(13).fetch([[[a[0],{lte:a[6]}]]]),function(b){return c.i64.eq(b.a,a[0])&&c.i64.le(b.b,a[6])&&c.i64.ge(b.d,a[6])}).next().then(function(b,c){var e=b.done;b=b.value;return e?(e=[a[2],a[4],a[8]],d[4]=e[0],d[5]=e[1],d[6]=e[2],e):(c=b.item,e=[c.d,c.e,c.i],d[4]=e[0],d[5]=e[1],d[6]=e[2],e)})},function(b){return c.fe(c.ftr(c.db.table(13).fetch([[[a[0],{lte:a[6]}]]]),function(b){return c.i64.eq(b.a,a[0])&&c.i64.ge(a[6],b.b)&&c.i64.le(a[5],b.d)}),function(a){return a["delete"]()})},function(b){return c.db.table(13).put({a:a[0],b:d[0],c:d[1],d:d[4],e:d[5],f:!1,g:!1,h:d[2],i:d[6]})}])},function(a){return c.resolve(e)}])}e.exports=a}),null);
__d("LSUpsertAttachmentRange",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.seq([function(c){return b.fe(b.db.table(17).fetch([[[a[0],a[1]]]]),function(a){return a["delete"]()})},function(c){return b.db.table(17).add({a:a[0],b:a[1],c:a[2],d:[2328,1316134911],g:a[3],h:!1,e:!1,f:!1})}])},function(a){return b.resolve(c)}])}e.exports=a}),null);