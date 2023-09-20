// 저장된 db값 가져오기
async function selectAllReview(connection) {
    const selectAllReviewQuery = `
        SELECT *
        FROM Naver;`;
    const allReview = await connection.query(
        selectAllReviewQuery
    );
    return allReview;
  }
  
  module.exports = {
    selectAllReview
  };