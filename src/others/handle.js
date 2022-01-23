export default async (handle, customCatch = () => {}) => {
  try {
    await handle();
  } catch (err) {
    if (err.response) if (await customCatch(err)) return;
    alert('Bir hata oluştu !');
  }
};
