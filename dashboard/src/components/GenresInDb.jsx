import React, { Component } from "react";
import { Genres } from "./Genres";

export class GenresInDb extends Component {

	constructor() {
		super();
		this.state = {
			genresList: [],
		}
	};

	componentDidMount() {
		fetch('http://localhost:3001/api/genres')
			.then((response) => {
				return response.json();
			})
			.then((genres) => {
				this.setState({ genresList: genres.data })
			})
			.catch(err => console.error(err));
	};


	render() {
		return (
			<div className="col-lg-6 mb-4">
				<div className="card shadow mb-4">
					<div className="card-header py-3">
						<h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
					</div>
					<div className="card-body">
						<div className="row">
							{this.state.genresList.map((genre, i) => {
								return <Genres {...genre} key={i} />
							})}
						</div>
					</div>
				</div>
			</div>
		);
	};
};