"use strict";

const questions = [
  {
    title:"前衛が外へ寄った",
    tactic:[0,"深いクロスで後衛を下げる"],
    positions:[[.62,.86],[.25,.65],[.83,.36],[.18,.02]],
    hits:[[.71,.99],[.23,.02],[.25,.65],[.82,.38]],
    bounces:[[.26,.09],[.25,.57],null,[.66,.73]],
    strokes:["drive","slice","volley","volley"], hitters:[0,3,1,2],
    area:[.34,.07,.66,.39], name:"センターの深め",
    reason:"相手前衛が右に寄り、後衛は左にいます。二人の間を深く通すと、前衛の届く範囲を外しながら、後衛を走らせられます。"
  },
  {
    title:"二人ともネットに詰めた",
    tactic:[3,"前衛の深いボレーで後衛を押す"],
    positions:[[.25,.91],[.77,.77],[.24,.34],[.74,.32]],
    hits:[[.34,.97],[.21,.42],[.70,.73],[.75,.34]],
    bounces:[[.22,.40],null,null,[.30,.81]],
    strokes:["drive","volley","volley","volley"], hitters:[0,2,1,3],
    area:[.07,0,.39,.17], name:"左奥へのロブ",
    reason:"相手二人がネット近くにいて、その背後が空いています。左の前衛の頭上を越えるロブで、相手をベースライン方向へ下げられます。"
  },
  {
    title:"浅い返球で前に入れた",
    tactic:[2,"ロブで前衛の頭上を越す"],
    positions:[[.50,.64],[.20,.65],[.21,.30],[.48,.035]],
    hits:[[.59,.96],[.72,.04],[.21,.65],[.50,.04]],
    bounces:[[.72,.09],null,[.49,.095],[.51,.60]],
    strokes:["drive","drive","lob","slice"], hitters:[0,3,1,3],
    area:[.68,.22,.98,.49], name:"右のショートクロス",
    reason:"浅い返球に前へ入れたので、右のサービスボックス外側へ角度をつけられます。奥にいる相手を前方かつ外側へ走らせる狙いです。"
  },
  {
    title:"前衛に詰められた",
    tactic:[3,"相手前衛が足元へ低くボレー"],
    positions:[[.79,.75],[.22,.72],[.30,.11],[.74,.40]],
    hits:[[.72,.93],[.27,.09],[.22,.72],[.74,.40]],
    bounces:[[.31,.15],null,null,[.77,.64]],
    strokes:["drive","slice","volley","volley"], hitters:[0,2,1,3],
    area:[.59,.39,.92,.50], name:"右前衛の足元",
    reason:"右の前衛が近くまで詰めています。ネットを越えて足元に沈めれば、相手は低い打点で持ち上げる必要があり、強いボレーを打ちにくくなります。"
  },
  {
    title:"外に追い出された",
    tactic:[3,"相手が深い打球で外へ追い出す"],
    positions:[[.98,.99],[.34,.71],[.22,.35],[.85,.025]],
    hits:[[.74,.93],[.28,.04],[.36,.71],[.85,.025]],
    bounces:[[.29,.12],[.33,.64],[.84,.08],[.93,.82]],
    strokes:["drive","slice","lob","drive"], hitters:[0,2,1,3],
    area:[.62,.03,.95,.24], name:"右奥へ深く",
    reason:"右の外側で体勢を崩しています。自分から見て右奥へ深く返すと、左前衛の守備範囲を避けつつ、相手後衛を奥にとどめて戻る時間を作れます。"
  },
  {
    title:"静止した前衛の横を避ける",
    tactic:[0,"前衛を避けてクロスへ深く"],
    positions:[[.78,.82],[.26,.62],[.79,.33],[.57,.07]],
    hits:[[.27,.92],[.56,.04],[.24,.62],[.55,.09]],
    bounces:[[.52,.10],[.27,.57],[.55,.13],[.76,.72]],
    strokes:["drive","slice","lob","drive"], hitters:[0,3,1,3],
    area:[.14,.04,.38,.21], name:"左奥へクロス",
    reason:"右前衛が正面をふさいでいます。左奥へのクロスなら前衛を避けながら、低いネット中央付近を通して深さを出せます。"
  },
  {
    title:"ポーチでストレートが空いた",
    tactic:[3,"相手前衛が中央にポーチ"],
    positionsByShot:{0:{2:[.82,.35]},1:{2:[.82,.35]},2:{2:[.69,.36]}},
    positions:[[.76,.82],[.24,.62],[.53,.36],[.24,.11]],
    hits:[[.75,.91],[.18,.06],[.24,.62],[.53,.36]],
    bounces:[[.22,.12],null,null,[.76,.74]],
    strokes:["drive","drive","volley","volley"], hitters:[0,3,1,2],
    area:[.78,.08,.96,.36], name:"右のストレート",
    reason:"右の前衛がポーチを狙って中央へ動き、右のサイドライン側が空きました。打点に余裕があるので、その空いた通路へ打てます。"
  },
  {
    title:"低いボレーを拾う",
    tactic:[3,"前衛の低いボレーで打点を下げる"],
    receiveHeight:4,
    positions:[[.40,.67],[.80,.72],[.46,.36],[.80,.10]],
    hits:[[.34,.90],[.78,.06],[.81,.73],[.46,.35]],
    bounces:[[.76,.13],[.82,.65],null,null],
    strokes:["drive","slice","drive","volley"], hitters:[0,3,1,2],
    area:[.33,.37,.57,.50], name:"正面の前衛の足元",
    reason:"低い打点では強打すると浮きやすくなります。正面の前衛の足元へ低く返せば、次のボレーを持ち上げさせられます。"
  },
  {
    title:"高いボレーを打てる",
    tactic:[2,"味方が前衛の足元へ沈める"],
    receiveHeight:19,
    positions:[[.58,.57],[.21,.66],[.21,.35],[.49,.12]],
    hits:[[.52,.75],[.43,.04],[.23,.65],[.20,.34]],
    bounces:[[.46,.11],null,[.20,.40],null],
    strokes:["drive","drive","volley","volley"], hitters:[0,3,1,2],
    area:[.71,.24,.94,.41], name:"右の空いたサービスボックス",
    reason:"ネットに近い高めの打点からなら、右へ角度をつけて落とせます。左の前衛も奥の後衛も、ここへは横に走る必要があります。"
  },
  {
    title:"ロブで二人の頭上を越える",
    tactic:[3,"相手前衛が深くボレーして押す"],
    positions:[[.36,.89],[.75,.67],[.30,.37],[.70,.32]],
    hits:[[.37,.96],[.26,.40],[.76,.68],[.70,.32]],
    bounces:[[.25,.43],null,null,[.37,.81]],
    strokes:["drive","volley","drive","volley"], hitters:[0,2,1,3],
    area:[.35,.02,.65,.16], name:"二人の間を越すセンターロブ",
    reason:"相手二人が左右のネット近くを守っています。二人の間を高さで越えて中央深くへ落とせば、左右のラインに余裕を取りながら相手を下げられます。"
  },
  {
    title:"後衛が外側へ走らされた",
    tactic:[2,"角度をつけて後衛を外へ動かす"],
    positions:[[.33,.69],[.71,.60],[.19,.35],[.94,.09]],
    hits:[[.33,.90],[.82,.08],[.71,.59],[.94,.09]],
    bounces:[[.80,.13],null,[.89,.14],[.34,.62]],
    strokes:["drive","drive","volley","slice"], hitters:[0,3,1,3],
    area:[.39,.06,.64,.24], name:"空いた中央を深く",
    reason:"後衛が右外側へ走り、前衛は左にいます。二人から離れた中央を深く狙うと、サイドラインの近くを狙わずに広い空きを使えます。"
  },
  {
    title:"ベースラインの後ろまで下げられた",
    tactic:[3,"深いロブでベースラインの後ろへ"],
    positions:[[.24,1.04],[.72,.73],[.24,.33],[.75,.04]],
    hits:[[.28,.91],[.76,.03],[.70,.72],[.75,.04]],
    bounces:[[.73,.08],[.71,.66],[.75,.09],[.27,.91]],
    strokes:["drive","drive","drive","lob"], hitters:[0,3,1,3],
    area:[.54,.04,.83,.19], name:"クロス側の深いエリア",
    reason:"打点がベースラインの後ろになり、戻る時間が必要です。右奥への深いクロスは正面の前衛を避けやすく、相手後衛の打点を奥に保てます。"
  },
  {
    title:"二人が下がって前が空いた",
    tactic:[2,"ロブで前衛を奥へ下げる"],
    positionsByShot:{0:{2:[.26,.36]},1:{2:[.26,.36]},2:{2:[.26,.36]}},
    positions:[[.57,.61],[.22,.66],[.25,.13],[.74,.06]],
    hits:[[.61,.93],[.75,.045],[.24,.68],[.25,.13]],
    bounces:[[.77,.11],null,[.24,.17],[.55,.57]],
    strokes:["drive","drive","lob","slice"], hitters:[0,3,1,2],
    area:[.54,.39,.76,.49], name:"右のネット際へドロップ",
    reason:"相手二人が奥にいて、自分はサービスラインより前で触れます。右のネット際に短く落とすと、近い側の相手でも前へ長く走らなければ届きません。"
  },
  {
    title:"ロブが浅くスマッシュできる",
    tactic:[3,"相手が前衛の頭上をロブで狙う"],
    receiveHeight:27,
    positions:[[.49,.59],[.76,.72],[.30,.17],[.71,.18]],
    hits:[[.51,.82],[.32,.14],[.75,.72],[.70,.18]],
    bounces:[[.33,.20],[.74,.65],[.70,.22],null],
    strokes:["drive","drive","drive","lob"], hitters:[0,2,1,3],
    area:[.35,.31,.63,.47], name:"二人の間へスマッシュ",
    reason:"浅いロブを頭上でとらえられます。二人の間の広いエリアへ打ち下ろすと、ライン際を狙うより余裕があり、二人とも横に動いて拾う必要があります。"
  },
  {
    title:"深いクロスで味方前衛を生かす",
    tactic:[0,"深いクロスで後衛を奥に固定する"],
    positions:[[.24,.88],[.73,.61],[.29,.34],[.65,.11]],
    hits:[[.29,.91],[.74,.05],[.72,.65],[.66,.12]],
    bounces:[[.72,.11],null,[.69,.17],[.25,.79]],
    strokes:["drive","drive","volley","drive"], hitters:[0,3,1,3],
    area:[.76,.025,.94,.18], name:"右奥へ深いクロス",
    reason:"右奥に深く打つと、相手後衛を外へ動かせます。相手の返球が中央へ来れば、ネット近くにいる味方がポーチに出やすくなります。"
  },
  {
    title:"味方のポーチが足元に決まった",
    positions:[[.64,.73],[.53,.59],[.28,.32],[.77,.40]],
    hits:[[.73,.93],[.24,.045],[.53,.59],[.77,.39]],
    bounces:[[.27,.11],null,[.76,.45],null],
    strokes:["drive","drive","volley","volley"], hitters:[0,3,1,3],
    positionsByShot:{0:{1:[.76,.65]},1:{1:[.73,.61]}},
    tactic:[2,"味方がポーチして前衛の足元へ"],
    receiveHeight:18,
    area:[.38,.25,.64,.40], name:"高いボレーを二人の間へ",
    reason:"味方が中央の返球をポーチして足元に沈めたため、相手のボレーが浮きました。高い打点から二人の間へ打ち込むと、左右どちらの相手にも距離があります。"
  },
  {
    title:"ロブを追う味方と左右を交代した",
    positions:[[.27,.78],[.76,1.02],[.73,.33],[.28,.31]],
    hits:[[.76,.93],[.22,.10],[.78,1.01],[.28,.31]],
    bounces:[[.22,.16],[.77,.91],null,[.29,.70]],
    strokes:["drive","lob","drive","volley"], hitters:[0,3,1,3],
    positionsByShot:{0:{1:[.38,.63]},1:{0:[.76,.70],1:[.39,.63]},2:{0:[.25,.76]}},
    tactic:[1,"相手が前衛の頭上をロブで越す"],
    area:[.63,.02,.89,.16], name:"右の前衛の頭上を越す深いロブ",
    reason:"右前衛に入った自分の頭を越えたロブを味方が拾い、自分は左を守りました。相手二人がネット近くまで進んでいるため、右の前衛の頭上へ深く上げると陣形を立て直す時間ができます。"
  },
  {
    title:"二人で前へ詰め、浮いた球を迎えた",
    positions:[[.71,.59],[.35,.64],[.29,.14],[.75,.14]],
    hits:[[.68,.94],[.30,.11],[.35,.68],[.74,.13]],
    bounces:[[.31,.15],null,[.73,.19],null],
    strokes:["drive","slice","volley","lob"], hitters:[0,2,1,3],
    positionsByShot:{0:{1:[.34,.83]},1:{0:[.65,.80],1:[.35,.75]},2:{0:[.70,.68]}},
    tactic:[0,"深いアプローチに続いて二人で前進"],
    receiveHeight:22,
    area:[.37,.20,.62,.36], name:"中央へ打ち下ろす",
    reason:"深いアプローチで相手を奥に残し、二人で前に入りました。高い打点から中央へ打ち下ろせば、相手二人の間にある広い空きを使えます。"
  },
  {
    title:"足元への一球で相手のボレーが浮いた",
    positions:[[.32,.69],[.76,.68],[.26,.42],[.82,.07]],
    hits:[[.30,.94],[.79,.06],[.75,.69],[.26,.41]],
    bounces:[[.78,.12],[.75,.60],[.28,.46],null],
    strokes:["drive","slice","drive","volley"], hitters:[0,3,1,2],
    tactic:[2,"詰めた前衛の足元へ沈める"],
    receiveHeight:17,
    area:[.08,.045,.30,.20], name:"前衛の脇から左奥へ抜く",
    reason:"味方が前衛の足元に沈めたので、返球が浮きました。左奥を狙えば、前衛を抜いた後も右奥の後衛から距離を取れます。"
  },
  {
    title:"クロスを続けて相手をワイドへ動かした",
    positions:[[.30,.85],[.72,.59],[.24,.35],[.99,.10]],
    hits:[[.28,.92],[.81,.08],[.32,.88],[.99,.09]],
    bounces:[[.78,.13],[.32,.79],[.91,.14],[.32,.74]],
    strokes:["drive","drive","drive","slice"], hitters:[0,3,0,3],
    tactic:[2,"クロスを続けて後衛を外に追い出す"],
    area:[.46,.045,.68,.20], name:"空いた中央を深く",
    reason:"二本目のクロスで相手後衛が右のコート外近くまで動きました。正面の前衛にも届きにくい中央奥へ返すと、無理にライン際を狙わずに空きを使えます。"
  },
  {
    title:"センターを通して二人を内側へ寄せた",
    positions:[[.73,.61],[.29,.64],[.45,.39],[.56,.37]],
    hits:[[.73,.91],[.68,.35],[.29,.66],[.54,.40]],
    bounces:[null,null,null,null],
    strokes:["drive","volley","volley","volley"], hitters:[0,3,1,3],
    positionsByShot:{0:{2:[.23,.39]},1:{2:[.28,.39]},2:{2:[.36,.39]}},
    tactic:[2,"二人の間へ打ち、守備を中央に寄せる"],
    receiveHeight:17,
    area:[.76,.27,.96,.44], name:"右の空きへ短く角度をつける",
    reason:"センターへのボレーで相手二人が内側へ寄りました。ネット近くの高い打点なら、空いた右へ短く角度をつけられます。"
  },
  {
    title:"相手がストレートを警戒し始めた",
    positionsByShot:{0:{2:[.46,.33]},2:{2:[.17,.33]}},
    positions:[[.30,.84],[.74,.62],[.10,.33],[.68,.11]],
    hits:[[.29,.91],[.26,.33],[.73,.64],[.69,.11]],
    bounces:[null,null,[.67,.17],[.28,.77]],
    strokes:["drive","volley","volley","drive"], hitters:[0,2,1,3],
    tactic:[0,"前衛の脇を狙い、ストレートを意識させる"],
    area:[.70,.035,.90,.16], name:"空いたクロスへ深く",
    reason:"ストレートを一度見せたため、前衛が左のライン側を警戒しています。今度は低いネット中央を通すクロスで、右奥を深く押せます。"
  },
  {
    title:"角度のついたボレーに走らされた",
    positions:[[.98,.72],[.39,.65],[.65,.40],[.23,.11]],
    hits:[[.70,.90],[.24,.08],[.39,.66],[.65,.39]],
    bounces:[[.27,.13],null,null,[.91,.66]],
    strokes:["drive","drive","volley","volley"], hitters:[0,3,1,2],
    tactic:[3,"相手がボレーで角度をつける"],
    area:[.63,.03,.87,.17], name:"前衛の頭上を越す右奥ロブ",
    reason:"短い角度で外へ走らされ、自分の打点が低くなりました。右前衛の頭上を越すロブなら、強打が難しい体勢からでも戻る時間を作れます。"
  },
  {
    title:"味方が押し込まれて浮かせた",
    positions:[[.52,.78],[.15,.99],[.31,.36],[.72,.40]],
    hits:[[.56,.94],[.36,.36],[.16,1.00],[.71,.39]],
    bounces:[null,[.19,.90],null,[.52,.69]],
    strokes:["drive","volley","lob","volley"], hitters:[0,2,1,3],
    positionsByShot:{0:{0:[.56,.94]},1:{0:[.57,.73]},2:{0:[.53,.76]}},
    tactic:[1,"相手が深いボレーで後衛を下げる"],
    area:[.36,.025,.65,.17], name:"二人の頭上を中央深くへ",
    reason:"味方は深いボレーでベースライン付近まで押され、浅いロブを叩かれました。次は二人の頭上を越す高さと深さを取り、守備の位置に戻る時間を作ります。"
  },
  {
    title:"右へ寄った二人を逆に動かす",
    positions:[[.53,.64],[.19,.67],[.62,.35],[.89,.11]],
    hits:[[.24,.92],[.69,.07],[.19,.67],[.88,.11]],
    bounces:[[.66,.12],null,[.86,.16],[.53,.60]],
    strokes:["drive","drive","volley","slice"], hitters:[0,3,1,3],
    tactic:[2,"ワイドへボレーし後衛を外に動かす"],
    area:[.12,.22,.34,.40], name:"広く空いた左へ短く打つ",
    reason:"味方が右へ角度をつけたことで後衛が右外側へ走り、前衛も右に寄っています。自分は前に入れているので、左の空きへ短く落として逆方向に走らせられます。"
  },
  {
    title:"同じサイドを二人で守らせた",
    positions:[[.80,.72],[.28,.60],[.22,.38],[.35,.11]],
    hits:[[.79,.91],[.34,.10],[.27,.63],[.22,.37]],
    bounces:[[.37,.15],null,null,[.79,.65]],
    strokes:["drive","drive","volley","volley"], hitters:[0,3,1,2],
    tactic:[2,"味方が前衛の近くへ低いボレー"],
    area:[.65,.12,.89,.30], name:"二人から離れた右の空き",
    reason:"前衛が味方の低いボレーを拾い、後衛も左に残りました。右へ打てば、二人とも横移動が必要で、ラインからも余裕を取れます。"
  },
  {
    title:"深いロブで前衛を下げ、前の空きを作った",
    positions:[[.27,.62],[.71,.63],[.23,.06],[.77,.16]],
    hits:[[.24,.91],[.76,.13],[.71,.65],[.23,.06]],
    bounces:[[.74,.18],null,[.25,.13],[.28,.58]],
    strokes:["drive","drive","lob","slice"], hitters:[0,3,1,2],
    positionsByShot:{0:{2:[.24,.36]},1:{2:[.24,.36]},2:{2:[.24,.35]}},
    tactic:[2,"味方が前衛の頭上へ深いロブ"],
    area:[.43,.38,.63,.49], name:"中央のネット際へ短く",
    reason:"ロブを追った前衛がベースライン近くまで下がり、相手二人が奥にいます。浅い返球に前へ入れたので、中央のネット際に落として前へ走らせられます。"
  },
  {
    title:"前衛の横を抜く前に足元で崩す",
    positionsByShot:{0:{2:[.84,.40]},1:{2:[.84,.40]},2:{2:[.83,.40]}},
    positions:[[.72,.68],[.31,.66],[.73,.42],[.24,.10]],
    hits:[[.66,.91],[.25,.07],[.29,.66],[.73,.41]],
    bounces:[[.27,.12],[.28,.58],[.69,.46],null],
    strokes:["drive","slice","drive","volley"], hitters:[0,3,1,2],
    receiveHeight:16,
    tactic:[2,"低い一球を前衛の足元に落とす"],
    area:[.86,.13,.98,.39], name:"前衛の外側へストレート",
    reason:"足元の球を拾った前衛が少し内側に寄り、返球も浮きました。次の打球は高い位置で取れるので、前衛の外側にできたストレートの通路を使えます。"
  },
  {
    title:"二人がネットに出てセンターを空けた",
    positions:[[.46,.86],[.76,.70],[.19,.39],[.83,.39]],
    hits:[[.45,.92],[.21,.37],[.75,.71],[.83,.39]],
    bounces:[null,[.76,.66],null,[.46,.77]],
    strokes:["drive","volley","drive","volley"], hitters:[0,2,1,3],
    positionsByShot:{0:{3:[.84,.12]},1:{3:[.84,.18]},2:{3:[.84,.31]}},
    tactic:[1,"短いボレーに合わせてもう一人も前進"],
    area:[.40,.17,.60,.34], name:"左右に開いた二人の間へ",
    reason:"相手二人がネットに出た後も左右に開いているので、中央に大きな通路があります。二人の間を低く通せば、どちらも横に動きながらボレーすることになります。"
  },
  {
    title:"中央を守った前衛の背後を使う",
    positions:[[.23,.86],[.69,.65],[.46,.36],[.77,.08]],
    hits:[[.26,.92],[.76,.05],[.69,.64],[.47,.35]],
    bounces:[[.73,.11],null,null,[.25,.76]],
    strokes:["drive","drive","volley","volley"], hitters:[0,3,1,2],
    positionsByShot:{0:{2:[.22,.34]},1:{2:[.24,.34]},2:{2:[.33,.35]}},
    tactic:[3,"相手前衛が中央へポーチ"],
    area:[.09,.02,.30,.16], name:"ポーチした前衛の左後方へ深いロブ",
    reason:"前衛が中央へ動いてボレーしたため、元の左側の後方が空いています。そこへ深く上げると、右奥にいる後衛にも長い横移動をさせられます。"
  },
  {
    title:"ワイドサーブでリターナーが外へ",
    positions:[[.72,.91],[.30,.63],[.10,.08],[.68,.36]],
    hits:[[.70,1.02],[.10,.09],[.27,.64],[.15,.10]],
    bounces:[[.16,.33],null,[.14,.16],[.68,.77]],
    strokes:["serve","drive","volley","drive"], hitters:[0,2,1,2],
    tactic:[0,"ワイドサーブでリターナーを外へ動かす"],
    area:[.36,.045,.57,.22], name:"リターナーが空けた中央奥",
    reason:"ワイドサーブから相手後衛を左外側に留め、相手前衛は右にいます。中央を深く使うと、サイドライン際を狙わずに相手後衛を横へ走らせられます。"
  },
  {
    title:"センターへのサーブで返球の角度を抑えた",
    positions:[[.34,.82],[.55,.59],[.82,.39],[.55,.06]],
    hits:[[.32,1.02],[.56,.06],[.55,.60],[.82,.39]],
    bounces:[[.55,.28],null,null,[.35,.75]],
    strokes:["serve","drive","volley","volley"], hitters:[0,3,1,2],
    positionsByShot:{0:{1:[.75,.62]},1:{1:[.69,.61]}},
    tactic:[2,"センターへのサーブから味方がポーチ"],
    area:[.10,.06,.33,.26], name:"空いた左へ深く",
    reason:"センターへのサーブでリターンの角度を抑え、味方が中央に出ました。相手前衛は右にいて後衛も中央寄りなので、無理なく振れるなら左の空きに深く返せます。"
  },
  {
    title:"ワイドサーブの次も外へ振られた",
    positions:[[.13,.93],[.72,.66],[.28,.36],[.76,.11]],
    hits:[[.72,-.02],[.14,.95],[.75,.12]],
    bounces:[[.15,.69],[.72,.16],[.17,.80]],
    strokes:["serve","drive","drive"], hitters:[3,0,3],
    tactic:[1,"ワイドサーブに深いクロスで返す"],
    area:[.59,.04,.83,.19], name:"クロスへ深くつなぐ",
    reason:"ワイドサーブを受けたあとも、体勢は外側のままです。正面の前衛を避けてクロスへつなぐと、ネットの低い中央付近を通せて、戻る時間も作れます。"
  },
  {
    title:"甘いセカンドから前へ入った",
    positions:[[.23,.66],[.73,.62],[.20,.39],[.76,.12]],
    hits:[[.75,-.02],[.24,.85],[.76,.12]],
    bounces:[[.24,.61],[.74,.17],[.25,.61]],
    strokes:["serve","drive","slice"], hitters:[3,0,3],
    tactic:[1,"セカンドサーブを前で捉えて深く返す"],
    area:[.64,.05,.88,.22], name:"前衛を避け、後衛へもう一球深く",
    reason:"前へ踏み込んだリターンで後衛を奥に押し込み、浅い球が返りました。左前衛には触らせず、右奥にもう一球深く返してから次のボレーに備えます。"
  },
  {
    title:"サーブ＆ボレーの初球が足元に来た",
    positions:[[.68,.74],[.30,.61],[.23,.085],[.76,.38]],
    hits:[[.70,1.02],[.23,.09],[.67,.77],[.76,.37]],
    bounces:[[.24,.31],[.66,.76],null,[.67,.72]],
    strokes:["serve","drive","volley","volley"], hitters:[0,2,0,3],
    tactic:[1,"リターナーが前進するサーバーの足元へ"],
    receiveHeight:5,
    area:[.66,.39,.84,.49], name:"詰めた前衛へ低く返す",
    reason:"サーブのあと足元を狙われ、次の返球も低くなりました。低い打点からは強打よりも前衛の足元へ丁寧に返すほうが、高い打点で叩かれにくくなります。"
  },
  {
    title:"前に出るサーバーが低い球を拾った",
    positions:[[.31,.80],[.74,.65],[.24,.37],[.65,.26]],
    hits:[[.70,-.02],[.30,.86],[.65,.25]],
    bounces:[[.29,.63],[.64,.22],[.30,.75]],
    strokes:["serve","slice","volley"], hitters:[3,0,3],
    tactic:[1,"低いクロスリターンをサーバーの足元へ"],
    positionsByShot:{1:{3:[.70,.07]}},
    area:[.40,.18,.54,.34], name:"二人の間へ低く通す",
    reason:"クロスリターンを低く返したため、前進したサーバーがボレーを持ち上げました。左前衛と右のサーバーがまだ離れているので、二人の間を狙います。"
  },
  {
    title:"強いリターンに備えて二人で下がった",
    positions:[[.34,.91],[.70,.95],[.34,.37],[.66,.39]],
    hits:[[.35,1.02],[.74,.10],[.70,.94],[.66,.39]],
    bounces:[[.76,.33],[.70,.83],null,[.35,.82]],
    strokes:["serve","drive","drive","volley"], hitters:[0,3,1,3],
    positionsByShot:{0:{1:[.69,.64],2:[.34,.47]},1:{1:[.70,.82],2:[.34,.43]},2:{3:[.70,.21]}},
    tactic:[1,"強い返球に備え、味方も後ろで守る"],
    area:[.36,.025,.65,.15], name:"二人の頭上を越える深いロブ",
    reason:"強いリターンを受けて二人とも後ろで守り、相手が二人で前に来ました。中央奥へ深いロブを上げると、サイドアウトの余裕を取りながら相手を下げられます。"
  },
  {
    title:"前衛が飛び出すふりをした",
    positions:[[.71,.86],[.21,.65],[.76,.36],[.24,.08]],
    hits:[[.69,.93],[.25,.09],[.24,.65],[.23,.08]],
    bounces:[[.27,.14],null,[.25,.15],[.70,.79]],
    strokes:["drive","drive","volley","drive"], hitters:[0,3,1,3],
    positionsByShot:{0:{2:[.77,.36]},1:{2:[.61,.36]},2:{2:[.77,.36]}},
    tactic:[1,"相手前衛がポーチを見せて元の位置へ"],
    area:[.18,.04,.41,.20], name:"前衛から離れた左のクロス",
    reason:"相手前衛は中央をうかがったあと右へ戻りました。戻った位置を確認できたら、右のストレートは避け、左奥へのクロスでラリーを続けやすくします。"
  },
  {
    title:"味方がポーチした側を自分がカバーした",
    positions:[[.79,.78],[.47,.60],[.22,.36],[.74,.10]],
    hits:[[.31,.95],[.73,.08],[.46,.60],[.73,.09]],
    bounces:[[.74,.14],null,[.72,.16],[.78,.69]],
    strokes:["drive","drive","volley","drive"], hitters:[0,3,1,3],
    positionsByShot:{0:{1:[.76,.62]},1:{1:[.71,.61]},2:{0:[.57,.80]}},
    tactic:[2,"味方のポーチに合わせて空いた右をカバー"],
    area:[.38,.055,.58,.22], name:"サイドを狙いすぎず中央奥へ",
    reason:"味方がポーチした後、空いた右へ移動したことで返球に届きました。移動直後は広い中央奥を狙うと、ラインの余裕を取りながら二人の陣形を保てます。"
  },
  {
    title:"ロブを前衛が無理なく見送った",
    positions:[[.74,1.015],[.28,.61],[.25,.41],[.76,.32]],
    hits:[[.72,.91],[.24,.09],[.27,.63],[.76,.32]],
    bounces:[[.26,.15],null,null,[.73,.94]],
    strokes:["drive","drive","volley","lob"], hitters:[0,2,1,3],
    positionsByShot:{0:{1:[.70,.63]},1:{1:[.43,.64]},2:{0:[.74,.83]}},
    tactic:[3,"高いロブは奥にいる後衛が引き受ける"],
    area:[.10,.035,.32,.17], name:"左の前衛の頭上へ深く",
    reason:"無理なジャンプボレーをせず、奥の自分がロブをバウンド後に拾います。左の前衛の上を深く越すと、強打を急がずに守備位置を戻せます。"
  },
  {
    title:"低いアプローチで次のボレーを作った",
    positions:[[.27,.59],[.70,.65],[.70,.37],[.23,.045]],
    hits:[[.28,.83],[.24,.06],[.70,.65],[.23,.045]],
    bounces:[[.25,.12],null,[.26,.12],null],
    strokes:["slice","slice","volley","drive"], hitters:[0,3,1,3],
    positionsByShot:{1:{0:[.27,.71]},2:{0:[.28,.63]}},
    receiveHeight:17,
    tactic:[0,"低く深いアプローチの後で前へ出る"],
    area:[.38,.27,.56,.40], name:"高いボレーを二人の間へ",
    reason:"深いスライスで後衛を奥に留めたまま前へ入り、高く返った球を取れます。左右のラインを攻めすぎず、二人の間にボレーを落とせます。"
  },
  {
    title:"ボレーを深く入れてから短く使う",
    positions:[[.83,.64],[.37,.62],[.23,.10],[.77,.075]],
    hits:[[.84,.93],[.22,.08],[.38,.64],[.76,.075]],
    bounces:[[.23,.14],null,[.76,.13],[.82,.60]],
    strokes:["drive","drive","volley","slice"], hitters:[0,2,1,3],
    tactic:[2,"深いボレーで相手をベースライン側に留める"],
    area:[.41,.38,.64,.49], name:"中央のネット際へ短く",
    reason:"深いボレーで相手を後ろに留めたあと、自分は浅い返球を前で触れます。中央へ短く落とせば、ラインに余裕を取って相手を前へ走らせられます。"
  },
  {
    title:"二人でネットを守り、低いボレーを受けた",
    positions:[[.29,.69],[.70,.66],[.30,.38],[.75,.36]],
    hits:[[.30,.87],[.28,.39],[.68,.65],[.75,.36]],
    bounces:[null,null,null,null],
    strokes:["drive","volley","volley","volley"], hitters:[0,2,1,3],
    receiveHeight:4,
    tactic:[2,"味方と高さをそろえて前で守る"],
    area:[.26,.40,.40,.49], name:"左前衛の足元に沈める",
    reason:"二人とも前にいますが、自分の打点は低くなりました。正面付近の前衛の足元に沈めて持ち上げさせると、味方も次の球を前で待てます。"
  },
  {
    title:"クロスのボレー交換でネット中央が空いた",
    positions:[[.63,.61],[.25,.65],[.20,.35],[.79,.34]],
    hits:[[.33,.82],[.79,.35],[.25,.65],[.20,.35]],
    bounces:[null,null,null,null],
    strokes:["drive","volley","volley","volley"], hitters:[0,3,1,2],
    receiveHeight:16,
    tactic:[2,"ボレーを斜めに送り、相手を横へ動かす"],
    area:[.41,.26,.61,.41], name:"空いたセンターへ押す",
    reason:"ボレー交換で相手二人が左右に開きました。ネットより高い打点なら、相手の間を通すボレーで広いコースを使えます。"
  },
  {
    title:"前衛が動かなかったのでクロスに戻す",
    positions:[[.24,.87],[.72,.65],[.25,.34],[.76,.12]],
    hits:[[.25,.95],[.76,.07],[.22,.88],[.76,.12]],
    bounces:[[.73,.13],[.22,.80],[.75,.18],[.23,.78]],
    strokes:["drive","drive","drive","drive"], hitters:[0,3,0,3],
    tactic:[0,"雁行陣で前衛を避け、後衛同士でクロス"],
    area:[.64,.04,.86,.19], name:"足元まで深いクロス",
    reason:"左の前衛はストレートを守っていて、クロスの通り道が開いています。深さを優先してラリーをつなぐと、味方が甘い返球に反応してポーチする時間もできます。"
  },
  {
    title:"相手が前へ出た瞬間に守りのロブ",
    positions:[[.82,.99],[.35,.84],[.30,.33],[.82,.40]],
    hits:[[.80,.94],[.26,.36],[.34,.87],[.81,.39]],
    bounces:[null,[.34,.80],null,[.81,.89]],
    strokes:["drive","volley","drive","volley"], hitters:[0,2,1,3],
    positionsByShot:{0:{3:[.82,.10]},1:{3:[.82,.21]},2:{3:[.82,.34]}},
    tactic:[3,"相手が後ろから詰めて深くボレー"],
    area:[.70,.025,.91,.16], name:"詰めた右前衛の頭上へ",
    reason:"深いボレーに押され、相手は二人で前にいます。いま詰めた右前衛の後方に深くロブを送り、低い打点から強打するリスクを抑えます。"
  },
  {
    title:"足元へのリターンで前衛の次の仕事を作った",
    positions:[[.35,.67],[.62,.61],[.36,.31],[.76,.41]],
    hits:[[.74,-.02],[.31,.87],[.74,.39],[.62,.62],[.36,.31]],
    bounces:[[.30,.64],[.73,.43],null,null,null],
    strokes:["serve","drive","volley","volley","volley"], hitters:[3,0,3,1,2],
    positionsByShot:{1:{3:[.74,.11]},2:{1:[.73,.68]}},
    receiveHeight:16,
    tactic:[1,"前進するサーバーの足元へクロスリターン"],
    area:[.44,.16,.64,.30], name:"二人の間へ深めのボレー",
    reason:"リターンでサーバーの打点を下げたため、味方が浮いた初回ボレーに触れました。最後はサービスライン付近の中央に打ち、空いた二人の間を使います。"
  },
  {
    title:"相手二人の守備を深いセンターで崩す",
    positions:[[.60,.65],[.25,.62],[.29,.08],[.85,.055]],
    hits:[[.61,.90],[.30,.07],[.25,.62],[.83,.055]],
    bounces:[[.40,.12],null,[.79,.11],[.60,.61]],
    strokes:["drive","drive","volley","slice"], hitters:[0,2,1,3],
    tactic:[0,"中央を深く狙い、後衛の角度を抑える"],
    area:[.53,.39,.73,.49], name:"ネット際に短く落とす",
    reason:"先に深い球を使ったので、相手二人は奥に残っています。自分は前でバランスを取れているため、空いたネット際へ短く落とせます。"
  },
  {
    title:"味方がロブをカットして守備を切り替えた",
    positions:[[.72,.65],[.30,.72],[.26,.37],[.79,.11]],
    hits:[[.73,.94],[.77,.075],[.30,.71],[.27,.36]],
    bounces:[[.76,.13],null,null,[.72,.62]],
    strokes:["drive","lob","volley","volley"], hitters:[0,3,1,2],
    positionsByShot:{1:{1:[.29,.61]},2:{0:[.72,.73]}},
    tactic:[2,"味方が下がりながらロブをノーバウンドで処理"],
    area:[.42,.05,.63,.21], name:"奥の中央へ安全に運ぶ",
    reason:"味方がロブをカットできましたが、まだ体勢は整いきっていません。中央奥に余裕を持って運ぶと、相手前衛を避けながら味方が戻る時間を作れます。"
  },
  {
    title:"二人に挟まれた中央を低く通す",
    positions:[[.55,.77],[.21,.74],[.28,.41],[.71,.40]],
    hits:[[.54,.90],[.68,.35],[.24,.73],[.28,.40]],
    bounces:[null,[.24,.68],null,[.55,.71]],
    strokes:["drive","volley","drive","volley"], hitters:[0,3,1,2],
    tactic:[2,"相手の前進に合わせ、打球を低く保つ"],
    area:[.43,.23,.57,.40], name:"左右のボレーの間を低く",
    reason:"二人はネット近くにいますが、左右に間隔があります。ロブを上げにくい低めの打点でも、真ん中へ低く打つと二人の間を通すか、低いボレーを引き出せます。"
  }
];

const strokes = {
  serve:  {label:"サーブ",   color:"#cdbaff", flight:850, lift:14, rebound:13, carry:.76, drag:.22},
  drive:  {label:"ドライブ", color:"#ffe66d", flight:980, lift:22, rebound:12, carry:.80, drag:.24},
  volley: {label:"ボレー", color:"#ffb26e",   flight:700, lift:8,  rebound:7,  carry:.71, drag:.12},
  lob:    {label:"ロブ", color:"#76f4eb",     flight:1640,lift:54, rebound:17, carry:.65, drag:.08},
  slice:  {label:"スライス", color:"#ffa5e4", flight:1120,lift:13, rebound:3,  carry:.88, drag:.13}
};
const contactHeight = 9;

const get = id => document.getElementById(id);
const canvas = get("court");
const ctx = canvas.getContext("2d");
const width = 380;
const height = 400;
const playerNames = ["自","味","相","相"];
const project = ([x,y]) => [width/2+(x-.5)*width*.84*(.8+y*.25),height*(.115+.77*y)];
const mix = (a,b,t) => a.map((value,i) => value+(b[i]-value)*t);
const rectangle = ([x1,y1,x2,y2]) => [[x1,y1],[x2,y1],[x2,y2],[x1,y2]];
function shuffledQuestions() {
  const order = [...questions];
  for (let i = order.length-1; i>0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [order[i],order[j]] = [order[j],order[i]];
  }
  return order;
}

let questionOrder = shuffledQuestions();
let index = 0;
let score = 0;
let phase = "ready";
let frame = 0;
let choice = null;
let correct = false;
const question = () => questionOrder[index];

function path(points, close = false) {
  ctx.beginPath();
  points.map(project).forEach(([x,y],i) => i ? ctx.lineTo(x,y) : ctx.moveTo(x,y));
  if (close) ctx.closePath();
}

function line(a,b) {
  path([a,b]);
  ctx.stroke();
}

function box(bounds, fill, stroke) {
  path(rectangle(bounds),true);
  if (fill) {
    ctx.fillStyle = fill;
    ctx.fill();
  }
  if (stroke) {
    ctx.strokeStyle = stroke;
    ctx.stroke();
  }
}

function dot([x,y], radius, color, border) {
  ctx.beginPath();
  ctx.arc(x,y,radius,0,Math.PI*2);
  ctx.fillStyle = color;
  ctx.fill();
  if (border) {
    ctx.strokeStyle = border;
    ctx.stroke();
  }
}

function draw(players, ball, color, trail = [], hitter = -1, bounce = null) {
  ctx.setTransform(2,0,0,2,0,0);
  ctx.fillStyle = "#12231d";
  ctx.fillRect(0,0,width,height);
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#233a30";
  for (let x=10; x<width; x+=24) {
    ctx.beginPath();
    ctx.moveTo(x,0);
    ctx.lineTo(x,height);
    ctx.stroke();
  }
  for (let y=8; y<height; y+=24) {
    ctx.beginPath();
    ctx.moveTo(0,y);
    ctx.lineTo(width,y);
    ctx.stroke();
  }
  box([-.09,-.095,1.09,1.095],"#214739","#57826d");
  const turf = ctx.createLinearGradient(0,0,0,height);
  turf.addColorStop(0,"#2f6350");
  turf.addColorStop(1,"#3d765c");
  box([0,0,1,1],turf);
  for (let row=0; row<10; row+=2) box([0,row/10,1,(row+1)/10],"#ffffff08");
  ctx.lineWidth = 1.45;
  box([0,0,1,1],null,"#e2eedf");
  for (const x of [.125,.875]) line([x,0],[x,1]);
  for (const y of [.235,.765]) line([.125,y],[.875,y]);
  line([.5,.235],[.5,.765]);
  line([.5,0],[.5,.021]);
  line([.5,.979],[.5,1]);
  ctx.strokeStyle = "#17352b";
  ctx.lineWidth = 5;
  line([-.025,.506],[1.025,.506]);
  ctx.strokeStyle = "#eff7ea";
  ctx.lineWidth = 1.8;
  ctx.setLineDash([4,3]);
  line([-.025,.5],[1.025,.5]);
  ctx.setLineDash([]);
  for (const x of [-.03,1.03]) dot(project([x,.5]),2.6,"#eff7ea");
  ctx.font = "bold 10px sans-serif";
  ctx.fillStyle = "#bbd3c4";
  ctx.textAlign = "center";
  ctx.fillText("相手コート",width/2,19);
  ctx.fillText("自分たちのコート",width/2,height-9);

  if (phase === "answered") {
    ctx.lineWidth = 2;
    box(question().area,"#dcfa7952","#dbfa79");
  }
  if (trail.length > 1) {
    ctx.beginPath();
    trail.forEach(([x,y],i) => i ? ctx.lineTo(x,y) : ctx.moveTo(x,y));
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.strokeStyle = color+"c2";
    ctx.stroke();
  }
  if (bounce) dot(project(bounce),5,color+"35",color);
  players.forEach((position,i) => {
    const [x,y] = project(position);
    const color = i<2 ? "#8cd7ff" : "#ffad98";
    ctx.lineWidth = 1.4;
    if (hitter === i) dot([x,y],19,"#101a1650","#e6fc9b");
    dot([x,y+2],13,"#10251e90");
    dot([x,y],12,color,"#172a25");
    ctx.fillStyle = "#13251f";
    ctx.font = "bold 11px sans-serif";
    ctx.textBaseline = "middle";
    ctx.fillText(playerNames[i],x,y+.5);
    ctx.textBaseline = "alphabetic";
  });
  if (ball) {
    const {ground,height} = ball;
    dot(project(ground),height>25 ? 6 : 4,"#0c211c85");
    const position = ballScreen(ball);
    dot(position,8,color+"50");
    dot(position,4.5,color,"#12231d");
  }
  if (phase === "answered" && choice) {
    const [x,y] = project(choice);
    ctx.lineWidth = 2;
    dot([x,y],8,"#15241d",correct ? "#e6ff94" : "#ffad98");
    dot([x,y],3,"#fff");
  }
}

function toCourt(event) {
  const bounds = canvas.getBoundingClientRect();
  const y = ((event.clientY-bounds.top)*height/bounds.height/height-.115)/.77;
  const x = .5+((event.clientX-bounds.left)/bounds.width-.5)/(.84*(.80+y*.25));
  return [x,y];
}

function setTargets() {
  const targets = get("targets");
  targets.replaceChildren();
  const zones = [
    ["左奥",[0,0,.33,.21]],["中央奥",[.33,0,.67,.21]],["右奥",[.67,0,1,.21]],
    ["左手前",[0,.21,.33,.50]],["中央手前",[.33,.21,.67,.50]],["右手前",[.67,.21,1,.50]]
  ];
  for (const [label,[x1,y1,x2,y2]] of zones) {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-label",label);
    const [left,top] = project([x1,y1]);
    const [right,bottom] = project([x2,y2]);
    button.style.left = left/width*100+"%";
    button.style.top = top/height*100+"%";
    button.style.width = (right-left)/width*100+"%";
    button.style.height = (bottom-top)/height*100+"%";
    button.addEventListener("click",e => {
      if (!e.detail && !e.clientX && !e.clientY) answer([(x1+x2)/2,(y1+y2)/2]);
    });
    targets.append(button);
  }
  targets.hidden = true;
}

function updateScore() {
  get("count").textContent = "第 "+(index+1)+" 問 / "+questions.length;
  get("score").textContent = "正解 "+score+" 問";
  get("steps").replaceChildren(...questions.map((_,i) => {
    const step = document.createElement("i");
    step.className = i<index ? "done" : i===index ? "active" : "";
    return step;
  }));
}

function makeFrames() {
  const {positions,hits,hitters,positionsByShot} = question();
  return [...hits,positions[0]].map((hit,step) => positions.map((position,i) => {
    if (step === hits.length) return position;
    if (i === hitters[step]) return hit;
    if (positionsByShot?.[step]?.[i]) return positionsByShot[step][i];
    return [position[0],position[1]+(i<2 ? .015 : -.025)];
  }));
}

let firstCourtTap = null;

function reset() {
  firstCourtTap = null;
  cancelAnimationFrame(frame);
  phase = "ready";
  choice = null;
  get("feedback").hidden = true;
  get("targets").hidden = true;
  get("phase").textContent = "再生待ち";
  get("shot").textContent = question().hits.length+" 球";
  get("shot").style.color = "";
  get("heading").textContent = "まずはラリーを見よう";
  get("hint").textContent = "コート内を2回すばやくタップして再生。";
  get("replay").textContent = "ラリーを見る";
  updateScore();
  draw(makeFrames()[0],{ground:question().hits[0],height:contactHeight},strokes[question().strokes[0]].color,[],0);
}

function ballScreen({ground,height}) {
  const [x,y] = project(ground);
  return [x,y-height];
}

function makeShots() {
  const {positions,hits,bounces,strokes:types,receiveHeight = contactHeight} = question();
  const contacts = [...hits,positions[0]];
  let elapsed = 0;
  return hits.map((from,i) => {
    const to = contacts[i+1];
    const bounce = bounces[i];
    const profile = strokes[types[i]];
    const distance = (a,b) => {
      const [x,y] = project(a);
      const [u,v] = project(b);
      return Math.hypot(x-u,y-v);
    };
    const airDistance = distance(from,bounce ?? to);
    const returnDistance = bounce ? distance(bounce,to)/profile.carry : 0;
    const totalDistance = airDistance+returnDistance;
    const duration = profile.flight * (.55 + .45*Math.min(totalDistance/220,1.5));
    const endHeight = i === hits.length-1 ? receiveHeight : contactHeight;
    const shot = {from,to,bounce,profile,duration,endHeight,start:elapsed,pivot:airDistance/totalDistance};
    elapsed += duration;
    return shot;
  });
}

function ballAt({from,to,bounce,pivot,profile,endHeight},t) {
  const slowed = (u,drag) => u + drag*u*(1-u);
  if (bounce && t>=pivot) {
    const u = (t-pivot)/(1-pivot);
    // A skidding slice stays lower after the bounce.
    const height = profile.rebound<=3
      ? endHeight*u
      : endHeight*u+4*profile.rebound*u*(1-u);
    return {ground:mix(bounce,to,slowed(u,.19)),height};
  }
  const u = bounce ? t/pivot : t;
  const height = contactHeight*(1-u)+(bounce ? 0 : endHeight*u)+4*profile.lift*u*(1-u);
  return {ground:mix(from,bounce ?? to,slowed(u,profile.drag)),height};
}

function finalScene() {
  const {positions} = question();
  const shots = makeShots();
  const last = shots[shots.length-1];
  const trail = Array.from({length:37},(_,i) => ballScreen(ballAt(last,i/36)));
  draw(positions,ballAt(last,1),last.profile.color,trail,0,last.bounce);
}

function play(review = false) {
  if (review !== Boolean(choice)) return;
  cancelAnimationFrame(frame);
  firstCourtTap = null;
  phase = "playing";
  get("targets").hidden = true;
  get("phase").textContent = "ラリー再生中";
  get("heading").textContent = "ボールと4人の動きに注目";
  get("hint").textContent = review ? "回答したラリーを見直しています。" : "次はあなたが打つ番です。";
  get("replay").textContent = "最初から見る";
  const frames = makeFrames();
  const shots = makeShots();
  const last = shots[shots.length-1];
  let step = 0;
  let previous = null;
  let elapsed = -240;
  let speed = Number(get("speed").value);

  function tick(now) {
    if (previous !== null) elapsed += (now-previous)*speed;
    previous = now;
    speed = Number(get("speed").value);
    const playbackTime = Math.max(0,elapsed);
    if (playbackTime >= last.start+last.duration) {
      phase = review ? "answered" : "aim";
      get("phase").textContent = review ? "回答済み" : "打つ直前で停止";
      get("shot").textContent = "直前："+last.profile.label;
      get("shot").style.color = last.profile.color;
      get("heading").textContent = question().title;
      get("hint").textContent = review ? answerHint : "相手コートをタップして狙いを選ぼう。";
      get("targets").hidden = review;
      finalScene();
      return;
    }
    while (step+1<shots.length && playbackTime>=shots[step+1].start) step++;
    const [tacticShot,tacticText] = question().tactic;
    if (step>=tacticShot && get("hint").textContent !== tacticText) {
      get("hint").textContent = tacticText;
    }
    const shot = shots[step];
    const t = (playbackTime-shot.start)/shot.duration;
    const trail = Array.from({length:12},(_,i) => {
      const sample = Math.max(0,t-(11-i)*19/shot.duration);
      return ballScreen(ballAt(shot,sample));
    });
    const movingPlayers = frames[step].map((p,i) => mix(p,frames[step+1][i],t));
    const bounce = t>=shot.pivot && t<shot.pivot+180/shot.duration ? shot.bounce : null;
    const label = (step+1)+"/"+shots.length+" 球 · "+shot.profile.label;
    if (get("shot").textContent !== label) {
      get("shot").textContent = label;
      get("shot").style.color = shot.profile.color;
    }
    draw(movingPlayers,ballAt(shot,t),shot.profile.color,trail,t<.19 ? question().hitters[step] : -1,bounce);
    frame = requestAnimationFrame(tick);
  }

  frame = requestAnimationFrame(tick);
}

const answerHint = "緑の範囲が推奨エリア、丸印があなたの狙い。コート内をダブルタップで再生。";

function answer([x,y]) {
  if (phase !== "aim" || x<0 || x>1 || y<0 || y>.5) return;
  const {area,name,reason} = question();
  correct = x>=area[0] && x<=area[2] && y>=area[1] && y<=area[3];
  choice = [x,y];
  phase = "answered";
  if (correct) score++;
  const last = index === questions.length-1;
  get("targets").hidden = true;
  get("phase").textContent = "回答済み";
  get("heading").textContent = question().title;
  get("hint").textContent = answerHint;
  get("verdict").textContent = correct ? "正解" : "不正解";
  get("rally-tactic").textContent = "ラリーの定石　"+question().tactic[1];
  get("verdict").classList.toggle("miss",!correct);
  get("recommendation").textContent = "推奨エリア　"+name;
  get("reason").textContent = reason+(last ? " 全"+questions.length+"問中 "+score+" 問正解です。" : "");
  get("next").textContent = last ? "もう一度遊ぶ" : "次の問題";
  get("replay").hidden = true;
  get("feedback").hidden = false;
  updateScore();
  finalScene();
  get("feedback").scrollIntoView({block:"nearest"});
}

get("targets").addEventListener("click",event => {
  if (event.detail || event.clientX || event.clientY) answer(toCourt(event));
});
canvas.addEventListener("click",event => {
  if (phase === "aim") {
    answer(toCourt(event));
    return;
  }
  if (phase !== "ready" && phase !== "answered") return;

  const [x,y] = toCourt(event);
  if (x<0 || x>1 || y<0 || y>1) {
    firstCourtTap = null;
    return;
  }

  const {timeStamp,clientX,clientY} = event;
  if (firstCourtTap && timeStamp-firstCourtTap.timeStamp<=350 &&
      Math.hypot(clientX-firstCourtTap.clientX,clientY-firstCourtTap.clientY)<=32) {
    play(phase === "answered");
    return;
  }
  firstCourtTap = {timeStamp,clientX,clientY};
});
get("replay").addEventListener("click",() => play());
get("review").addEventListener("click",() => {
  play(true);
  get("game").scrollIntoView({block:"start"});
});
get("next").addEventListener("click",() => {
  index++;
  if (index === questions.length) {
    questionOrder = shuffledQuestions();
    index = 0;
    score = 0;
  }
  get("replay").hidden = false;
  reset();
  window.scrollTo(0,0);
  get("replay").focus({preventScroll:true});
});
for (const {label,color} of Object.values(strokes)) {
  const item = document.createElement("span");
  const swatch = document.createElement("i");
  swatch.style.backgroundColor = color;
  swatch.setAttribute("aria-hidden","true");
  item.append(swatch,label);
  get("stroke-legend").append(item);
}
setTargets();
reset();
