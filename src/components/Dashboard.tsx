import DoctorData from "./DoctorData"

const Dashboard = () => {
    const dummrUrl = import.meta.env.VITE_DUMMY_URL
    return <>
        <h1>Welcome to the {dummrUrl}</h1>

        <DoctorData />
    </>
}
export default Dashboard