# Gotchas and helpful notes

## App files and folders

*   all stateful class components go into 'stateful_components' \*
*   all stateless functional components go into 'stateless_components'

## JSX

In html we have to use string-literals (not variables)

```html
    <li>first item</li>
```

In jsx we can use variables and html together, any javascript inside html-tags will only be recognized as javascript if it's between curly-braces. here's how you could do the above

```jsx
const listItem = "first item"
() => (
    <div>
    /* jsx is a little strange at first but it's not that bad */
        <li> { numberArray } </li>
    /* this works here too */
        <li>first item</li>
    </div>)
```

## Syntactical differences from html

*   use className instead of class on markup tags
*   for most things, use camel casing (onclick => onClick, onload => onLoad, onwhatever => onWhatever)

## Links to more on this in the react docs

*   [jsx](https://reactjs.org/docs/introducing-jsx.html)
*   [jsx in-depth](https://reactjs.org/docs/jsx-in-depth.html)
*   [code-along](https://byu-react-demo.stackblitz.io)
