# Sundown

A Zendesk App which looks up the ticket requester's email in Viper.

## Local Development

### Description

Technically, Sundown is a Zendesk _iframe_ App (start [here](https://develop.zendesk.com/hc/en-us/articles/360001075048)).

An _iframe_ app can be hosted in Zendesk Support or on a remote server. In our case we'll host our app in
Zendesk Support, meaning that the application is packaged (zipped) and deployed as a
[Zendesk Private App](https://pactcoffee.zendesk.com/agent/admin/apps/manage).

See also how to [Build your first Support app](https://develop.zendesk.com/hc/en-us/articles/360001074788).
Very enlightning.

Sundown displays user information on a side panel within the Zendesk UI (browser):
* A link do the user's page on Admin and two buttons that link to Admin's "apply voucher" and "create ad-hoc order" functions.
* The user's list of addresses (also clickable)
* The list of user's orders

This information is pulled from Viper API (currently api.pactcoffee.com/v1):
* see [Viper's Zendesk webhook](https://github.com/PactCoffee/viper/blob/master/app/api/v1/webhooks/zendesk.rb).

### Developing

#### Dependencies

* Install [ngrok](https://ngrok.com/)
* Install [Zendesk App Tools](https://develop.zendesk.com/hc/en-us/articles/360001075048) - just `bundle install`
* (See .tool-versions for asdf ruby and nodejs versions currently in use. **Note:** You may need to `asdf reshim`)

**From within rails app folder for Viper**
* Set the following environment variables `ZENDESK_API_URL`, `ZENDESK_USERNAME`, `ZENDESK_TOKEN`*.
* Run the main rails app (Viper) locally `bundle exec rails s`
* Run ngrok `ngrok http [rails app port number]` and make a note of the ngrok address

*_You can find the environment varaible values in Viper's Heroku settings._

**Within Sundown folder**
* Start the Zendesk App Server: `bundle exec zat server`
* Set the `API_URL` to the ngrok address
* Set the `ADMIN_URL` to your local rails server address

*_You can run `zat validate` before hand to lint the app. The app will not package unless it lints successfully._*

**In the browser**
* [Pact Coffee's Zendesk](https://pactcoffee.zendesk.com/agent?zat=true)

*_Make sure you click the shield in the address bar and allow unsafe scripts_*

Refreshing the page will reload the data from the API, refreshing the app using the reload icon will just reload the app with the existing data.

### Assets

[Logo Dimensions](https://develop.zendesk.com/hc/en-us/articles/360001074808#topic_svk_qmc_2l)

### Documentation
* [Zendesk App Tools](https://develop.zendesk.com/hc/en-us/articles/360001075048-Installing-and-using-the-Zendesk-apps-tools)

## Uploading the App
* Increase the version number according to semver.
* Add to the change log (below)
* Run `zat update` to build the app*

*_The current config is set to update the test app. Swap the id to the production app to update the production version._

*Production App ID:* 75162
*Test App ID:* 80833

## Changelog

### 3.0.0
* Upgrade to Zendesk App Framework v2

### 2.3.0
* Use CORS to make requests

### 2.2.0
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
