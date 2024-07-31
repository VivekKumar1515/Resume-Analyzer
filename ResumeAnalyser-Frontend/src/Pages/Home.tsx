function home() {
  return (
    <div className="w-full h-screen">
      <div className="h-screen lg:w-[80%] md:w-[95%] mx-auto font-sans">
        <div
          id="navigation"
          className="w-full mt-4 flex flex-row justify-between h-20"
        >
          <div className="flex flex-row items-center">
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/?size=100&id=NKRM4VSa2hw2&format=png&color=edf0f2"
              alt="resume"
            />

            <div className="font-sans text-2xl font-medium text-white">
              ResumeAnalyser
            </div>
          </div>

          <div className="my-auto">
            <button
              type="submit"
              className="text-white border-white border hover:bg-white transition-colors hover:text-[#10002B] duration-300 rounded-md px-6 py-2"
            >
              Log In
            </button>
          </div>
        </div>

        <div className="text-white my-[180px] text-center">
          <div className="space-y-4">
          <h1 className="font-medium text-4xl font-serif line tracking-wide">
            AI Resume Analyser:
          </h1>
          <h1 className="font-medium text-4xl font-serif line tracking-wide">
            Instantly check your score.
          </h1>
          <p className="text-[1rem] tracking-wide">
            Quickly review your resume. Analyse it for potential issues and see
            how it stacks up against other resumes in our database.
          </p>
          </div>

          <div className="border-2 rounded-2xl w-[600px] h-[300px] box-border relative border-dashed mx-auto mt-10">
            <img src="https://img.icons8.com/?size=100&id=41qMbxehez2N&format=png&color=edf0f2" alt="" className="mx-auto w-20 h-20 mt-20"/>
            <input type="file" accept="" className="bg-transparent  h-[100%] w-[100%] left-0 top-0 opacity-0 absolute overflow-clip hover:cursor-pointer cursor"/>
            <button type="submit" className="bg-transparent border border-white rounded-md px-6 py-2 hover:bg-white hover:text-[#10002B] transition-colors duration-300 mt-3">Upload your Resume</button>
            <p className="font-medium text-xs mt-7">or you can just drop you resume here</p>
          </div>
          
        </div>
      </div>
    </div>
   );
}

export default home;
