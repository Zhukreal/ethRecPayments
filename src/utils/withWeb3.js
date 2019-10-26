import React, { PureComponent } from 'react';
import waitForWeb3 from './waitForWeb3';
import { abi } from './abi';
import { ADRESS, SMART } from './static';

const injectWeb3 = InnerComponent =>
  class extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        web3: null,
        contract: null,
        loading: true
      };
      this.getWeb3 = this.getWeb3.bind(this);
      this.smart = SMART;
    }

    componentDidMount() {
      this.getWeb3().then(() => this.setState({ loading: false }));
    }

    async getWeb3() {
      try {
        const web3 = await waitForWeb3();
        const contract = await new web3.eth.Contract(abi, this.smart);
        this.setState({
          web3,
          contract
        });
      } catch (e) {
        this.setState({ loading: false });
      }
    }

    render() {
      const { web3, contract, loading } = this.state;

      if (loading) {
        return <p>...</p>;
      }

      return <InnerComponent web3={web3} contract={contract} {...this.props} />;
    }
  };

export default injectWeb3;
