const { pool } = require("../../../config/database");

const naverDao = require("./naverDao");

exports.allReviewList = async function () {
      const connection = await pool.getConnection(async (conn) => conn);
      const allReviewResult = await naverDao.selectAllReview(connection);
      connection.release();
  
      return allReviewResult;
  };