import mapValues from "@unction/mapvalues";
import splat from "@unction/splat";
import applicator from "@unction/applicator";
import zip from "@unction/zip";
import length from "@unction/length";
export default function applicators(unctions) {
  const zipUnctions = zip(unctions);
  return function applicatorsUnctions(functor) {
    if (length(unctions) !== length(functor)) {
      throw new Error("left and right werent the same size");
    }

    return mapValues(splat(applicator))(zipUnctions(functor));
  };
}
