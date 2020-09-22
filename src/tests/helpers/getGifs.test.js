import '@testing-library/jest-dom';
import { getGifs } from "../../helpers/getGifs";

describe('Testting in Fn getGifs, Fetch', () => {

  test("getGifs, get 5 elements", async () => {
    const category = 'Naruto'
    const data = await getGifs(category);
    const gifsCant = data.length
    expect(gifsCant).toBe(5)
  });

  test("getGifs, if you don't receive arg", async () => {
    const data = await getGifs('');
    const gifsCant = data.length;
    expect(gifsCant).toBe(0);
  });
});