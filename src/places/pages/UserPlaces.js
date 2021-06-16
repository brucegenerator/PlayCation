import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
  id: 'p1',
  title: 'Empire State Building',
  description: 'Skyscraper big',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
  address: '20 W 34th St, New York, NY 10001',
  location: {
    lat: 40.7484405,
    lng: -73.9878531
  },
  creator: 'u1'
},
{
  id: 'p2',
  title: 'Dave and Busters',
  description: 'Bustin\'\ Out',
  imageUrl: 'https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/607258/dave-and-busters-play-arcade-sports-bar-source-play.jpg&w=1000&op=resize',
  address: ' 4001 Brownstone Blvd Suite 101, Glen Allen, VA 23060',
  location: {
    lat: 37.6487072,
    lng: -77.6065513
  },
  creator: 'u2'
}
]

const UserPlaces = (props) => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return(
    <PlaceList items={loadedPlaces} />
  )
};

export default UserPlaces;