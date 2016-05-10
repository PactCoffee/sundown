# Sundown

Sundown is a Zendesk App which looks up the ticket requester's email in Viper.

## Local Development
### Dependencies
* Ngrok `gem install ngrok`
* Zendesk App Tools `gem install zendesk_apps_tools`

### Developing
**From within rails app folder**
* Export `ZENDESK_API` 
* Set the following environment variables `ZENDESK_API_URL`, `ZENDESK_USERNAME`, `ZENDESK_TOKEN`*.
* Run the main rails app (Viper) locally `rails s -b ::`
* Run ngrok `ngrok [rails app port number]` and make a note of the ngrok address

*_You can find the environment varaible values in Viper's Heroku config._

**Within Sundown folder**
* Start the Zendesk App Server `zat server`*
* Set the `API_URL` to the ngrok address 
* Set the `ADMIN_URL` to your local rails server address

*_You can run `zat validate` before hand to lint the app. The app will not package unless it lints successfully._

**In the browser**
* [Pact Coffee's Zendesk](pactcoffee.zendesk.com/agent?zat=true)*

*_Make sure you click the shield in the address bar and allow unsafe scripts_

Refreshing the page will reload the data from the API, refreshing the app using the reload icon will just reload the app with the existing data. 

### Documentation
* [Zendesk App Tool](https://developer.zendesk.com/apps/docs/agent/tools)
* [Zendesk Agent App](https://developer.zendesk.com/apps/docs/agent/introduction)

## Uploading the App
* Increase the version number according to semver.
* Add to the change log (below)
* Run `zat package` to build the app (this creates a ZIP file)
* Commit the above into Master
* Upload the zip file when promopted on [Zendesk](pactcoffee.zendesk.com/agent/admin/apps/manage)
* Enter in the API url
* Enter in Zendesk's token*

*_To get the token run `rake viper:system_users:grindhouse`

## Changelog
### 1.0.0
* Display's the user's first and last name as a link to user's page the Viper Admin System
* Add PactCoffee icons
