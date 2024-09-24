const getStoredApplication = () => {
  const storedApplication = localStorage.getItem("job-applications");
  if (storedApplication) {
    return JSON.parse(storedApplication);
  }
  return [];
};
const saveJobApplication = (id) => {
  const storedJobApplication = getStoredApplication();
  const exist = storedJobApplication.find((jobId) => jobId === id);
  if (!exist) {
    storedJobApplication.push(id);
    localStorage.setItem(
      "job-applications",
      JSON.stringify(storedJobApplication)
    );
  }
};
export { getStoredApplication, saveJobApplication };
