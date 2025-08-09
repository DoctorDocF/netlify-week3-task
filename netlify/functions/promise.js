exports.handler = async (event) => {
  const functionCode = `function task(x){ return x < 18 ? Promise.resolve("yes") : Promise.reject("no"); }`;
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    },
    body: functionCode,
  };
};
