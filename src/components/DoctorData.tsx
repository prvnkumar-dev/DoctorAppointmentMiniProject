import axios from "axios"
import Card from "./Card"
import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import DoctorFullDetails from "./DoctorFullDetails"
import SearchDoctors from "./SearchDoctors"
// interface doctorData{
//     name:string,
//     phone:string,
// }
export const doctorContext = createContext("")
const DoctorData = () => {
    const Navigate = useNavigate()
    const [doctorData, setDoctorData] = useState([])
    const getDoctorData = async () => {
        const url = "https://jsonplaceholder.typicode.com/users"
        const { data } = await axios.get(url)
        setDoctorData(data)
    }
    useEffect(() => {
        getDoctorData()
    }, [])

    return <>
        <h1>Doctor Details</h1>
        <doctorContext.Provider value={doctorData}>
            <SearchDoctors />

        </doctorContext.Provider>
        <section className="flex flex-wrap justify-evenly">
            {
                doctorData ? doctorData.map((item, index) => {
                    return (
                        <Card width={"w-100"}>
                            <div className="doctor-data-box flex gap-5" key={item.id} onClick={() => Navigate(`/doctordetails/${item.id}`)}>
                                <div>
                                    <div className=" flex w-[50px] h-[50px] border-1 border-black rounded-full items-center justify-center">+</div>
                                </div>
                                <div className="doctor-details-box">
                                    <div>{item.name}</div>
                                    <div>{item.email}</div>
                                    <button className="bg-green-400 px-3 py-2 rounded-xl text-white">Book Appointment</button>
                                </div>
                            </div>
                        </Card>
                    )
                }) : null
            }
        </section>
        {
            <doctorContext.Provider value={doctorData}>
                <DoctorFullDetails />

            </doctorContext.Provider>
        }
    </>
}
export default DoctorData