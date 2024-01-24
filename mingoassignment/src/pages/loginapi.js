// api.js
const API_URL = "https://apnashaher.com/admin-login/api";

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      return data; // You might get a token or user data from the API
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};

export const getUserProfile = async () => {
  try {
    const response = await fetch(`${API_URL}/my-account`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // Get the token from storage
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data; // You might get user profile data from the API
    } else {
      throw new Error("Failed to fetch user profile");
    }
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};
