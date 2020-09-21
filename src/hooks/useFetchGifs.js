import {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    _getGifs();
  }, [category]);

  const _getGifs = async () => {
    try {
      const data = await getGifs(category);
      setState({
        data,
        loading: false,
      });
    } catch (error) {
      console.log("error en la peticon getGifs", error);
    }
  };
  return state;
};
