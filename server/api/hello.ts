import Stripe from "stripe";

const stripe = new Stripe("test");

export default defineEventHandler(async (event) => {
  const priceId = getQuery(event).priceId;
	console.log("PRODUCT RETRIEVAL",getQuery(event));

  try {
    if (typeof priceId !== "string")
      throw new Error("Couldn't retrieve priceId value");
  } catch (e) {
    throw createError({ statusCode: 400, statusMessage: `${e}` });
  }

  try {
    // const [product, price] = await Promise.all([
    //   stripe.products.retrieve(productId),
    //   stripe.prices.retrieve(priceId),
    // ]);

    // return {
    //   name: product.name,
    //   price: { amount: price },
    // };

		return stripe.prices.retrieve(priceId, {expand:["product"]})
  } catch (e) {
    throw createError({ statusCode: 404, statusMessage: `${e}` });
  }
});
