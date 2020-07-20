goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__61112,p__61113){
var map__61114 = p__61112;
var map__61114__$1 = (((((!((map__61114 == null))))?(((((map__61114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61114):map__61114);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61114__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61115 = p__61113;
var map__61115__$1 = (((((!((map__61115 == null))))?(((((map__61115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61115):map__61115);
var msg = map__61115__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61115__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__61118,p__61119){
var map__61120 = p__61118;
var map__61120__$1 = (((((!((map__61120 == null))))?(((((map__61120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61120):map__61120);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61120__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61121 = p__61119;
var map__61121__$1 = (((((!((map__61121 == null))))?(((((map__61121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61121):map__61121);
var msg = map__61121__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61121__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__61124 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61126 = null;
var count__61127 = (0);
var i__61128 = (0);
while(true){
if((i__61128 < count__61127)){
var map__61134 = chunk__61126.cljs$core$IIndexed$_nth$arity$2(null,i__61128);
var map__61134__$1 = (((((!((map__61134 == null))))?(((((map__61134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61134):map__61134);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61134__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61181 = seq__61124;
var G__61182 = chunk__61126;
var G__61183 = count__61127;
var G__61184 = (i__61128 + (1));
seq__61124 = G__61181;
chunk__61126 = G__61182;
count__61127 = G__61183;
i__61128 = G__61184;
continue;
} else {
var G__61185 = seq__61124;
var G__61186 = chunk__61126;
var G__61187 = count__61127;
var G__61188 = (i__61128 + (1));
seq__61124 = G__61185;
chunk__61126 = G__61186;
count__61127 = G__61187;
i__61128 = G__61188;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61124);
if(temp__5735__auto__){
var seq__61124__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61124__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61124__$1);
var G__61189 = cljs.core.chunk_rest(seq__61124__$1);
var G__61190 = c__4609__auto__;
var G__61191 = cljs.core.count(c__4609__auto__);
var G__61192 = (0);
seq__61124 = G__61189;
chunk__61126 = G__61190;
count__61127 = G__61191;
i__61128 = G__61192;
continue;
} else {
var map__61136 = cljs.core.first(seq__61124__$1);
var map__61136__$1 = (((((!((map__61136 == null))))?(((((map__61136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61136):map__61136);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61136__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61193 = cljs.core.next(seq__61124__$1);
var G__61194 = null;
var G__61195 = (0);
var G__61196 = (0);
seq__61124 = G__61193;
chunk__61126 = G__61194;
count__61127 = G__61195;
i__61128 = G__61196;
continue;
} else {
var G__61197 = cljs.core.next(seq__61124__$1);
var G__61198 = null;
var G__61199 = (0);
var G__61200 = (0);
seq__61124 = G__61197;
chunk__61126 = G__61198;
count__61127 = G__61199;
i__61128 = G__61200;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__61138,msg){
var map__61139 = p__61138;
var map__61139__$1 = (((((!((map__61139 == null))))?(((((map__61139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61139):map__61139);
var runtime = map__61139__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61139__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__61141,key,p__61142){
var map__61143 = p__61141;
var map__61143__$1 = (((((!((map__61143 == null))))?(((((map__61143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61143):map__61143);
var state = map__61143__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61143__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__61144 = p__61142;
var map__61144__$1 = (((((!((map__61144 == null))))?(((((map__61144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61144):map__61144);
var spec = map__61144__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61144__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__61147,key,spec){
var map__61148 = p__61147;
var map__61148__$1 = (((((!((map__61148 == null))))?(((((map__61148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61148):map__61148);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61148__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__61155){
var map__61156 = p__61155;
var map__61156__$1 = (((((!((map__61156 == null))))?(((((map__61156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61156):map__61156);
var runtime = map__61156__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61156__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__61150_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__61150_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__61151_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__61151_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__61152_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__61152_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__61153_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__61153_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__61154_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__61154_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__61158,key){
var map__61159 = p__61158;
var map__61159__$1 = (((((!((map__61159 == null))))?(((((map__61159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61159):map__61159);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61159__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__61161,p__61162){
var map__61163 = p__61161;
var map__61163__$1 = (((((!((map__61163 == null))))?(((((map__61163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61163):map__61163);
var runtime = map__61163__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61163__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61164 = p__61162;
var map__61164__$1 = (((((!((map__61164 == null))))?(((((map__61164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61164):map__61164);
var msg = map__61164__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61164__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__61167 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61169 = null;
var count__61170 = (0);
var i__61171 = (0);
while(true){
if((i__61171 < count__61170)){
var map__61177 = chunk__61169.cljs$core$IIndexed$_nth$arity$2(null,i__61171);
var map__61177__$1 = (((((!((map__61177 == null))))?(((((map__61177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61177):map__61177);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61177__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61201 = seq__61167;
var G__61202 = chunk__61169;
var G__61203 = count__61170;
var G__61204 = (i__61171 + (1));
seq__61167 = G__61201;
chunk__61169 = G__61202;
count__61170 = G__61203;
i__61171 = G__61204;
continue;
} else {
var G__61205 = seq__61167;
var G__61206 = chunk__61169;
var G__61207 = count__61170;
var G__61208 = (i__61171 + (1));
seq__61167 = G__61205;
chunk__61169 = G__61206;
count__61170 = G__61207;
i__61171 = G__61208;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61167);
if(temp__5735__auto__){
var seq__61167__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61167__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61167__$1);
var G__61209 = cljs.core.chunk_rest(seq__61167__$1);
var G__61210 = c__4609__auto__;
var G__61211 = cljs.core.count(c__4609__auto__);
var G__61212 = (0);
seq__61167 = G__61209;
chunk__61169 = G__61210;
count__61170 = G__61211;
i__61171 = G__61212;
continue;
} else {
var map__61179 = cljs.core.first(seq__61167__$1);
var map__61179__$1 = (((((!((map__61179 == null))))?(((((map__61179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61179):map__61179);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61179__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61213 = cljs.core.next(seq__61167__$1);
var G__61214 = null;
var G__61215 = (0);
var G__61216 = (0);
seq__61167 = G__61213;
chunk__61169 = G__61214;
count__61170 = G__61215;
i__61171 = G__61216;
continue;
} else {
var G__61217 = cljs.core.next(seq__61167__$1);
var G__61218 = null;
var G__61219 = (0);
var G__61220 = (0);
seq__61167 = G__61217;
chunk__61169 = G__61218;
count__61170 = G__61219;
i__61171 = G__61220;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map