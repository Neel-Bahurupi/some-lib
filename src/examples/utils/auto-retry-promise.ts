import autoRetry from "../../utils/auto-retry-promise";

async function fetchData() {
  return new Promise((resolve, reject) => {
    const num = Math.random() * 10;
    console.log(num);
    if (num <= 9) {
      return reject({
        error: "Rejected",
      });
    }

    return resolve({
      name: "Neel",
    });
  });
}

autoRetry({
  asyncFunction: fetchData,
  delay: 2000,
  retries: 5,
  exponential: true,
}).then((response: any) => {
  console.log(response);
});
