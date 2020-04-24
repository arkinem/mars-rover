export const parseOutput = (rovers, showErrors = true) => {
  let result = "";

  if (rovers && rovers.length > 0) {
    for (const { finalPosition, error } of rovers) {
      result += `${finalPosition.x} ${finalPosition.y} ${finalPosition.heading}`;

      if (showErrors && error) result += ` ${error}`;

      result += "\n";
    }
  }

  return result.trim();
};
