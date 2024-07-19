export const fetchUsers = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" },
      ]);
    }, 1000);
  });
};
