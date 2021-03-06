import { useState, createContext } from 'react';
import API from '../config/API';

const useFlickrApi = () => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    images: [],
  });

  const fetchPublicFeed = async () => {
    setState(prevState => ({
      ...prevState,
      loading: true,
    }));

    const results = await API.get('/public');

    setState(prevState => ({
      ...prevState,
      loading: false,
      images: results.data,
    }));
  };

  const fetchTagFeed = async tag => {
    setState(prevState => ({
      ...prevState,
      loading: true,
    }));

    const results = await API.get(`/filtered/${tag}`);

    setState(prevState => ({
      ...prevState,
      loading: false,
      images: results.data,
    }));
  };

  return { ...state, fetchPublicFeed, fetchTagFeed };
};

const Context = createContext(null);

export { useFlickrApi, Context };
