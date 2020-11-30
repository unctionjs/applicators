import mapValues from "@unction/mapvalues";
import splat from "@unction/splat";
import applicator from "@unction/applicator";
import zip from "@unction/zip";
import length from "@unction/length";

import {MapperFunctionType} from "./types";

export default function applicators<A, B, C> (unctions: Array<MapperFunctionType<A, B>> | Set<MapperFunctionType<A, B>> | RecordType<C, MapperFunctionType<A, B>>) {
  const zipUnctions = zip(unctions);

  return function applicatorsUnctions (enumerable: Record<string | number | symbol, A> | Map<C, A>): Record<string | number | symbol, B> | Map<C, B> {
    if (length(unctions) !== length(enumerable)) {
      throw new Error("left and right werent the same size");
    }

    return mapValues(splat(applicator))(zipUnctions(enumerable));
  };
}
