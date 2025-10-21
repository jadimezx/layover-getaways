module.exports = async function (context, req) {
  const booking = req.body;
  console.log("📘 Booking received:", booking);

  context.res = {
    status: 201,
    body: { success: true, message: "Booking saved!" },
  };
};
