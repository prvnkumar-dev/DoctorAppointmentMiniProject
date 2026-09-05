import { useContext, useState } from "react"
import Card from "./Card"
import { doctorContext } from "./DoctorData"

const SearchDoctors = () => {
    const [doctorSearchResult, setDoctorSearchResult] = useState()
    const doctorContextData = useContext(doctorContext)
    const [doctorInputValue, setDoctorInputValue] = useState("")
    // const [doctorData, setDoctorData] = useState([])
    const searchResult = (val) => {
        console.log(val)
        setDoctorInputValue(val)
        const data = doctorContextData.filter((item) => item.name == val)
        console.log(data)
        setDoctorSearchResult(data)
    }
    return <>
        <div className="relative">
            <div >
                <input type="text" placeholder="search the doctor using name" className="p-3 rounded-lg w-[500px] my-4 border-1 border-black"
                    value={doctorInputValue}
                    onChange={(event) => searchResult(event.target.value)} />
            </div>
            <div className="absolute top-18 z-10">
                <Card width="w-[500px]">
                    <div>praveen, chennai</div>
                </Card>
                <Card width="w-[500px]">
                    <div>praveen, chennai</div>
                </Card>
            </div>
        </div>

    </>
}
export default SearchDoctors