// Этот файл - заглушка. Он будет заменен адаптером SvelteKit при сборке
// Используется только для проверки существования пути

exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "SvelteKit Server Function Placeholder" })
  };
}; 