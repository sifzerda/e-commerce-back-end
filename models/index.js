// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// ==============================================================//

// Products belongsTo Category
// a product can only have one category
Product.belongsTo(Category, {
foreignKey: 'category_id', 
});

// Categories have many Products
// a category can have many products
Category.hasMany(Product, {
foreignKey: 'category_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
  });

// Products belongToMany Tags (through ProductTag)
// a product can have multiple tags
  Product.belongsToMany(Tag, {
    // Define the third table needed to store the foreign keys
    through: {
      model: ProductTag,
      unique: false
    },
    // Define an alias for when data is retrieved
   // as: 'product_tags'
  });

// Tags belongToMany Products (through ProductTag)
// tags can have many products
   Tag.belongsToMany(Product, {
    // Define the third table needed to store the foreign keys
    through: {
      model: ProductTag,
      unique: false
    },
    // Define an alias for when data is retrieved
   // as: 'tag_products'
  });

// ==============================================================//

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
