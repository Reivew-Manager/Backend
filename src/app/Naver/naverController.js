const naverProvider = require("../../app/Naver/naverProvider");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");

exports.getAllReviews = async function (req, res) {

    //const userIdx = req.params.userIdx;
    try {
        const allreviewResult = await naverProvider.allReviewList();
        const data = allreviewResult[0];
        console.log(data, 'success!');
        res.render("reviews", { data });
    } catch(error) {
        console.error(error);
        return res.send(errResponse(baseResponse.DB_ERROR));
    }
}