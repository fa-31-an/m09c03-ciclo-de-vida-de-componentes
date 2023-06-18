import React from "react";
import { MoviesRow } from "./MoviesRow";

let MovieList = [
	{
		id: 1,
		title: "El gato con botas",
		calif: 10,
		awards: 3,
		duration: 160,
	},
	{
		id: 2,
		title: "El gato con botas el último deseo",
		calif: 10,
		awards: 3,
		duration: 160,
	},
]

export const MoviesTable = () => {
	return (
		<>
			<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>

			<div className="card shadow mb-4">
				<div className="card-body">
					<div className="table-responsive">
						<table>
							<thead>
								<tr>
									<th>Id</th>
									<th>Titulo</th>
									<th>Calificación</th>
									<th>Premios</th>
									<th>Duración</th>
								</tr>
							</thead>
							<tfoot>
								<tr>
									<th>Id</th>
									<th>Titulo</th>
									<th>Calificación</th>
									<th>Premios</th>
									<th>Duración</th>
								</tr>
							</tfoot>
							<tbody>
								{MovieList.map((movie, i) => {
									return <MoviesRow {...movie} key={i} />;
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};