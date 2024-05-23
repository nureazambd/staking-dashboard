
## Overview

The repo is split into a number of packages, each representing an application.


## Development

Contributions are welcome!

To start off, this repo uses yarn workspaces to organize the code. As such, after cloning dependencies _should_ be installed via `yarn`, not via npm, the latter will result in broken dependencies.

To get started -

1. Clone the repo locally, via `git clone https://github.com/Devolved-AI/Argoscan.git`
2. Ensure that you have a recent LTS version of Node.js, for development purposes [Node >= 16](https://nodejs.org/en/) is recommended.
#### install Node.js on Ubuntu:
```js
sudo apt update
sudo apt install nodejs
node -v
```
#### Using Node Version Manager (NVM):
##### Install NVM by running this script: 
``` js
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    source ~/.bashrc
    nvm install node  # for the latest version
    nvm install 16.13.0  # for a specific version
    node -v
```

3. Ensure that you have a recent version of Yarn, for development purposes [Yarn >= 1.22](https://yarnpkg.com/docs/install) is required.

#### Using the Yarn Debian package repository
``` js
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install --no-install-recommends yarn
sudo apt install yarn
yarn --version

```
#### If you have npm installed (npm comes with Node.js), you can install Yarn globally through npm:
```js
npm install -g yarn
yarn --version
```
4. Install the dependencies by running `yarn`
5. Ready! Now you can launch the UI (assuming you have a local Polkadot Node running), via `yarn run start`
6. Access the UI via [http://localhost:5000](http://localhost:5000)
