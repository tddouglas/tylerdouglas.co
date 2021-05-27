# tylerdouglas.co
tylerdouglas.co source code

# Website Creation Steps

## Assumptions
- Moderate bash/programming experience 
- You've already signed up for Lightsail

## Setup connection to VPS
- Get Amazon Lightsail keypair
    - In your lightsail portal, click Account >> Account >> SSH keys
    - Download the default private key by clicking the "Download" button
    - If you're on mac like me, you won't be able to immediately import this key due to permission issues. You will want to right click on the key file, click "Get Info" and remove the "everyone" and "staff" sharing permissions and change your user's(with the (Me) next to it) sharing permissions to read only. [TODO figure out chmod command for this]
    - Next import the key via `ssh-add -K {path_to_key}/LightsailDefaultPrivateKey-us-west-2.pem`
    - Retrieve your VPS' public IP address via your Amazon Lightsail portal homepage. 
    - Now you should be able to log into your VPS locally by running the following command in your terminal:
        - `ssh -i ~/.ssh/LightsailDefaultKey-us-west-2.pem ubuntu@52.40.38.253`

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

## Setup and Run Node Template
- `express --view=hbs {{parent_folder}}`
    - using HBS as template engine as it seemed to be the most active handlebar based engine. Wanted to use handlebars as looked most similar to what I am familiar with. 
- cd `{{parent_folder}}`
- `npm install`
    - install node dependancies
- run `DEBUG={{parent_folder}}:* npm start` to start website
    - navigate to localhost:3000 to view


## Deploying your Node project to Amazon Lightsail
Now that we have a work node application, we are going to want to deploy it to Lightsail. 
- First off, you will need to commit your above project to an external repository. For this project, I'm using [GitHub](). There are loads of examples out there on how to do this, so if you're not familiar with commiting a project to GitHub, I recommend checking out [this tutoria](). 
- Generate SSH key on your VPS
    - `ssh-keygen -t rsa -b 4096 -C "test@example.com"`
    
- Create empty github repository on your VPS
- Configure post-receive hook in empty repository and make it executable
- Add remote repository on VPS to your local repository
- Push to your production server
- More details [here](https://gist.github.com/noelboss/3fe13927025b89757f8fb12e9066f2fa) and [here](https://francoisromain.medium.com/vps-deploy-with-git-fea605f1303b)


## Configure Nginx
First off, why are we using Nginx? I thought Node.js has its own webserve as we saw in the above running of our node boilerplate. 

Well, Nginx provides several other benefits. First off, we will be setting Nginx up as a reverse proxy. This provides some benefits like SSL Termination. Using Nginx as a reverse proxy prevents you from managing SSL certs at the application level; checking certs into your application code base could be a security risk as well. Nginxd ensures only code written by your reverse proxy has access to your private SSL cert. 

A reverse proxy can also offer gzip compression. Compressing incoming requests can decrease packet size and make your application more efficent??(Investigate if this is necessary on an application of this size)

Node.js can actually serve static files, perform gzip compresion, comes with built in HTTPS support, and can run multiple instances via the `cluster` mode, yet it is best to allow your reverse proxy to handle this. Mainly because Nginx can perform these operations more efficently than Node can. 

Lastly, it is worth noting that Nginx provides the added benefit of having to write less code, thereby reducing the number of potential errors. 