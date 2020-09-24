import '@testing-library/jest-dom'
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook }  from '@testing-library/react-hooks';

describe('Testing Hook useFetchGifs', () => {

  test('Return state initial', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Naruto')); // emula un functional component
    const { data, loading } = result.current; // devuelve el state actual del hook
    await waitForNextUpdate()

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("Return array of images and loading false", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("Naruto"));
    await waitForNextUpdate()
    const { data, loading } = result.current; // devuelve el state actual del hook

    expect(data.length).toEqual(5);
    expect(loading).toBe(false);
  });
});
