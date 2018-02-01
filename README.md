# emojis.css

### NPM
```sh
npm i emojis.css
```

### CDN
```html
<link rel="stylesheet" href="https://unpkg.com/emojis.css@1.0.0/emojis.css">
```

### Usage
Simply add an `<i></i>` wherever you'd like an emoji. The names follow Github's naming convention for emojis. Just add an `emo-` prefix to the shortcode and you got your class name. [Check here](https://gist.github.com/rxaviers/7360908) for an exhaustive shortcode list. Then, if you wanna play it safe, look for the desired emoji [on the demo](https://dillonchr.github.io/emojis.css).

`<i class="emo-smiley"></i>`

> :smiley:

## Why this?
I was always searching for emojis to use in projects and wound up copying and pasting them from search results. I saw stylesheets that offered png-backed emojis but I wanted to just deliver the natural emojis for the device. Some people called me crazy. Others said it couldn't be done. I didn't check to see if it already had been ([it has](https://github.com/IonicaBizau/emoji.css)). But without further ado, I present the native emoji stylesheet, *emojis.css*.

## Native as in no icons are provided
This stylesheet uses the same (at the very least: similar) naming scheme as github. In fact I just scraped [this gist](https://gist.github.com/rxaviers/7360908) and converted what wasn't an image to CSS-friendly character codes. UTF-8? I think? To be honest I haven't done a buttload of homework on this project. I had simple needs and this is a simple fix.

## Links
* [Early work and process](https://gist.github.com/dillonchr/897f9c98955234264eee4a2bcf2339ca)
* [Demo](https://dillonchr.github.io/emojis.css)
