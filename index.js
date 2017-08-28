import mapValues from "@unction/mapvalues"
import splat from "@unction/splat"
import applicator from "@unction/applicator"
import zip from "@unction/zip"
import length from "@unction/length"

export default function applicators (unctions: Array<mixed => mixed> | RecordType<KeyType, mixed => mixed>): Function {
  const zipUnctions = zip(unctions)

  return function applicatorsUnctions (iterable: ArrayType | RecordType): ArrayType | RecordType {
    if (length(unctions) !== length(iterable)) {
      throw new Error("left and right werent the same size")
    }

    return mapValues(splat(applicator))(zipUnctions(iterable))
  }
}
