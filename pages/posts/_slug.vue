<template>
  <div :key="$route.params.slug">
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
    const res = await import(`~/content/posts/${params.slug}.md`)
    return {
      attributes: res.attributes,
      content: res.html
    }
  }
}
</script>
