import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUP = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/1280px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
    address: 'Some address 4, 12345 Some City',
    description: 'Some description',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/1280px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
    address: 'Some address 4, 12345 Some City',
    description: 'Some description',
  },
  {
    id: 'm3',
    title: 'A Third Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/1280px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
    address: 'Some address 4, 12345 Some City',
    description: 'Some description',
  },
];

const HomePage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // http request
    setLoadedMeetups(DUMMY_MEETUP);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
};

export default HomePage;
