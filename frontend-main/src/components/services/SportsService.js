// src/services/sportService.js
export const createSport = async (sportData) => {
    try {
      const response = await fetch("http://localhost:5005/api/sports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sportData),
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error creating sport:", error);
      throw error; // Rethrow error for handling in the calling function
    }
  };
  