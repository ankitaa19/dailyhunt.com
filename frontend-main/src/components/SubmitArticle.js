const SubmitArticle = () => {
    const articles = [
        {
            "name": "FC Barcelona",
            "category": "Football",
            "players": ["Player1", "Player2"],
            "title": "Barcelona Faces Financial Troubles",
            "description": "FC Barcelona's financial issues continue to raise concerns among fans.",
            "url": "https://example.com/barcelona-financial-troubles",
            "publishedAt": "2023-11-30T15:30:00Z"
        },
        // Add additional articles here with required fields
    ];
    
    const sendData = async () => {
      try {
        const response = await fetch('http://localhost:5005/api/sports', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(articles),
        });
  
        if (!response.ok) throw new Error("Failed to send data");
        const result = await response.json();
        console.log("Data sent successfully:", result);
      } catch (error) {
        console.error("Error sending data:", error);
      }
    };
  
    return (
      <div>
        <h2>Submit Article</h2>
        <button onClick={sendData}>Send Data</button>
      </div>
    );
};
  
export default SubmitArticle;
