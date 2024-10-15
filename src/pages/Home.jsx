import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const HomeContainer = styled.div`
  padding: 2rem;
  overflow-y: auto;
  height: calc(100vh - 4rem);
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const SwiperContainer = styled.div`
  width: 100%;
  height: 450px;
  padding: 50px 0;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const MovieTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`;

const MovieDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  max-width: 60%;
`;

const WatchButton = styled.button`
  background-color: #e50914;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  align-self: flex-start;
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f40612;
    transform: scale(1.05);
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin: 2rem 0 1rem;
`;

const ContentRow = styled.div`
  display: flex;
  overflow-x: auto;
  padding-bottom: 1rem;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const ContentItem = styled.div`
  flex: 0 0 auto;
  width: 200px;
  margin-right: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const ContentImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;

const ContentTitle = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  text-align: center;
`;

const popularMovies = [
  { id: 1, title: "Inception", image: "https://via.placeholder.com/1000x400?text=Inception", description: "A thief who enters the dreams of others to steal secrets from their subconscious." },
  { id: 2, title: "The Shawshank Redemption", image: "https://via.placeholder.com/1000x400?text=The+Shawshank+Redemption", description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency." },
  { id: 3, title: "The Dark Knight", image: "https://via.placeholder.com/1000x400?text=The+Dark+Knight", description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice." },
  { id: 4, title: "Pulp Fiction", image: "https://via.placeholder.com/1000x400?text=Pulp+Fiction", description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption." },
  { id: 5, title: "Forrest Gump", image: "https://via.placeholder.com/1000x400?text=Forrest+Gump", description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart." },
];

const actionMovies = [
  { id: 1, title: "Die Hard", image: "https://via.placeholder.com/200x300?text=Die+Hard" },
  { id: 2, title: "Mad Max: Fury Road", image: "https://via.placeholder.com/200x300?text=Mad+Max:+Fury+Road" },
  { id: 3, title: "John Wick", image: "https://via.placeholder.com/200x300?text=John+Wick" },
  { id: 4, title: "The Matrix", image: "https://via.placeholder.com/200x300?text=The+Matrix" },
  { id: 5, title: "Mission: Impossible", image: "https://via.placeholder.com/200x300?text=Mission:+Impossible" },
  { id: 6, title: "Terminator 2", image: "https://via.placeholder.com/200x300?text=Terminator+2" },
];

const comedyMovies = [
  { id: 1, title: "The Hangover", image: "https://via.placeholder.com/200x300?text=The+Hangover" },
  { id: 2, title: "Bridesmaids", image: "https://via.placeholder.com/200x300?text=Bridesmaids" },
  { id: 3, title: "Superbad", image: "https://via.placeholder.com/200x300?text=Superbad" },
  { id: 4, title: "Anchorman", image: "https://via.placeholder.com/200x300?text=Anchorman" },
  { id: 5, title: "Shaun of the Dead", image: "https://via.placeholder.com/200x300?text=Shaun+of+the+Dead" },
  { id: 6, title: "Zoolander", image: "https://via.placeholder.com/200x300?text=Zoolander" },
];

const popularSeries = [
  { id: 1, title: "Stranger Things", image: "https://via.placeholder.com/200x300?text=Stranger+Things" },
  { id: 2, title: "Game of Thrones", image: "https://via.placeholder.com/200x300?text=Game+of+Thrones" },
  { id: 3, title: "Breaking Bad", image: "https://via.placeholder.com/200x300?text=Breaking+Bad" },
  { id: 4, title: "The Crown", image: "https://via.placeholder.com/200x300?text=The+Crown" },
  { id: 5, title: "The Mandalorian", image: "https://via.placeholder.com/200x300?text=The+Mandalorian" },
  { id: 6, title: "Chernobyl", image: "https://via.placeholder.com/200x300?text=Chernobyl" },
];

function Home() {
  return (
    <HomeContainer>
      <Title>Welcome to StreamFlix</Title>
      <SwiperContainer>
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          loop={true}
          effect={'coverflow'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          slidesPerView={1.5}
        >
          {popularMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Slide style={{ backgroundImage: `url(${movie.image})` }}>
                <MovieTitle>{movie.title}</MovieTitle>
                <MovieDescription>{movie.description}</MovieDescription>
                <WatchButton onClick={() => alert(`Watching ${movie.title}`)}>
                  Watch Now
                </WatchButton>
              </Slide>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>

      <SectionTitle>Popular Movies</SectionTitle>
      <ContentRow>
        {popularMovies.map((movie) => (
          <ContentItem key={movie.id}>
            <ContentImage src={movie.image} alt={movie.title} />
            <ContentTitle>{movie.title}</ContentTitle>
          </ContentItem>
        ))}
      </ContentRow>

      <SectionTitle>Action Movies</SectionTitle>
      <ContentRow>
        {actionMovies.map((movie) => (
          <ContentItem key={movie.id}>
            <ContentImage src={movie.image} alt={movie.title} />
            <ContentTitle>{movie.title}</ContentTitle>
          </ContentItem>
        ))}
      </ContentRow>

      <SectionTitle>Comedy Movies</SectionTitle>
      <ContentRow>
        {comedyMovies.map((movie) => (
          <ContentItem key={movie.id}>
            <ContentImage src={movie.image} alt={movie.title} />
            <ContentTitle>{movie.title}</ContentTitle>
          </ContentItem>
        ))}
      </ContentRow>

      <SectionTitle>Popular Series</SectionTitle>
      <ContentRow>
        {popularSeries.map((series) => (
          <ContentItem key={series.id}>
            <ContentImage src={series.image} alt={series.title} />
            <ContentTitle>{series.title}</ContentTitle>
          </ContentItem>
        ))}
      </ContentRow>
    </HomeContainer>
  );
}

export default Home;