const getSign = require("../src/sign").default;


const obj = {
  method: "POST",
  url:
    "https://testdevsdk.xylink.com/api/rest/external/v1/file/manage/multipart/preSignature/js?enterpriseId=b251b0fa3a83916deaca628819599047e036482a",
  token: "6a16b139e040220afa7d6c7e806575c6830315c5d3be67586c6e4c22f47ce01b",
  body: JSON.stringify({
    title: "移动端_2019全国巡展.jpg",
    storeType: "lanxin-video",
    fileSize: 1280989,
    mimeType: "image/jpeg",
  }),
};

const sign = "QwQLa3zs6SQRfSLwGCC6TsnYpuCIAjylqBJ17p3dwr8%3D";

test(`${obj.url} 的最终签名是 ${sign} `, () => {
  expect(getSign(obj)).toBe(sign);
});