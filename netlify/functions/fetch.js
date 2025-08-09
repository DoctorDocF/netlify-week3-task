exports.handler = async (event) => {
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Fetch Example</title>
</head>
<body>
  <input type="text" id="inp">
  <button id="bt">Fetch</button>
  <script>
    document.getElementById('bt').addEventListener('click', async () => {
      const url = document.getElementById('inp').value;
      try {
        const response = await fetch(url);
        const text = await response.text();
        document.getElementById('inp').value = text;
      } catch (error) {
        document.getElementById('inp').value = 'Error: ' + error.message;
      }
    });
  </script>
</body>
</html>
  `;
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    },
    body: html,
  };
};
