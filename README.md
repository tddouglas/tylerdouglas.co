# tylerdouglas.co
tylerdouglas.co source code

# Website Creation Steps

## Assumptions
- Moderate bash/programming experience 
- You've already signed up for Lightsail


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
    - TODO: Due to [CVE-2021-32822](https://github.com/advisories/GHSA-7f5c-rpf4-86p8), will need to replace hbs even though we aren't serving files at the moment and I don't think the vulnerability effects me. 
- cd `{{parent_folder}}`
- `npm install`
    - install node dependancies
- run `DEBUG={{parent_folder}}:* npm start` to start website
    - navigate to localhost:3000 to view


## Push project to Gitub
- TODO: Github push instructions

## Setup connection to VPS
- Get Amazon Lightsail keypair
    - In your lightsail portal, click Account >> Account >> SSH keys
    - Download the default private key by clicking the "Download" button
    - If you're on mac like me, you won't be able to immediately import this key due to permission issues. You will want to right click on the key file, click "Get Info" and remove the "everyone" and "staff" sharing permissions and change your user's(with the (Me) next to it) sharing permissions to read only. [TODO figure out chmod command for this]
    - Next import the key via `ssh-add -K {path_to_key}/LightsailDefaultPrivateKey-us-west-2.pem`
    - Retrieve your VPS' public IP address via your Amazon Lightsail portal homepage. 
    - Now you should be able to log into your VPS locally by running the following command in your terminal:
        - `ssh -i ~/.ssh/LightsailDefaultKey-us-west-2.pem ubuntu@54.244.36.99`


## Deploying your Node project to Amazon Lightsail
Now that we have a work node application, we are going to want to deploy it to Lightsail. 
- First off, you will need to commit your above project to an external repository. For this project, I'm using [GitHub](). There are loads of examples out there on how to do this, so if you're not familiar with commiting a project to GitHub, I recommend checking out [this tutoria](). 
- Generate SSH key on your VPS
    - `ssh-keygen -t rsa -b 4096 -C "test@example.com"`
- Add new key to your authorized_keys file
    - `cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys`
    - This will add the newely generated public key to your authorized keys file. This file by default contains the amazon `LightsailDefaultKeyPair` so now you should see two keys included in there.
- Convert the SSH private key from OPENSSL format to RSA format so git workflow can accept it
    - `ssh-keygen -p -m PEM -f ~/.ssh/id_rsa`

Now we will be using Github Actions to automate deployment of our application to our VPS whenever we push to the main branch. I chose to use Github Actions over git hooks due to ease of use (more readable in my mind) and greater functionality if we want to add future CI features like built in testing. The github action we create here uses SSH and SCP to transfer the contents of our repository to our VPS. 

- From your root directory on your local machine, create the following file in the following location:
    - `.github/workflows/deploy.yml file.`
- Copy the contents of deploy.yml in this repo to your deploy.yml file
- Access your project in Github and go to the `Settings >> Secrets` tab. Configure the following secrets:
    - HOST = ip address used to access VPS (e.g. 52.40.38.253)
    - Port = 22 (post for SSH)
    - SSHKEY = Private RSA SSH key you created above
    - USERNAME = Username used to login to VPS (e.g. ubuntu)
    - PASSPHRASE = SSH key passphrase
- Commit and push your github repository with the above changes and you should see it deployed to your VPS in the `target` directory!
    - Note: If you're having any issues, look at the `Actions` tab of your github repository to see the status of your Action and where it failed. 


## Configure Nginx
First off, why are we using Nginx? I thought Node.js has its own webserve as we saw in the above running of our node boilerplate. 

Well, Nginx provides several other benefits. First off, we will be setting Nginx up as a reverse proxy. This provides some benefits like SSL Termination. Using Nginx as a reverse proxy prevents you from managing SSL certs at the application level; checking certs into your application code base could be a security risk as well. Nginxd ensures only code written by your reverse proxy has access to your private SSL cert. 

A reverse proxy can also offer gzip compression. Compressing incoming requests can decrease packet size and make your application more efficent??(Investigate if this is necessary on an application of this size)

Node.js can actually serve static files, perform gzip compresion, comes with built in HTTPS support, and can run multiple instances via the `cluster` mode, yet it is best to allow your reverse proxy to handle this. Mainly because Nginx can perform these operations more efficently than Node can. Don't believe me, check out the [Performance Comparison Here](https://medium.com/intrinsic/why-should-i-use-a-reverse-proxy-if-node-js-is-production-ready-5a079408b2ca).

Lastly, it is worth noting that Nginx provides the added benefit of having to write less code, thereby reducing the number of potential errors.

In addition to configuring Nginx as our reverse proxy, we will be using [Uncomplicated Firewall](https://wiki.ubuntu.com/UncomplicatedFirewall) (ufw) as our packet filtering solution. Ubuntu actually comes with a fairly robust packet filtering system called `netfilter` which is typically manipulated using the `iptables` suite of commands. But using exclusively iptables to manage your firewall can be a tall task, especially for beginners to network administration. Which is why we use `ufw` as it provides an easy framework for managing netfilter and simplifies some of the more complicated iptable CLI commands. 

- Install nginx
    - `sudo apt update`
    - `sudo apt install nginx`
- Install Firewall (ufw = uncomplicated firewall)
    - `sudo apt install ufw`
    - `ufw allow ssh`
        - make sure to allow SSH so you don't lock yourself out!
- Can run `ufw app list` to show what applications can be run. We will run HTTP for a start
    - `sudo ufw allow 'Nginx HTTP'`
- Enable ufw
    - `sudo ufw enable`
- Confirm SSh and HTTP are enabled by runing:
    - `sudo ufw status`
- Lets also check the status of nginx to make sure its running:
    - `sudo systemctl status nginx`
- if nginx isn't running, you can restart it with:
    - `sudo systemctl start nginx`
- After applying the above settings, if nginx was running, you should restart it with:
    - `sudo service nginx restart`

Now we need to setup Nginx to reverse proxy incomming traffic via HTTP (port 80) and connect it to node.js default application (port 3000)

Your default nginx configuration resides in `/etc/nginx/` directory.

- So we're going to edit nginx's default server block configuration file via:
    -`sudo vim /etc/nginx/sites-available/default`
    - Copy the below into the nginx file:
    ```
    server {
        listen 80;

        server_name 52.40.38.253;

        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
    ```
- Lastly, restart nginx so changes can take effect

Now your application should be ready! Navigate back to your project and run node again via `DEBUG={{parent_folder}}:* npm start`. 
Now go to your IP address in your browser and you should see your website!

## Configure Process Manager for Node Application

You've got your application running now, but you can't really do anything else on your VPS because the server is running in the foreground. We're going to install a process manager to daemonize the application. 

- Install PM2 process manager
    - `sudo npm install pm2 -g`
    - `-g` is the global flag for npm
- Start node application in daemonized capacity
    - `pm2 start ./bin/www`
    - You might want to run `pm2 start app.js` but that won't actually work. You should run `pm2 start` followed by the start script line you have in your `package.json` file of your project


## Connect IP to purchased domain

Now that we can access our website directly via the IP address, we are going to configure it so that we can access our website via the domain name we purchased.

First off, we need to create a static IP address on our lighstail account. Right now, the IP address assigned to us is dynamic, so we will specify a static IP by logging into lighstail and navigating to Networking >> Create static IP. 

Name your static IP - I named mine `tylerdouglas.co_staticIP0` and then save the static IP - `54.244.36.99`

After you setup your staticIP, you will no longer be able to connect to your instance via the same ssh command as the ip has changed. Update the command to utilize the new IP address - `ssh -i ~/.ssh/LightsailDefaultKey-us-west-2.pem ubuntu@54.244.36.99`

To route traffic for your domain name you purchased, like tylerdouglas.co, to your VPS, you need add a record to the Domain Name System (DNS) of your domain. You can manage the DNS records of your domain using the registrar where you registered your domain. 

For me that was Bluehost. Bluehost allows you to manage your domain directly in Bluehost, however, I chose to let Cloudflare provide DNS. Bluehost actually provides a nice [pros and cons list](https://www.bluehost.com/help/article/cloud-flare-guide) for switching to Cloudfare to be my DNS provider as I thought the pros outweight the cons. 

Its quite easy to Switch over to Cloudflare. First you need to create an account and then select "Add Site". You can choose the free tier and enter your domain information. You will want to point the Cloudflare Type:A field to your static IP address currently hosting your website configured above. 

Once you have completed the setup on Cloudflare's side, you will need to configure the Name Server and DNS manager on your registrars site. Cloudflare does a good job at [explaining these terms here](https://support.cloudflare.com/hc/en-us/articles/360019093151-Managing-DNS-records-in-Cloudflare#h_60566325041543261564371). 

After finalizing the configuration on yoru registrar's site, you will want to wait a couple hours for the DNS entries to update. After which, you should be able to access you website by going directly to the hostname!! No more direct IP addresses!

## Configure HTTPS
The last step here will be to configure HTTPS to ensure all traffic to our site is encrypted over TLS.

TODO:

# React PWA implementation
Pivoting to React from Vue as it is more applicable as a skillset. Part of Vue's selling point is that it can be implemented incrementally so should be easy to pivot in the future. 
Need to create a client folder for react front end

## Setup React
- We will use Facebook's default react generate to create our sample react Frontend. Run `npx create-react-app client` in your root website directory to generate a folder named `client` containing a self contained react frontend!
  - This will create a client directory with another node_modules folder and it's own respective `package.json` and `package-lock.json`. This is OK as you are creating a separate client and server which may have their own unique dependencies.
  - run `cd client`
  - `npm update` to install new client dependencies
  - `npm start` and you will see your new website at localhost:3000 