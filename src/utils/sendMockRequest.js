export default function sendMockRequest() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Успех!');
    }, 3000);
  });
}
