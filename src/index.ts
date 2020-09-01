import * as providers from "./providers";
import Provider from "./Provider";

// @ts-ignore
const instances: Provider[] = Object.values(providers).map((x) => new x());

const main = async () => {
  await Promise.all(instances.map((x) => x.fetch()));

  const average = Math.round(
    instances.reduce((acc, i) => {
      return acc + i.prices.standard!;
    }, 0) / instances.length
  );

  console.log("Average:", average);
};

main();
