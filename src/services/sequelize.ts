import sequelize from "../config/sequelize-config";

const sequelizeSync=async(): Promise<void>=>{
sequelize
  .sync({ force: false }) // Set force to true to drop and recreate tables on every application start
  .then(() => {
    console.log("Database synced");
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });
}
export default sequelizeSync;