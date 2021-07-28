# Braintree ACH #

The project utilizes the Braintree Node SDK and provides a passthrough/proxy setup in order to operate Braintree server side calls via Postman.  It contains implementations of Braintree ACH related operations including:

* Customer
* Transaction
* ClientToken
* some others

## Requirements ##
* **Node.js** - A recent version of NodeJS can be found [here](https://nodejs.org/en/).  *This application currently runs on v8.16.2 which works best with PayPal proxy and network security policies.*
* **Postman** A recent version of Postman

### Configure ###
* Create a Braintree Sandbox developer account and PayPal sandbox REST application per your particular requirements.
* Customize your credentials:
    * Local deployment:  See [./config/local_example.js](./config/local_example.js)
    * Remote deployment:  Review the [config documentation](./config/Readme.md) for your particular needs.

### Run ###
```npm start``` and then navigate your browser to http://localhost:3000/ (local deloyment only)


