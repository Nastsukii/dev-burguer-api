import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        price: Sequelize.INTEGER,
        catergory: Sequelize.STRING,
        path: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'product',
        underscored: true,
        timestamps: true,
      },
    );
  }
}

export default Product;
