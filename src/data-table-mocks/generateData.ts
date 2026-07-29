import {uniqueNamesGenerator, names, countries} from 'unique-names-generator';

import {
  getRandomNumberRange,
  getRandomFloatingRange,
  getRandomDate,
} from './getRandomNumber';

import {
  lastName,
  email,
  city,
  companyName,
  iban,
  phoneNumber,
  zipCode,
  streetAddress,
} from './mocks';

export type TableValue = string | number;

export type TableRow = {[property: string]: TableRow | TableValue};

export enum Roles {
  manager = 'manager',
  developer = 'developer',
}

export const createArray = (length: number) => {
  return new Array(length).fill('');
};

/**
 * Utility function. Poor man's faker.
 */
export const generateData = (rowsAmount: number, seed?: number): TableRow[] => {
  return createArray(rowsAmount).map((_, i) => {
    const hasSeed = seed !== undefined;
    return {
      firstName: uniqueNamesGenerator({
        dictionaries: [names],
        ...(hasSeed && {seed: seed + i}),
        style: 'capital',
      }),
      lastName: uniqueNamesGenerator({
        dictionaries: [lastName],
        ...(hasSeed && {seed: seed + i}),
        style: 'capital',
      }),
      role:
        getRandomNumberRange({min: 0, max: 1, ...(hasSeed && {seed: seed + i})}) === 0
          ? Roles.manager
          : Roles.developer,
      randomInteger: getRandomNumberRange({
        min: 21,
        max: 67,
        ...(hasSeed && {seed: seed + i}),
      }),
      randomDecimal: getRandomFloatingRange({
        min: -100000,
        max: 100000,
        ...(hasSeed && {seed: seed + i}),
      }),
      randomPercentage: getRandomFloatingRange({
        min: 0,
        max: 0.99,
        ...(hasSeed && {seed: seed + i}),
      }).toFixed(4),
      moneyExample: getRandomFloatingRange({
        min: -1000000,
        max: 1000000,
        ...(hasSeed && {seed: seed + i}),
      }),
      unitExample: getRandomNumberRange({
        min: 0,
        max: 100000000,
        ...(hasSeed && {seed: seed + i}),
      }),
      dateExample: getRandomDate({
        start: new Date(1982, 5, 6),
        end: new Date(2024, 5, 6),
        ...(hasSeed && {seed: seed + i}),
      }).toISOString(),
      email: uniqueNamesGenerator({
        dictionaries: [email],
        ...(hasSeed && {seed: seed + i}),
        style: 'capital',
      }),
      address: {
        city: uniqueNamesGenerator({
          dictionaries: [city],
          ...(hasSeed && {seed: seed + i}),
          style: 'capital',
        }),
        country: uniqueNamesGenerator({
          dictionaries: [countries],
          ...(hasSeed && {seed: seed + i}),
          style: 'capital',
        }),
        streetAddress: uniqueNamesGenerator({
          dictionaries: [streetAddress],
          ...(hasSeed && {seed: seed + i}),
          style: 'capital',
        }),
        postcode: uniqueNamesGenerator({
          dictionaries: [zipCode],
          ...(hasSeed && {seed: seed + i}),
          style: 'capital',
        }),
        phoneNumber: uniqueNamesGenerator({
          dictionaries: [phoneNumber],
          ...(hasSeed && {seed: seed + i}),
          style: 'capital',
        }),
      },
      business: {
        iban: uniqueNamesGenerator({
          dictionaries: [iban],
          ...(hasSeed && {seed: seed + i}),
          style: 'capital',
        }),
        companyName: uniqueNamesGenerator({
          dictionaries: [companyName],
          ...(hasSeed && {seed: seed + i}),
          style: 'capital',
        }),
      },
    };
  });
};
