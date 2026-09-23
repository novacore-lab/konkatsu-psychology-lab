---
layout: default
main_class: home-main
description: "婚活サービス選びを心理学の視点で整理。無料の婚活タイプ診断と、目的別の記事から、自分に合う進め方を見つけましょう。"
---
<div class="editorial-home">
  <div class="home-disclosure">当サイトには広告・プロモーションが含まれます。</div>
  <section class="editorial-hero">
    <div class="editorial-hero-copy">
      <p class="eyebrow">PSYCHOLOGY × PARTNERSHIP</p>
      <h1>誰かの正解より、<br><span>あなたに合う</span><br>婚活を。</h1>
      <p class="hero-description">迷いや焦りを、選ぶためのヒントに。<br>心理学の視点から、自分らしい婚活の進め方を<br class="desktop-break">一緒に整理していきましょう。</p>
      <div class="hero-actions"><a class="primary-link" href="{{ '/shindan/' | relative_url }}">自分の婚活タイプを知る <span aria-hidden="true">↗</span></a><a class="text-link" href="#latest-articles">記事から探す <span aria-hidden="true">↓</span></a></div>
      <p class="hero-caption">無料・登録不要 ／ 5つの質問・約30秒</p>
    </div>
    <figure class="editorial-hero-visual"><img src="{{ '/assets/img/hero/editorial-couple.jpg' | relative_url }}" alt="カフェで落ち着いて会話する二人のイメージ" width="1536" height="1024" fetchpriority="high"><figcaption><span>OUR POINT OF VIEW</span>出会いの数より、選び方を大切に。</figcaption></figure>
  </section>
  <nav class="topic-nav" aria-label="カテゴリーから探す">
    <a href="{{ '/category/matching-app/' | relative_url }}"><span class="topic-number">01</span><strong>アプリを選ぶ</strong><span>目的・使い方から比較</span><b aria-hidden="true">↗</b></a>
    <a href="{{ '/category/kekkon-sodanjo/' | relative_url }}"><span class="topic-number">02</span><strong>相談所を選ぶ</strong><span>料金とサポートを知る</span><b aria-hidden="true">↗</b></a>
    <a href="{{ '/category/zokusei-tokka/' | relative_url }}"><span class="topic-number">03</span><strong>自分に合う婚活</strong><span>年齢・暮らし・価値観から</span><b aria-hidden="true">↗</b></a>
    <a href="{{ '/category/nayami-shinri/' | relative_url }}"><span class="topic-number">04</span><strong>悩みと心理</strong><span>疲れや迷いを整理する</span><b aria-hidden="true">↗</b></a>
  </nav>
  <section class="editorial-articles" id="latest-articles">
    <div class="section-title"><div><p class="eyebrow">JOURNAL</p><h2>選ぶ前に、読んでおきたいこと。</h2></div><span>婚活のヒントを、ひとつずつ。</span></div>
    <ul class="post-list">
    {% for post in site.posts %}
      <li><a class="thumb" href="{{ post.url | relative_url }}" tabindex="-1" aria-hidden="true"><img src="{{ post.image | relative_url }}" alt="" loading="lazy" width="1200" height="630"></a><div class="post-list-body"><div>{% for cat in post.categories %}<span class="tag" data-cat="{{ cat }}">{{ cat }}</span>{% endfor %}</div><a class="title" href="{{ post.url | relative_url }}">{{ post.title }}</a><div class="article-meta"><time>{{ post.date | date: "%Y.%m.%d" }}</time><span aria-hidden="true">↗</span></div></div></li>
    {% endfor %}
    </ul>
  </section>
  <section class="editorial-diagnosis"><div><p class="eyebrow">FIND YOUR OWN WAY</p><h2>まずは、自分を知るところから。</h2><p>5つの質問で、婚活スタイルの傾向を整理。<br>あなたに合う進め方を考えるヒントが見つかります。</p></div><div><a class="primary-link" href="{{ '/shindan/' | relative_url }}">無料タイプ診断をはじめる <span aria-hidden="true">↗</span></a><p class="hero-caption">登録不要・約30秒</p></div></section>
  <section class="editorial-about"><p class="eyebrow">ABOUT THE LAB</p><h2>納得して選ぶ、そのためのメディア。</h2><p>料金や評判だけで決める前に、「なぜ気になるのか」を考える。<br>婚活心理ラボは、心理学の視点を手がかりに、あなた自身の判断を支えます。</p><a class="text-link" href="{{ '/about/' | relative_url }}">私たちの考え方 <span aria-hidden="true">↗</span></a></section>
</div>
