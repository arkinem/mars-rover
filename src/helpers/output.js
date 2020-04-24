export const parseOutput = (rovers) => {
  let result = "";

  if (rovers && rovers.length > 0) {
    for (const { finalPosition, error } of rovers) {
      console.log("error", error);
      result += `${finalPosition.x} ${finalPosition.y} ${finalPosition.heading}`;

      if (error) result += ` [${error}]`;

      result += "\n";
    }
  }

  return result.trim();
};