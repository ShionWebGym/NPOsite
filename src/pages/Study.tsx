import Layout from "../components/Layout";
import "@fontsource/noto-serif-jp";
import "@fontsource/noto-sans-jp";
import Scroll from "../components/Scroll";
import { Link, graphql, useStaticQuery  } from "gatsby";
import type { StudypostQuery } from '../../types/graphql-types';
import {
  Gcontainer,
  pagehead,
  Gh1,
  studyImgStyle,
  studyNav,
  studyLink,
  studyLinkButton,
  studySection,
  studyWrapper,
  studyList,
} from "../components/Study.module.scss";
import React from "react";
import studyImg from "../images/study.webp";
import nyoukankesseki from "../images/nyoukankesseki.webp";
import nyoukankesseki2 from "../images/nyoukankesseki2.webp";
import nyoukankesseki3 from "../images/nyoukankesseki3.webp";
import jinzou from "../images/jinzou.webp";
import type { HeadProps } from "gatsby"

const Study = () => {
  const data = useStaticQuery<StudypostQuery>(graphql`
  query Studypost{
    allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {isStudy:{ne:false}}}) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
  `);

  const posts = data.allMarkdownRemark.edges;

  return (
    <>
      <Layout>
        <div className={Gcontainer}>
          <div className={pagehead}>
            <h1 className={Gh1}>研究発表</h1>
            <img
              src={studyImg}
              alt="研究発表ページ、犬の写真"
              className={studyImgStyle}
            />
          </div>
        </div>
        <div className={studyWrapper}>
          <section className={studySection}>
            <h2>猫の尿管結石について（尿管閉塞）</h2>
            <aside>
              日本動物病院福祉協会（JAHA)の獣医内科認定医 小宮山典寛 2015.10.11
            </aside>
            <p>
              ・猫の尿管結石（尿管閉塞）は最近新しい手術が開発されより助ける機会が増加
              　したものの、本来は死亡率が高い病気です。
            </p>
            <p>
              ・猫の尿が出にくい又は出ない病気で、高齢猫の腎不全と診断され、その腎不全
              　の病名が尿管結石と気づかずに治療しても効果なく多くが死んで行く不幸な病
              　気です。それだけ診断が難しい病気と言えるでしょう。
            </p>
            <p>
              ・急性の腎機能の悪化（高尿素血症等）は慢性腎炎の前にこの病気を疑うべきです。
            </p>
            <h2>猫の尿管結石（尿管閉塞）とは、どんな病気ですか？</h2>
            <img src={nyoukankesseki} alt="猫の尿管結石の図" />
            <p>
              特に若い雄猫に認められる「尿管ではない、尿道閉塞（尿がまったく出なくなるので、何回もトイレに行く）」は比較的多い病気であり症状が判りやすいので、動物病院で発見されやすいのですが、今回解説する「左右2つある腎臓から膀胱につながる細い管（尿管）が詰まる病気」尿管結石（尿管閉塞）は、高度の技術と設備をもった動物病院でないと発見しにくいのが現状です。
              <br />
              この尿管閉塞は比較的まれな猫の病気（犬はよりまれ）ですが、特に最近増加傾向にあり注目されている病気でもあります。その理由として考えられるのが、高齢になる程猫ではシュウ酸カルシウム（※詳しくはこちら）の結石が増えている傾向にあることです。
            </p>
            <img src={nyoukankesseki2} alt="猫の尿管結石の図２枚目" />
            <p>
              この病気は診断がつかずに普通に治療（対症療法-支持療法-）され、その多くが死亡している病気です。それだけに診断が難しい病気と言えるでしょう。
              <br />
              私たちの専門医療の動物病院で、月に１-２例遭遇する病気です。この病気は以前からまれにある病気でしたが治療法はあまり確立されていませんでした。それだけ恐ろしい難しい病気とされており、最近になりようやく治療法が確立されつつあるといった状況です。
              <br />
              その治療法は特殊な機材を利用したインターベンションといわれる手術ですが、大変高度な技術を必要とされる外科手術となります。
            </p>
            <h2>動物病院で「慢性腎不全」と言われたら…</h2>
            <p>
              猫は高齢になると、腎臓病になりやすくなるのは、知られつつありますが、この病気「尿管閉塞」はまだあまり知られていません。
              <br />
              ゆえに普通に診断される猫の病気である慢性腎不全（正式には病名ではありません）と診断される時には実は、尿管結石（閉塞）であったということもありうるのです。ですから動物病院から、単に「あなたの猫は慢性腎不全です」と説明され、それ以上の説明がない場合は、「どんな慢性腎不全ですか？」と尋ねると同時に、「尿管結石の可能性はありますか？腎臓の画像診断（X線、超音波検査）の結果はどうでしたか？」「左右の腎臓の大きさはどうでしたか？」と尋ねる必要があるかもしれません。
            </p>
            <h2>診断</h2>
            <p>
              この病気の診断は、身体検査と臨床症状で推定し画像診断（X線検査、超音波、時にCT等）で確定します。ゆえに診断には詳細なX線検査と腎臓を中心とした超音波検査が必要であり、診断はどこの動物病院でもできるものではありません。熟練した獣医師が行うもので、より専門的な医療を行える動物病院でないとその診断はできないと思われます。
            </p>
            <p>
              診断の方法は、腎臓に水が溜まる（腎盂に溜まる）状態すなわち水腎症があるか、尿管に水が溜まり拡張しているか、の有無が参考になります。これは通常、腹部の腎臓の超音波検査で判定できます。腎臓のX線検査でも、X線不透過性の結石の場合は、その位置、大きさと数、また腎臓の結石の有無でも判定できる場合があります。
              <br />
              問題は二つある腎臓のどちらに尿管閉塞があるか？ということです。通常は正常より大きくなった腎臓が閉塞のある腎臓ですが、超音波検査で結石、水腎症や水尿管症、X線検査で結石、尿管の位置や変化等の所見が参考になります。
              <br />
              不幸なことに両方の腎臓の尿管に閉塞がある場合も約20-25%存在します。しかしこの場合は、尿がまったく出ませんので、尿道の閉塞との鑑別さえできれば、比較的容易に診断できます。
            </p>
            <img src={nyoukankesseki3} alt="尿管結石のエコー写真" />
            <aside>
              ↑左の腎臓の水腎症、腎臓の中が黒く（水分の貯留）見える。
              <br />
              結石のため尿管からの逆流により腎臓に水が溜まる。
            </aside>
            <aside>
              この病気の診断は、一般論では比較的難しいかもしれません。
              <br />
              専門医療レベルではそれほど難しいとは思われません。
              <br />
              しかし治療、特に外科手術となるといまだ難しいものです。
              <br />
              それなりの専門医療の動物病院でないと無理ではないかと思われます。
            </aside>
            <h2>なりやすい年齢と症状</h2>
            <p>
              起こりやすい年齢は様々ですが、６-７歳以上が多いようです。性差はありません。
              一般的な全身症状は、食欲不振、元気消失、腹痛、間欠的な嘔吐、体重減少、乏尿、無尿、一般的には尿毒症の症状が主な症状です。特に過去にシュウ酸カルシウムの結石があると診断された
              猫においてはこの病気を疑う根拠にもなりえます。
              <br />
              理由は猫の尿管結石で、その種類を調べてみると98％はシュウ酸カルシウムであるからです。不幸なことにこのシュウ酸カルシウムは、食事療法には反応しません。食事でも薬でも溶けない結石です。
            </p>
            <h2>大きい腎臓と小さい腎臓の症候群</h2>
            <p>
              この病気の場合によくみられる腎臓の状態に、俗に「大きい腎臓と小さい腎臓の症候群」と言われる状態があります。どちらかの腎臓が大きく、どちらかの腎臓が小さくなっていることがあります。多くは大きな腎臓の方が閉塞しているようです（図２）。
              <br />
              この解説はむずかしいのですが、小さい腎臓の方は過去の閉塞で大きくなり機能が停止したので、現在のように最終的に小さくなってしまったのです。この意味は「もう使われない腎臓」となるわけです（図３）。その後残った正常の腎臓がより働くために大きくなります（図４）。
              <br />
              そして最後の腎臓にも、その後不幸なことに尿管に結石ができると、尿が腎臓に逆流しますのでさらに大きくなります。これが「大きい腎臓と小さい腎臓の症候群」の正体です。
            </p>
            <img src={jinzou} alt="腎臓のグラフィック図" />
            <h2>腎臓病の難しさ</h2>
            <p>
              腎臓病で難しいのは左右2つある腎臓のどちらか一方が悪くなっても、ほとんど症状がでないため、この時はほとんど気づかないことです。ひとつの腎臓がまったく機能しなくなっても、まだ腎臓の機能の50％はありますから、通常は元気であるように見えてしまうのです。
              <br />
              例えると動物病院で、腎臓の機能を調べるのにBUN（尿素窒素）やクレアチニン等を調べますが、これらの検査は腎臓の機能が75%ぐらい悪くならないと異常が出てこない傾向にあります。ゆえに腎臓の機能検査には、血液検査と同時に尿検査（尿比重、尿分析、尿蛋白クレアチニン等）が必要になるのです。
            </p>
            <h2>内科療法と外科療法</h2>
            <p>
              この病気の治療法には、内科療法と外科療法がありますが、最近分かったことは、この病気の治療の基本は外科療法で治療するということです。
              <br />
              以前は内科療法でしか実際には対応できなかった状況がありました。では以前の主な治療法である内科療法ではどうだったのでしょうか。いずれは、再発して繰り返し、内科では救済できない症例が多数であったということです。
              <br />
              それでも、一時的に点滴療法に薬物を組み合わせて結石を通過させる内科療法で約30％、最大で60％はなんとか膀胱に結石を移動させることができるようです。
            </p>
            <p>
              現在の最新の見解では、初めの24時間は、内科療法が選ばれることが現実的な選択と考えられています。しかしながら状態によっては、早めの外科手術が必要となります。理由は予後に関係してくるからです。
              <br />
              手術は以前より成功率が飛躍的に良くなりましたが、内科療法より少ないですが、再発等の問題もありえ別の方法での再度の手術が必要となる場合があります。しかしながら現在ではベストの選択と言えるでしょう。
              <br />
              24時間後の画像診断や血液検査にて状態が改善していなければ手術を行うというのが、この手術を多く手がけている米国の外科専門医の推奨です。数年前の基準は3日間の内科療法でその後手術でした。最近では手術がより安全にできるようになったので、この内科療法に固守することなく、予後の統計により内科療法の日数が短くなりました。
            </p>
            <p>
              内科療法の主な柱は、静脈内点滴療法と利尿療法（フロセマイド、マンニトール療法）です。追加薬としては、尿管弛緩剤として塩酸プラゾシンやアミトリプチリンが処方されることもあります。
            </p>
            <p>
              以前行われた外科手術は、尿管切開、腎切開、尿管切除等でしたが、これはその手術の難しさと合併症や副作用の多さでなかなか対応ができなかったのが現状でした。他に助ける手段がないため、やむをえずごく一部の外科医が手術を行っていましたが、予後は難しいものでした。しかし時代の進歩と共に、動物の医療にも、新しいテクノロジー（二重ピグテール尿管ステントや皮下尿管バイパス-SUB-）が生まれ、この病気にようやく対処できるようなってきました。
              <br />
              初めに尿管ステントが行われ、再手術にてSUBが行われることが多いようですが、初めからSUBを選ぶ外科医もいます。どちらがよいかまだ結論が出ていないようです。現在ではこれらのテクニックがベストな選択といわれており、これらの手技をマスターするには、特別な装置や機材と洗練された指導者のもとでのトレーニングが必要となります。
            </p>
          </section>
          <nav className={studyNav}>
            <h2>論文ピックアップ</h2>
            <ul className={studyList}>
                {posts.slice(0,7).map(({ node }: {node: any}) =>{
                  const title = node.frontmatter.title;
                  const slug = node.frontmatter.slug;
                  return(
                    <li key={slug}>
                     <Link to={slug} className={studyLink}>
                      {title}
                     </Link>
                    </li>
                  );
                })}
            </ul>
            <Link to="/Allstudy" className={studyLinkButton}>
              すべての論文
            </Link>
          </nav>
        </div>
        <Scroll showBelow={1500} />
      </Layout>
    </>
  );
};

export default Study;

export function Head(props: HeadProps) {
  return (
    <>
    <title>研究発表</title>
    <meta name="description" content="本研究発表では犬や猫をはじめとする、様々な飼い主の悩みごとが解決されれば幸いです。" />
    </>
  )
}
