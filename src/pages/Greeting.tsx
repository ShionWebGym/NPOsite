import React from "react";
import "@fontsource/noto-serif-jp";
import "@fontsource/noto-sans-jp";
import Layout from "../components/Layout";
import {
  Gcontainer,
  inchoImage,
  Gh1,
  greetingText,
  Gh2,
  textContainer,
  pagehead,
} from "../components/Greeting.module.scss";
import incho from "../images/norihiro.webp";
import Scroll from "../components/Scroll";
import type { HeadProps } from "gatsby"

const Greeting = () => {
  return (
    <>
      <Layout>
        <div className={Gcontainer}>
          <div className={pagehead}>
            <h1 className={Gh1}>ご挨拶</h1>
            <img
              src={incho}
              alt="三鷹獣医科、院長の写真"
              className={inchoImage}
            />
          </div>
        </div>
        <div className={greetingText}>
          <h2 className={Gh2}>
            人と伴侶動物との健やかな暮らしのために、<br></br>
            小動物疾患研究所ができること、しなければならないこと
          </h2>
          <div className={textContainer}>
            <aside>
              －家族の一員としての伴侶動物が増えている一方で、様々な問題を抱えていることもまた事実です－
            </aside>
            <p>
              　伴侶動物は近年私たちの生活の中に欠かせない存在となりつつあります。過去１０年間に何らかの伴侶動物を飼育していた人（現在飼っている人も含む）は、国民の半数を超えるという統計結果も出ています。
              <br />
              また飼育している伴侶動物も犬、猫をはじめとして、ウサギやハムスター、カメなどその種類も多様化しています。しかし、家族の一員としての伴侶動物が増えている一方で、様々な問題を抱えていることもまた事実であります。
            </p>
            <p>
              　たとえば、獣医学教育は小動物臨床のみならず幅広い分野で多様化されて教育されますが、もし卒業後に獣医師となり、その進路を小動物臨床と選んだ場合には、ほとんどの獣医師は開業の動物病院にて研修されますが、その教育の程度はさまざまです。一定の水準と言う基準が存在しないからです。また最近の情勢として、犬猫やエキゾチック・ペットは社会情勢の変化によってブーム等が起こり、流行に左右されたりします。これによって、種による独自の病気が診断できずに治る病気も発見されない状態も考えられます。また伴侶動物はその飼育環境によって大きく健康に左右されます。典型的な問題としては誤嚥、誤食の問題があります。最近は特に増加傾向にあります。また伴侶動物の病気はその種類が多様化して、診断、治療する獣医師が過去に経験のない病気に遭遇したりする等、獣医療の従事者も頭を悩ませています。
            </p>
            <p>
              　このような傾向にある現代に様々な問題を解決するためには、飼主の伴侶動物を飼育する知識と意識の向上を図るための指導や教育の広報がより重要と考えます。またそれと同時に獣医師を含む健康を管理する医療従事者の知識の向上も望まれます。正しい健康や飼育について適切な広報と情報の公開が、飼い主と医療従事者に必要と思われます。そのためには、人材の教育・研修体制の整備と、動物の病気についての継続的な研究体制を確保していく必要があると考えます。
            </p>
            <p>
              　そこで、私たちは、小動物の疾患についての飼育上の問題や診断、治療に関する調査・研究をインターネット等を通じて広く、その結果の公表に関する事業、小動物の疾患についての調査、研究、診断、治療等を行う個人・団体等への支援・協力に関する事業、獣医療に携わる人材の育成及びその支援に関する事業を行い、それにより伴侶動物用に飼養される小動物の疾患の研究を推進することで、動物たちの罹患率の低下を図ると同時に、一般の方々に小動物の疾患についての情報を積極的に提供し、病気の予防に寄与すると共に、小動物の疾患についての研究・治療に携わる方との連携を強化し、また獣医師及び獣医療従事者の知識・技術を向上させ、動物が健康に人間と暮らしていける体制の確立に努めてまいります。
            </p>
            <p>
              　また、病気の疾病が関係する、人と動物の関係に関する研究についての普及・啓発・推進に関する事業も行い、それにより、人と動物が平和に共存・共生できる豊かな地域社会の形成を目指します。
            </p>
            <p>
              　これらの目的を遂行するに当たっては、事業の遂行上法人格が必要となり、積極的に情報公開を行うことで社会的信用を高めていくことができる特定非営利活動法人が最適と考え、特定非営利活動法人小動物疾患研究所を設立することにしました。
            </p>
            <p>
              　現在は主に獣医師向けの継続教育として、米国のWVC（西部獣医師会）の設備内のオクエンドセンターにて、「WVC獣医師外科セミナー」を開催しています。なお当法人は、広く一般市民に対しても、小動物の疾患についての調査・研究及び結果の公表に関する事業、小動物の疾患についての調査・研究・治療等を行う個人・団体等への支援・協力に関する事業を計画しています。
            </p>
            <p>
              　特に獣医療に携わる人材の育成及びその支援に関する事業、病気や疾病に関係した人と動物の関係に関する研究ついての啓発及び推進に関する事業、動物の適正な飼養についての普及・啓発・推進に関する事業を行い、動物と人間が安心安全に共生できる豊かな地域社会の形成を図り、もって広く公益に寄与することを目的とし、社会に貢献していきたいと考えております。
            </p>
          </div>
        </div>
        <Scroll showBelow={1000} />
      </Layout>
    </>
  );
};

export default Greeting;

export function Head(props: HeadProps) {
  return (
    <>
    <title>ご挨拶</title>
    <meta name="description" content="人と伴侶動物との健やかな暮らしのために、
小動物疾患研究所ができること、しなければならないこととは" />
    </>
  )
}
