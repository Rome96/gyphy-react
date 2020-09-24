import '@testing-library/jest-dom'
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook }  from '@testing-library/react-hooks';

describe('Testing Hook useFetchGifs', () => {
  test('', () => {
    const { result } = renderHook(() => useFetchGifs('Naruto')); // emula un functional component
    const { data, loading } = result.current; // devuelve el state actual del hook

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
});
