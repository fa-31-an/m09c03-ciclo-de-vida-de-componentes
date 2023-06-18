import React from "react";

let Genres = [
	"Acción",
	"Animación",
	"Aventura",
	"SciFi",
	"Comedia",
	"Documental",
	"Drama",
	"Fantasía",
	"Infantiles",
	"Musical",
]

export const GenresInDb = () => {
	return (
		<div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
				</div>
				<div className="card-body">
					<div className="row">
						{Genres.map((genre, i) => {
							return (
								<div className="col-lg-6 mb-4">
								<div className="card bg-dark text-white shadow">
									<div className="card-body">
										{genre}
									</div>
								</div>
							</div>
							)
							
						})}
					</div>
				</div>
			</div>
		</div>
	);
};