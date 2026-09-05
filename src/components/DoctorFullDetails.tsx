import { useEffect, useState } from "react"
import Card from "./Card"
import { useParams } from "react-router"
import axios from "axios"

const DoctorFullDetails = () => {
    interface DoctorData {
        name: string,
        phone: string,
        email: string,
        address: {
            street: string,
            city: string
        },
        website: string,
        location?: string
    }
    const { id } = useParams()
    const [doctorData, setDoctorData] = useState<DoctorData>()
    const getDoctorData = async () => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        const { data } = await axios.get(url)
        setDoctorData(data)
        console.log(data)
    }
    useEffect(() => {
        getDoctorData()
    }, [])
    // const userData = useContext(doctorContext)
    // console.log("form te ", userData)
    return <>
        <Card width="w-[500px]">
            {
                doctorData ? (
                    <div>
                        <div>doctor Id: {id}</div>
                        <div>{doctorData.name}</div>
                        <div>{doctorData.phone}</div>
                        <div>{doctorData.email}</div>
                        <div>{doctorData?.address?.street}</div>
                        <div>{doctorData.website}</div>
                    </div>
                ) : null
            }
        </Card>
    </>
}
export default DoctorFullDetails