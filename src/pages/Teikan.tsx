import React from "react";
import {
  Gcontainer,
  syusidog_image,
  Gh1,
  greetingText,
  Gh2,
  textContainer,
  pagehead,
} from "../components/Teikan.module.scss";
import syusidog from "../images/定款-猫.webp";
import Layout from "../components/Layout";
import "@fontsource/noto-serif-jp";
import "@fontsource/noto-sans-jp";
import Scroll from "../components/Scroll";
import "gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css";
import type { HeadProps } from "gatsby"

const Teikan = () => {
  return (
    <>
      <Layout>
        <div className={Gcontainer}>
          <div className={pagehead}>
            <h1 className={Gh1}>定款</h1>
            <img
              src={syusidog}
              alt="NPO小動物疾患研究所の定款ページ、猫の写真"
              className={syusidog_image}
            />
          </div>
        </div>
        <div className={greetingText}>
          <h2 className={Gh2}>特定非営利活動法人 小動物疾患研究所 定款</h2>
          <div className={textContainer}>
            <aside>第１章 総則</aside>
            <p>
              （名称）
              <br />
              第１条 この法人は、特定非営利活動法人小動物疾患研究所という。
              <br />
              （事務所）
              <br />
              第２条
              この法人は、主たる事務所を東京都武蔵野市中町２丁目６番４号に置く。２
              この法人は、前項のほか、その他の事務所を埼玉県新座市前原４丁目１０番２１号に置く。
            </p>

            <aside>第２章 目的及び事業</aside>
            <p>
              （目的）
              <br />
              第３条
              この法人は広く一般の市民に対し、獣医師・獣医系大学・獣医関係学会・その他獣医関係諸団体と連携して、小動物の疾患に対する診断や治療法を研究し、質の高い情報の提供を行うことで、動物と人間が安全に共生できる社会づくりに貢献することを目的とする。
              <br />
              また、災害時においては関連動物病院等に備蓄されている人間用医薬品をできうる限り無償提供し、社会秩序、公衆衛生などの保持に貢献することも目的とする。
              <br />
              （特定非営利活動の種類）
              <br />
              第４条
              この法人は、第３条の目的を達成するため、次に掲げる種類の特定非営利活動を行う。
              <br />
              （１）社会教育の推進を図る活動
              <br />
              （２）環境の保全を図る活動
              <br />
              （３）災害救助活動
              <br />
              （４）以上の活動を行う団体の運営又は活動に関する連絡、助言又は援助の活動（事業）
              <br />
              第５条 この法人は、第３条の目的を達成するため、次の事業を行う。
              <br />
              （１）特定非営利活動に係る事業 <br />
              ①国内外を問わず、小動物の疾患に関する情報を収集し、その情報を教育機関、公共施設でのイベントやインターネット等を介して広く普及を行う事業
              <br />
              ② 獣医療に携わる人材の育成を図る教育支援事業
              <br />
              ③飼育小動物に関する助言・相談 <br />
              ④地震等の緊急災害時において、備蓄している医薬品を無償提供する事業{" "}
              <br />
              ⑤その他、この法人の目的を達成するために必要な事業
              <br />
              （２）その他の事業
              <br />
              ① 物品販売事業
              <br />
              ② 出版事業２
              <br />
              前項第２号に掲げる事業は、同項第１号に掲げる事業に支障がない限り行うものとし、収益を生じた場合は、同項第１号に掲げる事業に充てるものとする。
            </p>

            <aside>第３章 会員</aside>
            <p>
              （種別）
              <br />
              第６条
              この法人の会員は、次の２種とし、正会員をもって特定非営利活動促進法（以下「法」という。）上の社員とする。
              <br />
              （１）正会員 この法人の目的に賛同して入会した個人及び団体
              <br />
              （２）賛助会員 この法人の事業を賛助するために入会した個人及び団体
              <br />
              （入会）
              <br />
              第７条 会員の入会については、特に条件を定めない。
              <br />
              ２
              会員として入会しようとするものは、理事長が別に定める入会申込書により、理事長に申し込むものとし、理事長は、正当な理由がない限り、入会を認めなければならない。
              <br />
              ３
              理事長は、前項のものの入会を認めないときは、速やかに、理由を付した書面をもって本人にその旨を通知しなければならない。
              <br />
              （入会金及び会費）第８条
              会員は、総会において別に定める入会金及び会費を納入しなければならない。
              <br />
              （会員の資格の喪失）第９条
              会員が次の各号の一に該当するに至ったときは、その資格を喪失する。
              <br />
              （１）退会届の提出をしたとき。
              <br />
              （２）本人が死亡し、又は会員である団体が消滅したとき。
              <br />
              （３）継続して１年以上会費を滞納したとき。
              <br />
              （４）除名されたとき。
              <br />
              （退会）
              <br />
              第10条
              会員は、理事長が別に定める退会届を理事長に提出して、任意に退会することができる。
              <br />
              （除名）
              <br />
              第11条
              会員が次の各号の一に該当するに至ったときは、総会の議決により、これを除名することができる。この場合、その会員に対し、議決の前に弁明の機会を与えなければならない。
              <br />
              （１）この定款等に違反したとき。
              <br />
              （２）この法人の名誉を傷つけ、又は目的に反する行為をしたとき。
              <br />
              （拠出金品の不変換）
              <br />
              第12条 既納の賛助会費及びその他の拠出金品は、返還しない。 <br />
            </p>

            <aside>第４章 役員及び職員</aside>
            <p>
              （種別及び定数）
              <br />
              第13条 この法人に次の役員を置く。
              <br />
              （１） 理事 ３人以上５人以下
              <br />
              （２） 監事 １人以上３人以下２
              理事のうち、１人を理事長、１人を副理事長とする。
              <br />
              （選任等）
              <br />
              第14条 理事及び監事は、総会において選任する。
              <br />
              ２ 理事長及び副理事長は、理事の互選とする。
              <br />
              ３
              役員のうちには、それぞれの役員について、その配偶者若しくは３親等以内の親族が１人を超えて含まれ、又は当該役員並びにその配偶者及び３親等以内の親族が役員の総数の３分の１を超えて含まれることになってはならない。
              <br />
              ４ 監事は、理事又はこの法人の職員を兼ねることができない。
              <br />
              （職務）
              <br />
              第15条 理事長は、この法人を代表し、その業務を総理する。
              <br />
              ２
              副理事長は、理事長を補佐し、理事長に事故あるとき又は理事長が欠けたときは、理事長があらかじめ指名した順序によって、その職務を代行する。
              <br />
              ３
              理事は、理事会を構成し、この定款の定め及び理事会の議決に基づき、この法人の業務を執行する。
              <br />
              ４ 監事は、次に掲げる職務を行う。
              <br />
              （１）理事の業務執行の状況を監査すること。
              <br />
              （２）この法人の財産の状況を監査すること。
              <br />
              （３）前２号の規定による監査の結果、この法人の業務又は財産に関し不正の行為又は法令若しくは定款に違反する重大な事実があることを発見した場合には、これを総会又は所轄庁に報告すること。
              <br />
              （４）前号の報告をするため必要がある場合には、総会を招集すること。
              <br />
              （５）理事の業務執行の状況又はこの法人の財産の状況について、理事に意見を述べ、若しくは理事会の招集を請求すること。
              <br />
              （任期等）
              <br />
              第16条 役員の任期は、２年とする。ただし、再任を妨げない。
              <br />
              ２
              前項の規定にかかわらず、後任の役員が選任されていない場合には、任期の末日後最初の総会が終結するまでその任期を伸長する。
              <br />
              ３
              補欠のため、又は増員によって就任した役員の任期は、それぞれの前任者又は現任者の任期の残存期間とする。
              <br />
              ４
              役員は、辞任又は任期満了後においても、後任者が就任するまでは、その職務を行わなければならない。
              <br />
              （欠員補充）
              <br />
              第17条
              理事又は監事のうち、その定数の３分の１を超える者が欠けたときは、遅滞なくこれを補充しなければならない。
              <br />
              （解任）
              <br />
              第18条
              役員が次の各号の一に該当するに至ったときは、総会の議決により、これを解任することができる。この場合、その役員に対し、議決する前に弁明の機会を与えなければならない。
              <br />
              （１）心身の故障のため、職務の遂行に堪えないと認められるとき。
              <br />
              （２）職務上の義務違反その他役員としてふさわしくない行為があったとき。
              <br />
              （報酬等）
              <br />
              第19条
              役員は、その総数の３分の１以下の範囲内で報酬を受けることができる。
              <br />
              ２
              役員には、その職務を執行するために要した費用を弁償することができる。
              <br />
              ３
              前２項に関し必要な事項は、総会の議決を経て、理事長が別に定める。
              <br />
              （職員）
              <br />
              第20条 この法人に、事務局長その他の職員を置く。
              <br />
              ２ 職員は、理事長が任免する。
              <br />
              （顧問）
              <br />
              第21条 この法人に顧問を３人以内置くことができる。
              <br />
              ２
              顧問は学識経験者または、この法人に功労のあったものを理事会の推薦により理事長が委嘱する。
              <br />
              ３
              顧問はこの法人の運営に関して理事長の諮問に答え、又理事長に対し意見助言をする。
              <br />
              ４ 第16条第１項の規定を顧問に対して準用する。
              <br />
            </p>

            <aside>第５章 総会</aside>
            <p>
              （種別）
              <br />
              第22条 この法人の総会は、通常総会及び臨時総会の２種とする。
              <br />
              （構成）
              <br />
              第23条 総会は、正会員をもって構成する。
              <br />
              （権能）
              <br />
              第24条 総会は、以下の事項について議決する。
              <br />
              （１）定款の変更
              <br />
              （２）解散
              <br />
              （３）合併
              <br />
              （４）事業計画及び収支予算並びにその変更
              <br />
              （５）事業報告及び収支決算
              <br />
              （６）役員の選任又は解任、職務及び報酬
              <br />
              （７）入会金及び会費の額
              <br />
              （８）借入金（その事業年度内の収入をもって償還する短期借入金を除く。第49条において同じ。）その他新たな義務の負担及び権利の放棄
              <br />
              （９）事務局の組織及び運営
              <br />
              （10）その他運営に関する重要事項
              <br />
              （開催）
              <br />
              第25条 通常総会は、毎事業年度１回開催する。
              <br />
              ２ 臨時総会は、次の各号の一に該当する場合に開催する。
              <br />
              （１）理事会が必要と認め招集の請求をしたとき。
              <br />
              （２）正会員総数の５分の１以上から会議の目的である事項を記載した書面をもって招集の請求があったとき。
              <br />
              （３）第14条第４項第４号の規定により、監事から招集があったとき。
              <br />
              （招集）
              <br />
              第26条
              総会は、第23条第２項第３号の場合を除き、理事長が招集する。２
              理事長は、第23条第２項第１号及び第２号の規定による請求があったときは、その日から１４日以内に臨時総会を招集しなければならない。３
              総会を招集するときは、会議の日時、場所、目的及び審議事項を記載した書面をもって、少なくとも５日前までに通知しなければならない。
              <br />
              （議長）
              <br />
              第27条
              総会の議長は、その総会において、出席した正会員の中から選出する。（定足数）
              <br />
              第28条
              総会は、正会員総数の２分の１以上の出席がなければ開会することができない。
              <br />
              （議決）
              <br />
              第29条
              総会における議決事項は、第24条第３項の規定によってあらかじめ通知した事項とする。
              <br />
              ２
              総会の議事は、この定款に規定するもののほか、出席した正会員の過半数をもって決し、可否同数のときは、議長の決するところによる。
              <br />
              （表決権等）
              <br />
              第30条 各正会員の表決権は、平等なるものとする。
              <br />
              ２
              やむを得ない理由のため総会に出席できない正会員は、あらかじめ通知された事項について書面をもって表決し、又は他の正会員を代理人として表決を委任することができる。
              <br />
              ３
              前項の規定により表決した正会員は、第26条、第27条第２項、第29条第１項第２号及び第50条の適用については、総会に出席したものとみなす。
              <br />
              ４
              総会の議決について、特別の利害関係を有する正会員は、その議事の議決に加わることができない。
              <br />
              （議事録）
              <br />
              第31条
              総会の議事については、次の事項を記載した議事録を作成しなければならない。
              <br />
              （１）日時及び場所
              <br />
              （２）正会員総数及び出席者数（書面表決者又は表決委任者がある場合にあっては、その数を付記すること。）
              <br />
              （３）審議事項
              <br />
              （４）議事の経過の概要及び議決の結果
              <br />
              （５）議事録署名人の選任に関する事項２
              議事録には、議長及びその会議において選任された議事録署名人２人以上が署名、押印しなければならない。
              <br />
            </p>

            <aside>第６章 理事会</aside>
            <p>
              （構成）
              <br />
              第32条 理事会は、理事をもって構成する。
              <br />
              （権能）
              <br />
              第33条 理事会は、この定款で定めるもののほか、次の事項を議決する。
              <br />
              （１）総会に付議すべき事項
              <br />
              （２）総会の議決した事項の執行に関する事項
              <br />
              （３）その他総会の議決を要しない会務の執行に関する事項
              <br />
              （開催）
              <br />
              第34条 理事会は、次の各号の一に該当する場合に開催する。
              <br />
              （１）理事長が必要と認めたとき。
              <br />
              （２）理事総数の３分の２以上から会議の目的である事項を記載した書面をもって招集の請求があったとき。
              <br />
              （３）第14条第４項第５号の規定により、監事から招集の請求があったとき。
              <br />
              （招集）
              <br />
              第35条 理事会は、理事長が招集する。
              <br />
              ２
              理事長は、第32条第２号及び第３号の規定による請求があったときは、その日から１４日以内に理事会を招集しなければならない。
              <br />
              ３
              理事会を招集するときは、会議の日時、場所、目的及び審議事項を記載した書面をもって、少なくとも５日前までに通知しなければならない。
              <br />
              （議長）
              <br />
              第36条 理事会の議長は、理事長がこれに当たる。
              <br />
              （議決）
              <br />
              第37条
              理事会における議決事項は、第33条第３項の規定によってあらかじめ通知した事項とする。
              <br />
              ２
              理事会の議事は、理事総数の過半数をもって決し、可否同数のときは、議長の決するところによる。
              <br />
              （表決権等）
              <br />
              第38条 各理事の表決権は、平等なるものとする。
              <br />
              ２
              やむを得ない理由のため理事会に出席できない理事は、あらかじめ通知された事項について書面をもって表決することができる。
              <br />
              ３
              前項の規定により表決した理事は、第35条第２項及び第37条第１項第２号の適用については、理事会に出席したものとみなす。
              <br />
              ４
              理事会の議決について、特別の利害関係を有する理事は、その議事の議決に加わることができない。
              <br />
              （議事録）
              <br />
              第39条
              理事会の議事については、次の事項を記載した議事録を作成しなければならない。
              <br />
              (1) 日時及び場所
              <br />
              (2)
              理事総数、出席者数及び出席者氏名（書面表決者にあっては、その旨を付記すること。）
              <br />
              (3) 審議事項
              <br />
              (4) 議事の経過の概要及び議決の結果
              <br />
              (5) 議事録署名人の選任に関する事項２
              議事録には、議長及びその会議において選任された議事録署名人２人以上が署名、押印しなければならない。
              <br />
            </p>

            <aside>第７章 資産及び会計</aside>
            <p>
              （資産の構成）
              <br />
              第40条 この法人の資産は、次の各号に掲げるものをもって構成する。
              <br />
              (1) 設立の時の財産目録に記載された資産
              <br />
              (2) 入会金及び会費
              <br />
              (3) 寄付金品
              <br />
              (4) 財産から生じる収入
              <br />
              (5) 事業に伴う収入
              <br />
              (6) その他の収入
              <br />
              （資産の区分）
              <br />
              第41条
              この法人の資産は、これを分けて特定非営利活動に係る事業に関する資産及びその他の事業に関する資産の２種とする。
              <br />
              （資産の管理）
              <br />
              第42条
              この法人の資産は、理事長が管理し、その方法は、総会の議決を経て、理事長が別に定める。
              <br />
              （会計の原則）
              <br />
              第43条
              この法人の会計は、法第27条各号に掲げる原則に従って行うものとする。
              <br />
              （会計の区分）
              <br />
              第44条
              この法人の会計は、これを分けて特定非営利活動に係る事業に関する会計及びその他の事業に関する会計の２種とする。
              <br />
              （事業計画及び予算）
              <br />
              第45条
              この法人の事業計画及びこれに伴う収支予算は、理事長が作成し、総会の議決を経なければならない。
              <br />
              （暫定予算）
              <br />
              第46条
              前条の規定にかかわらず、やむを得ない理由により予算が成立しないときは、理事長は、理事会の議決を経て、予算成立の日まで前事業年度の予算に準じ収入支出することができる。
              <br />
              ２ 前項の収入支出は、新たに成立した予算の収入支出とみなす。
              <br />
              （予備費の設定及び使用）
              <br />
              第47条
              予算超過又は予算外の支出に充てるため、予算中に予備費を設けることができる。２
              予備費を使用するときは、理事会の議決を経なければならない。
              <br />
              （予算の追加及び更正）
              <br />
              第48条
              予算議決後にやむを得ない事由が生じたときは、総会の議決を経て、既定予算の追加又は更正をすることができる。
              <br />
              （事業報告及び決算）
              <br />
              第49条
              この法人の事業報告書、収支計算書、貸借対照表及び財産目録等の決算に関する書類は、毎事業年度終了後、速やかに、理事長が作成し、監事の監査を受け、総会の議決を経なければならない。
              <br />
              ２ 決算上剰余金を生じたときは、次事業年度に繰り越すものとする。
              <br />
              （事業年度）
              <br />
              第50条
              この法人の事業年度は、毎年９月１日に始まり翌年８月３１日に終わる。
              <br />
              （臨機の措置）
              <br />
              第51条
              予算をもって定めるもののほか、借入金の借入れその他新たな義務の負担をし、又は権利の放棄をしようとするときは、総会の議決を経なければならない。
              <br />
            </p>

            <aside>第８章 定款の変更、解散及び合併</aside>
            <p>
              （定款の変更）
              <br />
              第52条
              この法人が定款を変更しようとするときは、総会に出席した正会員の２分の１以上の多数による議決を経、かつ、軽微な事項として法第25条第３項に規定する以下の事項を除いて所轄庁の認証を得なければならない。
              <br />
              （１）主たる事務所及びその他の事務所の所在地（所轄庁の変更を伴わないもの）
              <br />
              （２）資産に関する事項
              <br />
              （３）公告の方法
              <br />
              （解散）
              <br />
              第53条 この法人は、次に掲げる事由により解散する。
              <br />
              （１）総会の決議
              <br />
              （２）目的とする特定非営利活動に係る事業の成功の不能
              <br />
              （３）正会員の欠亡
              <br />
              （４）合併
              <br />
              （５）破産
              <br />
              （６）所轄庁による設立の認証の取消し
              <br />
              ２
              前項第１号の事由によりこの法人が解散するときは、正会員総数の４分の３以上の承諾を得なければならない。
              <br />
              ３
              第１項第２号の事由により解散するときは、所轄庁の認定を得なければならない。
              <br />
              （残余財産の帰属）
              <br />
              第54条
              この法人が解散（合併又は破産による解散を除く。）したときに残存する財産は、法第11条第３項に掲げる者のうち、他の特定非営利活動法人に譲渡するものとする。
              <br />
              （合併）
              <br />
              第55条
              この法人が合併しようとするときは、総会において正会員総数の４分の３以上の議決を経、かつ、所轄庁の認証を得なければならない。
            </p>

            <aside>第９章 公告の方法</aside>
            <p>
              （公告の方法）
              <br />
              　第56条
              この法人の公告は、この法人の掲示場に掲示するとともに、官報に掲載して行う。
            </p>

            <aside>第10章 雑則</aside>
            <p>
              （細則）
              <br />
              第57条
              この定款の施行について必要な細則は、理事会の議決を経て、理事長がこれを定める。
              <br />
              附 則<br />
              １ この定款は、この法人の成立の日から施行する。
              <br />
              ２ この法人の設立当初の役員は、次に掲げる者とする。
              <br />
              理事長 小宮山典寛
              <br />
              副理事長 小宮山万里子
              <br />
              理事 同<br />
              監事 同 <br />
              ３
              この法人の設立当初の役員の任期は、第15条第１項の規定にかかわらず、成立の日から平成２４年１１月３０日までとする。
              <br />
              ４
              この法人の設立当初の事業計画及び収支予算は、第43条の規定にかかわらず、設立総会の定めるところによるものとする。
              <br />
              ５
              この法人の設立当初の事業年度は、第48条の規定にかかわらず、成立の日から【
              】年８月３１日までとする。
              <br />
              ６
              この法人の設立当初の入会金及び会費は、第８条の規定にかかわらず、次に掲げる額とする。
              <br />
              （１）正会員（個人）入会金 ５万円
              <br />
              正会員（個人）会費 ５万円（１年間分）
              <br />
              正会員（法人）入会金 ５万円
              <br />
              正会員（法人）会費 １５万円（１年間分）
              <br />
              （２）賛助会員（個人）会費 １口（５千円）以上（１年間分）
              <br />
              賛助会員（団体）会費 １口（５万円）以上（１年間分）
              <br />
            </p>
          </div>
        </div>
        <Scroll showBelow={700} />
      </Layout>
    </>
  );
};

export default Teikan;

export function Head(props: HeadProps) {
  return (
    <>
    <title>定款</title>
    <meta name="description" content="当NPO法人 小動物疾患研究所の定款です。" />
    </>
  )
}
