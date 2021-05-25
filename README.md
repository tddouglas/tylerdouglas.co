# tylerdouglas.co
tylerdouglas.co source code

# Website Creation Steps

## Install node
- Linux (installs NPM too):
    - `curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash`
- Mac (I use Homebrew)
    - `brew install node@16.1`
    - `brew install npm@7.11.2`

## Install Express
- `npm install express`
- `npm install -g express-generator`
    - generator used to create skeleton boilor plate for express project

## Setup project
- `express --view=hbs {{parent_folder}}`
    - using HBS as template engine as it seemed to be the most active handlebar based engine. Wanted to use handlebars as looked most similar to what I am familiar with. 
- cd `{{parent_folder}}`
- `npm install`
    - install node dependancies
- run `DEBUG={{parent_folder}}:* npm start` to start website
    - navigate to localhost:3000 to view