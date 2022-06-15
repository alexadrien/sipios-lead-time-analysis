import React from 'react';
import './App.css';
import {Box, Typography} from "@mui/material";
import {DATA} from "./data";

function App() {
	return (
		<Box sx={theme => ({
			display: "flex",
			padding: theme.spacing(1),
		})}>
			{!!DATA && DATA.stages.length > 0 && DATA.stages.map(stage => (
				<Box sx={theme => ({
					flexGrow: stage.duration,
					padding: theme.spacing(1),
					borderRadius: "1rem",
					borderColor: "#011031",
					borderStyle: "solid",
					borderWidth: "0.1rem",
					margin: theme.spacing(1),
				})}>
					<Box>
						<Typography variant={"h2"}>
							{stage.name} - {stage.duration}{DATA.unit}
						</Typography>
					</Box>
					<Box sx={theme => ({
						display: "flex",
						flexDirection: "column",
						padding: theme.spacing(1),
					})}>
						{stage.jobs.length > 0 && stage.jobs.map(job => (
							<Box sx={theme => ({
								backgroundColor: "#011031",
								color: "white",
								width: `calc(${100 * job.duration / stage.duration}% - 4*${theme.spacing(1)})`,
								padding: theme.spacing(1),
								margin: theme.spacing(1),
								borderRadius: "0.7rem",
							})}>
								<Box>
									<Typography variant={"h3"}>
										({job.duration}{DATA.unit}) {job.name}
									</Typography>
								</Box>
							</Box>
						))}
					</Box>
				</Box>
			))}
		</Box>
	);
}

export default App;
