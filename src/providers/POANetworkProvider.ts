import Provider from "../Provider";

const SCALE = 1e9;

interface POANetworkData {
  slow: string;
  standard: string;
  fast: string;
  instant: string;
}

class POANetworkProvider extends Provider {
  constructor() {
    super("https://gasprice.poa.network");
  }

  parse(data: POANetworkData) {
    this.prices.slow = Number(data.slow) * SCALE;
    this.prices.standard = Number(data.standard) * SCALE;
    this.prices.fast = Number(data.fast) * SCALE;
    this.prices.fastest = Number(data.instant) * SCALE;
  }
}

export default POANetworkProvider;
