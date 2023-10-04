import { useSelector } from "react-redux";
import useMovie from "../hooks/useMovie";
import Showcase from "../components/Showcase";
import MovieSlider from "../components/MovieSlider";
import { MOVIES, SHOWCASE } from "../services/tmdb";
import useShowCase from "../hooks/useShowCase";

const Latest = () => {
  const { latest } = SHOWCASE;
  const { popular } = MOVIES;

  // Fetch movies and set to Redux Store
  useShowCase(latest.endpoint, latest.type, null, 'hi', 0);

  useMovie(popular.endpoint, 'latest', null, 'hi');

  // Receive moview list from Redux Store
  const showCase = useSelector((store) => store.showCase.latest);
  const movies = useSelector((store) => store.movies);
  if (!movies) return;

  return (
    <div className='broswe-page'>
      {showCase && <Showcase data={showCase} />}
      <div className='moview-by-type px-4 md:px-12 md:mt-[-10%] xl:mt-[-15%] z-50 relative'>
        <MovieSlider heading="Latest Release" data={movies.latest} />
      </div>
    </div>
  )
}

export default Latest
