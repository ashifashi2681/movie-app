import React from "react";
import "../styles/table.css";
import { FaEdit } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { GrView } from "react-icons/gr";

function Table({ data, admin }) {
	return (
		<div className="table-container">
			<table className="table">
				<thead>
					<tr className="t-h-row">
						<th>Image</th>
						<th>Name</th>
						<th>Category</th>
						<th>Language</th>
						<th>Year</th>
						<th>Hours</th>
						<th style={{ textAlign: "right" }}>actions</th>
					</tr>
				</thead>
				<tbody className="t-body">
					{data.map((movie, i) => (
						<tr key={i} className="t-b-row">
							<td scope="row" className="t-d-img">
								<img
									src={`/images/${movie.image}`}
									alt={movie.name}
								/>
							</td>
							<td>{movie.name}</td>
							<td>{movie.category}</td>
							<td>{movie.language}</td>
							<td>{movie.year}</td>
							<td>{movie.time}</td>
							<td
								style={{ textAlign: "right" }}
								className="t-b-actions">
								{admin ? (
									<button className="t-b-edit">
										<span>
											<FaEdit />
										</span>
										<span>Edit</span>
									</button>
								) : (
									<button className="t-b-download">
										<span>
											<IoMdCloudDownload />
										</span>
										<span>Download</span>
									</button>
								)}

								{admin ? (
									<button className="t-b-delete">
										<MdDelete />
									</button>
								) : (
									<button className="t-b-view">
										<GrView />
									</button>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Table;
