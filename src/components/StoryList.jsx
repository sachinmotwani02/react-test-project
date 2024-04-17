// components/StoriesList.js
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import 'ldrs/pinwheel'
import backgroundImage from "../assets/background.jpg"

const Card = ({ image, title, id }) => {
  return (
    <div className="story-card">
      <Link to={`/story/${id}`}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

function StoriesList() {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const response = await fetch('https://child.onrender.com/api/sciencefiction');
      const data = await response.json();
      setStories(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching stories:', error);
      setIsLoading(false);
    }
  };

  return (
    <>
    
      {isLoading ? (
        <div className="loader">
        <l-pinwheel
          size="35"
          stroke="3.5"
          speed="0.9"
          color="white" 
        ></l-pinwheel></div>
      ) : (
        <>
        <div className="background" style={{ backgroundImage: `url(${backgroundImage})`}}>
        <Navbar />
        </div>
    <div className="storylist-contain">
      {/* <h2>Stories List</h2> */}
        <div className="stories-list container">
          {stories.map((story) => (
            <Card
              key={story._id}
              id={story._id}
              image={`https://ik.imagekit.io/dev24/${story.Image}`}
              title={story.Title}
            />
          ))}
        </div>
        </div>
        </>
      )}
    
    </>
  );
}

export default StoriesList;