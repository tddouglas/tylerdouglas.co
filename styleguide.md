# Contribution Guide

*A mostly reasonable approach to JavaScript*

> **Note**: this guide assumes you are using [Babel](https://babeljs.io), and requires that you use [babel-preset-airbnb](https://npmjs.com/babel-preset-airbnb) or the equivalent. It also assumes you are installing shims/polyfills in your app, with [airbnb-browser-shims](https://npmjs.com/airbnb-browser-shims) or the equivalent.


## Table of Contents

1. [Style Guide](#style-guide)
    - [HTML/CSS/JS naming conventions](#html-css-naming)
    - [JS best practices](#js-best-practices)
    - [Style Guide references](#style-guide-references)
1. Other


## Style Guide
### HTML CSS Naming
#### Rules
1. Never use camelCase. Everything should be lower case, hyphen delimited. The only exception is Adyen functions such as `paymentMethods` which can use camelCase as it is already built into the naming convention.
1. Follow BEM naming conventions. Please see the [Style Guide references](#style-guide-references) for more in-depth articles on this. As a general guide, BEM stands for `Block__Element--Modifier`. Your BEM name should try to address three points:
    - What a selector does?
    - Where a selector is used?
    - Relationship between parent and child components.
1. When using BEM, you should try to avoid the following:
    - Deeply nested elements/modifiers. You should never end up with Block__Element__Element__Element...<br />Keep your element tags to a single, descriptive "__Element"
    - "Mix" relation elements. E.g. a modifier like `c-card__c-button` to denote a special relationship for a `c-card` nested in a `c-button`. A better approach would be to specify the minor cosmetic change in its own class. So the full classname would become `c-button c-button--rounded...`. Major changes you should a different modifier all together.
1. Use the "rel" attribute to specify which JS file an HTML element references/is used in. E.g. `<div class="site-navigation" rel="js-site-navigation">`
1. While not technically BEM, you should use standalone classnames to manage state e.g. `is-active`
1. [Namespace](#namespacing) your elements. See below for more information.

#### Namespacing
When naming HTML elements, they should be prefaced with a namespace indicating the function of the element. Please see the below table for more information regarding namespace prefixes and when to use them.

| Type             | Prefix            | Elements                        | Description                                                                                                                                                                  |
|------------------|-------------------|---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Component        | `c-`              | `c-card`,<br />`c-checklist`    | Form the backbone of an application and contain all cosemetics for a standalone componet                                                                                     |
| Layout module    | `l-`              | `l-grip`,<br />`l-container`    | These modules have no cosmetics and are purely used to position `c-` components and structure an application's layout                                                        |
| Helpers          | `h-`              | `h-show`,<br />`h-hide`         | These utility classes have a single function, often using `!important` to boost their specificity. (Commonly used for positioning or visibility.)                            |
| States           | `is-`,<br />`has-`| `is-visible`,<br />`has-loaded` | Indicate different states that a c- component can have                                                                                                                       |
| JavaScript hooks | `js-`             | `js-tab-switcher`               | These indicate that JavaScript behavior is attached to a component. No styles should be associated with them; they are purely used to enable easier manipulation with script |

#### ID, ClassName, neither, or both?
Frequently, you may ask yourself when exactly you need to add a ClassName or ID to an HTML element. As a general rule of thumb, an ID or ClassName should only be added when absolutely necessary. ClassNames should focus on applying attributes to style the page, modifying the state of an existing component, or creating a JS tag for multiple elements. If you anticipate selecting a specific html tag via JS, you should add a unique identifier under the `id` field as the preferred JS method for selecting items is `document.getElementById()`. For more complex queries, you should use `document.querySelector()`
### JS Best Practices
### Style Guide references
- [AirBnB Contribution.md guide](https://github.com/airbnb/javascript/blob/master/README.md)
- [How to build a Contribution.md](http://mozillascience.github.io/working-open-workshop/contributing/)
- [CSS Naming convention and intro to BEM](https://www.freecodecamp.org/news/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849/)
- [BEM best practices](https://www.smashingmagazine.com/2016/06/battling-bem-extended-edition-common-problems-and-how-to-avoid-them/)
- [Taking BEM a bit futher](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/)