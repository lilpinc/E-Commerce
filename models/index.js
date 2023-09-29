// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
//  foreign key?
  }
);
// Categories have many Products
Category.hasMany(Product, {
  //  foreign key?
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  //  foreign key?
  through: {
    model: ProductTag,
    unique: false
  },
    // Define an alias for when data is retrieved
    as: 'product_tags'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  //  foreign key?
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'tagsfor_product'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
