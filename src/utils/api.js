export const loginUser = async (email, password) => {
  // Mocked API call
  if (email === "user@example.com" && password === "password123") {
    return { success: true };
  } else {
    return { success: false, message: "Invalid credentials" };
  }
};
