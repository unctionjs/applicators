import mapValues from "@unction/mapvalues"
import splat from "@unction/splat"
import applicator from "@unction/applicator"
import zip from "@unction/zip"
import length from "@unction/length"

import type {UnaryFunctionType} from "types"
import type {MapperFunctionType} from "types"

export default function applicators (unctions: Array<MapperFunctionType> | RecordType<KeyType, MapperFunctionType>): UnaryFunctionType {
  const zipUnctions = zip(unctions)

  return function applicatorsUnctions (functor: ArrayType | RecordType): ArrayType | RecordType {
    if (length(unctions) !== length(functor)) {
      throw new Error("left and right werent the same size")
    }

    return mapValues(splat(applicator))(zipUnctions(functor))
  }
}
