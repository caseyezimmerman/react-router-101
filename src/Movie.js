import React, {Component} from 'react';
import axios from 'axios'

class Movie extends Component{
	constructor(){
		super();
		this.state = {
			movie: {}
		}
	}

	componentDidMount(){
		const mid = this.props.match.params.movieId;
		axios.get(`https://api.themoviedb.org/3/movie/${mid}?api_key=fec8b5ab27b292a68294261bb21b04a5`)
		.then((movieData)=>{
			// console.log(movieData)
			this.setState({
				movie:movieData.data 
			})
		})
	}
	render(){

		if(this.state.movie === {}){
			return(
				<h1>Loading....</h1>
			)
		}

		var movie = this.state.movie
		return(
			<div>
				<img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} />
				<p>{movie.title}</p>
				<p>{movie.budget}</p>
				<p>{movie.overview}</p>

			</div>
		)
	}
}

export default Movie