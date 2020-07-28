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

    const {
      data: { results },
    } = await API.get('/public');

    setState(prevState => ({
      ...prevState,
      loading: false,
      images: results,
    }));
  };

  const fetchTagFeed = async tag => {
    setState(prevState => ({
      ...prevState,
      loading: true,
    }));

    const {
      data: { results },
    } = await API.get(`/filtered/${tag}`);

    setState(prevState => ({
      ...prevState,
      loading: false,
      images: results,
    }));
  };

  return { ...state, fetchPublicFeed, fetchTagFeed };
};

const Context = createContext(null);

export { useFlickrApi, Context };
