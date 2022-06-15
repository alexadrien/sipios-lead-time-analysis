import {Data} from "./types";

export const DATA: Data = {
	unit: "s",
	stages: [
		{
			name: "CI",
			duration: 1,
			jobs: [
				{name: "Open API", duration: 0.7},
				{name: "rspec", duration: 1},
			],
		},
		{
			name: "CD",
			duration: 2,
			jobs: [
				{name: "Build docker", duration: 2}
			],
		},
		{
			name: "Somthing",
			duration: 0.5,
			jobs: [
				{name: "Why not", duration: 0.5},
				{name: "No", duration: 0.3},
			],
		},
	],
};
