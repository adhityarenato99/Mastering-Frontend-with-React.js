import React, { Component } from 'react';

// Komponen kelas Converter
class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = { currency: '€' }; // Inisialisasi state dengan mata uang default
  }

  // Fungsi untuk mengubah mata uang
  handleChangeCurrency = () => {
    this.setState({ currency: this.state.currency === '€' ? '$' : '€' });
  };

  render() {
    return (
      <div>
        {/* Komponen Display untuk menampilkan mata uang saat ini */}
        <Display currency={this.state.currency} />
        {/* Komponen CurrencySwitcher untuk tombol pengubah mata uang */}
        <CurrencySwitcher
          currency={this.state.currency}
          handleChangeCurrency={this.handleChangeCurrency}
        />
      </div>
    );
  }
}

// Komponen fungsional CurrencySwitcher
const CurrencySwitcher = (props) => {
  return (
    <button onClick={props.handleChangeCurrency}>
      Current currency is {props.currency}. Change it!
    </button>
  );
};

// Komponen fungsional Display
const Display = (props) => {
  return <p>Current currency is {props.currency}.</p>;
};

// Ekspor default komponen utama Converter
export default Converter;
