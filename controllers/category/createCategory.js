const CategoryModel = require("../../schemas/foodCategory");

const createCategory = async (req, res) => {
  const { categoryName } = req.body;
  console.log("req.user,", req.user);
  console.log("categoryName", categoryName);
  try {
    const data = await CategoryModel.create({
      categoryName: categoryName,
    });
    console.log("data", data);
    res.status(201).json({
      message: "Category created",
      data,
    });
  } catch (err) {
    console.log("error", err);
    res.status(500).json({
      message: "Something went wrong to create category, try again",
      error: err.message,
    });
  }
};

module.exports = createCategory;
