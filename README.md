# Local translation in React app
## You might not need a framework

```javascript
npm i
```
```javascript
npm start
```

---

An example of an internationalized app in React without an external framework to handle translations.
Translations are handled in a seperate `translations.js` file in the folder of each feature that requires local translations.

Each translation file contains translations for all necessary languages:
```javascript
const translation = {
  text: {
    en: "To be or not to be. That's the question.",
    dk: "At være eller ikke at være. Det er spørgsmålet.",
    fr: "Etre ou n'être pas. C'est la question."
  }
}
```

In this example the active language is simply handled in the state of the parent container, `app.js`, and passed to its children. You can base the handling of the active language in whatever way you're used to handle the state of your app. I would switch to Redux and keep the active lang in the root of the store which is then passed to the respective children.

To output the translated content, simply import the translation file and refer to the piece of content you desire:
```javascript
import translation from './translation'

export const Text = (props) => {
  const { lang } = props
  return <p>{translation.text[lang]}</p>
}
```
