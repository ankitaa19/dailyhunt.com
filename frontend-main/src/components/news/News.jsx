import React, { useState, useEffect } from "react";
import { collection, addDoc, doc, setDoc, onSnapshot, query, orderBy, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase.config";
import "./News.css";

const newsData = [
  {
    id: "news1",
    title: "Global Economic Outlook for 2024",
    date: "01/10/2024",
    description: "Experts provide insights into the global economic outlook as we approach the end of the year.",
    image: "https://cdn.statcdn.com/Infographic/images/normal/30490.jpeg",
  },
  {
    id: "news2",
    title: "Startups Leading the Charge in AI Development",
    date: "15/10/2024",
    description: "Startups are playing a key role in advancing AI technologies and applications across various sectors.",
    image: "https://cdn.statcdn.com/Infographic/images/normal/32063.jpeg",
  },
  {
    id: "news3",
    title: "New Trends in Consumer Behavior",
    date: "05/11/2024",
    description: "Shifts in consumer behavior are impacting businesses, prompting them to adapt their strategies.",
    image: "https://www.consultancy.in/illustrations/news/detail/2019-10-22-192400548-Emerging-consumer-behaviour-in-India.jpg",
  },
  {
    id: "news4",
    title: "India Wins ICC Cricket World Cup 2024",
    date: "2024-11-12",
    description: "India clinched the ICC Cricket World Cup title after a thrilling final against Australia.",
    image: "https://static.toiimg.com/thumb/msid-111376192,width-1070,height-580,imgsize-150490,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
  },
  {
    id: "news5",
    title: "Global Markets Surge Amid AI Boom",
    date: "2024-10-20",
    description: "Stock markets see significant growth as AI innovations drive business expansions globally.",
    image: "https://responsive.fxempire.com/v7/_fxempire_/2024/06/5-Things-4-2.jpg?func=cover&q=70&width=700",
  },
  {
    id: "news6",
    title: "Tesla Unveils Next-Gen Electric Semi Truck",
    date: "2024-08-14",
    description: "Tesla announced the launch of its next-generation electric semi truck, revolutionizing freight transportation.",
    image: "https://imgd.aeplcdn.com/1280x720/cw/ec/31927/Tesla-Semi-112492.jpg?wm=0",
  },
  {
    id: "news7",
    title: "Avatar 3 Breaks Box Office Records",
    date: "2024-07-18",
    description: "James Cameron’s Avatar 3 surpasses all expectations, earning $2 billion globally in its first month.",
    image: "",
  },
  {
    id: "news8",
    title: "AI-Powered Education Platforms Transforming Learning",
    date: "2024-09-25",
    description: "EdTech companies are leveraging AI to create personalized learning experiences for students.",
    image: "https://images.thedirect.com/media/article_full/avatar-way-of-water-box-office-record-disney.jpg",
  },
  {
    id: "news9",
    title: "Major Cyberattack Targets Global Banks",
    date: "2024-11-05",
    description: "A coordinated cyberattack hit multiple global financial institutions, causing disruptions.",
    image: "https://cdn.prod.website-files.com/5efc3ccdb72aaa7480ec8179/673c4138f7c9e8a1b4d94526_61a445889a4d67de4f6fc17c_Cyber%2520Threats%2520Financial%2520Services%25202.png",
  },
  {
    id: "news10",
    title: "New York Announces Green Tourism Initiative",
    date: "2024-05-22",
    description: "New York unveils its ambitious plan to promote sustainable tourism by 2025.",
    image: "https://i0.wp.com/thecitylife.org/wp-content/uploads/2024/10/Photo-by-NYC-Tourism.jpeg?fit=800%2C600&ssl=1",
  },
  {
    id: "news11",
    title: "Paris Hosts 2024 Olympics with Record-Breaking Viewership",
    date: "2024-08-11",
    description: "The Paris Olympics saw an unprecedented number of viewers tuning in worldwide.",
    image: "https://static.euronews.com/articles/stories/08/20/29/34/1200x675_cmsv2_1cce80a0-2ea6-5485-8471-69b5ec96d5c2-8202934.jpg",
  },
  {
    id: "news12",
    title: "Apple Introduces AR Glasses at Keynote Event",
    date: "2024-09-10",
    description: "Apple’s latest AR Glasses promise to redefine augmented reality experiences.",
    image: "https://www.cnet.com/a/img/resize/e19581648a7f8e99b5837acf48d2520dfd377d2c/hub/2023/06/05/16180953-8a27-4dfa-89e8-1578d51ca967/img-3889.jpg?auto=webp&fit=crop&height=675&width=1200",
  },
  {
    id: "news13",
    title: "Bollywood Actor Wins Oscar for Best Actor",
    date: "2024-02-25",
    description: "A Bollywood actor made history by winning the Oscar for Best Actor for the first time.",
    image: "https://th-i.thgim.com/public/incoming/2q34ou/article67937848.ece/alternates/FREE_1200/2024-03-11T020609Z_406391424_HP1EK3B05U6L5_RTRMADP_3_AWARDS-OSCARS.JPG",
  },
  {
    id: "news14",
    title: "Education Minister Announces New Scholarship Program",
    date: "2024-03-15",
    description: "The government launches a scholarship scheme to support underprivileged students.",
    image: "https://images.careerindia.com/fit-in/400x225/img/2023/11/studentscbse1-1700807217.jpg",
  },
  {
    id: "news15",
    title: "Massive Bank Heist in Los Angeles",
    date: "2024-06-03",
    description: "Thieves executed a daring bank robbery in downtown Los Angeles, stealing millions.",
    image: "https://i.dailymail.co.uk/1s/2024/04/16/11/83700443-0-image-a-38_1713264530055.jpg",
  }
];




const News = () => {
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const likesPromises = newsData.map(async (news) => {
          const docRef = doc(db, "likes", news.id);
          const docSnap = await getDoc(docRef);
          return { [news.id]: docSnap.exists() ? docSnap.data().count : 0 };
        });

        const likesSnapshot = await Promise.all(likesPromises);
        setLikes(Object.assign({}, ...likesSnapshot));
      } catch (error) {
        console.error("Error fetching likes: ", error);
      }
    };

    fetchLikes();

    const commentsQuery = query(collection(db, "comments"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(commentsQuery, (snapshot) => {
      const fetchedComments = {};
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (!fetchedComments[data.newsId]) {
          fetchedComments[data.newsId] = [];
        }
        fetchedComments[data.newsId].push(data.comment);
      });
      setComments(fetchedComments);
    });

    return () => unsubscribe();
  }, []);

  const handleLike = async (newsId) => {
    const updatedLikes = { ...likes, [newsId]: (likes[newsId] || 0) + 1 };
    setLikes(updatedLikes);

    try {
      const docRef = doc(db, "likes", newsId);
      await setDoc(docRef, { count: updatedLikes[newsId] }, { merge: true });
    } catch (error) {
      console.error("Error updating likes: ", error);
    }
  };

  const handleComment = async (newsId, comment) => {
    if (!auth.currentUser) {
      alert("You must be logged in to comment!");
      return;
    }

    try {
      await addDoc(collection(db, "comments"), {
        newsId,
        comment,
        userId: auth.currentUser.uid,
        timestamp: new Date(),
      });
    } catch (error) {
      console.error("Error adding comment: ", error);
    }
  };

  return (
    <div className="main-content">
      <h1 className="news-title">News Updates</h1>
      {newsData.map((news) => (
        <div className="news-post" key={news.id}>
          <div className="image-container">
            <img src={news.image} alt={news.title} className="news-image" />
          </div>
          <h2 className="news-title">{news.title}</h2>
          <p className="news-date"><strong>Date:</strong> {news.date}</p>
          <p className="news-description">{news.description}</p>
          <div className="news-actions">
            <button className="like-button" onClick={() => handleLike(news.id)}>
              Like ({likes[news.id] || 0})
            </button>
            <button
              className="share-button"
              onClick={() => {
                const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
                  `Check out this news: ${news.title}\n\n${news.description}`
                )}`;
                window.open(whatsappUrl, "_blank");
              }}
            >
              Share on WhatsApp
            </button>
          </div>
          <div className="comments-section">
            <h3>Comments</h3>
            <ul>
              {(comments[news.id] || []).map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
            <input
              type="text"
              placeholder="Add a comment"
              className="comment-input"
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.target.value) {
                  handleComment(news.id, e.target.value);
                  e.target.value = "";
                }
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
