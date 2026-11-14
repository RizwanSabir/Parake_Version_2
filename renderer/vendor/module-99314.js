// vendor/module-99314.js — webpack module 99314
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.Q = void 0),
  (t.calculatePeriodSavings = function (e, n, r) {
    const o = t.Q,
      i = o[e] ?? [],
      a = (o[n] ?? []).map((t) => {
        const o = i.find(
          (e) =>
            e.currency === t.currency &&
            e.audiences.join(",") === t.audiences.join(","),
        );
        if (!o)
          throw new Error(
            `No ${e} price for ${n} ${t.currency} ${t.audiences.join(",")}`,
          );
        return Math.round(100 * (1 - t.price / (r * o.price)));
      });
    if (0 === a.length)
      throw new Error(`No prices for ${n} in the pricing table`);
    return Math.min(...a);
  });
const r = n(5735 /* vendor/module-5735 */),
  o = [
    {
      currency: "usd",
      price: 45.8,
      audiences: [r.PricingAudience.Other, r.PricingAudience.Europe],
    },
    {
      currency: "usd",
      price: 30.6,
      audiences: [
        r.PricingAudience.DiscountedCountries,
        r.PricingAudience.India,
      ],
    },
    {
      currency: "inr",
      price: 2900,
      audiences: [r.PricingAudience.India],
    },
    {
      currency: "eur",
      price: 39.8,
      audiences: [r.PricingAudience.Europe],
    },
    {
      currency: "usd",
      price: 21.8,
      audiences: [r.PricingAudience.LatinAmerica],
    },
  ],
  i = [
    {
      currency: "usd",
      price: 68.7,
      audiences: [r.PricingAudience.Other, r.PricingAudience.Europe],
    },
    {
      currency: "usd",
      price: 45.9,
      audiences: [
        r.PricingAudience.DiscountedCountries,
        r.PricingAudience.India,
      ],
    },
    {
      currency: "inr",
      price: 4350,
      audiences: [r.PricingAudience.India],
    },
    {
      currency: "eur",
      price: 59.7,
      audiences: [r.PricingAudience.Europe],
    },
    {
      currency: "usd",
      price: 32.7,
      audiences: [r.PricingAudience.LatinAmerica],
    },
  ];
t.Q = {
  credit_1: [
    {
      currency: "usd",
      price: 38,
      audiences: [
        r.PricingAudience.Other,
        r.PricingAudience.Europe,
        r.PricingAudience.LatinAmerica,
      ],
    },
    {
      currency: "usd",
      price: 25,
      audiences: [
        r.PricingAudience.DiscountedCountries,
        r.PricingAudience.India,
      ],
    },
    {
      currency: "inr",
      price: 2360,
      audiences: [r.PricingAudience.India],
    },
    {
      currency: "eur",
      price: 33,
      audiences: [r.PricingAudience.Europe],
    },
  ],
  credit_3: [
    {
      currency: "usd",
      price: 59,
      audiences: [
        r.PricingAudience.Other,
        r.PricingAudience.Europe,
        r.PricingAudience.LatinAmerica,
      ],
    },
    {
      currency: "usd",
      price: 39,
      audiences: [
        r.PricingAudience.DiscountedCountries,
        r.PricingAudience.India,
      ],
    },
    {
      currency: "inr",
      price: 3690,
      audiences: [r.PricingAudience.India],
    },
    {
      currency: "eur",
      price: 51,
      audiences: [r.PricingAudience.Europe],
    },
  ],
  credit_6: [
    {
      currency: "usd",
      price: 118,
      audiences: [
        r.PricingAudience.Other,
        r.PricingAudience.Europe,
        r.PricingAudience.LatinAmerica,
      ],
    },
    {
      currency: "usd",
      price: 78,
      audiences: [
        r.PricingAudience.DiscountedCountries,
        r.PricingAudience.India,
      ],
    },
    {
      currency: "inr",
      price: 7380,
      audiences: [r.PricingAudience.India],
    },
    {
      currency: "eur",
      price: 102,
      audiences: [r.PricingAudience.Europe],
    },
  ],
  credit_9: [
    {
      currency: "usd",
      price: 177,
      audiences: [
        r.PricingAudience.Other,
        r.PricingAudience.Europe,
        r.PricingAudience.LatinAmerica,
      ],
    },
    {
      currency: "usd",
      price: 117,
      audiences: [
        r.PricingAudience.DiscountedCountries,
        r.PricingAudience.India,
      ],
    },
    {
      currency: "inr",
      price: 11070,
      audiences: [r.PricingAudience.India],
    },
    {
      currency: "eur",
      price: 153,
      audiences: [r.PricingAudience.Europe],
    },
  ],
  subscription_weekly: [
    {
      currency: "usd",
      price: 78,
      audiences: [
        r.PricingAudience.Other,
        r.PricingAudience.Europe,
        r.PricingAudience.LatinAmerica,
      ],
    },
    {
      currency: "usd",
      price: 52,
      audiences: [
        r.PricingAudience.DiscountedCountries,
        r.PricingAudience.India,
      ],
    },
    {
      currency: "inr",
      price: 4980,
      audiences: [r.PricingAudience.India],
    },
    {
      currency: "eur",
      price: 67,
      audiences: [r.PricingAudience.Europe],
    },
  ],
  subscription_monthly: [
    {
      currency: "usd",
      price: 149.9,
      audiences: [
        r.PricingAudience.Other,
        r.PricingAudience.Europe,
        r.PricingAudience.LatinAmerica,
      ],
    },
    {
      currency: "usd",
      price: 99.9,
      audiences: [
        r.PricingAudience.DiscountedCountries,
        r.PricingAudience.India,
      ],
    },
    {
      currency: "inr",
      price: 9470,
      audiences: [r.PricingAudience.India],
    },
    {
      currency: "eur",
      price: 129.9,
      audiences: [r.PricingAudience.Europe],
    },
  ],
  subscription_yearly: [
    {
      currency: "usd",
      price: 599.9,
      audiences: [
        r.PricingAudience.Other,
        r.PricingAudience.Europe,
        r.PricingAudience.LatinAmerica,
      ],
    },
    {
      currency: "usd",
      price: 399.9,
      audiences: [
        r.PricingAudience.DiscountedCountries,
        r.PricingAudience.India,
      ],
    },
    {
      currency: "inr",
      price: 37900,
      audiences: [r.PricingAudience.India],
    },
    {
      currency: "eur",
      price: 519.9,
      audiences: [r.PricingAudience.Europe],
    },
  ],
  lifetime_plan: [
    {
      currency: "usd",
      price: 899.9,
      audiences: [
        r.PricingAudience.Other,
        r.PricingAudience.Europe,
        r.PricingAudience.LatinAmerica,
      ],
    },
    {
      currency: "usd",
      price: 599.9,
      audiences: [
        r.PricingAudience.DiscountedCountries,
        r.PricingAudience.India,
      ],
    },
    {
      currency: "inr",
      price: 56850,
      audiences: [r.PricingAudience.India],
    },
    {
      currency: "eur",
      price: 779.9,
      audiences: [r.PricingAudience.Europe],
    },
  ],
  prepare_monthly: [
    {
      currency: "usd",
      price: 45.9,
      audiences: [
        r.PricingAudience.Other,
        r.PricingAudience.Europe,
        r.PricingAudience.LatinAmerica,
      ],
    },
    {
      currency: "usd",
      price: 30.7,
      audiences: [
        r.PricingAudience.DiscountedCountries,
        r.PricingAudience.India,
      ],
    },
    {
      currency: "inr",
      price: 2910,
      audiences: [r.PricingAudience.India],
    },
    {
      currency: "eur",
      price: 39.9,
      audiences: [r.PricingAudience.Europe],
    },
  ],
  prepare_yearly: [
    {
      currency: "usd",
      price: 183.9,
      audiences: [
        r.PricingAudience.Other,
        r.PricingAudience.Europe,
        r.PricingAudience.LatinAmerica,
      ],
    },
    {
      currency: "usd",
      price: 122.9,
      audiences: [
        r.PricingAudience.DiscountedCountries,
        r.PricingAudience.India,
      ],
    },
    {
      currency: "inr",
      price: 11640,
      audiences: [r.PricingAudience.India],
    },
    {
      currency: "eur",
      price: 159.9,
      audiences: [r.PricingAudience.Europe],
    },
  ],
  resume_download: [
    {
      currency: "usd",
      price: 19,
      audiences: [r.PricingAudience.Other, r.PricingAudience.Europe],
    },
    {
      currency: "inr",
      price: 1180,
      audiences: [r.PricingAudience.India],
    },
    {
      currency: "eur",
      price: 16.5,
      audiences: [r.PricingAudience.Europe],
    },
    {
      currency: "usd",
      price: 12.5,
      audiences: [
        r.PricingAudience.DiscountedCountries,
        r.PricingAudience.India,
      ],
    },
    {
      currency: "usd",
      price: 9,
      audiences: [r.PricingAudience.LatinAmerica],
    },
  ],
  custom_resume_maker_monthly: o,
  custom_resume_maker_quarterly: i,
  custom_headshots_monthly: o,
  custom_headshots_quarterly: i,
  custom_question_bank_monthly: o,
  custom_question_bank_quarterly: i,
  prepaid_yearly: [
    {
      currency: "usd",
      price: 599.9,
      audiences: [
        r.PricingAudience.Other,
        r.PricingAudience.Europe,
        r.PricingAudience.LatinAmerica,
      ],
    },
    {
      currency: "usd",
      price: 399.9,
      audiences: [
        r.PricingAudience.DiscountedCountries,
        r.PricingAudience.India,
      ],
    },
    {
      currency: "inr",
      price: 37900,
      audiences: [r.PricingAudience.India],
    },
    {
      currency: "eur",
      price: 519.9,
      audiences: [r.PricingAudience.Europe],
    },
  ],
};
