import fetch from "cross-fetch";

interface Prices {
  slow: number | undefined;
  standard: number | undefined;
  fast: number | undefined;
  fastest: number | undefined;
}

abstract class Provider {
  prices: Prices = {
    slow: undefined,
    standard: undefined,
    fast: undefined,
    fastest: undefined,
  };

  protected url: string;

  constructor(url: string) {
    this.url = url;
  }

  abstract parse(data: any): void;

  async fetch() {
    try {
      const res = await fetch(this.url);
      const data = await res.json();

      this.parse(data);
      console.log(this.prices);
    } catch (err) {
      console.error(err);
    }
  }
}

export default Provider;
