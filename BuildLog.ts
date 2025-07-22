const buildLog: string[] = [];

export const logBuild = (entry: string) => {
  const timestamp = new Date().toISOString();
  const fullEntry = `[${timestamp}] ${entry}`;
  buildLog.push(fullEntry);
  console.log(fullEntry); // Optional: also output to console
};

export const getBuildLog = () => {
  return [...buildLog]; // return a copy
};

export const clearBuildLog = () => {
  buildLog.length = 0;
};
