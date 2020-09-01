import Provider from "../Provider";

const SCALE = 1e8;

interface EthGasStationData {
  safeLow: string;
  average: string;
  fast: string;
  fastest: string;
}

class EthGasStationProvider extends Provider {
  constructor() {
    super("https://ethgasstation.info/json/ethgasAPI.json");
  }

  parse(data: EthGasStationData) {
    this.prices.slow = Number(data.safeLow) * SCALE;
    this.prices.standard = Number(data.average) * SCALE;
    this.prices.fast = Number(data.fast) * SCALE;
    this.prices.fastest = Number(data.fastest) * SCALE;
  }
}

export default EthGasStationProvider;
