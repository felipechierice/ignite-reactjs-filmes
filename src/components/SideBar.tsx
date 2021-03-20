import { Button } from './Button';

import GenreInterface from '../interfaces/Genre.interface';

import '../styles/sidebar.scss';

interface SideBarProps {
  genres: GenreInterface[]
  selectedGenre: GenreInterface,
  handleSelectGenre: (genre: GenreInterface) => void,
} 

export function SideBar({ genres, selectedGenre, handleSelectGenre }: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleSelectGenre(genre)}
            selected={selectedGenre.id === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
