import React, { useState } from 'react'
import HeaderHome from '../components/HeaderHome'
import CookieConsent from 'react-cookie-consent'
import axios from 'axios'

const Home = () => {
  const [cookieAccept, setCookieAccept] = useState(false)

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const increaseVisitorsCount = async () => {
    const { data } = await axios.put(
      // `https://pictusweb.online/api/visitors/svedkovia/increase`,
      `http://localhost:2000/api/visitors/svedkovia/increase`,
      config
    )
  }

  return (
    <>
      <header className='hero-bg h-[100vh]'>
        <HeaderHome />
        <h1 className='text-[45px] text-brown3 text-center pt-[20%] lg:pt-[5%]'>
          Svedok je ten, kto mal osobnú skúsenosť a o nej vypovedá
        </h1>
        <h2 className='text-center text-[35px]'>
          Nespoliehaj sa na výklady organizácie, poď do Božieho Slova!
        </h2>
      </header>
      <main className='text-[25px] bg-white px-4 lg:px-8 pb-16'>
        <h1 className='text-brown3 text-center text-[35px] p-8'>
          Kto je v Božom Slove kľúčový pre nás pohanov?
        </h1>
        <p>
          Ježiš Kristus umožnil spasenie nás pohanov skrze Jeho obeť za naše
          hriechy a daroval spásu tým, ktorí v Neho veria.
          <span className='italic'>
            {' '}
            A nieto spasenia v nikom inom, lebo nebolo dané pre ľudí iné meno
            pod nebom (než meno Ježiš Kristus), v ktorom by sme mali dôjsť
            spasenia.{' '}
          </span>
          <span className='text-[20px]'> Skutky apoštolov 4:12 </span>
          <span className='italic'>
            {' '}
            Lebo jedinou obeťou navždy zdokonalil tých, čo sa dajú posvätiť.
          </span>
          <span className='text-[20px]'> Židom 10:14 </span>
        </p>
        <p>
          Takže všetko čo robil a čo hovoril je pre nás smerodajné, pretože bez
          Neho by Nová zmluva neexistovala a Starý Zákon by tak ostal platný len
          pre Židov. A tí by boli až dodnes odkázaní na systém obetí, ktorý ale
          nikdy hriech neodstránil, len ho prikryl.
          <span className='italic'>
            {' '}
            A potom, každý kňaz tam stojí každý deň, koná bohoslužbu, znovu a
            znovu prináša tie isté obete, ktoré nikdy nemôžu zahladiť hriechy.{' '}
          </span>
          <span className='text-[20px]'> Židom 10:11 </span>
        </p>
        <h1 className='text-brown3 text-center text-[35px] p-8'>
          Naše poslanie
        </h1>
        <p>
          Aký príkaz Ježiš zanechal krátko pred Jeho nanebovstúpením?
          <span className='italic'>
            {' '}
            Budete mi svedkami aj v Jeruzaleme, aj po celom Judsku, aj v Samárii
            a až do posledných končín zeme.{' '}
          </span>
          <span className='text-[20px]'> Skutky apoštolov 1:8 </span>
        </p>
        <p>
          Sám Boh prikázal poslúchať Ježiša.
          <span className='italic'>
            {' '}
            Toto je môj milovaný Syn, v ktorom sa mi zaľúbilo; Jeho poslúchajte.{' '}
          </span>
          <span className='text-[20px]'> Matúš 17:5 </span>
        </p>
        <p>
          Ktorí Mu mali byť svedkami? Bol tento príkaz len pre tam prítomných
          jedenástich apoštolov? Pavol apoštol evanjelizoval pohanom, hoci v
          čase nanebovstúpenia Ježiša Krista ešte nebol Jeho nasledovník. Tak
          podobne Apollo, Barnabáš, Filemón a iní. Nevideli Ho, no
          evanjelizovali a tak poslúchali jeho príkaz. Ak by príkaz platil len
          pre tam prítomných apoštolov, potom storočia po nich by nebol nik, kto
          by mal šíriť zvesť o Ježišovi Kristovi až po dnes.
        </p>
        <p>
          Kde všade povedal Ježiš, že Mu budú svedkami? Až do posledných končín
          zeme. Pavol apoštol a ďalší evanjelizovali v krajinách okolo
          Stredozemného mora avšak to ani zďaleka nepokrylo končiny zeme. Ako to
          myslel geograficky?
          <span className='italic'>
            {' '}
            Toto evanjelium o kráľovstve bude sa zvestovať po celom svete na
            svedectvo všetkým národom, a potom príde koniec.{' '}
          </span>
          <span className='text-[20px]'> Matúš 24:14 </span>
          Keďže celý svet nepokryli ani tam prítomní apoštoli, ani Pavol
          apoštol, ani ostatní evanjelisti Novej Zmluvy, tento príkaz sa týka
          všetkých, ktorí v Neho veria, keďže koniec ešte neprišiel.
        </p>
        <p>
          Čo to znamená byť svedkom?
          <span className='italic'>
            {' '}
            Čo vieme, hovoríme, a čo sme videli, svedčíme.{' '}
          </span>
          <span className='text-[20px]'> Ján 3:11 </span>
          Svedok je ten, kto niečo videl alebo ten kto mal osobnú skúsenosť.
          Videli ho tam prítomní jedenásti apoštoli a aj Pavol apoštol ho počul
          na ceste do Damasku. My sme ale Ježiša fyzickým zrakom nevideli tak
          ako ani tisíce iných po minulé stáročia.
          <span className='italic'>
            {' '}
            A Ježiš mu riekol: Pretože si ma videl, uveril si; blahoslavení,
            ktorí nevideli, a predsa uverili.
          </span>
          <span className='text-[20px]'> Ján 20:29 </span>
          Môžeme Mu teda byť svedkami len skrze vieru.
        </p>
        <h1 className='text-brown3 text-center text-[35px] p-8'>
          Viera mení človeka zvnútra navonok
        </h1>
        <p>
          Aké postavenie získavame vierou v Ježiša Krista?
          <span className='italic'>
            {' '}
            Lebo milosťou ste spasení skrze vieru. A to nie sami zo seba; je to
            dar Boží.{' '}
          </span>
          <span className='text-[20px]'> Efezským 2:8 </span>
          <span className='italic'>
            {' '}
            Ale tým, čo Ho prijali, dal moc stať sa deťmi Božími, tým, čo veria
            v Jeho meno.
          </span>
          <span className='text-[20px]'> Ján 1:12 </span>
        </p>
        <p>
          Čo to znamená veriť v Ježiša Krista? Je to veriť v to, v čo videli a
          verili apoštoli, teda v Jeho smrť, že zomrel za hriechy sveta, v Jeho
          vzkriesenie, v Jeho nanebovstúpenie. Zároveň “tým, čo Ho prijali”
          deklaruje skutočnosť, že Ho prijali za svojho Pána a Spasiteľa. Pán je
          ten, kto určuje pravidlá a príkazy a ten, kto Ho nasleduje, je ten,
          kto ich poslúcha.
        </p>
        <p>
          Čo sa v nás udialo, keď sme boli spasení a stali sme sa deťmi Božími?
          Vstúpil do nás Boží Duch:
          <span className='italic'>
            {' '}
            A ja budem prosiť Otca, a dá vám iného Radcu, aby bol s vami až
            naveky - Ducha pravdy, ktorého svet nemôže prijať, pretože Ho
            nevidí, ani nepozná. Vy Ho poznáte, pretože pri vás ostáva a bude vo
            vás. Neopustím vás ako siroty, prídem k vám. Ešte máličko, a svet ma
            viac neuvidí, ale vy ma uvidíte; pretože ja žijem, aj vy budete žiť.
            V ten deň poznáte, že ja som vo svojom Otcovi, a vy ste vo mne, ako
            ja som vo vás.{' '}
          </span>
          <span className='text-[20px]'> Ján 14:16-20 </span>
          <span className='italic'>
            {' '}
            A ak prebýva vo vás Duch Toho, ktorý Ježiša vzkriesil z mŕtvych, tak
            Ten, ktorý Krista Ježiša vzkriesil z mŕtvych, aj vaše smrteľné telá
            oživí svojím Duchom, prebývajúcim vo vás.
          </span>
          <span className='text-[20px]'> Rimanom 8:11 </span>
        </p>
        <p>
          Byť v Kristovi je chodiť podľa ducha:
          <span className='italic'> Veď Pán je Duch. </span>
          <span className='text-[20px]'> Druhý Korinťanom 4:17 </span>
          <span className='italic'>
            {' '}
            Vy však nie ste v tele, ale v Duchu, ak Duch Boží prebýva vo vás.
            Ale ak niekto nemá Ducha Kristovho, nie je Jeho.
          </span>
          <span className='text-[20px]'> Rimanom 8:9 </span>
        </p>
        <p>
          Duch Ježiša Krista ťa oslobodil:
          <span className='italic'>
            {' '}
            Zákon životodarného Ducha v Kristovi Ježišovi oslobodil ťa totiž od
            zákona hriechu a smrti.{' '}
          </span>
          <span className='text-[20px]'> Rimanom 8:2 </span>
          <span className='italic'>
            {' '}
            Nieto teda teraz už odsúdenia tých, čo sú v Kristovi Ježišovi [a
            nechodia podľa tela, ale podľa ducha].
          </span>
          <span className='text-[20px]'> Rimanom 8:1 </span>
        </p>
        <p>
          Tento Duch vedie človeka:
          <span className='italic'>
            {' '}
            Lebo všetci, ktorých Duch Boží vedie, sú synovia Boží.{' '}
          </span>
          <span className='text-[20px]'> Rimanom 8:14 </span>
        </p>
        <p>
          Sme chrám Ducha Svätého:
          <span className='italic'>
            {' '}
            Alebo či neviete, že vaše telo je chrámom Ducha Svätého, ktorý je vo
            vás, ktorého máte od Boha, a že nie ste sami svoji?{' '}
          </span>
          <span className='text-[20px]'> Prvý Korinťanom 6:19 </span>
        </p>
        <h1 className='text-brown3 text-center text-[35px] p-8'>
          Slepá viera je na nič
        </h1>
        <p>
          Ale, čo v tele umožňuje komunikovať s Božím Duchom? Fyzickými ušami
          počuje tak veriaci aj neveriaci vonkajšie zvuky. Aj dušou pociťuje
          veriaci aj neveriaci radosť, či smútok. Je to duch človeka, do ktorého
          môže vstúpiť Boží Duch a tak nadviazať spojenie s Ním:
          <span className='italic'> Pán s tvojím duchom! </span>
          <span className='text-[20px]'> Druhý Timotejovi 4:22 </span>
        </p>
        <p>
          Preto aj keď Ho nevidíme, môžeme Ho vnútorne vnímať skrze Jeho Ducha.
          Máme teda osobnú skúsenosť hoci sme Ho nikdy nevideli a tak môžeme byť
          svedkami Ježiša Krista, že skutočne žije. Lebo žije v nás a to sa nedá
          nepociťovať.
        </p>
        <p>
          Aký by to malo zmysel veriť a zároveň byť bez osobného vzťahu s Bohom?
          Veriť v Boha, ktorý sedí tam hore v nebi a ja len verím, že On to tu
          všetko stvoril, no nemám s Ním žiadnu bližšiu interakciu by bolo pre
          človeka osobne na čo? Ak viera v Boha nemá pre mňa praktický zmysel,
          prečo by som mal počas života veriť? Potom by to bolo len mŕtve
          náboženstvo a strata času. Preto súčasťou viery v Ježiša Krista je
          skutočnosť, že On prebýva v živote veriaceho a zvnútra navonok Ho
          ovplyvňuje v jeho správaní a postojoch.
        </p>

        <h1 className='text-brown3 text-center text-[35px] p-8'>
          Božie Slovo ti udá správny smer
        </h1>
        <p>
          <span className='italic'>
            {' '}
            Saul, Saul, prečo ma prenasleduješ? A on povedal: Kto si, Pane?
            Odpovedal mu: Ja som Ježiš, ktorého ty prenasleduješ.{' '}
          </span>
          <span className='text-[20px]'> Skutky apoštolov 9:4-5 </span>
          Saul prenasledoval veriacich, no Pán Ježiš mu hovorí, že prenasleduje
          Jeho. Pán Ježiš sa tu priznával ku kresťanom. Čo ich spájalo?
          <span className='italic'>
            {' '}
            Pane, od mnohých som počul o tom mužovi, koľko zlého narobil Tvojim
            svätým v Jeruzaleme; aj tu má moc od veľkňazov, aby poviazal
            všetkých, ktorí vzývajú Tvoje meno.{' '}
          </span>
          <span className='text-[20px]'> Skutky apoštolov 9:13-14 </span>
          Spájalo ich to, že kresťania vzývali, teda uctievali meno Pána Ježiša.
          Kresťania už v prvom storočí za to platili životom. Uctievaš aj ty
          <span className='font-bold'> Jeho Meno? </span>
        </p>
        <p>
          <span className='italic'>
            {' '}
            Riekol mu Pán: Len choď, lebo on mi je vyvolenou nádobou, aby niesol
            moje meno pred pohanov, aj pred kráľov a pred synov izraelských.
          </span>
          <span className='text-[20px]'> Skutky apoštolov 9:15 </span>

          <span className='italic'>
            {' '}
            Odišiel teda Ananiáš a vojdúc do toho domu, položil ruky na neho a
            povedal mu: Brat Saul, Pán Ježiš, ktorý sa ti ukázal na ceste, po
            ktorej si prišiel, poslal ma, aby si zase videl a bol naplnený
            Duchom Svätým.
          </span>
          <span className='text-[20px]'> Skutky apoštolov 9:17 </span>
          <span className='font-bold'>
            {' '}
            Nesieš aj ty pred pohanov Jeho Meno?{' '}
          </span>
        </p>
      </main>

      <span className='italic'></span>
      <span className='text-[20px]'></span>
      {/* <CookieConsent
        location='bottom'
        style={{
          background: '#492700',
          color: '#ffffff',
          fontSize: '18px',
          textAlign: 'justify',
        }}
        buttonStyle={{
          background: '#dddcd1',
          color: '#492700',
          fontSize: '20px',
          padding: '2.5px 5px',
        }}
        buttonText='Pokračovať'
        expires={365}
        onAccept={() => {
          setCookieAccept(true)
          increaseVisitorsCount()
        }}
      >
        Táto stránka nezhromažďuje žiadne údaje
      </CookieConsent> */}
    </>
  )
}

export default Home
