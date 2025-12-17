'use client';

import React, { useState } from 'react';
import { Language } from '@/lib/types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CONTENT } from '@/lib/constants';
import { Calendar, Users, Trophy, Heart, TrendingDown, Sparkles } from 'lucide-react';

export default function VesturePage() {
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
              Stāsts par spēli, kas apvienoja gandrīz 618,000 latviešus un kļuva par veselu laikmetu
            </p>
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
                  <h3 className="text-xl font-bold text-stone-900 mb-3">Leģendas dzimšana</h3>
                  <p className="text-stone-600 leading-relaxed mb-4">
                    SIA "apiEasy.com" izveido Fermu platformai draugiem.lv. Spēle kļūst par tūlītēju sensāciju -
                    pirmajās sešās dienās piesaista <strong>617,899 spēlētājus</strong>. Latvijā ar ~2 miljoniem
                    iedzīvotāju, tas ir fenomenāls sasniegums.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-stone-500">
                    <Users className="w-4 h-4" />
                    Platforma: draugiem.lv
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
                    Ferma sasniedz ~350,000 reģistrētu lietotāju un kļūst par #1 spēli draugiem.lv.
                    To spēlē visi - ministri, skolēni, pensionāri. Radīta vesela spēļu ģimene:
                    Eksotiskā ferma, Zombie ferma, Gardezu ferma.
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
                    novecošanās dēļ, Ferma slēdz savas durvis. Visi atlikušie spēlētāji saņem 1 miljonu
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

        {/* Key Facts */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">Fakti par Fermu</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-orange-50 rounded-2xl border border-orange-100">
                <div className="text-5xl font-bold text-orange-600 mb-2">617,899</div>
                <div className="text-stone-600 font-medium">Spēlētāji pirmajās 6 mēnešos</div>
              </div>

              <div className="text-center p-8 bg-green-50 rounded-2xl border border-green-100">
                <div className="text-5xl font-bold text-green-600 mb-2">~350K</div>
                <div className="text-stone-600 font-medium">Reģistrētie lietotāji maksimumā</div>
              </div>

              <div className="text-center p-8 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="text-5xl font-bold text-blue-600 mb-2">4 gadi</div>
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
                <h3 className="text-xl font-bold text-stone-900 mb-2">Zvejojām un mežojām</h3>
                <p className="text-stone-600">
                  Meža iecirknis un zvejas vietas pievienoja vēl vairāk iespēju.
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
                618,000 cilvēku no visām sabiedrības grupām. Ministri un skolēni, bezdarbnieki un
                uzņēmēji - visi kopā audzēja virtuālos burkānus un apkopa pikseļveida aitas.
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
                    <span>Pierādīja Latvijas spēļu industrijas potenciālu</span>
                  </li>
                </ul>
              </div>

              <p className="text-stone-600 italic text-center">
                "Ferma bija ne tikai spēle, bet vesela Latvijas interneta kultūras laikmets."
              </p>
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
