import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyName, currencyLogo, euroValue, usdValue} = currencyDetails

  return (
    <li className="currency-item">
      <div className="currency-logo-name">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p>{currencyName}</p>
      </div>
      <div className="currency-values-container">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
