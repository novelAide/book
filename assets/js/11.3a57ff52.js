(window.webpackJsonp=window.webpackJsonp||[]).push([[11,17,22],{672:function(t,e,a){},673:function(t,e,a){},674:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));const i=t=>{if(!navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(t);{if(!document.execCommand("copy"))return Promise.reject();const e=document.createElement("textarea");return e.style.position="fixed",e.style.top=e.style.left="-100vh",e.style.opacity="0",e.value=t,document.body.appendChild(e),e.focus(),e.select(),new Promise((t,a)=>{document.execCommand("copy")?t():a(),e.remove()})}}},675:function(t,e,a){"use strict";a(672)},676:function(t,e,a){"use strict";a.r(e);var i={name:"VerticalTextSlider",props:{sliderData:{type:Array,required:!0,default:()=>[]},interval:{type:Number,default:3e3},height:{type:Number,default:60}},data:()=>({activeIndex:0}),computed:{len(){return this.sliderData.length}},mounted(){this.onStart()},methods:{onStop(){this.len>1&&clearTimeout(this.timer)},onStart(){this.len>1&&this.startMove(this.len)},startMove(){this.timer=setTimeout(()=>{this.activeIndex===this.len-1?this.activeIndex=0:this.activeIndex++,this.startMove()},this.interval)}}},s=(a(675),a(46)),r=Object(s.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-slider",style:`height: ${t.height}px;`},[e("transition-group",{attrs:{name:"slide"}},t._l(t.sliderData,(function(a,i){return e("a",{directives:[{name:"show",rawName:"v-show",value:i===t.activeIndex,expression:"index===activeIndex"}],key:a.phone+i,staticClass:"item",attrs:{title:a.text},on:{mouseenter:t.onStop,mouseleave:t.onStart}},[t._v("\n    "+t._s(a.text))])})),0)],1)}),[],!1,null,"a53130d2",null);e.default=r.exports},677:function(t,e,a){"use strict";a(673)},678:function(t,e,a){"use strict";a.r(e);var i=a(676),s=a(674),r={components:{VerticalTextSlider:i.default},data:()=>({data:[{text:"1、网文助手写作资料栏可以进行友链合作，合作方式就是永久互相推广，文章底部或者顶部会添加合作方要推广的链接。",phone:"qq1347177399"},{text:"2、平台长期承接各种工作室、金主、网站广告，包括轮播和文章等展示方式，通告位置和约稿任务页广告位出租，约稿任务发布合作。",phone:"qq1347177399"},{text:"3、平台支持PC电脑端，也支持手机移动端。",phone:"qq1347177399"}]}),methods:{hCopyPhone(t,e){Object(s.a)(t).then(()=>{this.$message.success(`第${e+1}条公告联系方式复制成功 !`)}).catch(()=>{this.$message.error("点击复制失败，请手动输入或复制 !")})},hChoiceTip(t){console.log(t)},hJumpMore(){this.$router.push("/money/")}}},n=(a(677),a(46)),o=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-readme"},[e("el-collapse",[e("el-collapse-item",{attrs:{name:"1"}},[e("template",{slot:"title"},[e("span",{staticStyle:{color:"#424345",display:"inline-block",width:"49px"}},[t._v("通告：")]),t._v(" "),e("span",{staticClass:"showTip"},[e("VerticalTextSlider",{attrs:{sliderData:t.data,interval:3e3,height:20}})],1)]),t._v(" "),t._l(t.data,(function(a,i){return e("div",{key:i+5,staticClass:"itemLi",on:{click:function(e){return t.hCopyPhone(a.phone,i)}}},[t._v(t._s(a.text))])})),t._v(" "),"/money/"!==t.$route.fullPath?e("span",{staticClass:"moreSty",on:{click:t.hJumpMore}},[t._v("了解更多...")]):t._e()],2)],1)],1)}),[],!1,null,"092b803e",null);e.default=o.exports},719:function(t,e,a){},720:function(t,e,a){},783:function(t,e,a){"use strict";a(719)},784:function(t,e,a){"use strict";a(720)},838:function(t,e,a){"use strict";a.r(e);const i=["九转","天地","混元","紫府","上清","混元","纯阳","太清","洞玄","大妖","屠天","奇门","遁甲","紫阳","天师","离尘","度难","度厄","百毒","五行","太阴","玄阴","采阳","异相","辟邪","阴阳","太阴","养尸","尸煞","炼血","混世","天魔","无相血","灭生","黄泉","无量","枯骨","泣血","百魔","天妖","合欢极乐","九幽炼狱","九天玄女","无上炼魔","玄都灭魔","荡魔","灵宝度厄","轮回不死","无量","太极","太极玄天","七劫斩龙","天诛","九阳","不灭","天演","裂天","九幽龙炎","魔灵渡生","混沌","道皇神","七彩","轩辕","长生","乾阳","天罡","混元","凝神","九转","天衍","化血","太阴","赤阳","媚月","九幽","青元","天焱","阴冥","洗髓","大力金刚","化龙","玄甲","九幽寒霜","殇阳","五行神魔","不死","轮回","星辰","如意","破天","玄心","玄云","风灵","屠佛","陨佛"],s=["玄功","仙经","宝典","宝篆","丹经","天书","符经","医经","真经","法典","鬼篆","天经","仙篆","大典","魔典","大法","经","魔功","魔经","鬼经","鬼典","秘典","尸经","真诀","神功","剑诀","术"],r=["烈日","霓霞","九转","阴阳魔","问心","惊雷","翠羽魔","翔鹰","真龙佛","凤舞霸","缠心龙","无痕","琉璃龙","森罗","太虚","梅花魔","光明掌","金刚神","缠身霸","紫霄刀","飞蝎魔","天极","盘魂","赤焰","无双圣","蚀日圣","五彩","摧山佛","飞鹤圣","烈","飞星","浑天霸","奇木","如来","朱雀","虎牙神","炼心","琉璃","赤火圣","两仪","菩萨妖","凌霄","翠羽","醉仙神","不败","狂龙","丹阳霸","影月","断浪龙","金刚","金阳","沧海","黑虎掌","盖世","惊天","蝎王","白日","蟠龙","旋锋","虎魔","邪月霸","无痕","焚月","夺心圣","万魔","灵犀","四象","暗黑圣","阴风","无妄魔","螳螂魔","冲霄掌","四合","生死","银羽","蛤佛","销魂圣","万象佛","巨鲨","逆天","雷风","圣儒","太虚神","飞沙圣","赤羽","青羽神","拾伍","琉璃","天雷","太乙","虎尾","银翼妖","辟心霸","斩月妖","缠丝霸","夺魂","真空圣","天极","摧山","闼婆","腾蛇","达摩掌","万丈","阴鬼","圆融魔","玄瘴","修罗","狼王","无垢封","飞燕","归元","黑虎","逆天佛","究极","流光掌","封穴","凄煌圣","白光","极霸","魔","金钟龙","腾蛇","玄冰","妖灵","地煞","兽鬼","净心","无想","白焰雷","无痕霸","蚀精妖","飞花","梅花霸","虎牙","星风圣","烈火","鬼","光龙","混元","烈风","落枫鬼","火蚕","渡瘴","太虚","陀罗","缺月","天极","梵天","震天法","蝎王","莲花妖","九幽","天音龙","血雾鬼","极剑","庄严魔","世尊圣","战神鬼","行妖","孤风神","龙凰圣","水柔佛","残金鬼","链铠妖","沧海霸","伏魔皇","流萤鬼","截空魔","花云霸","紫纹皇","飞雪龙","遮那鬼","丹青圣","百花圣","紫虚龙变","断岳鬼","缺月妖闪","魔鬼","坠月魔","水月鬼","腾云鬼","金乌妖","红莲妖","灵胥皇","极火","须弥佛","天道皇","幽幻霸","仁风鬼","巫盼皇","破浪妖","血魔妖"],n=["闪","枪","轰","腿","剑","隐","手","指","爆","破","封","斩","吟","爪","拳","劈","术","印","步","杀","劲","咒","变","舞"],o=["混沌","皇级","三皇","五帝","九黎","药王","太浩","双级","蛟龙","两仪","阴阳","四绝","神皇","星辰","魔云","天地","虚空","麒麟","凤金","万物","战仙","唤骨","青云","紫金","巨灵","破天","火将","擂仙","轮回","紫炎心","九焱","灭世","定世","焱灵","五色焰罗","金蝶","碧寒","寒魄","赤焰龙","鹰击","百刃","乌擎","影纹","寒雀","九窍摄魂","炫阳","黑焚","晶源","吸星","释魂龙","翼风","十八灭魔佛","屠魔","天丝紫金","幻魔","定灵","定星","血魔","开天","噬魂","斩魂","幻空","修罗","木魂","旋月","五行惊魂","五行精魂","射天","穿云","魂","噬魂","鬼见愁","碧玉","黄泉","流星","陨神","八卦","五狱","青龙","游龙","屠龙","无影","玄阴","天魔","问天","斩龙","朱雀","昊天","打神","圣火","灭世","混雷","焚天","焚寂","玄武","雷霆","雷心","玄武","苍龙","破开","轰天","伏魔","逍遥","幻影","无相","玄月","盘龙","霸王","血魂","捆仙","缚龙","锁魂","伏魔","镇妖","御兽","天魔","魂","万鬼","战魂","","噬神","焚天","冰魄","冰魄","玄冰","冰魂","天魔","摄魂","捕魂","葬天","承天","十二诸天噬神","五行戮神","太阿","镇天","五鬼噬魂","九美","七情","六欲天魔","窥天","轮回","星辰","如意","破天","玄心","玄云","风灵","屠佛","陨佛","斩天","无情","盘龙","麒麟","陨龙","斩仙飞","落宝","混沌","大世","点星","量天","遮天","影灵","疾风","幻影","饮血","无影","龙魂","玄武","扶桑","断岳","金蝉","天蚕","黑暗","雷霆之","玄羽","番天","玄武","日月山河","乾坤世界","绝阵","噬仙","戮仙","屠仙","屠魔","静心",,"冥古","悚心","傀儡","昆仑","梧桐","傀儡","囚魂","御魂","玉女","寒霜","柳叶","伏魔","屠佛","化骨","御魂","九龙","吞天","玄风","混元五行雷","烈火","血魔","日月圣","阴阳打神","太极","时空巨","魔魂","九幽","玄极","岁月","鬼王","九幽","黄泉幻","百花","百花","流云","飞花","陨佛金箭","戮佛","玉女","离火","饮血","御天","阴阳混雷","游龙","昊天","焚仙","捆仙","弯月","修雅","心魔","蟠龙","龙骨","天罡","紫霄","天道","龙皇","无尘","蓝霄","丹火","荒古","紫金","玄天","碧玉","幻梦","青霜","赤云","鬼心","冰火","紫电"],c=["塔","钟","镜","图","鼎","梭","剑","剪","枪","神炉","杖","斧","轮","刀","罩","鞭","弓","球","珠","环","弩","盘","戟","盾","棍","锤","伞","箭","旗","刃","棺","绳","斧","锤","令","网","棍","扇","战甲","碑","幡","鼓","索","铃","链","尺","戒","锁","匕","印","针","翅","琴","碗","笔","盆","绸","甲","衣","靴","戈"],l=["还元丹","返命丹","合气丹","增气丹","补气丹","黄龙丹","真元丹","回元丹","升元丹","培元丹","归元丹","增元丹","精元丹","冰心丹","怒神丹","气神丹","元神丹","力神丹","风神丹","百转丹","木还丹","水还丹","火还丹","土还丹","草还丹","凝火丹","赤血丹","五灵丹","玲珑丹","玉华丹","招魂丹","烈阳丹","正阳丹","风云丹","引气丹","聚气丹","养气丹","回气丹","结续丹","离殒丹","元阳丹","地灵丹","皇极丹","清魂丹","紫火丹","化形丹","噬生丹","返命丹","润泽丹","洗髓丹","延寿丹","回光丹","生机丹","水韵丹","清虚丹","血气丹","腾龙丹","无痕丹","离火丹","回魂丹","解毒丹","辟谷丹","灵兽丹","地灵丹","混元丹","碧心丹","罗厄丹","涤魂丹","复伤丹","忘忧丹","破厄丹","复容丹","菩提丹","轮回丹","护脉丹","淬体丹","炼骨丹","祛邪丹","益神丹","筑基丹","禁魔丹","疯魔丹","七彩丹","化龙丹","镇毒丹","悟道丹","生慧丹","养神丹","安神丹","流珠丹","金还丹","顺气丹","甘霖丹","玄元丹","凝碧丹","青霜丹","化龙丹","化淤丹","灵魄丹","浑天丹","洗骨丹","养魂丹","还阳丹","广陵丹","回力丹","金乌丸","茯苓丹","融气丹","凝真丹","宁神丹","驻颜丹","八宝丹","精血丹","融灵丹","正气丹","金髓丸","降尘丹","补天丹","益气丹","生骨丹","风行丹","血莲丹","龙力丹","冰灵丹","寂灭丹","大还丹","寒灵丹","金玉丹","长生不老丹","现法明目丹"," 天香续命丹","精元化气丹","翡翠玉清丹"," 万邪不侵丹","太清玉液丹","五藏归元丹"," 千草还魂丹","仙肌道骨丹","枯寂人元丹"," 雨髓水晶丹","九阳还生丹","阴阳玄龙丹"," 仙芝漱魂丹","千日醉神丹","天魂融血丹"," 青冥百寿丹","九天蕴仙丹","九命仙龙丹"," 九转紫金丹","一气鸿蒙丹","三花玉露丹"," 阴阳万寿丹","三纹清灵丹","七命玄门丹"," 七宝回魂丹","五云升仙丹","三元太乙丹"," 九元养窍丹","九鬼噬魂丹","九窍元气丹"," 血月凝元丹","白骨生肉丹","仙凰涅盘丹"," 火龙帝仙丹","疯魔减寿丹","天龙换血丹"," 紫心破障丹","镇命冰魂丹","黄泉忘忧丹"," 纯阳赤血丹","菩提证道丹","龟鹤长命丹"," 脱胎换骨丹","涅盘重生丹","九阴黄泉丹"," 九转还魂丹","九炼归元丹","玄光虚法丹"," 阴阳爆气丹","星变还虚丹","升灵法道丹"," 借道悟真丹","百炼凝血丹","混元化罡丹"," 星斗聚法丹","玄元丹","灵魄丹","罗厄丹","浑天丹","洗骨丹","养魂丹","金乌丸","玄元丹","化淤丹","红磷丹","灵魄丹","罗厄丹","培元丹","浑天丹","洗骨丹","养魂丹","还阳丹","广陵丹","凝碧丹","青霜丹","招魂丹","金还丹","木还丹","水还丹","火还丹","土还丹","草还丹","怒神丹","气神丹","元神丹","力神丹","风神丹","百转丹","赤血丹","涤魂丹","凝火丹","复伤丹","护脉丹","冰心丹","生骨丹","回气丹","风行丹","血莲丹","龙力丹","冰灵丹","寂灭丹","破厄丹","结续丹","融灵丹","离殒丹","元阳丹","地灵丹","皇极丹","清魂丹","化形丹","噬生丹","返命丹","润泽丹","炼骨丹","祛邪丹","益神丹","菩提丹","紫火丹","复容丹","黄龙丹","金髓丸","合气丹","辟谷丹","定颜丹","聚灵丹","降尘丹","补天丹","清虚丹","血气丹","腾龙丹","修髓丹","忘忧丹","涅盘丹","复灵紫丹","速灵风丹","茯苓青丹","青冥寿丹","九窍金丹","阴阳万寿丹","三纹清灵丹","七命玄门丹","七宝回魂丹","九转还魂丹","九阴黄泉丹","阴阳玄龙丹","紫心破障丹","仙芝漱魂丹","天魂融血丹"],u=["日月星辰","混元河洛","北冥玄煞","都天魔神","聚灵","诛仙","天罡北斗","九宫八卦","万仙","金光","九曲黄河","烈焰","寒冰","地火","血河","幻影迷魂","太极无象","卧龙神灭","阴阳浑天","六轮鬼煞","无极幻灭","五行","两仪幻灭微尘","十二都天神煞","周天星斗","八卦","九幽玄天","皇天","万灭","帝王幽","天羽","黄泉","千魂","血煞","南明离火","大衍","封天禁神","两仪绝杀","神煞诛灭","玄武锁灵","九天混沌","九天玄灵","阴阳相合","玄冥冰封","九转幻生","龙鳞凝血","九天玄灵","三千雷霆","五魂六魄","地藏玄踪","火云大炮","九曜星辰","天罡星宿","无相雷煞","生死轮转","空间封锁","归元","碎魂","龙蛇相纠","天地合一","虚无幻境","冰霜九天","火山魔罟","幻境花海","风雷天煞","异界囚笼","五行奇门","离魂幻境","三界幻境","七星聚灵","六道轮回","九幽黄泉","雷霆万钧","紫电连环","五行轮回"],h=["大阵","杀阵","剑阵","阵","幻阵","灵阵","灭阵","神阵","煞阵"];var d=a(678),m=a(674),p={name:"createBaby",components:{tipCom:d.default},computed:{tongjiData:()=>localStorage.getItem("tongjiData")},data:()=>({rareType:[{value:"0",text:"功法秘籍"},{value:"1",text:"招式战技"},{value:"2",text:"法宝兵器"},{value:"3",text:"丹药"},{value:"4",text:"阵法"}],rareNameForm:{radio:"0"},rareNameEnd:[],choiceName:""}),created(){this.rareficTitle()},methods:{copyAndChoice(t){this.choiceName=t,Object(m.a)(t).then(()=>{this.$message.success("复制成功！")}).catch(()=>{this.$message.error("点击复制失败，请手动复制！")})},rareficTitle(){switch(this.rareNameEnd=[],this.rareNameForm.radio){case"0":this.timer(i,s,40);break;case"1":this.timer(r,n,40);break;case"2":this.timer(o,c,40);break;case"3":this.timer(l,[],40);break;case"4":this.timer(u,h,40)}},searchFun(t,e){let a=t[Math.round(Math.random()*t.length)],i="";0!==e.length&&(i=e[Math.round(Math.random()*e.length)]);let s=a+i;a&&void 0!==i&&this.rareNameEnd.push(s)},timer(t,e,a){for(var i=0;i<a;i++)this.searchFun(t,e)}}},v=(a(783),a(784),a(46)),f=Object(v.a)(p,(function(){var t=this,e=t._self._c;return e("div",[e("tipCom"),t._v(" "),e("div",{staticStyle:{display:"flex",position:"relative"}},[e("h2",{staticStyle:{margin:"16px 0"}},[t._v("秘籍法宝生成")]),t._v(" "),e("di",{staticStyle:{color:"#6ac044",position:"absolute",top:"24px",left:"158px"}},[t._v("「 浏览量："+t._s(t.tongjiData)+" 」")])],1),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"left"},[e("div",{staticClass:"searchCon radioGroup"},[[t._l(t.rareType,(function(a,i){return e("el-radio",{key:i,attrs:{label:a.value},model:{value:t.rareNameForm.radio,callback:function(e){t.$set(t.rareNameForm,"radio",e)},expression:"rareNameForm.radio"}},[t._v("\n          "+t._s(a.text)+"\n          ")])})),t._v(" "),e("el-button",{attrs:{size:"small",type:"success"},on:{click:t.rareficTitle}},[t._v("随机生成")])]],2)]),t._v(" "),e("hr",{staticStyle:{margin:"24px 0 32px 0"}}),t._v(" "),e("div",{staticClass:"right"},t._l(t.rareNameEnd,(function(a,i){return e("span",{key:i,class:a==t.choiceName?"choiceSty nameSty":"nameSty",on:{click:function(e){return t.copyAndChoice(a)}}},[t._v(t._s(a))])})),0)])],1)}),[],!1,null,"74c4d762",null);e.default=f.exports}}]);