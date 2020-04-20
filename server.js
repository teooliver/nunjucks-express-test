const express = require("express");
const nunjucks = require("nunjucks");

var app = express();

app.use("/css", express.static("css"));

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.get("/", function (req, res) {
  res.render("email-order.njk", {
    orderNumber: "#QG6000000024",
    date: "18 Apr 2020, 15:00:00",
    subtotal: "43234",
    total: "534532",
    cc_type: "visa",
    cc_number: "xxxx-0004",
    shipingMethod: "DHL Express Shipping Rates - EXPRESS WORLDWIDE EU ",
    rooms: [
      {
        label: "Bathroom",
        property: "Cottage",
        type: "Modern",
        img: "https://source.unsplash.com/FBXuXp57eM0",
        wall1: { colorName: "special blue", color: "#6699ff" },
        wall2: { colorName: "special orange", color: "orange" },
        price: 1000,
      },
      {
        label: "Bathroom",
        property: "Cottage",
        type: "Modern",
        img: "https://source.unsplash.com/FBXuXp57eM0",
        wall1: { colorName: "special purple", color: "purple" },
        wall2: { colorName: "special yellow", color: "yellow" },
        ceiling: { colorName: "special yellow", color: "yellow" },
        price: 1000,
      },
    ],
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
