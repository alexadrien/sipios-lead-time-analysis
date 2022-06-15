export type Job = {
	duration: number,
	name: string,
};

export type Stage = {
	duration: number,
	jobs: Job[],
	name: string,
};

export type Data = {
	stages: Stage[],
	unit: string,
};
