import useYouTubeSearchApi from '../youtube-api';
import { renderHook, act } from '@testing-library/react-hooks';

describe('YouTubeAPI tests', () => {
  it('validates regular API invoke', async () => {
    // TODO: Couldn't figure out how to test this
    //   const { result, waitForNextUpdate } = renderHook (() => useYouTubeSearchApi(`https://youtube.googleapis.com/youtube/v3/search?part=snippe…ts=25&q=wizeline&key=AIzaSyA0yUYm3rItsSmM20SVQVOf1nGX6R8npxM`));
    //     await waitForNextUpdate();
    //     console.log (result.current[1]);
    //   expect(result.current[1].length).toBe(25);
  });
});
