export const canChangeStatus = (current, next) => {
  if (current === "Open" && next === "Done") {
    return false;
  }
  return true;
};
