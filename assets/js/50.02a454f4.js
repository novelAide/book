(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{715:function(t,e){
/**
 * @license BSD
 * @copyright 2014-2022 hizzgdev@163.com
 * 
 * Project Home:
 *   https://github.com/hizzgdev/jsmind/
 */
!function(t){"use strict";var e=t.document,i=t.jsMind;if(i&&void 0===i.draggable){var s=i.util.dom,n="getSelection"in t?function(){t.getSelection().removeAllRanges()}:function(){e.selection.empty()},a=5,o=500,h=80;i.draggable=function(t){this.jm=t,this.e_canvas=null,this.canvas_ctx=null,this.shadow=null,this.shadow_w=0,this.shadow_h=0,this.active_node=null,this.target_node=null,this.target_direct=null,this.client_w=0,this.client_h=0,this.offset_x=0,this.offset_y=0,this.hlookup_delay=0,this.hlookup_timer=0,this.capture=!1,this.moved=!1},i.draggable.prototype={init:function(){this._create_canvas(),this._create_shadow(),this._event_bind()},resize:function(){this.jm.view.e_nodes.appendChild(this.shadow),this.e_canvas.width=this.jm.view.size.w,this.e_canvas.height=this.jm.view.size.h},_create_canvas:function(){var t=e.createElement("canvas");this.jm.view.e_panel.appendChild(t);var i=t.getContext("2d");this.e_canvas=t,this.canvas_ctx=i},_create_shadow:function(){var t=e.createElement("jmnode");t.style.visibility="hidden",t.style.zIndex="3",t.style.cursor="move",t.style.opacity="0.7",this.shadow=t},reset_shadow:function(t){var e=this.shadow.style;this.shadow.innerHTML=t.innerHTML,e.left=t.style.left,e.top=t.style.top,e.width=t.style.width,e.height=t.style.height,e.backgroundImage=t.style.backgroundImage,e.backgroundSize=t.style.backgroundSize,e.transform=t.style.transform,this.shadow_w=this.shadow.clientWidth,this.shadow_h=this.shadow.clientHeight},show_shadow:function(){this.moved||(this.shadow.style.visibility="visible")},hide_shadow:function(){this.shadow.style.visibility="hidden"},_magnet_shadow:function(t){t&&(this.canvas_ctx.lineWidth=a,this.canvas_ctx.strokeStyle="rgba(0,0,0,0.3)",this.canvas_ctx.lineCap="round",this._clear_lines(),this._canvas_lineto(t.sp.x,t.sp.y,t.np.x,t.np.y))},_clear_lines:function(){this.canvas_ctx.clearRect(0,0,this.jm.view.size.w,this.jm.view.size.h)},_canvas_lineto:function(t,e,i,s){this.canvas_ctx.beginPath(),this.canvas_ctx.moveTo(t,e),this.canvas_ctx.lineTo(i,s),this.canvas_ctx.stroke()},_lookup_close_node:function(){var t,e,s=this.jm.get_root(),n=s.get_location(),o=s.get_size(),h=n.x+o.w/2,l=this.shadow_w,d=this.shadow_h,c=this.shadow.offsetLeft,r=this.shadow.offsetTop,_=c+l/2>=h?i.direction.right:i.direction.left,u=this.jm.mind.nodes,v=null,f=this.jm.layout,g=Number.MAX_VALUE,m=0,w=null,p=null,y=null;for(var b in u){var x,k;if((v=u[b]).isroot||v.direction==_){if(v.id==this.active_node.id)continue;if(!f.is_visible(v))continue;if(t=v.get_size(),e=v.get_location(),_==i.direction.right){if(c-e.x-t.w<=0)continue;m=Math.abs(c-e.x-t.w)+Math.abs(r+d/2-e.y-t.h/2),x={x:e.x+t.w-a,y:e.y+t.h/2},k={x:c+a,y:r+d/2}}else{if(e.x-c-l<=0)continue;m=Math.abs(c+l-e.x)+Math.abs(r+d/2-e.y-t.h/2),x={x:e.x+a,y:e.y+t.h/2},k={x:c+l-a,y:r+d/2}}m<g&&(w=v,p=x,y=k,g=m)}}var j=null;return w&&(j={node:w,direction:_,sp:y,np:p}),j},lookup_close_node:function(){var t=this._lookup_close_node();t&&(this._magnet_shadow(t),this.target_node=t.node,this.target_direct=t.direction)},_event_bind:function(){var t=this,e=this.jm.view.container;s.add_event(e,"mousedown",(function(e){var i=e||event;t.dragstart.call(t,i)})),s.add_event(e,"mousemove",(function(e){var i=e||event;t.drag.call(t,i)})),s.add_event(e,"mouseup",(function(e){var i=e||event;t.dragend.call(t,i)})),s.add_event(e,"touchstart",(function(e){var i=e||event;t.dragstart.call(t,i)})),s.add_event(e,"touchmove",(function(e){var i=e||event;t.drag.call(t,i)})),s.add_event(e,"touchend",(function(e){var i=e||event;t.dragend.call(t,i)}))},dragstart:function(e){if(this.jm.get_editable()&&!this.capture){this.active_node=null;var i=this.jm.view,s=e.target||event.srcElement;if("jmnode"==s.tagName.toLowerCase()){i.get_draggable_canvas()&&i.disable_draggable_canvas();var n=i.get_binded_nodeid(s);if(n){var a=this.jm.get_node(n);if(!a.isroot){this.reset_shadow(s),this.active_node=a,this.offset_x=(e.clientX||e.touches[0].clientX)/i.actualZoom-s.offsetLeft,this.offset_y=(e.clientY||e.touches[0].clientY)/i.actualZoom-s.offsetTop,this.client_hw=Math.floor(s.clientWidth/2),this.client_hh=Math.floor(s.clientHeight/2),0!=this.hlookup_delay&&t.clearTimeout(this.hlookup_delay),0!=this.hlookup_timer&&t.clearInterval(this.hlookup_timer);var l=this;this.hlookup_delay=t.setTimeout((function(){l.hlookup_delay=0,l.hlookup_timer=t.setInterval((function(){l.lookup_close_node.call(l)}),h)}),o),this.capture=!0}}}}},drag:function(t){if(this.jm.get_editable()&&this.capture){t.preventDefault(),this.show_shadow(),this.moved=!0,n();var e=this.jm.view,i=(t.clientX||t.touches[0].clientX)/e.actualZoom-this.offset_x,s=(t.clientY||t.touches[0].clientY)/e.actualZoom-this.offset_y;this.shadow.style.left=i+"px",this.shadow.style.top=s+"px",n()}},dragend:function(e){if(this.jm.get_editable()){if(this.jm.view.get_draggable_canvas()&&this.jm.view.enable_draggable_canvas(),this.capture){if(0!=this.hlookup_delay&&(t.clearTimeout(this.hlookup_delay),this.hlookup_delay=0,this._clear_lines()),0!=this.hlookup_timer&&(t.clearInterval(this.hlookup_timer),this.hlookup_timer=0,this._clear_lines()),this.moved){var i=this.active_node,s=this.target_node,n=this.target_direct;this.move_node(i,s,n)}this.hide_shadow()}this.moved=!1,this.capture=!1}},move_node:function(t,e,s){var n=this.shadow.offsetTop;if(e&&t&&!i.node.inherited(t,e)){for(var a=e.children,o=a.length,h=null,l=Number.MAX_VALUE,d=null,c="_last_";o--;)if((h=a[o]).direction==s&&h.id!=t.id){var r=h.get_location().y-n;r>0&&r<l&&(l=r,d=h,c="_first_")}d&&(c=d.id),this.jm.move_node(t.id,c,e.id,s)}this.active_node=null,this.target_node=null,this.target_direct=null},jm_event_handle:function(t,e){t===i.event_type.resize&&this.resize()}};var l=new i.plugin("draggable",(function(t){var e=new i.draggable(t);e.init(),t.add_event_listener((function(t,i){e.jm_event_handle.call(e,t,i)}))}));i.register_plugin(l)}}(window)}}]);