import mapValues from "@unction/mapvalues";
import splat from "@unction/splat";
import applicator from "@unction/applicator";
import zip from "@unction/zip";
import length from "@unction/length";

import {MapperFunctionType} from "./types";

export default function applicators<A, B, C> (unctions: EnumerableType<MapperFunctionType<A, B>, C>) {
  const zipUnctions = zip(unctions);

  return function applicatorsUnctions (enumerable: EnumerableType<A, C>): EnumerableType<B, C> {
    if (length(unctions) !== length(enumerable)) {
      throw new Error("left and right werent the same size");
    }

    return mapValues(splat(applicator))(zipUnctions(enumerable));
  };
}
