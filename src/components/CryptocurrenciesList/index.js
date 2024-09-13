import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {currenciesList: [], isLoading: true}

  componentDidMount() {
    this.getCurrenciesList()
  }

  getCurrenciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const currencies = data.map(each => ({
      id: each.id,
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      usdValue: each.usd_value,
    }))

    this.setState({currenciesList: currencies, isLoading: false})
  }

  render() {
    const {currenciesList, isLoading} = this.state
    return (
      <div className="currency-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1 className="cryptocurrency-lis-heading">
              Cryptocurrency Tracker
            </h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="currency-bg-image"
            />
            <div className="table-container">
              <ul className="table-header-container">
                <li className="table-heading">
                  <div className="table-heading-elements">
                    <p>Coin Type</p>
                    <div className="usd-euro-currency-container">
                      <p>USD</p>
                      <p>EURO</p>
                    </div>
                  </div>
                </li>
                {currenciesList.map(each => (
                  <CryptocurrencyItem currencyDetails={each} key={each.id} />
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
