# Nuxt: Simple Tooltip Wrapper Component

You can specify the title / description inline, or in `nuxt.config.ts`, you can also specify the "symbol" in lieu of specifying it inline repeatedly.

```vue
  <li>
    <Hinted title="Boo!" desc="I'm a spoopy ghost!">👻</Hinted>
    Item #1
  </li>
  <li><Hinted type="zap">⚡️</Hinted> Item #2</li>
  <li><Hinted type="explode" /> Item #3</li>
```

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/example-nuxt-tooltip-wrapper)
