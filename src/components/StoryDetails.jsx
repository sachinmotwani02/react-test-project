// components/StoryDetails.js
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import 'ldrs/pinwheel'


function StoryDetails() {
  const { id } = useParams();
  const [story, setStory] = useState(null);

  useEffect(() => {
    fetchStoryDetails();
  }, []);

  const fetchStoryDetails = async () => {
    try {
      const response = await fetch(`https://child.onrender.com/api/sciencefiction/${id}`);
      const data = await response.json();
      setStory(data);
    } catch (error) {
      console.error('Error fetching story details:', error);
    }
  };

  if (!story) {
    return <div className='loader'>
    <l-pinwheel
      size="35"
      stroke="3.5"
      speed="0.9"
      color="white" 
    ></l-pinwheel></div>;
  }

  return (
    <div className="story-details">
      <h2>{story.Title}</h2>
      
      <img src={`https://ik.imagekit.io/dev24/${story.Image}`} alt={story.Title} />
      <div className="story-content">
        {story.Storyadvenure.content.map((content, index) => (
          <div key={index}>
            {content.Paragraph.map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoryDetails;