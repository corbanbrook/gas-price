import Provider from "../Provider";

const SCALE = 1e9;

interface EtherChainData {
  safeLow: string;
  standard: string;
  fast: string;
  fastest: string;
}

class EtherChainProvider extends Provider {
  constructor() {
    super("https://www.etherchain.org/api/gasPriceOracle");
  }

  parse(data: EtherChainData) {
    this.prices.slow = Number(data.safeLow) * SCALE;
    this.prices.standard = Number(data.standard) * SCALE;
    this.prices.fast = Number(data.fast) * SCALE;
    this.prices.fastest = Number(data.fastest) * SCALE;
  }
}

export default EtherChainProvider;
