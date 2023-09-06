const searchCandies = (searchString, maxPrice, candies) =>
  candies
    .filter((candy) =>
      candy.name.toLowerCase().startsWith(searchString.toLowerCase()) &&
      candy.price <= maxPrice
    )
    .map((candy) => candy.name);

  module.exports = searchCandies;