'use client';

import React, { useState } from 'react';
import { Language } from '@/lib/types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CONTENT } from '@/lib/constants';
import { Calendar, Users, Trophy, Heart, TrendingDown, Sparkles, HelpCircle } from 'lucide-react';

export default function VestureContent() {
  const [lang, setLang] = useState<Language>('lv');
  const content = CONTENT[lang];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      <Navbar lang={lang} setLang={setLang} />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-green-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-orange-200">
              <Calendar className="w-4 h-4" />
              2010 - 2013
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
              Fermas Vēsture
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
              Stāsts par Draugiem.lv leģendāro sociālo spēli, kas apvienoja gandrīz 800 tūkstošus latviešus un kļuva par veselu laikmetu
            </p>
          </div>
        </section>

        {/* Technical Details Section - NEW */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">Tehniskā Informācija</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                <h3 className="text-lg font-bold text-blue-900 mb-3">Platforma</h3>
                <p className="text-blue-800">
                  <strong>Draugiem.lv</strong> - Latvijas lielākais sociālais tīkls
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
                <h3 className="text-lg font-bold text-purple-900 mb-3">Tehnoloģija</h3>
                <p className="text-purple-800">
                  <strong>Adobe Flash Player</strong> - tolaik populārākā spēļu platforma
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
                <h3 className="text-lg font-bold text-green-900 mb-3">Žanrs</h3>
                <p className="text-green-800">
                  <strong>Sociālā lauku saimniecības spēle</strong> (Farming Simulator)
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200">
                <h3 className="text-lg font-bold text-orange-900 mb-3">Palaists</h3>
                <p className="text-orange-800">
                  <strong>2010. gads</strong> - Latvijas spēļu zelta laikmets
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">Laika līnija</h2>

            <div className="space-y-12">
              {/* 2010 - Launch */}
              <div className="relative pl-8 border-l-4 border-orange-400">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 text-orange-600 font-bold mb-2">
                    <Sparkles className="w-5 h-5" />
                    2010 - Sākums
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">Sākums</h3>
                  <p className="text-stone-600 leading-relaxed mb-4">
                    Ferma tiek izveidota Latvijā kā <strong>sociālā spēle</strong> latviešu tiešsaistes kopienai Draugiem.lv platformā.
                    Spēle kļūst par tūlītēju sensāciju - pirmajās sešās dienās piesaista <strong>617,899 spēlētājus</strong>.
                    Latvijā ar ~2 miljoniem iedzīvotāju, tas ir fenomenāls sasniegums. Sociālais tīkls <strong>Draugiem.lv</strong> organizē arī
                    izstrādātāju konferences (2010. gada aprīlī un oktobrī), lai veicinātu latviešu spēļu izstrādi. Vakaros spēli vienlaicīgi spēlēja līdz pat <strong>100,000 cilvēku</strong>!
                  </p>
                  <div className="flex items-center gap-2 text-sm text-stone-500">
                    <Users className="w-4 h-4" />
                    Sociālā tīkla spēle - Draugiem.lv
                  </div>
                </div>
              </div>

              {/* Peak Years */}
              <div className="relative pl-8 border-l-4 border-green-400">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 text-green-600 font-bold mb-2">
                    <Trophy className="w-5 h-5" />
                    2010-2012 - Ziedu laiki
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">Latvijas #1 spēle</h3>
                  <p className="text-stone-600 leading-relaxed mb-4">
                    Ferma piesaista vairāk nekā pusi no visiem Draugiem.lv portāla lietotājiem un kļūst par #1 <strong>sociālo spēli Latvijā</strong>.
                    To spēlē visi - ministri, skolēni, pensionāri. Plkst. 4:00 naktī ir 3000 fermeru, 7:00 - jau 6000,
                    bet 8:00 - 12,000! Radīta vesela spēļu ģimene: <strong>Eksotiskā ferma</strong>, <strong>Lielpilsēta</strong> un citas. Platforma kļūst
                    par pirmo Eiropā ar tikai latviski radītām sociālajām spēlēm.
                  </p>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100 mt-4">
                    <p className="text-sm text-green-900 font-medium">
                      "Ferma bija dzīve tajā laikā" - spēlētājs
                    </p>
                  </div>
                </div>
              </div>

              {/* 2013 - Closure */}
              <div className="relative pl-8 border-l-4 border-stone-300">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-stone-400 rounded-full border-4 border-white shadow-lg"></div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 text-stone-600 font-bold mb-2">
                    <TrendingDown className="w-5 h-5" />
                    30. decembris, 2013
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">Laikmeta beigas</h3>
                  <p className="text-stone-600 leading-relaxed mb-4">
                    Pēc gandrīz 4 gadiem, kritiskā spēlētāju skaita samazināšanās un Flash tehnoloģijas
                    novecošanās dēļ, Ferma slēdz savas durvis. Moderni pārlūki sāka bloķēt Flash saturu. Visi atlikušie spēlētāji saņem 1 miljonu
                    "super naudas" kā atvadu dāvanu.
                  </p>
                  <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 mt-4">
                    <p className="text-sm text-stone-700 italic">
                      "Beidzies vesels laikmets" - Latvijas mediji
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Closed - EXPANDED */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-stone-100 to-stone-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">Kāpēc Fermu Slēdza?</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-200">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">1</div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 mb-2">Flash Tehnoloģijas Beigas</h3>
                    <p className="text-stone-600">
                      Adobe Flash Player bija novecojis un uzņēmums paziņoja par tā atbalsta pārtraukšanu. Moderni pārlūki sāka bloķēt Flash saturu drošības dēļ.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">2</div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 mb-2">Mobilo Spēļu Uzplaukums</h3>
                    <p className="text-stone-600">
                      2010-2013 strauji pieauga viedtālruņu lietotāju skaits. Spēlētāji pārgāja uz mobilajām spēlēm, bet Ferma darbojās tikai datorā.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">3</div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 mb-2">Spēlētāju Skaita Samazināšanās</h3>
                    <p className="text-stone-600">
                      Pēc sākotnējā fenomena, aktīvo spēlētāju skaits pakāpeniski samazinājās. Daudzi pārgāja uz citām spēlēm vai vienkārši pārtrauca spēlēt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Facts */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">Fakti par Fermu</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-orange-50 rounded-2xl border border-orange-100">
                <div className="text-5xl font-bold text-orange-600 mb-2">800K+</div>
                <div className="text-stone-600 font-medium">Unikālie spēlētāji kopā</div>
              </div>

              <div className="text-center p-8 bg-green-50 rounded-2xl border border-green-100">
                <div className="text-5xl font-bold text-green-600 mb-2">100K</div>
                <div className="text-stone-600 font-medium">Vienlaicīgi spēlētāji vakaros</div>
              </div>

              <div className="text-center p-8 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="text-5xl font-bold text-blue-600 mb-2">~4 gadi</div>
                <div className="text-stone-600 font-medium">2010 - 2013</div>
              </div>
            </div>
          </div>
        </section>

        {/* Gameplay Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">Ko darījām Fermā?</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🥕</div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Audzējām dārzeņus</h3>
                <p className="text-stone-600">
                  Burkāni, kartupeļi, labība - viss bija jānovāc īstajā laikā. Daudzi cēlās plkst. 4:00, 7:00 vai 8:00!
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🐄</div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Kopām lopus</h3>
                <p className="text-stone-600">
                  Slaucām govis, cirpām aitas un rūpējāmies par saviem dzīvniekiem.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">👥</div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Apmeklējām kaimiņus</h3>
                <p className="text-stone-600">
                  Palīdzējām draugiem ravēt un laistīt... vai arī "aizņēmāmies" viņu ražu!
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🎣</div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Makšķerējām un sēņojām</h3>
                <p className="text-stone-600">
                  Meža iecirknis un makšķerēšanas vietas pievienoja vēl vairāk iespēju.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Ekonomika un tirdzniecība</h3>
                <p className="text-stone-600">
                  Pārdošana, "super nauda" un virtuālā ekonomika radīja dziļu spēles mehāniku.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🏆</div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Konkurējām ar draugiem</h3>
                <p className="text-stone-600">
                  Kuram ir lielākā ferma? Kas pirmais izaudzēs īpašo augu? Sacensības bija liela daļa!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Impact */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-orange-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Heart className="w-8 h-8 text-orange-500" />
              <h2 className="text-3xl font-bold text-stone-900 text-center">Kultūras fenomens</h2>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100">
              <p className="text-lg text-stone-700 leading-relaxed mb-6">
                Ferma bija vairāk nekā tikai spēle - tā bija digitālā lauku sēta, kur tikās gandrīz
                800 tūkstoši cilvēku no visām sabiedrības grupām. Visi kopā audzēja virtuālos burkānus
                un apkopa pikseļveida aitas, veidojot kopīgu pieredzi, kas apvienoja visu Latviju.
              </p>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 mb-6">
                <p className="text-stone-800 font-medium mb-2">Ietekme uz sabiedrību:</p>
                <ul className="space-y-2 text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Radīja kopīgu pieredzi visai paaudzei</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Ģimenes spēlēja kopā - no bērniem līdz vecvecākiem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Diskusijas par digitālo spēļu lomu sabiedrībā</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Parādīja latviešu spēļu izstrādes potenciālu</span>
                  </li>
                </ul>
              </div>

              <p className="text-stone-600 italic text-center">
                "Ferma bija ne tikai spēle, bet vesels laikmets latviešu interneta kultūrā."
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section - NEW */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">Fermas Mantojums</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
                <h3 className="text-xl font-bold text-purple-900 mb-3">Latvijas Spēļu Industrija</h3>
                <p className="text-purple-800">
                  Ferma pierādīja, ka Latvijā var radīt pasaules līmeņa spēles. Tas iedvesmoja jaunu spēļu izstrādātāju paaudzi.
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl border border-pink-200">
                <h3 className="text-xl font-bold text-pink-900 mb-3">Kultūras Atmiņa</h3>
                <p className="text-pink-800">
                  Vēl šodien cilvēki atceras "burkānu vākšanu" plkst. 4:00 un "kaimiņu apmeklēšanu". Ferma ir daļa no Latvijas interneta vēstures.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Sociālo Spēļu Pionieres</h3>
                <p className="text-blue-800">
                  Ferma bija viena no pirmajām latviešu sociālajām spēlēm, kas parādīja, kā spēles var veidot kopienas.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-3">Nostalģija un Ilgas</h3>
                <p className="text-green-800">
                  Vairāk nekā 10 gadus pēc slēgšanas, cilvēki joprojām piemin Fermu ar siltumu un ilgām pēc tiem laikiem.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-2xl border-2 border-indigo-200">
              <h3 className="text-xl font-bold text-indigo-900 mb-3 flex items-center gap-2">
                <span>🎨</span> Kur ir viņi tagad?
              </h3>
              <p className="text-indigo-800">
                Viens no Fermas galvenajiem dizaineriem, <strong>Sergejs Karpos</strong>, tagad strādā pasaules līmeņa spēļu izstrādes studijā <a href="https://www.artstation.com/rav3nway" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-600 font-bold">Raven Software</a>, kas ir radījusi tādus hitus kā Call of Duty sērija.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section - NEW */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-yellow-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-12">
              <HelpCircle className="w-8 h-8 text-orange-600" />
              <h2 className="text-3xl font-bold text-stone-900">Bieži Uzdotie Jautājumi</h2>
            </div>

            <div className="space-y-4">
              <details className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow group">
                <summary className="font-bold text-lg text-stone-900 cursor-pointer list-none flex justify-between items-center">
                  Kad tika izveidota Ferma?
                  <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-stone-600 mt-4 leading-relaxed">
                  Ferma tika palaista <strong>2010. gadā</strong> Draugiem.lv platformā kā sociālā lauku saimniecības spēle.
                </p>
              </details>

              <details className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow group">
                <summary className="font-bold text-lg text-stone-900 cursor-pointer list-none flex justify-between items-center">
                  Cik cilvēki spēlēja Fermu?
                  <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-stone-600 mt-4 leading-relaxed">
                  Pirmajās sešās dienās Fermu sāka spēlēt <strong>617,899 unikāli lietotāji</strong>. Kopumā spēli ir spēlējuši vairāk nekā <strong>800,000 cilvēku</strong>, kas ir aptuveni trešdaļa no visiem Latvijas iedzīvotājiem tajā laikā! Vakaros spēli vienlaicīgi spēlēja līdz pat <strong>100,000 cilvēku</strong>.
                </p>
              </details>

              <details className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow group">
                <summary className="font-bold text-lg text-stone-900 cursor-pointer list-none flex justify-between items-center">
                  Kāpēc Fermu slēdza?
                  <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-stone-600 mt-4 leading-relaxed">
                  Ferma tika slēgta <strong>2013. gada 30. decembrī</strong> galvenokārt Flash tehnoloģijas novecošanās un spēlētāju skaita samazināšanās dēļ. Mobilo spēļu uzplaukums un Adobe Flash drošības problēmas padarīja neiespējamu turpināt spēles uzturēšanu. Moderni pārlūki sāka bloķēt Flash saturu.
                </p>
              </details>

              <details className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow group">
                <summary className="font-bold text-lg text-stone-900 cursor-pointer list-none flex justify-between items-center">
                  Vai Ferma atgriezīsies?
                  <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-stone-600 mt-4 leading-relaxed">
                  Jā! Strādājam pie Fermas atgriešanās modernā tehniskā izpildījumā, saglabājot to pašu nostalģisko garu un dizainu, kas visiem tik ļoti patika.
                </p>
              </details>

              <details className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow group">
                <summary className="font-bold text-lg text-stone-900 cursor-pointer list-none flex justify-between items-center">
                  Kurā platformā darbojās Ferma?
                  <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-stone-600 mt-4 leading-relaxed">
                  Ferma darbojās <strong>Draugiem.lv</strong> sociālajā tīklā. Tā bija pirmā latviešu <strong>Flash spēle</strong>, kas strādāja tiešsaistē bez lejupielādes.
                </p>
              </details>

              <details className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow group">
                <summary className="font-bold text-lg text-stone-900 cursor-pointer list-none flex justify-between items-center">
                  Vai Ferma bija bezmaksas?
                  <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-stone-600 mt-4 leading-relaxed">
                  Jā, Ferma bija <strong>bezmaksas online spēle</strong> ar iespējamiem premium pirkumiem ("super nauda"), kas ļāva paātrināt progresu vai iegādāties īpašas lietas.
                </p>
              </details>

              <details className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow group">
                <summary className="font-bold text-lg text-stone-900 cursor-pointer list-none flex justify-between items-center">
                  Kādas citas spēles bija līdzīgas Fermai?
                  <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-stone-600 mt-4 leading-relaxed">
                  Pasaulē populāra bija <strong>FarmVille</strong> (Facebook), bet Ferma bija unikāla tieši Latvijas kontekstā. Draugiem.lv platformā vēlāk parādījās arī <strong>Eksotiskā Ferma</strong>, <strong>Lielpilsēta</strong> un citas līdzīgas sociālās spēles.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Why We're Bringing It Back */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 to-orange-700">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Kāpēc atgriežamies?</h2>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              Jau vairāk nekā 10 gadi ir pagājuši kopš Fermas slēgšanas. Taču atmiņas paliek -
              par agrā rīta novākšanu, kaimiņu burkānu "aizņemšanos" un gandarījumu par labi
              iekoptu fermu.
            </p>
            <p className="text-2xl font-bold text-white mb-8">
              Ir pienācis laiks atgriezties vagās.
            </p>
            <a
              href="/#waitlist"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-orange-50 transition-colors text-lg shadow-xl"
            >
              Piesakies jaunumiem
            </a>
          </div>
        </section>
      </main>

      <Footer content={content.footer} />
    </div>
  );
}
