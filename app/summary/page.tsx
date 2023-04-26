import AiCaptain from "../components/AiCaptain"
import Applicants from "../components/Applicants"
import ApplicationBasics from "../components/ApplicationBasics"
import LoanInfo from "../components/LoanInfo"
import PrimaryProperty from "../components/PrimaryProperty"
import PrimaryPurpose from "../components/PrimaryPurpose"
import Todo from "../components/Todo"

function SummaryPage() {
  return (

    <div className='flex justify-center'>
      <div className='flex flex-col max-w-6xl gap-4 p-6 md:p-8'>

        <div className='flex flex-col items-center md:flex-row md:justify-between'>
          <h1 className='mb-6 text-4xl font-light'>Application Summary</h1>
          <button className='w-full p-4 text-sm font-semibold tracking-widest text-white uppercase transition duration-300 bg-teal-500 rounded-lg lg:px-6 hover:bg-teal-600 md:w-fit'>Submit to production</button>
        </div>

        {/* CONTENT AREA */}
        <div className='flex flex-col-reverse gap-4 md:flex-row'>

          {/* FIRST COLUMN */}
          <div className='flex flex-col gap-3 md:w-1/2'>

            <ApplicationBasics />
            <LoanInfo />
            <PrimaryPurpose />
            <Applicants />
            <PrimaryProperty />

          </div>

          {/* SECOND COLUMN */}
          <div className='flex flex-col gap-3 md:w-1/2'>

            <AiCaptain />
            <Todo />

          </div>
        </div>

      </div>
    </div>

  )
}

export default SummaryPage