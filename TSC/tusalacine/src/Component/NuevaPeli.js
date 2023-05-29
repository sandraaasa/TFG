import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const MovieForm =() =>{
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
  
    const saveMovie = () => {
      const movieModel = mongoose.model('Movie', {
        title: String,
        director: String
      });
      const movie = new movieModel({
        title: title,
        director: director
      });
      movie.save().then(() => {
        console.log('Movie saved successfully');
      }).catch((error) => {
        console.error(error);
      });
    };
  
    return (
      <div>
        <div className="p-field">
          <label htmlFor="title">Title</label>
          <InputText id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="p-field">
          <label htmlFor="director">Director</label>
          <InputText id="director" value={director} onChange={(e) => setDirector(e.target.value)} />
        </div>
        <Button label="Save" onClick={saveMovie} />
      </div>
    );
  }
  return default MovieForm;