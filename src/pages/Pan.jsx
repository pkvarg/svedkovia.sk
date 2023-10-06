import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Translation from '../Lord.json'
import { useStateContext } from '../context/StateContext'

const Pan = () => {
  const { language, setLanguage } = useStateContext()
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
      <Header language={language} setLanguage={setLanguage} />
      <div className='bg-white text-[20px]'>
        <h1 className='text-center text-[30px] py-8'>
          {content.pTitle}
          {/* Koho Pánom je Ježiš? */}
        </h1>
        <div className='py-8 mx-4 lg:mx-8'>
          <h2 className='text-center text-[25px]'>
            {content.pSub1}
            {/* Kto ustanovil Ježiša za Pána? */}
          </h2>
          <p>
            <span className='italic'>
              {' '}
              {content.pVerse1}
              {/* Nech teda vie bezpečne celý dom izraelský, že aj Pánom, aj Kristom
              učinil Boh toho Ježiša, ktorého ste vy ukrižovali. */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.pRef1} {/* Skutky apoštolov 2:36  */}
            </span>
            {content.pText1}
            {/* Boh ustanovil Ježiša Krista za Pána. */}
          </p>
          <h2 className='text-center text-[25px] mt-4'>
            {' '}
            {content.pSub2}
            {/* Koho Pánom je Ježiš?{' '} */}
          </h2>
          <p>
            <span className='italic'>
              {' '}
              {content.pVerse2}
              {/* To slovo, ktoré poslal synom izraelským, keď dal zvestovať pokoj
              skrze Ježiša Krista - a On je Pánom všetkých.{' '} */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.pRef2} {/* Skutky apoštolov 10:36 */}
            </span>
            <span className='italic'>
              {' '}
              <br />
              {content.pVerse3}
              {/* Ktorý je podľa Ducha svätosti ustanovený od vzkriesenia z mŕtvych
              ako Boží Syn s mocou - o Ježišovi Kristovi, našom Pánovi.{' '} */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.pRef3} {/* Rimanom 1:4  */}
            </span>
            {content.pText2}
            {/* V liste rímskej cirkvi Pavol apoštol prehlasuje Ježiša za jeho Pána
            ako aj za Pána veriacich v rímskej cirkvi. */}
            <span className='italic'>
              {' '}
              <br />
              {content.pVerse4}
              {/* Ani vysokosť, ani hlbokosť, ani nijaké iné stvorenstvá nemôžu nás
              odlúčiť od lásky Božej, ktorá je v Kristovi Ježišovi, našom
              Pánovi. */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.pRef4} {/* Rimanom 8:39 */}
            </span>
            {content.pText4}
            {/* Láska Božia je v našom Pánovi.{' '} */}
          </p>
          <h2 className='text-center text-[25px] mt-4'>
            {content.pSub3}
            {/* Pána treba poslúchať */}
          </h2>

          <p>
            {content.pText5}
            {/* Čím je charakteristické panstvo? Princípom nadriadenosti a
            podriadenosti. Pán je nadriadený, dáva inštrukcie. Jeho poddaný mu
            je podriadený, prijíma inštrukcie a poslúcha ich. */}
            <span className='italic'>
              {' '}
              {content.pVerse5}
              {/* Otroci, poslúchajte svojich telesných pánov s bázňou a chvením v
              úprimnosti srdca ako Krista. */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.pRef5} {/* Efezským 6:5  */}
            </span>
            {content.pText6}
            {/* Pána Ježiša máme teda poslúchať s rovnakou bázňou, chvením ako
            poslúcha verný otrok svojho telesného pána. */}
            <span className='italic'>
              {' '}
              <br />
              {content.pVerse6}
              {/* Ujal sa ho však Barnabáš a uvedúc ho k apoštolom, rozpovedal im,
              ako na ceste videl Pána a že hovoril s Ním, aj ako neohrozene
              kázal v Damasku v mene Ježišovom. A prebýval s nimi v Jeruzaleme,
              kázal neohrozene v mene Pánovom. */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.pRef6} {/* Skutky 9:27-28 */}
            </span>
            {content.pText7}{' '}
            {/* Saul po stretnutí s Ježišom Kristom nemohol o Ňom nekázať. Svedčil o
            Ježišovi Kristovi, keďže to bola jeho osobná skúsenosť. A kázal
            práve o Ňom, pretože stretnutie s Ním zmenilo celý jeho dovtedajší
            život a zmenilo poznanie toho, čomu dovtedy veril. */}
            <span className='italic'>
              {content.pVerse7}
              {/* Ale mne život nestojí za reč, len nech s radosťou dokonám beh a
              službu, ktorú som prijal od Pána Ježiša: svedčiť o evanjeliu
              milosti Božej.{' '} */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.pRef7} {/* Skutky 20:24  */}
            </span>
            <span className='italic'>
              {' '}
              <br />
              {content.pVerse8}
              {/* S mužmi, ktorí životy nasadili pre meno nášho Pána Ježiša Krista.{' '} */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.pRef8} {/* Skutky 15:26 */}
            </span>
            {content.pText8}
            {/* Akým Pánom im bol, že boli ochotní zomrieť za Jeho meno? To nemohlo
            byť tak, že uctievajú Boha Otca a nemajú žiaden vzťah s Ježišom
            Kristom. Nemali by žiadnu motiváciu za Neho riskovať. */}
            <span className='italic'>
              <br />
              {content.pVerse9}
              {/* Alebo či sa snažím ľuďom ľúbiť? Ak by som sa ešte (chcel) ľúbiť
              ľuďom, nebol by som služobníkom Kristovým.{' '} */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.pRef9} {/* Galatským 1:10 */}
            </span>
            {content.pText9}
            {/* Byť služobník je byť oddaný len svojmu pánovi a nasledovať jeho
            inštrukcie. Ale to je možné len vtedy, keď sluha vie, čo jeho pán od
            neho požaduje. Sluha Ježiša Krista preto musí byť so svojím Pánom v
            neustálom kontakte. */}
          </p>

          <h2 className='text-center text-[25px] mt-4'>
            {content.pSub4}
            {/* Ako kontaktovať Pána? */}
          </h2>

          <p>
            <span className='italic'>
              {' '}
              {content.pVerse10}
              {/* S tichosťou prijímajte vštepované slovo, ktoré má moc spasiť vaše
              duše. Buďte však činiteľmi slova, a nielen poslucháčmi, ktorí
              oklamávajú sami seba. Lebo ak je niekto poslucháčom slova, a nie
              činiteľom, podobá sa mužovi, ktorý si v zrkadle pozerá svoju
              prirodzenú tvár; videl sa totiž, ale odišiel a ihneď zabudol, aký
              je. Ale kto sa zahľadel do dokonalého zákona slobody a vytrval nie
              ako zábudlivý poslucháč, ale ako činiteľ skutku, ten bude
              blahoslavený vo svojom konaní.{' '} */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.pRef10} {/* Jakub 1:21-25  */}
            </span>
            {content.pText10}
            {/* Božie Slovo obsahuje Božiu vôľu pre človeka a tak prostredníctvom
            neho môže nasledovník Pána spoznať svojho Pána a spoznať ako sa má
            správať a čo vo svojom živote robiť. */}
            <span className='italic'>
              {' '}
              <br />
              {content.pVerse11}
              {/* Neprestajne sa modlite! */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.pRef11} {/* Prvý Tesalonickým 5:17  */}
            </span>
            {content.pText11}
            {/* Pavol apoštol nabádal veriacich, aby zotrvávali na modlitbách
            neustále, pretože on sám tak robil. Bol v kontakte so svojím Pánom,
            aby prijímal inštrukcie od Neho a mal s Ním spoločenstvo. */}
          </p>

          <h2 className='text-center text-[25px] mt-4'>
            {content.pSub5}

            {/* Pavol apoštol mal vzťah so svojím Pánom{' '} */}
          </h2>
          <p>
            <span className='italic'>
              {' '}
              {content.pVerse12}
              {/* Všetkým od Boha milovaným, povolaným svätým v Ríme: Milosť vám a
              pokoj od Boha, nášho Otca, a od Pána Ježiša Krista!{' '} */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.pRef11} {/* Rimanom 1:7 */}
            </span>
            {content.pText12}
            {/* Pavol prijímal pokoj od Boha aj od Ježiša a ten potom žehnal
            veriacim bratom a sestrám. Ale Božie Slovo vylučuje slúžiť dvom
            pánom: */}
            <span className='italic'>
              {' '}
              {content.pVerse13}
              {/* Ani jeden sluha nemôže slúžiť dvom pánom. Lebo buď jedného bude
              nenávidieť, a druhého milovať; buď sa jedného bude pridŕžať, a
              druhým pohrdne. Nemôžete slúžiť Bohu aj mamone. */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.pRef13} {/* Lukáš 16:13 */}
            </span>
            {content.pText13}
            {/* Len Boh je Ten správny Pán. Ale apoštol Pavol uvádza Ježiša Krista
            ako Pána. A je to vporiadku, pretože Ježiš hovorí: */}
            <span className='italic'>
              {content.pVerse14}
              {/* Ja a Otec sme jedno. */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.pRef14} {/* Ján 10:30 */}
            </span>
            <span className='italic'>
              {' '}
              <br />
              {content.pVerse15}
              {/* Preto, ako ste prijali Krista Ježiša, Pána, v Ňom žite.{' '} */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.pRef15} {/* Kolosenským 2:6 */}
            </span>
            {content.pText14}
            {/* Apoštol Pavol žil v Ježišovi Kristovi. Ale ako je to možné? */}
            <span className='italic'>
              {' '}
              {content.pText16}
              {/* Kto sa pripojí k Pánovi, je s Ním jeden Duch.{' '} */}
            </span>
            <span className='text-[20px]'>
              {' '}
              {content.pRef16} {/* Prvý Korintským 6:17 */}
            </span>
          </p>
        </div>
      </div>
      <span className='italic'></span>
      <span className='text-[20px]'></span>
    </>
  )
}

export default Pan
