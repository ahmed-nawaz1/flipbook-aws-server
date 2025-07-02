import app from "./src/app.js";
import config from "./src/config/config.js";
import connectDB from "./src/config/db.js";

const PORT = config.PORT || 5000;

const startServer = () => {
  connectDB();
  const PORT = config.PORT || 8080;

  app.listen(PORT, () => {
    console.log(`🔥 Server is running on http://localhost:${PORT}`);
  });
};

startServer();
