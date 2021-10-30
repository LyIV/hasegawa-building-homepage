/* stylesheets */
import "../stylesheets/top.css";

/* images */
import sample_image from "../assets/images/sample.png";

export default function Top() {
  return(
    <>
      <h1 className="md:hidden lg:hidden xl:hidden my-4 ml-8">
        <p className="text-lg">地球・街・経済 すべてに良い循環を</p>
        <p>武蔵小山長谷川ビル</p>
      </h1>

      <div className="mt-0 mx-0 p-0">
        <h1 className="sm:hidden absolute z-0 mt-8 ml-16">
          <p className="text-lg">地球・街・経済 すべてに良い循環を</p>
          <p>武蔵小山長谷川ビル</p>
        </h1>

        <img className="m-0 p-0" src={ sample_image } alt="" width="100%" />
      </div>

      <article className="flex flex-col">
        <div className="flex flex-col items-center">
          <p>森と同じ気持ちよさを街の中でも。</p>
          <p>「いるだけで、ただ気持ちがいい」「本当の心地よさ」を体験できる場所として、武蔵小山長谷川ビルが生まれ変わります。</p>
          <p>建設中も土中環境の水と空気の導線を守り涵養し、屋上とテラスの緑地もそのままで自然の雑木林に成長するようにしつらえました。</p>
          <p>今は、どんぐりから芽吹いて１年目の若木たちですが、光と風と人々のやさしさに包まれて、美しい木々へと成長し、私たちに心地よさを運んできます。</p>
          <p>武蔵小山長谷川ビルは、人と自然との調和する気持ちよさを提供し、この気持ちよさが、地球・街・経済すべての良い循環につながっていくと考えています。</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <span className="w-auto">
            <p>武蔵小山長谷川ビルは、本館、神社と社務所の施設で構成されており、品川区荏原3丁目に建設中です。</p>

            <img src={ sample_image } height="30%" alt="" />

            <p>「武蔵小山長谷川ビル」は2022年9月末竣工</p>
            <p>地上2階建てで延べ床面積は本館1850㎡・事務所43㎡</p>
          </span>
        </div>

        <div>
          <figure className="image_container">
            <span>
              <img src={ sample_image } alt="" />
              <img src={ sample_image } alt="" />
              <img src={ sample_image } alt="" />
              <img src={ sample_image } alt="" />
              <img src={ sample_image } alt="" />
              <img src={ sample_image } alt="" />
            </span>
            <figcaption>第3期 武蔵小山長谷川ビル</figcaption>
          </figure>
        </div>

        <div>
          <h2>沿革</h2>

          <span>
            <h3>第1期 長谷川製氷冷蔵工場 (長谷川 要之助)</h3>

            <p>　長谷川氷室は明治中期に、一世長谷川要之助、駒井高等により、個人商店として創業しました</p>
            <p>　創業時の主な商品は天然氷です。現長野新幹線軽井沢駅のすぐ南に広大な製氷池を有し、天然氷の切り出しを行っていたほか、他の寒冷地からも仕入れを行っていました。</p>
            <br />
            <p>三十間堀と旧汐留貨物駅の水陸双方に便利な現在地に本店を構え、大正期に入ると、現東京都品川区荏原の地に鉄筋コンクリート造の製氷工場および冷凍倉庫を建設し、日産20トン（その後、増設して30トン）の氷を製造しました。</p>
            <br />
            <p>　次いで大正12年には資本金23万8千円の株式会社を設立しました。</p>
            <p>昭和の戦時中も戦災を免れ、工場近隣の仲買に販売するとともに、本店では銀座、新橋烏森の飲食店を顧客として自社製品の小売り販売を行いました。</p>
          </span>

          <span>
            <h3>第2期 武蔵小山ショッピングセンタービル (長谷川 清衛)</h3>

            <p>　戦後、電気冷蔵庫の急速な普及により、特に家庭での氷の需要が激減したため、製氷業から撤退しました。</p>
            <p>昭和39年（1964）に工場の解体を開始、一時青空駐車場としたのち同40年（1965）、阪急共栄ストアー（後に阪急ファミリーストア）の誘致が決まり、1階スーパーマーケット、２階食堂街、3・4階マンションという構成のビルを建設しました。</p>
            <br />
            <p>平成15年（2003）5月、阪急ファミリーストアが撤退し、6月、東急ストアが開業しました。</p>
          </span>

          <span>
            <h3>第3期 武蔵小山長谷川ビル (井上 創)</h3>

            <p>令和元年（2019）本ビルを新耐震基準に適合させる方針を決定しました。</p>
            <p>2年間の準備期間の中、令和2年（2020）3月より2階 味の名店街各店は順次移転・閉店しました。</p>
            <p>令和2年　2021年5月16日をもって東急ストアパルム武蔵小山店が閉店し当ビルの営業が終了しました。</p>
            <br />
            <p>令和3年（2021）6月解体新築工事に着手しました。</p>
          </span>
        </div>

        <div className="flex flex-col items-center">
          <figure className="image_container">
            <span>
              <img src={ sample_image } alt="" />
              <img src={ sample_image } alt="" />
              <img src={ sample_image } alt="" />
              <img src={ sample_image } alt="" />
            </span>
            <figcaption>第1期 長谷川製氷冷蔵工場・かなめ稲荷神社と長谷川要之助</figcaption>
          </figure>
        </div>

        <div className="flex flex-col items-center">
          <figure className="image_container">
            <span>
              <img src={ sample_image } alt="" />
              <img src={ sample_image } alt="" />
              <img src={ sample_image } alt="" />
              <img src={ sample_image } alt="" />
            </span>
            <figcaption>第2期 武蔵小山ショッピングセンタービル</figcaption>
          </figure>
        </div>

        <div className="flex flex-col items-center">
          <figure className="image_container">
            <span>
              <img src={ sample_image } alt="" />
              <img src={ sample_image } alt="" />
              <img src={ sample_image } alt="" />
              <img src={ sample_image } alt="" />
            </span>
            <figcaption>第3期 武蔵小山長谷川ビル</figcaption>
          </figure>
        </div>

        <div>
          <h2>今プロジェクトへの出会いと想い</h2>

          <span>
            <h4>
              <p>建設プロジェクト推進委員</p>
              <p>濱田 耕一</p>
            </h4>

            <p>text</p>
          </span>

          <span>
            <h4>
              <p>株式会社 高田造園設計事務所　代表取締役</p>
              <p>高田 宏臣 (外構設計・施工監修)</p>
            </h4>

            <p>text</p>
          </span>

          <span>
            <h4>
              <p>川島範久建築設計事務所</p>
              <p>川島 範久 (建築デザイン・監修)</p>
            </h4>

            <p>text</p>
          </span>

          <span>
            <h4>
              <p>株式会社東邦レオ</p>
              <p></p>
            </h4>

            <p>text</p>
          </span>

          <span>
            <h4>
              <p>松井建設</p>
              <p></p>
            </h4>

            <p>text</p>
          </span>

          <span>
            <h4>
              <p>株式会社長谷川ビルディング 代表取締役</p>
              <p>井上 創</p>
            </h4>

            <p>text</p>
          </span>
        </div>
      </article>
    </>
  );
}