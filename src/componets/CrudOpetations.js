export const AddNewApplication = (formData, jobApplications, setData) => {
  const updatedData = [formData, ...jobApplications] // Create a new array with the new data at the beginning
  setData(updatedData) // Update the state with the new array
  console.log(jobApplications)
}
