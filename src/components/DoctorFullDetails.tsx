import { useContext } from "react"
import Card from "./Card"
import { doctorContext } from "./DoctorData"

const DoctorFullDetails = () => {
    // const userData = useContext(doctorContext)
    // console.log("form te ", userData)
    return <>
        <Card width="w-[500px]">
            <div>
                <div>praveen</div>
                <div>34414545454</div>
                <div>praveen@gmail.com</div>
                <div>address</div>
                <div>website</div>
            </div>
        </Card>
    </>
}
export default DoctorFullDetails