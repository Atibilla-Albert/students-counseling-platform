import React, { useState, useEffect } from 'react';
import '../styles/front.css';

function App() {
    const backgroundImages = [
        'https://nextwindnj.com/wp-content/uploads/2023/04/Next-Wind-Recovery-Blog-3-What-is-the-Primary-Goal-of-Motivational-Interviewing.edited-1300x1300.jpg',
        'https://th.bing.com/th/id/OIP.Ox7L0MTnH3UJXGtCESQuNQHaE8?w=2560&h=1707&rs=1&pid=ImgDetMain',
        'https://www.ccda.net/uploadedImages/CCDA/Page_Elements/Featured_Content/Need_Help/Medical_and_Counseling/Counseling/Mental-Health-Counseling-640-480.jpg',
        'https://th.bing.com/th/id/OIP.7OLSZQycM7Q2IExXeIx1sQHaEK?w=354&h=187&c=7&r=0&o=5&pid=1.7',
        'https://th.bing.com/th/id/R.f4b54e6f8411b055e82cc25b5d48778a?rik=l4kMYt6lk5yaZw&riu=http%3a%2f%2fwww.unlimitedpotentialstl.com%2fuploads%2f8%2f6%2f4%2f3%2f8643236%2f7476258_orig.jpg&ehk=ZljF5HtOckSf9a2ZJAgjCR4Cp6xC7MZUZkJxKVlO5KU%3d&risl=&pid=ImgRaw&r=0'
    
    ];
  
    const quotes = [
      'The best way to get started is to quit talking and begin doing. – Walt Disney',
      'The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. – Winston Churchill',
      'Don’t let yesterday take up too much of today. – Will Rogers',
      'You learn more from failure than from success. Don’t let it stop you. Failure builds character. – Unknown',
      'There Is No Greater Thing You Can Do With Your Life And Your Work Than Follow Your Passions – In A Way That Serves The World And You. - Richard Branson',
      'If you dont like the road you are walking, start paving another one.- Dolly Parton',
      'The secret of getting ahead is getting started.-Mark Twain',
     
    ];
  
    const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
    const [quoteIndex, setQuoteIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setBackgroundImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      }, 50000); // Change background and quote every 5 seconds
  
      return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [backgroundImages.length, quotes.length]);
  
    return (
      <div className="App" id='Home' style={{ backgroundImage: `url(${backgroundImages[backgroundImageIndex]})` }}>
        <header className="App-header">
          <h1>Daily Motivational Quotes</h1>
          <p className="quote">{quotes[quoteIndex]}</p>
        </header>
      </div>
    );
  }
  
  export default App;
  