---
title: A propos de lorem Ipsum
date: 2019-05-10
cover: https://picsum.photos/1600/800?grayscale&random=1
---

## Qu'est-ce que le Lorem Ipsum ?

Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.

## Code example

```js
<template>
  <div>
    <section class="hero is-medium is-dark is-bold" :style="{ background: 'url('+ attributes.cover +')' }">
      <div class="hero-body">
        <h1 class="title is-size-2">
          {{ attributes.title }}
        </h1>
        <h2 v-if="attributes.date" class="subtitle">
          {{ new Date(attributes.date).toLocaleDateString() }}
        </h2>
      </div>
    </section>
    <div class="container">
      <div class="content has-text-justified" v-html="content"/>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ params }) {
    const res = await import(`~/content/posts/article-1.md`)
    return {
      attributes: res.attributes,
      content: res.html
    }
  }
}
</script>
```
