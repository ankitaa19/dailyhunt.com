const createSport = async () => {
    const sportData = [{
        "name": "Barcelona Faces Financial Troubles",
        "category": "Sports",
        "players": ["Player 1", "Player 2"],
        "description": "FC Barcelona's financial issues continue to raise concerns among fans.",
        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG83tRkKOipz8uAugvKTZF53k3AiIhY91SwA&s",
        "publishedAt": "2023-11-30T15:30:00Z"
    },
    {
        "name": "Manchester City Draws with Liverpool",
        "category": "Sports",
        "players": ["Player 3", "Player 4"],
        "description": "In a thrilling match, Manchester City and Liverpool finish with a draw.",
        "url": "https://www.mancity.com/meta/media/3wsnutvb/wide-highlights_lpool_pl.jpg",
        "publishedAt":"2023-12-03T17:00:00Z"
    },
    {
        "name": "Chelsea Wins EFL Cup",
        "category": "Sports",
        "players": ["Player 5", "Player 6"],
        "description": "Chelsea lifts the EFL Cup after a hard-fought final against Manchester.",
        "url": "https://e0.365dm.com/15/03/2048x1152/chelsea-trophy-celebration_3271323.jpg?20150301181940",
        "publishedAt": "2023-12-10T19:00:00Z"
    },
    {
        "name": "Real Madrid Prepares for FIFA Club World Cup",
        "category": "Sports",
        "players": ["Player 7", "Player 8"],
        "description": "Real Madrid gears up for the upcoming FIFA Club World Cup.",
        "url": "https://www.aljazeera.com/wp-content/uploads/2023/02/2023-02-11T224925Z_1496717544_UP1EJ2B1REACF_RTRMADP_3_SOCCER-CLUB-MAD-ALH-REPORT.jpg?resize=1839%2C1080",
       " publishedAt":"2023-12-15T12:00:00Z"
    },
    {
        "name": "Inter Milan's Stellar Performance in Serie A",
        "category": "Sports",
        "players": ["Player 9", "Player 10"],
        "description": "Inter Milan continues its dominance in Serie A with a string of impressive victories.",
        "url": "https://s.rfi.fr/media/display/d9ffdaf2-9d0b-11ef-a192-005056a97e36/w:980/p:16x9/a9ae6c5b1535821e85aeceb3cd44479f0a316254.jpg",
        "publishedAt": "2023-12-20T14:30:00Z"
    },
    {
        "name": "Women's World Cup Success for England",
        "category": "Sports",
        "players": ["Player 11", "Player 12"],
        "description": "The England women's team achieves great success at the World Cup.",
        "url": "https://ichef.bbci.co.uk/news/1024/branded_sport/4411/production/_97052471_england_women_getty.jpg",
        "publishedAt": "2023-12-25T11:45:00Z"
    },
    {
        "name": "Upcoming Football Events in 2024",
        "category": "Sports",
        "players": ["Player 13", "Player 14"],
        "description": "A preview of major football events scheduled for 2024.",
        "url": "https://i.ytimg.com/vi/SbJZufe1MUw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAlMBbZDVNr2WheGDe1Qv9eV1RVQw",
        "publishedAt": "2023-12-18T08:00:00Z"
    },
    {
        "name": "2024 FIFA World Cup Qualifiers: What to Expect",
        "category": "Sports",
        "players": ["Player 15", "Player 16"],
        "description": "An analysis of the teams and matches in the upcoming qualifiers.",
        "url": "https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Ffifae-world-cup-2024-path-to-qualification-for-each-nation-v0-yj74fya15yqd1.png%3Fauto%3Dwebp%26s%3D5048901a9a74c18f98f960bbabafb6104171a87f",
        "publishedAt": "2023-12-19T09:30:00Z"
    },
    {
        "name": "Olympics 2024: Football Tournament Preview",
        "category": "Sports",
        "players": ["Player 17", "Player 18"],
        "description": "A preview of the upcoming football tournament at the 2024 Olympics.",
        "url": "https://content-cdn.superbru.com/ParisFootballMens.png",
        "publishedAt": "2023-12-21T12:00:00Z"
    },
    {
        "name": "FIFA Women's World Cup 2023 Highlights",
        "category": "Sports",
        "players": ["Player 19", "Player 20"],
        "description": "Highlights from the FIFA Women's World Cup 2023.",
        "url": "https://www.hindustantimes.com/ht-img/img/2023/08/20/1600x900/FBL-WC-2023-WOMEN-MATCH64-ESP-ENG-473_1692535221244_1692535266480.jpg",
        "publishedAt": "2023-12-22T14:30:00Z"
    },
    {
        "name": "Premier League Transfer Rumors",
        "category": "Sports",
        "players": ["Player 21", "Player 22"],
        "description": "Latest transfer rumors surrounding Premier League clubs.",
        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGBRTuwyOX8HNYxlIFGE91TIWEDzh9mCikzg&s",
        "publishedAt": "2023-12-23T16:00:00Z"
    },
    {
        "name": "FIFA Player of the Year Nominees Announced",
        "category": "Sports",
        "players": ["Player 23", "Player 24"],
        "description": "The nominees for FIFA Player of the Year have been announced.",
        "url": "https://sportcdns.live/news-2/2513ddc00e89d65071da23674f3f89110a5d8ffa66ddfccab022e3aa4530c716.jpeg",
        "publishedAt": "2023-12-24T18:00:00Z"
    },
    {
        "name": "2024 UEFA Champions League Round of 16 Draw",
        "category": "Sports",
        "players": ["Player 25", "Player 26"],
        "description": "The draw for the UEFA Champions League Round of 16 takes place.",
        "url": "https://images.indianexpress.com/2023/12/UCL.png?w=414",
        "publishedAt": "2023-12-26T20:00:00Z"
    },
    {
        "name": "Football Development Initiatives in Asia",
        "category": "Sports",
        "players": ["Player 27", "Player 28"],
        "description": "Various initiatives to promote football development in Asia.",
        "url": "https://www.drishtiias.com/images/uploads/1673424676_Vision_Drishti_IAS_English.png",
        "publishedAt": "2023-12-27T21:30:00Z"
    },
    {
        "name": "Grassroots Football Programs in Africa",
        "category": "Sports",
        "players": ["Player 29", "Player 30"],
        "description": "The impact of grassroots football programs in Africa.",
        "url": "https://example.com/grassroots-football-africa",
        "publishedAt": "2023-12-28T23:00:00Z"
    },
    {
        "name": "Emerging Talents in European Football",
        "category": "Sports",
        "players": ["Player 31", "Player 32"],
        "description": "Spotlight on emerging talents in European football leagues.",
        "url": "https://example.com/emerging-talents-europe",
        "publishedAt": "2023-12-29T11:00:00Z"
    },
    {
        "name": "The Rise of Women's Football",
        "category": "Sports",
        "players": ["Player 33", "Player 34"],
        "description": "Exploring the rise and popularity of women's football globally.",
        "url": "https://example.com/rise-of-womens-football",
        "publishedAt": "2023-12-30T12:30:00Z"
    },
    {
        "name": "Football Innovations and Technology",
        "category": "Sports",
        "players": ["Player 35", "Player 36"],
        "description": "How technology is changing the game of football.",
        "url": "https://example.com/football-innovations-technology",
        "publishedAt": "2023-12-31T14:00:00Z"
    },
    {
        "name": "Legendary Football Players: A Look Back",
        "category": "Sports",
        "players": ["Player 37", "Player 38"],
        "description": "A retrospective on legendary football players and their impact.",
        "url": "https://example.com/legendary-football-players",
        "publishedAt": "2024-01-01T15:45:00Z"
    },
    {
        "name": "Football Rivalries That Defined Eras",
        "category": "Sports",
        "players": ["Player 39", "Player 40"],
        "description": "Exploring the football rivalries that have shaped the sport.",
        "url": "https://example.com/football-rivalries-defined-eras",
        "publishedAt": "2024-01-02T17:30:00Z"
    },
    {
        "name": "The Future of VAR in Football",
        "category": "Sports",
        "players": ["Player 41", "Player 42"],
        "description": "A discussion on the impact and future of VAR technology in football.",
        "url": "https://example.com/future-of-var-football",
        "publishedAt": "2024-01-03T19:15:00Z"
    },
    {
        "name": "How Climate Change Affects Football",
        "category": "Sports",
        "players": ["Player 43", "Player 44"],
        "description": "Examining how climate change impacts the game of football.",
        "url": "https://example.com/climate-change-football",
        "publishedAt": "2024-01-04T21:00:00Z"
    },
    {
        "name": "Football and Social Change",
        "category": "Sports",
        "players": ["Player 45", "Player 46"],
        "description": "The role of football in promoting social change and equality.",
        "url": "https://example.com/football-social-change",
        "publishedAt": "2024-01-05T22:45:00Z"
    },
    {
        "name": "The Economics of Football",
        "category": "Sports",
        "players": ["Player 47", "Player 48"],
        "description": "A look at the economic aspects of the football industry.",
        "url": "https://example.com/economics-of-football",
        "publishedAt": "2024-01-06T14:00:00Z"
    },

    {
        "name": "England's Harry Brook Sets Record in Ashes",
        "category": "Sports",
        "players": ["Player 1", "Player 2"], 
        "description": "Brook becomes the fastest player to score 1,000 Test runs during the Ashes.",
        "url": "https://example.com/harry-brook-record",
        "publishedAt": "2023-07-08"
    },
    
    {
        "name": "IPL 2023 Opening Ceremony a Grand Success",
        "category": "Sports",
        "players": ["Player 3", "Player 4"],
        "description": "The IPL 2023 begins with a spectacular opening ceremony featuring Bollywood stars.",
        "url": "https://example.com/ipl-opening-ceremony",
        "publishedAt": "2023-04-01"
    },
    {
        "name": "Zimbabwe Defeats Sri Lanka in World Cup Qualifiers",
        "category": "Sports",
        "players": ["Player 5", "Player 6"],
        "description": "Zimbabwe stuns Sri Lanka with a dominant performance to secure a World Cup qualifier victory.",
        "url": "https://example.com/zimbabwe-world-cup-qualifiers",
        "publishedAt": "2023-06-25"
    },
    {
        "name": "Mumbai Indians Signs Promising Young Talent",
        "category": "Sports",
        "players": ["Player 7", "Player 8"],
        "description": "Mumbai Indians announces the signing of a 16-year-old prodigy ahead of the IPL season.",
        "url": "https://example.com/mumbai-indians-young-talent",
        "publishedAt": "2023-03-18"
    },
    {
        "name": "West Indies Clinch Series Against South Africa",
        "category": "Sports",
        "players": ["Player 9", "Player 10"],
        "description": "West Indies secures a thrilling series win against South Africa in the final match.",
        "url": "https://example.com/windies-south-africa-series",
        "publishedAt": "2023-05-12"
    },
    {
        "name": "Australia Wins T20 World Cup",
        "category": "Sports",
        "players": ["Player 11", "Player 12"],
        "description": "Australia emerges victorious in the T20 World Cup final against New Zealand.",
        "url": "https://example.com/australia-t20-world-cup",
        "publishedAt": "2023-11-20"
    },
    {
        "name": "India Defeats Pakistan in World Cup Match",
        "category": "Sports",
        "players": ["Player 13", "Player 14"],
        "description": "In a thrilling encounter, India triumphs over Pakistan in the World Cup match.",
        "url": "https://example.com/india-pakistan-world-cup",
        "publishedAt": "2023-10-15"
    },
    {
        "name": "New Zealand Announces Squad for ODI Series",
        "category": "Sports",
        "players": ["Player 15", "Player 16"],
        "description": "New Zealand announces its squad for the upcoming ODI series against Australia.",
        "url": "https://example.com/nz-odi-squad",
        "publishedAt": "2023-09-05"
    },
    {
        "name": "Sri Lanka's Young Players Shine in T20 League",
        "category": "Sports",
        "players": ["Player 17", "Player 18"],
        "description": "Young talents from Sri Lanka impress during the T20 league.",
        "url": "https://example.com/sri-lanka-young-players",
        "publishedAt": "2023-08-25"
    },
    {
        "name": "Bangladesh's Historic Win Against India",
        "category": "Sports",
        "players": ["Player 19", "Player 20"],
        "description": "Bangladesh achieves a historic win against India in the test series.",
        "url": "https://example.com/bangladesh-win-india",
        "publishedAt": "2023-07-12"
    },
    {
        "name": "South Africa Announces Squad for ICC World Cup",
        "category": "Sports",
        "players": ["Player 21", "Player 22"],
        "description": "South Africa announces its squad for the upcoming ICC World Cup.",
        "url": "https://example.com/south-africa-icc-squad",
        "publishedAt": "2023-06-10"
    },
    {
        "name": "Pakistan's Key Players to Watch in World Cup",
        "category": "Sports",
        "players": ["Player 23", "Player 24"],
        "description": "An analysis of key players from Pakistan for the upcoming World Cup.",
        "url": "https://example.com/pakistan-key-players",
        "publishedAt": "2023-05-30"
    },
    {
        "name": "IPL 2023 Player Auction Highlights",
        "category": "Sports",
        "players": ["Player 25", "Player 26"],
        "description": "Highlights from the IPL 2023 player auction.",
        "url": "https://example.com/ipl-2023-auction",
        "publishedAt": "2023-04-15"
    },
    {
        "name": "Cricket's Greatest Moments: A Retrospective",
        "category": "Sports",
        "players": ["Player 27", "Player 28"],
        "description": "A look back at the greatest moments in cricket history.",
        "url": "https://example.com/greatest-cricket-moments",
        "publishedAt": "2023-03-22"
    },
    {
        "name": "Women's Cricket World Cup Highlights",
        "category": "Sports",
        "players": ["Player 29", "Player 30"],
        "description": "Highlights from the Women's Cricket World Cup.",
        "url": "https://example.com/womens-cricket-world-cup",
        "publishedAt": "2023-02-28"
    },
    {
        "name": "The Rise of T20 Leagues Worldwide",
        "category": "Sports",
        "players": ["Player 31", "Player 32"],
        "description": "Exploring the popularity of T20 leagues across the globe.",
        "url": "https://example.com/rise-of-t20-leagues",
        "publishedAt": "2023-01-15"
    },
    {
        "name": "Emerging Players to Watch in 2024",
        "category": "Sports",
        "players": ["Player 33", "Player 34"],
        "description": "A look at emerging cricket talents to watch in 2024.",
        "url": "https://example.com/emerging-players-2024",
        "publishedAt": "2023-12-31"
    },
    {
        "name": "The Impact of COVID-19 on Cricket",
        "category": "Sports",
        "players": ["Player 35", "Player 36"],
        "description": "Examining how COVID-19 has affected the cricketing world.",
        "url": "https://example.com/covid-impact-cricket",
        "publishedAt": "2023-11-22"
    },
    {
        "name": "International Cricket Council's New Regulations",
        "category": "Sports",
        "players": ["Player 37", "Player 38"],
        "description": "An overview of new regulations introduced by the ICC.",
        "url": "https://example.com/icc-new-regulations",
        "publishedAt": "2023-10-30"
    },

    {
        "name": "Cricket Legends: Who Will Be the Next?",
        "category": "Sports",
        "players": ["Player 39", "Player 40"],
        "description": "A discussion on who might be the next cricket legend.",
        "url": "https://example.com/next-cricket-legends",
        "publishedAt": "2023-09-15"
    },
    {
        "name": "The Evolution of Women's Cricket",
        "category": "Sports",
        "players": ["Player 41", "Player 42"],
        "description": "A deep dive into the evolution of women's cricket.",
        "url": "https://example.com/evolution-womens-cricket",
        "publishedAt": "2023-08-10"
    },
    {
        "name": "Top 10 Cricket Rivalries of All Time",
        "category": "Sports",
        "players": ["Player 43", "Player 44"],
        "description": "Ranking the top 10 cricket rivalries in history.",
        "url": "https://example.com/top-10-cricket-rivalries",
        "publishedAt": "2023-07-25"
    },
    {
        "name": "2023 Cricket World Cup: Teams to Watch",
        "category": "Sports",
        "players": ["Player 45", "Player 46"],
        "description": "Teams to keep an eye on in the 2023 Cricket World Cup.",
        "url": "https://example.com/2023-world-cup-teams",
        "publishedAt": "2023-06-15"
    },
    {
        "name": "Cricket and Mental Health Awareness",
        "category": "Sports",
        "players": ["Player 47", "Player 48"],
        "description": "The role of cricket in promoting mental health awareness.",
        "url": "https://example.com/cricket-mental-health",
        "publishedAt": "2023-05-05"
    },
    {
        "name": "The Future of Test Cricket",
        "category": "Sports",
        "players": ["Player 49", "Player 50"],
        "description": "A discussion on the future of Test cricket in the modern game.",
        "url": "https://example.com/future-of-test-cricket",
        "publishedAt":"2023-04-22"
    }
]
  
    try {
      const response = await fetch("http://localhost:5005/api/sports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sportData),  // Ensure this includes all required fields
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const result = await response.json();
      console.log("Created sport:", result);
    } catch (error) {
      console.error("Error creating sport:", error);
    }
  };
  