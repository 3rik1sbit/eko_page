import * as React from 'react';

const App = () => {
  const [mode, setMode] = React.useState(Mode.Buy);
  const [ticker, setTicker] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [amount, setAmount] = React.useState(0);

  const handleTickerChange = event => {
    setTicker(event.target.value.toUpperCase());
  }

  const handlePriceChange = event => {
    setPrice(event.target.value);
  }

  const handleAmountChange = event => {
    setAmount(event.target.value);
  }

  const handleAction = () => {
    // TODO this is where stuff happens
  }

  const setSell = () => {
    setMode(Mode.Sell);
  };
  const setBuy = () => {
    setMode(Mode.Buy);
  };


  return (
    <div>
      <Checkbox
        label={Mode.Buy}
        value={mode === Mode.Buy}
        onChange={setBuy}
      />
      <Checkbox
        label={Mode.Sell}
        value={mode === Mode.Sell}
        onChange={setSell}
      />
      <p></p>
      <TextField
        label={"Ticker"}
        value={ticker}
        onChange={handleTickerChange}
        type={"text"}
      />
      <p></p>
      <TextField
        label={"Price (total)"}
        value={price}
        onChange={handlePriceChange}
        type={"number"}
      />
      <p></p>
      <TextField
        label={"# of shares"}
        value={amount}
        onChange={handleAmountChange}
        type={"number"}
      />
      <p></p>
      <Button
        label={mode}
        onClick={handleAction}

      />
    </div>
  );
};

const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

const TextField = ({label, value, onChange, type }) => {
  return (
    <label>
      <input type={type} text={value} onChange={onChange} />
      {label}
    </label>
  );
};

const Button = ({label, value, onClick }) => {
  return (
    <label>
      <input type="button" text={value} onChange={onClick} />
      {label}
    </label>
  );
};

const Mode = {
  Buy: 'Buy',
  Sell: 'Sell',
  Divident: 'Divident',
};

export default App;
