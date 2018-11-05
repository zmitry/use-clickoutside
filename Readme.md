# use-clickoutside

React hook for outside clicks

```jsx
import \* as React from 'react'
import useOutsideClick from 'use-clickoutside'

export default function App({ close }) {
const ref = useOutsideClick(close)

return <div ref={ref}>content</div>
}
```
