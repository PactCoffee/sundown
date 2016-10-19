# Sundown

Sundown is a Zendesk App which looks up the ticket requester's email in Viper.

## Local Development
### Dependencies
* Ngrok `gem install ngrok`
* Zendesk App Tools `gem install zendesk_apps_tools`

### Developing
**From within rails app folder for Viper**
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
* Run `zat update` to build the app*

*_The current config is set to update the test app. Swap the id to the production app to update the production version._

*Production App ID:* 75162
*Test App ID:* 80833

## Changelog
### 2.1.0
* Remove preparation and grind from orders since Viper no longer has them on the order.

### 2.1.0
* Display the total number of orders. This does not distinguish between created, billed, shipped and cancelled.

### 2.0.0
* Display the more of the user's account information such as addresses and orders.
* Add a button which links to the add voucher form for that user.
* Add a button which links to the add adhoc order form for that user.

### 1.0.0
* Display's the user's first and last name as a link to user's page the Viper Admin System
* Add PactCoffee icons
