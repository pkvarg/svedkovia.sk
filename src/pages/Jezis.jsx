import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Translation from '../JesusGod.json'
import { useStateContext } from '../context/StateContext'

const Jezis = () => {
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
        <h1 className='text-center text-[30px] py-8'>Je Ježiš Boh?</h1>
        <div className='py-8 mx-4 lg:mx-8'>
          <h2 className='text-center text-[25px]'>Je Ježiš Boh?</h2>
          <p>
            Byť Bohom znamená mať jedinečné božské vlastnosti, ktoré nemá žiadna
            stvorená bytosť. Božie Slovo vymedzuje rôzne oblasti, ktoré
            prislúchajú len Bohu a ktoré má človek zakázané prisudzovať
            ktorejkoľvek stvorenej bytosti.
          </p>
          <h2 className='text-center text-[25px]'>Len Boh môže stvoriť </h2>
          <p>
            <span className='italic'> Na počiatku stvoril Boh nebo a zem.</span>
            <span className='text-[20px]'> Genesis 1:1 </span>
            <span className='italic'>
              {' '}
              Ním (Slovom, ktoré sa stalo telom) povstalo všetko a bez Neho
              nepovstalo nič, čo povstalo.{' '}
            </span>
            <span className='text-[20px]'> Ján 1:3 </span>
            <span className='italic'>
              {' '}
              Bolo vo svete a svet Ním povstal, ale svet Ho nepoznal. Do svojho
              vlastného prišiel, a Jeho vlastní Ho neprijali.{' '}
            </span>
            <span className='text-[20px]'> Ján 1:10-11 </span>
            Svet Ježišom povstal, bol Ním stvorený.
          </p>
          <h2 className='text-center text-[25px] mt-4'>Len Boh môže súdiť</h2>
          <p>
            <span className='italic'>
              {' '}
              A Otec ani nesúdi nikoho, ale celý súd odovzdal Synovi, aby všetci
              ctili Syna tak, ako ctia Otca.
            </span>
            <span className='text-[20px]'> Ján 5:22 </span>
            Boh zveril Ježišovi Svoju autoritu.
          </p>

          <h2 className='text-center text-[25px] mt-4'>
            Len Boha máme uctievať
          </h2>

          <p>
            <span className='italic'>
              {' '}
              Lebo nesmieš sa klaňať inému bohu, pretože Hospodin, ktorého meno
              je Žiarlivý, je naozaj žiarlivý Boh.{' '}
            </span>
            <span className='text-[20px]'> Exodus 34:14 </span>
            <span className='italic'>
              {' '}
              A Otec ani nesúdi nikoho, ale celý súd odovzdal Synovi, aby všetci
              ctili Syna tak, ako ctia Otca. Kto nectí Syna, nectí ani Otca,
              ktorý Ho poslal.
            </span>
            <span className='text-[20px]'> Ján 5:22-23 </span>
            Máme vzdať česť a slávu Ježišovi, inak si nectíme Boha.
          </p>

          {/* continue */}

          <h2 className='text-center text-[25px] mt-4'>
            Len Bohu sa má klaňať Jeho stvorenie
          </h2>
          <p>
            <span className='italic'>
              {' '}
              Keď som to počul a videl, padol som k nohám anjelovi, ktorý mi to
              ukázal, a klaňal som sa mu. On mi však povedal: Pozri, nie tak!
              Som spoluslužobníkom tvojím, tvojich bratov, prorokov a tých,
              ktorí zachovávajú slová tejto knihy. Bohu sa klaňaj!{' '}
            </span>
            <span className='text-[20px]'> Zjavenie Jána 22:8-9 </span>
            <span className='italic'>
              {' '}
              A keď zase uvedie Prvorodeného na svet, hovorí: Nech padnú pred
              Ním na kolená všetci anjeli Boží!
            </span>
            <span className='text-[20px]'> Židom 1:6 </span>
            Božie stvorenie sa má klaňať Ježišovi.
          </p>

          <h2 className='text-center text-[25px] mt-4'>
            Len Boh môže vládnuť nad všetkým
          </h2>

          <p>
            <span className='italic'>
              {' '}
              Najvyšší vládne nad kráľovstvom ľudí a dáva ho, komu chce.
            </span>
            <span className='text-[20px]'> Daniel 4:29 </span>
            <span className='italic'>
              {' '}
              Ježiš pristúpil a povedal im: „Daná mi je všetka moc na nebi aj na
              zemi.
            </span>
            <span className='text-[20px]'> Matúš 28:18 </span>
            Boh zveril Ježišovi všetku vládu.{' '}
          </p>

          <h2 className='text-center text-[25px] mt-4'>Ježiš nie je anjel</h2>

          <p>
            <span className='italic'>
              {' '}
              O toľko je dôstojnejší ako anjeli, o koľko ich prevyšuje menom,
              ktoré zdedil. Veď kedy ktorému anjelovi povedal Boh: Syn môj si
              Ty, ja som ťa splodil dnes? A inde: Ja Mu budem otcom a On mi bude
              synom.{' '}
            </span>
            <span className='text-[20px]'> Židom 1:4-5 </span>

            <span className='italic'>
              {' '}
              Lebo nie anjelom podriadil Boh budúci svet, o ktorom hovoríme.{' '}
            </span>
            <span className='text-[20px]'> Židom 2:5 </span>
          </p>

          <h2 className='text-center text-[25px] mt-4'>
            Prorok Izaiáš ho predpovedá ako Boha
          </h2>

          <p>
            <span className='italic'>
              {' '}
              Lebo dieťa sa nám narodilo, syn nám je daný; na jeho pleciach
              spočinie kniežatstvo, jeho meno bude: Predivný radca, Mocný Boh,
              Otec večnosti, Knieža pokoja.{' '}
            </span>
            <span className='text-[20px]'> Izaiáš 9:5 </span>
          </p>

          <h2 className='text-center text-[25px] mt-4'>
            Slovo, ktoré sa stalo telom je Boh
          </h2>

          <p>
            <span className='italic'>
              {' '}
              Na počiatku bolo Slovo a Slovo bolo u Boha a Boh bol to Slovo.
            </span>
            <span className='text-[20px]'> Ján 1:1 </span>
            Grécky originál označuje Boha slovom theón a theós:
            <span className='italic font-thin'>
              {' '}
              “Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν (theón), καὶ
              θεὸς (theós) ἦν ὁ λόγος.”
            </span>
            <span className='italic'>
              {' '}
              A to Slovo stalo sa telom, prebývalo medzi nami, a my sme hľadeli
              na Jeho slávu ako na slávu jednorodeného od Otca, (bolo) plné
              milosti a pravdy.{' '}
            </span>
            <span className='text-[20px]'> Ján 1:14 </span>
            Ježiš prišiel v tele na svet, takže On je tým Slovom.
          </p>

          <h2 className='text-center text-[25px] mt-4'>
            Ježiš vyznáva Seba za Boha
          </h2>

          <p>
            <span className='italic'>
              {' '}
              Boh riekol Mojžišovi: SOM, KTORÝ SOM. Riekol ďalej: Tak povedz
              Izraelcom: Poslal ma k vám SOM.{' '}
            </span>
            <span className='text-[20px]'> Exodus 3:14 </span>

            <span className='italic'>
              {' '}
              Hovorím vám to už teraz, skôr, ako sa to stane, aby ste uverili,
              keď sa to stane, že ja SOM.{' '}
            </span>
            <span className='text-[20px]'> Ján 13:19 </span>
            <span className='italic'>
              {' '}
              Ježiš im riekol: Veru, veru, hovorím vám: Skôr, ako bol Abrahám,
              ja SOM. Ján 8:58 Preto som vám povedal, že umriete v hriechoch,
              lebo ak neuveríte, že ja SOM, umriete v hriechoch.{' '}
            </span>
            <span className='text-[20px]'> Ján 8:24 </span>
          </p>

          <h2 className='text-center text-[25px] mt-4'>
            Učeník dosvedčuje, že Ježiš je Boh
          </h2>

          <p>
            <span className='italic'>
              A prišiel Ježiš, hoci dvere boli zatvorené, a postaviac sa do
              prostriedku, riekol im: Pokoj vám! Potom hovorí Tomášovi: Daj sem
              prst a pozri sa na moje ruky; daj sem ruku a vlož ju do môjho boku
              a nebuď neveriaci, ale veriaci. Tomáš mu povedal: Pán môj a Boh
              môj!{' '}
            </span>
            <span className='text-[20px]'> Ján 20:26-28 </span>
          </p>
          <h2 className='text-center text-[25px] mt-4'>
            Pavol apoštol označuje Ježiša za Boha
          </h2>

          <p>
            <span className='italic'>
              Ich sú otcovia a z nich je Kristus podľa tela, Boh nad všetkým,
              požehnaný naveky.{' '}
            </span>
            <span className='text-[20px]'> Rimanom 9:5 </span>
            Rovnako aj grécky originál nerozdeľuje túto vetu na dve, ale
            pokračuje v nej čiarkou pred slovom Boh (theós) bez prerušenia:
            <span className='italic font-thin'>
              {' '}
              “ὧν οἱ πατέρες, καὶ ἐξ ὧν ὁ χριστὸς τὸ κατὰ σάρκα, ὁ ὢν ἐπὶ
              πάντων, θεὸς (theós) εὐλογητὸς εἰς τοὺς αἰῶνας· ἀμήν.”
            </span>
          </p>

          <h2 className='text-center text-[25px] mt-4'>
            Sám Boh oslovuje Ježiša ako Boha
          </h2>

          <p>
            <span className='italic'>
              Ale k Synovi (Boh hovorí): Tvoj trón, ó Bože, je naveky vekov a:
              žezlo spravodlivosti je žezlom Jeho kráľovstva; miloval si
              spravodlivosť a nenávidel si neprávosť; preto pomazal Ťa, ó Bože,
              Tvoj Boh olejom veselia nad Tvojich druhov.{' '}
            </span>
            <span className='text-[20px]'> Židom 1:8-9 </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Jezis
