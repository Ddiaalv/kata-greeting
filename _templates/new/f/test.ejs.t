---
to: src/<%= path %>/<%= name %>/<%= name %>.spec.ts
---

import { <%= name %> } from './<%= name %>'

test('Function description: ', () => {
  expect(<%= name %>()).toBe(undefined)
})
