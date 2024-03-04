<template>
  <div class="lg:-mx-48 md:-mx-12 xl:-mx-68">
    <pre class="overflow-auto whitespace-pre-wrap break-words rounded-lg p-8" style="background-color:#282A36;color:#F8F8F2" tabindex="0"><code><span><span style="color:#6272A4">// CV tcastanie</span></span>
<span />
<span><span style="color:#FF79C6">class</span><span style="color:#8BE9FD"> Link</span><span style="color:#F8F8F2"> {</span></span>
<span><span style="color:#FF79C6">  constructor</span><span style="color:#F8F8F2"> (</span><span style="color:#FFB86C;font-style:italic">name</span><span style="color:#F8F8F2">, </span><span style="color:#FFB86C;font-style:italic">url</span><span style="color:#F8F8F2">) {</span></span>
<span><span style="color:#BD93F9;font-style:italic">    this</span><span style="color:#F8F8F2">.name </span><span style="color:#FF79C6">=</span><span style="color:#F8F8F2"> name</span></span>
<span><span style="color:#BD93F9;font-style:italic">    this</span><span style="color:#F8F8F2">.url </span><span style="color:#FF79C6">=</span><span style="color:#F8F8F2"> url</span></span>
<span><span style="color:#F8F8F2">  }</span></span>
<span><span style="color:#F8F8F2">}</span></span>
<span />
<span><span style="color:#FF79C6">const</span><span style="color:#F8F8F2"> title </span><span style="color:#FF79C6">=</span><span style="color:#E9F284"> '</span><span style="color:#F1FA8C">Thibaut Castanié</span><span style="color:#E9F284">'</span></span>
<span><span style="color:#FF79C6">const</span><span style="color:#F8F8F2"> subtitle </span><span style="color:#FF79C6">=</span><span style="color:#E9F284"> '</span><span style="color:#F1FA8C">Développeur web front-end indépendant</span><span style="color:#E9F284">'</span></span>
<span><span style="color:#FF79C6">const</span><span style="color:#F8F8F2"> picture </span><span style="color:#FF79C6">=</span><span style="color:#E9F284"> '</span><span style="color:#F1FA8C">tcastanie.jpg</span><span style="color:#E9F284">'</span></span>
<span><span style="color:#FF79C6">const</span><span style="color:#F8F8F2"> location </span><span style="color:#FF79C6">=</span><span style="color:#E9F284"> '</span><span style="color:#F1FA8C">Montpellier</span><span style="color:#E9F284">'</span></span>
<span><span style="color:#FF79C6">const</span><span style="color:#F8F8F2"> description </span><span style="color:#FF79C6">=</span><span style="color:#E9F284"> '</span><span style="color:#F1FA8C">Fort de 8 ans d</span><span style="color:#FF79C6">\'</span><span style="color:#F1FA8C">expériences professionnelles dans le développement web front-end, ainsi que la création &amp; gestion d</span><span style="color:#FF79C6">\'</span><span style="color:#F1FA8C">une entreprise, je me suis spécialisé dans une gamme d</span><span style="color:#FF79C6">\'</span><span style="color:#F1FA8C">outils incluant Vue.js, Nuxt, Tailwind et Directus.</span><span style="color:#E9F284">'</span></span>
<span />
<span><span style="color:#FF79C6">const</span><span style="color:#F8F8F2"> links </span><span style="color:#FF79C6">=</span><span style="color:#F8F8F2"> [</span></span>
<span><span style="color:#FF79C6;font-weight:bold">  new</span><span style="color:#50FA7B"> Link</span><span style="color:#F8F8F2">(</span><span style="color:#E9F284">'</span><span style="color:#F1FA8C">GitHub</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">, </span><span style="color:#E9F284">'</span><span style="color:#F1FA8C">https://github.com/tcastanie</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">),</span></span>
<span><span style="color:#FF79C6;font-weight:bold">  new</span><span style="color:#50FA7B"> Link</span><span style="color:#F8F8F2">(</span><span style="color:#E9F284">'</span><span style="color:#F1FA8C">LinkedIn</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">, </span><span style="color:#E9F284">'</span><span style="color:#F1FA8C">https://www.linkedin.com/in/tcastanie</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">)</span></span>
<span><span style="color:#F8F8F2">]</span></span>
<span />
<span><span style="color:#FF79C6">const</span><span style="color:#F8F8F2"> experiences </span><span style="color:#FF79C6">=</span><span style="color:#F8F8F2"> [</span></span>
<span><span style="color:#F8F8F2">  {</span></span>
<span><span style="color:#F8F8F2">    title</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> '</span><span style="color:#F1FA8C">Développeur web freelance</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#F8F8F2">    location</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> '</span><span style="color:#F1FA8C">Montpellier</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#F8F8F2">    startDate</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> '</span><span style="color:#F1FA8C">2023-09-01</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#F8F8F2">    endDate</span><span style="color:#FF79C6">:</span><span style="color:#FF79C6;font-weight:bold"> new</span><span style="color:#50FA7B"> Date</span><span style="color:#F8F8F2">(),</span></span>
<span><span style="color:#F8F8F2">    description</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> ''</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#F8F8F2">    missions</span><span style="color:#FF79C6">:</span><span style="color:#F8F8F2"> [</span></span>
<span><span style="color:#E9F284">      '</span><span style="color:#F1FA8C">Création d</span><span style="color:#FF79C6">\'</span><span style="color:#F1FA8C">un site web de réservations de gîtes, de cours de dressage et d'achat de chiens de troupeau. Développement complet du front full-static, déploiement du back-office sur mesure via un CMS et paiements. Accompagnement, aide à la contribution et support continu.</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#E9F284">      '</span><span style="color:#F1FA8C">Formation continue aux dernières versions des outils de l</span><span style="color:#FF79C6">\'</span><span style="color:#F1FA8C">écosystème Nuxt et Vue</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#E9F284">      '</span><span style="color:#F1FA8C">Développement de mini projets personnels</span><span style="color:#E9F284">'</span></span>
<span><span style="color:#F8F8F2">    ]</span></span>
<span><span style="color:#F8F8F2">  },</span></span>
<span><span style="color:#F8F8F2">  {</span></span>
<span><span style="color:#F8F8F2">    title</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> '</span><span style="color:#F1FA8C">Ingénieur étude et développement</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#F8F8F2">    company</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> '</span><span style="color:#F1FA8C">Smile</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#F8F8F2">    location</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> '</span><span style="color:#F1FA8C">Montpellier</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#F8F8F2">    startDate</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> '</span><span style="color:#F1FA8C">2021-02-01</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#F8F8F2">    endDate</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> '</span><span style="color:#F1FA8C">2023-04-30</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#F8F8F2">    description</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> '</span><span style="color:#F1FA8C">Développeur et intégrateur front-end de sites e-commerce complexes.</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#F8F8F2">    missions</span><span style="color:#FF79C6">:</span><span style="color:#F8F8F2"> [</span></span>
<span><span style="color:#E9F284">      '</span><span style="color:#F1FA8C">Gestion complète du front Snowleader, intégration de fonctionnalités (dont SSR, SEO, tests unitaires), optimisations des performances (web, scores SEO et paiements), amélioration continue et support.Accompagnement d</span><span style="color:#FF79C6">\'</span><span style="color:#F1FA8C">un alternant et d</span><span style="color:#FF79C6">\'</span><span style="color:#F1FA8C">un stagiaire.</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#E9F284">      '</span><span style="color:#F1FA8C">Intégration web de maquettes (Avène, Aderma, Klorane)</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#E9F284">      '</span><span style="color:#F1FA8C">Aide ponctuelle sur d</span><span style="color:#FF79C6">\'</span><span style="color:#F1FA8C">autres projets</span><span style="color:#E9F284">'</span></span>
<span><span style="color:#F8F8F2">    ]</span></span>
<span><span style="color:#F8F8F2">  },</span></span>
<span><span style="color:#F8F8F2">  {</span></span>
<span><span style="color:#F8F8F2">    title</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> '</span><span style="color:#F1FA8C">Co-fondateur &amp; Président</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#F8F8F2">    company</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> '</span><span style="color:#F1FA8C">Qyrolab</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#F8F8F2">    location</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> '</span><span style="color:#F1FA8C">Montpellier</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#F8F8F2">    startDate</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> '</span><span style="color:#F1FA8C">2019-03-01</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#F8F8F2">    endDate</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> '</span><span style="color:#F1FA8C">2020-09-30</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#F8F8F2">    description</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> ''</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#F8F8F2">    missions</span><span style="color:#FF79C6">:</span><span style="color:#F8F8F2"> [</span></span>
<span><span style="color:#E9F284">      '</span><span style="color:#F1FA8C">Création et gestion d</span><span style="color:#FF79C6">\'</span><span style="color:#F1FA8C">une société dans le domaine du jeu-vidéo et de l</span><span style="color:#FF79C6">\'</span><span style="color:#F1FA8C">apprentissage. (EdTech)</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#E9F284">      '</span><span style="color:#F1FA8C">Développement de Grammaticus, un jeu mobile d’apprentissage de la grammaire française à destination des enfants en ﬁn du primaire.</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#E9F284">      '</span><span style="color:#F1FA8C">Création de Gameji, une application web &amp; mobile permettant de créer et partager son jeu en quelques minutes.</span><span style="color:#E9F284">'</span></span>
<span><span style="color:#F8F8F2">    ]</span></span>
<span><span style="color:#F8F8F2">  },</span></span>
<span><span style="color:#F8F8F2">  {</span></span>
<span><span style="color:#F8F8F2">    title</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> '</span><span style="color:#F1FA8C">Ingénieur front-end</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#F8F8F2">    company</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> '</span><span style="color:#F1FA8C">SATT AxLR / WeAreLearning</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#F8F8F2">    location</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> '</span><span style="color:#F1FA8C">Montpellier</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#F8F8F2">    startDate</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> '</span><span style="color:#F1FA8C">2017-01-01</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#F8F8F2">    endDate</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> '</span><span style="color:#F1FA8C">2018-11-30</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#F8F8F2">    description</span><span style="color:#FF79C6">:</span><span style="color:#E9F284"> ''</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#F8F8F2">    missions</span><span style="color:#FF79C6">:</span><span style="color:#F8F8F2"> [</span></span>
<span><span style="color:#E9F284">      '</span><span style="color:#F1FA8C">Développement d</span><span style="color:#FF79C6">\'</span><span style="color:#F1FA8C">une plateforme proposant une solution complète pour créer des jeux sérieux dans le domaine de la formation et de la RH. (1 an et demi sous contrat avec la SATT AxLR)</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#E9F284">      '</span><span style="color:#F1FA8C">Maintenance et amélioration continue de la plateforme.</span><span style="color:#E9F284">'</span></span>
<span><span style="color:#F8F8F2">    ]</span></span>
<span><span style="color:#F8F8F2">  }</span></span>
<span><span style="color:#F8F8F2">]</span></span>
<span />
<span><span style="color:#FF79C6">const</span><span style="color:#F8F8F2"> skills </span><span style="color:#FF79C6">=</span><span style="color:#F8F8F2"> [</span></span>
<span><span style="color:#E9F284">  '</span><span style="color:#F1FA8C">Vue.js</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#E9F284">  '</span><span style="color:#F1FA8C">Nuxt</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#E9F284">  '</span><span style="color:#F1FA8C">Tailwind</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#E9F284">  '</span><span style="color:#F1FA8C">UnoCSS</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#E9F284">  '</span><span style="color:#F1FA8C">git</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#E9F284">  '</span><span style="color:#F1FA8C">Unit testing</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#E9F284">  '</span><span style="color:#F1FA8C">Directus</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#E9F284">  '</span><span style="color:#F1FA8C">Apollo GraphQL</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#E9F284">  '</span><span style="color:#F1FA8C">JAMstack / SSG</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#E9F284">  '</span><span style="color:#F1FA8C">SEO</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#E9F284">  '</span><span style="color:#F1FA8C">JavaScript</span><span style="color:#E9F284">'</span><span style="color:#F8F8F2">,</span></span>
<span><span style="color:#E9F284">  '</span><span style="color:#F1FA8C">TypeScript</span><span style="color:#E9F284">'</span></span>
<span><span style="color:#F8F8F2">]</span></span>
<span />
<span><span style="color:#FF79C6">export</span><span style="color:#FF79C6"> const</span><span style="color:#50FA7B"> cv</span><span style="color:#FF79C6"> =</span><span style="color:#F8F8F2"> () </span><span style="color:#FF79C6">=&gt;</span><span style="color:#F8F8F2"> {</span></span>
<span><span style="color:#FF79C6">  return</span><span style="color:#F8F8F2"> ({</span></span>
<span><span style="color:#F8F8F2">    title,</span></span>
<span><span style="color:#F8F8F2">    subtitle,</span></span>
<span><span style="color:#F8F8F2">    picture,</span></span>
<span><span style="color:#F8F8F2">    location,</span></span>
<span><span style="color:#F8F8F2">    links,</span></span>
<span><span style="color:#F8F8F2">    description,</span></span>
<span><span style="color:#F8F8F2">    experiences,</span></span>
<span><span style="color:#F8F8F2">    skills</span></span>
<span><span style="color:#F8F8F2">  })</span></span>
<span><span style="color:#F8F8F2">}</span></span>
<span /></code></pre>
  </div>
</template>
