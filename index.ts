import mapValues from "@unction/mapvalues";
import splat from "@unction/splat";
import applicator from "@unction/applicator";
import zip from "@unction/zip";
import length from "@unction/length";
export default function applicators (unctions) {
  const zipUnctions = zip(unctions);


  return function applicatorsUnctions (enumerable) {
    if (length(unctions) !== length(enumerable)) {
      throw new Error("left and right werent the same size");
    }

    return mapValues(splat(applicator))(zipUnctions(enumerable));
  };
}
