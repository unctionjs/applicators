/* eslint-disable no-magic-numbers, id-length */
import recordfrom from "@unction/recordfrom";
import {inc} from "ramda";
import {dec} from "ramda";
import applicators from "./index";

test(() => {
  expect(applicators([
    recordfrom(["point", "x"]),
    recordfrom(["point", "y"]),
    recordfrom(["point", "z"]),
  ])([
    40.453,
    2.2,
    423.0,
  ])).toEqual([
    {point: {x: 40.453}},
    {point: {y: 2.2}},
    {point: {z: 423.0}},
  ]);
});

test(() => {
  expect(applicators({
    x: inc,
    y: dec,
  })({
    x: -1,
    y: 1,
  })).toEqual({
    x: 0,
    y: 0,
  });
});

test(() => {
  expect(() =>
    applicators([
      recordfrom(["point", "x"]),
      recordfrom(["point", "y"]),
      recordfrom(["point", "z"]),
    ])([
      40.453,
      2.2,
      423.0,
      56,
    ])).toThrow();
});
