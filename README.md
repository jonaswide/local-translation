# Local translation in React app
An example of an internationalized app in React without an external framework to handle translations.


## Try it yourself
If you would like to run the example you can first install dependencies:
```javascript
npm i
```
And then start the project (localhost:8080):
```javascript
npm start
```


## Overview
This repo serves as an example of how to structure and handle translations in your React (or whatever JS) app. The goal is to eliminate the necessity of using an external dependency and maintain simplicity of structure.
You will get an overview of how to implement and handle translations in your own app.
Plug and play code is a thing!

## Setup
Translations are handled in a seperate `translations.js` file in the folder of each feature that requires local translations.

Each translation file contains translations for all necessary languages:
```javascript
// Components/Text/translation.js

const translation = {
  title: {
    en: "Goats are beautiful",
    dk: "Geder er smukke",
    fr: "Les chèvres sont belles"
  },

  text: {
    en: "To be or not to be. That's the question.",
    dk: "At være eller ikke at være. Det er spørgsmålet.",
    fr: "Être ou ne pas être. Telle est la question."
  }
}

export default translation
```

To output the translated content, simply import the translation file and refer to the piece of content you desire:
```javascript
import translation from './translation'

export const Text = (props) => {
  const { lang } = props
  return <p>{translation.text[lang]}</p>
}

export default Text
```
This repo is completely unopinionated on how you create your components - and in which framework, if any at all. This example is just a stateless component receiving props from its parent React container.

The only thing you need to do is:
* Import a translation file.
* Write text to the DOM.
* Read active lang to determine which language to use (see next chapter).


## Handle active language
In this example the active language is simply handled in the state of the parent container, `app.js`, and passed to its children as props.
You can technically handle the active language in whatever way you're used to handle the state of your app.

### Redux (or whatever Flux)
If you're using Redux or another Flux opinionated state handling philosophy you can handle the active lang in the root of the store which is then passed to the respective children as props. If this is not clear I recommend you to [read the Redux documentation](http://redux.js.org/ "Redux documentation").

### URL
If your website is not based on a JS environment but perhaps some CMS, PHP Symfony or whatever, and you need to access the active language from elsewhere, some websites choose to prefix the URL with a lang code.
For example: `http://somewebsite.com/fr/`

In javascript you can grab the prefix and base your active lang on it:
```javascript
const lang = window.location.pathname.split('/')[1] // "fr"

document.getElementById('text').innerHTML = translation.text[lang]
```

### Local storage
You can write the active lang to the browser's local storage like this:
```javascript
localStorage.setItem('lang', 'fr')

const lang = localStorage.getItem("lang") // "fr"
document.getElementById('text').innerHTML = translation.text[lang]
```

### jQuery


## Pros and cons
### Pros
* Easy to initialize because you can slowly implement it for separate components without affecting any existing code.
* Very convenient having all the translations for the same piece of content together compared to different files.
* Universal content can be kept in a high level `translation.js` file and be imported when necessary.
* All javascript, so no need for HTTP requests for JSON files.

### Cons
* When you need to add a new language you have to go over every translation file and add the translation for each piece of content.

_Personal note:_ Based on my own experience with this methodology I haven't stumbled upon any other down sides. I would love to hear if you have any concerns or feedback on this as I also want to both produce the best possible code and help others do the same.
