module.exports = async function (context, req) {
  const tours = [
    { id: "canal-half", name: "Panama Canal Half Day", price: 90 },
    { id: "casco", name: "Casco Viejo + Rooftop", price: 45 },
    { id: "monkey", name: "Monkey Island & Rainforest", price: 120 },
  ];

  context.res = {
    status: 200,
    body: tours,
  };
};
