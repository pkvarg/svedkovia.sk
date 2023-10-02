import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Translation from '../Apostoli.json'

import { useStateContext } from '../context/StateContext'

const Apostoli = () => {
  const { language } = useStateContext()
  const [content, setContent] = useState({})

  useEffect(() => {
    if (language === 'slovak') {
      setContent(Translation.slovak)
    } else if (language === 'english') {
      setContent(Translation.english)
    } else {
      setContent(Translation.czech)
    }
  }, [language])

  return (
    <>
      <Header language={language} />
      <div className='bg-white text-[20px]'>
        <h1 className='text-center text-[30px] py-8'>
          {content.apTitle}
          {/* Čo hlásali apoštoli */}
        </h1>
        <div className='py-8 mx-4 lg:mx-8'>
          <h2 className='text-center text-[25px]'>
            {content.apSub1}
            {/* Už Starý zákon svedčí o Ježišovi Kristovi */}
          </h2>
          <p>
            <span className='italic'>
              {' '}
              {content.apVerse1}{' '}
              {/* Určili mu teda deň a zišlo sa ich mnoho na jeho byte. (Pavel) im
              od rána až do večera vykladal, svedčil o kráľovstve Božom a
              presviedčal ich o Ježišovi z Mojžišovho Zákona a z Prorokov.{' '} */}
            </span>
            <span className='text-[20px]'>
              {content.apRef1}
              {/* Skutky apoštolov 28:23  */}
            </span>
          </p>
          <h2 className='text-center text-[25px]'>
            {content.apTitle}
            {/* Čo hlásali apoštoli? */}
          </h2>
          <p>
            <span className='italic'>
              {' '}
              {content.apVerse2}
              {/* Čo bolo od počiatku, čo sme počuli, čo sme videli na vlastné oči,
              na čo sme pozerali a čoho sa nám dotýkali ruky, (o tom svedčíme,
              totiž) o Slove života. A ten život sa zjavil, my sme (Ho) videli,
              svedčíme (o Ňom) a zvestujeme vám večný život, ktorý bol u Otca a
              zjavil sa nám. Čo sme (teda) videli a počuli, zvestujeme aj vám,
              aby ste aj vy mali spoločenstvo s nami. Naše spoločenstvo aby bolo
              s Otcom a s Jeho Synom Ježišom Kristom. Toto vám píšeme, aby naša
              radosť bola úplná. */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.apRef2} {/* Prvý Jánov 1:1-4 */}
            </span>
            {content.apText1}
            {/* The apostles testified about Jesus, Whom they physically saw, knew, met after His death, and Whom they saw taken up into heaven. */}
          </p>
          <h2 className='text-center text-[25px] mt-4'>
            {content.apSub2}
            {/* Svedčili o vzkriesení Ježiša Krista */}
          </h2>
          <p>
            <span className='italic'>
              {' '}
              {content.apVerse3}
              {/* Tohto Ježiša vzkriesil Boh a my všetci sme svedkami toho. */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.apRef3} {/* Skutky apoštolov 2:32 */}
            </span>
            <span className='italic'>
              {' '}
              {content.apVerse4}
              {/* Ale zamordovali ste Vodcu života, ktorého Boh vzkriesil z mŕtvych;
              a my sme svedkami toho. */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.apRef4} {/* Skutky apoštolov 3:15 */}
            </span>
            <span className='italic'>
              {' '}
              {content.apVerse5}
              {/* Vedzte teda vy všetci, aj všetok ľud izraelský, že tento človek
              stojí pred vami zdravý v mene Ježiša Krista Nazaretského, ktorého
              ste vy ukrižovali, ale Boh Ho vzkriesil z mŕtvych.{' '} */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.apRef5} {/* Skutky apoštolov 4:10 */}
            </span>
            <span className='italic'>
              {' '}
              {content.apVerse6}
              {/* Apoštolovia však veľmi mocne vydávali svedectvo o vzkriesení Pána
              Ježiša a veľká milosť spočinula na nich na všetkých.{' '} */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.apRef6} {/* Skutky apoštolov 4:33 */}
            </span>
            <span className='italic'>
              {' '}
              {content.apVerse7}
              {/* Boh našich otcov vzkriesil Ježiša, ktorého ste vy zamordovali, keď
              ste Ho povesili na drevo. Toho Boh povýšil svojou pravicou za
              Vodcu a Spasiteľa, aby dal Izraelovi pokánie a odpustenie
              hriechov. A svedkami toho sme my a Duch Svätý, ktorého dal Boh
              tým, čo Ho poslúchajú.{' '} */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.apRef7} {/* Skutky apoštolov 5:30-32 */}
            </span>
            <span className='italic'>
              {' '}
              {content.apVerse8}
              {/* Ale neprestali deň čo deň učiť v chráme a po domoch a zvestovať
              evanjelium Krista Ježiša.{' '} */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.apRef8} {/* Skutky apoštolov 5:42 */}
            </span>
            <span className='italic'>
              {' '}
              {content.apVerse9}
              {/* A my sme svedkami všetkého, čo činil v Judsku a v Jeruzaleme, ako
              Ho aj zamordovali, povesiac Ho na drevo. Toho Boh vzkriesil v
              tretí deň a dal Mu zjavovať sa.{' '} */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.apRef9} {/* Skutky apoštolov 10:39-40 */}
            </span>
            <span className='italic'>
              {' '}
              {content.apVerse10}
              {/* Až na jediný výkrik, ktorý som zavolal, stojac medzi nimi: Pre
              vzkriesenie z mŕtvych ma dnes súdite.{' '} */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.apRef10} {/* Skutky apoštolov 24:21 */}
            </span>
            {content.apText2}
            {/* Pavol bol súdený a bitý preto, že svedčil o vzkriesenom Ježišovi
            Kristovi. */}
          </p>

          <h2 className='text-center text-[25px] mt-4'>
            {content.apSub3}
            {/* Svedčili o pokání skrze vieru v Ježiša Krista */}
          </h2>
          <p>
            <span className='italic'>
              {' '}
              {content.apVerse11}
              {/* Riekol im: Tak je napísané, že Kristus musel trpieť a na tretí deň
              vstať z mŕtvych a že sa musí kázať v Jeho mene pokánie na
              odpustenie hriechov všetkým národom, počnúc od Jeruzalema. */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.apRef11} {/* Lukáš 24:46-47  */}
            </span>
          </p>

          <h2 className='text-center text-[25px] mt-4'>
            {content.apSub4}
            {/* Svedčili o kráľovstve Božom, do ktorého vstúpi človek len skrze
            vieru v Ježiša Krista */}
          </h2>
          <p>
            <span className='italic'>
              {' '}
              {content.apVerse12}
              {/* A celkom smelo a bez prekážky kázal o kráľovstve Božom a učil o
              Pánovi Ježišovi Kristovi.{' '} */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.apRef12} {/* Skutky apoštolov 28:31  */}
            </span>
            <span className='italic'>
              {' '}
              {content.apVerse13}
              {/* Amen, amen, hovorím ti: Ak sa niekto nenarodí z vody a z Ducha,
              nemôže vojsť do Božieho kráľovstva. Na to mu Nikodém odpovedal:
              „Ako sa to môže stať?“ A ako Mojžiš vyzdvihol hada na púšti, tak
              musí byť vyzdvihnutý aj Syn človeka, aby každý, kto v neho verí,
              mal večný život.{' '} */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.apRef13} {/* Ján 3:5,9,14-15  */}
            </span>
            {content.apText3}
            {/* Kázanie o kráľovstve je opäť len kázanie o Ježišovi Kristovi. */}
          </p>

          <h2 className='text-center text-[25px] mt-4'>
            {content.apSub5}
            {/* Svedčili o osobe Ježiša Krista */}
          </h2>

          <p>
            <span className='italic'>
              {' '}
              {content.apVerse14}
              {/* S mužmi, ktorí životy nasadili pre meno nášho Pána Ježiša Krista.{' '} */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.apRef14} {/* Skutky apoštolov 15:26 */}
            </span>
            {content.apText4}
            {/* Tak zvestovali evanjelium, že riskovali vlastné životy za svedectvo
            o Pánovi Ježišovi. */}
            <span className='italic'>
              {' '}
              {content.apVerse15}
              {/* Ale niektorí z nich boli z Cypru a z Kyrény, a keď prišli do
              Antiochie, hovorili aj Grékom a zvestovali Pána Ježiša.{' '} */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.apRef15} {/* Skutky apoštolov 11:20 */}
            </span>
            <span className='italic'>
              {' '}
              {content.apVerse16}
              {/* Predvolali si ich teda a prikázali im, aby nikdy viac ani
              nehovorili ani neučili v mene Ježišovom.{' '} */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.apRef16} {/* Skutky apoštolov 4:18 */}
            </span>
            {content.apText5}
            {/* Čo teda vadilo ich protivníkom? Meno Ježiš. */}
          </p>

          <h2 className='text-center text-[25px] mt-4'>
            {content.apSub6}
            {/* Svedčili o tom, čo hovoril Ježiš Kristus */}
          </h2>

          <p>
            {content.apText6}
            {/* Slovo, ktoré hlásal Pán Ježiš, to hlásali apoštoli. */}
            <span className='italic'>
              {' '}
              {content.apVerse17}
              {/* O niekoľko dní povedal Pavel Barnabášovi: Vráťme sa a po všetkých
              mestách, v ktorých sme zvestovali slovo Pánovo, ponavštevujeme
              bratov, ako sa majú.{' '} */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.apRef17} {/* Skutky apoštolov 15:36 */}
            </span>
          </p>

          <h2 className='text-center text-[25px] mt-4'>
            {content.apSub7}
            {/* Ako apoštoli hlásali evanjelium? */}
          </h2>

          <p>
            <span className='italic'>
              {' '}
              {content.apVerse18}
              {/* Ale prijmite moc Ducha Svätého, ktorý zostúpi na vás, a budete mi
              svedkami.{' '} */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.apRef18} {/* Skutky apoštolov 1:8  */}
            </span>
            {content.apText7}
            {/* Apoštoli nehlásali evanjelium rutinným a rozumovým rozprávaním o
            tom, čo videli, ale v moci Ducha Svätého. */}
          </p>

          <h2 className='text-center text-[25px] mt-4'>
            {content.apSub8}
            {/* Čo je dôkazom pravého evanjelia? */}
          </h2>

          <p>
            <span className='italic'>
              {' '}
              {content.apVerse19}
              {/* Veď ja sa nehanbím za evanjelium (Kristovo): lebo mocou Božou je
              ono na spasenie každému veriacemu, najprv Židovi, a aj Grékovi.{' '} */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.apRef19} {/* Rimanom 1:16 */}
            </span>
            {content.apText8}
            {/* Spasenie hriešnika je možné len skrze vieru v Ježiša Krista a
            poslušnosti Jeho Slovu. */}
            <span className='italic'>
              {' '}
              {content.apVerse20}
              {/* Zjavuje sa v ňom zaiste spravodlivosť Božia z viery pre vieru, ako
              je napísané: Spravodlivý z viery bude žiť.{' '} */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.apRef20} {/* Rimanom 1:17  */}
            </span>
            {content.apText9}
            {/* Vo viere vo vzkriesenie a v nasledovaní Ježiša Krista sa zjavuje
            Božia spravodlivosť. */}
          </p>

          <h2 className='text-center text-[25px] mt-4'>
            {content.apSub9}
            {/* Nehlásať vzkriesenie je porušením Božieho nariadenia */}
          </h2>

          <p>
            <span className='italic'>
              {' '}
              {content.apVerse21}
              {/* Veď Boh, ktorému slúžim svojím duchom zvesťou evanjelia Jeho Syna,
              je mi svedkom, ako neprestajne spomínam na vás.{' '} */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.apRef21} {/* Rimanom 1:9  */}
            </span>
            {content.apText10}
            {/* Pavol slúži Bohu tým, že zvestuje evanjelium Jeho Syna. Ak by
            učeníci nehlásali to, čoho boli očitými svedkami, porušili by príkaz
            Boha. */}
            <span className='italic'>
              {' '}
              {content.apVerse22}
              {/* Ale Peter a Ján odpovedali im takto: Súďte, či je spravodlivé pred
              Bohom poslúchať viac vás ako Boha! Lebo my nemôžeme nehovoriť o
              tom, čo sme videli a počuli.{' '} */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.apRef22} {/* Skutky apoštolov 4:19-20 */}
            </span>
            <span className='italic'>
              {' '}
              {content.apVerse23}
              {/* Čudujem sa, že od Toho, ktorý vás povolal v milosti Kristovej, sa
              tak rýchlo odvraciate k inému evanjeliu, ktoré ani nie je iné
              evanjelium. Sú však niektorí, čo robia zmätok medzi vami a chcú
              prekrútiť evanjelium Kristovo. Ale keby sme aj my, alebo keby vám
              anjel z neba zvestoval (iné) evanjelium miesto toho, ktoré sme vám
              my zvestovali, - nech je prekliaty! Ako sme prv povedali, aj teraz
              znovu hovorím: ak vám niekto zvestuje (iné) evanjelium miesto
              toho, ktoré ste prijali, - nech je prekliaty!{' '} */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.apRef23}
              {/* Galatským 1:6-9 */}
            </span>
            <span className='italic'> </span>
            <span className='text-[20px]'></span>
          </p>
        </div>
      </div>
      <span className='italic'></span>
      <span className='text-[20px]'></span>
    </>
  )
}

export default Apostoli
