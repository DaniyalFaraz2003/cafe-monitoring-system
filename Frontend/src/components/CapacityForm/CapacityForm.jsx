import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import "./CapacityForm.css";

function CapacityForm() {
  return (
    <div className="w-full h-full p-10">
      <DashboardNavbar />
      <div className="w-full basis-3/5 flex flex-col">
        <h2 className="text-3xl font-bold text-center text-gray-500 my-5">
          Meal Capacity Form
        </h2>
        <p className="text-xl font-bold text-center">Karachi</p>
      </div>
      <div className="form-container mx-auto">
        <div className="inner-container">
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-full max-w-2xl rounded-xl bg-clip-border">
            <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-[#003366] from-gray-900 to-gray-800 bg-clip-border shadow-gray-900/20">
              <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
                Meal Capacity Form
              </h3>
            </div>
            <div className="flex flex-col gap-4 p-6">
              <div className="flex gap-4 items-center">
                <label
                  htmlFor="dietMealAmount"
                  className="block text-sm font-medium text-gray-700 w-1/4"
                >
                  Diet Meal Amount
                </label>
                <input
                  id="dietMealAmount"
                  className="w-3/4 h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 focus:border-2 focus:border-gray-900 focus:border-t-transparent"
                  
                />
                <label
                  htmlFor="extraDietPackets"
                  className="block text-sm font-medium text-gray-700 w-1/4"
                >
                  Extra Diet Packets
                </label>
                <input
                  id="extraDietPackets"
                  className="w-3/4 h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 focus:border-2 focus:border-gray-900 focus:border-t-transparent"
                  
                />
              </div>
              <div className="flex gap-4 items-center">
                <label
                  htmlFor="normalMealAmount"
                  className="block text-sm font-medium text-gray-700 w-1/4"
                >
                  Normal Meal Amount
                </label>
                <input
                  id="normalMealAmount"
                  className="w-3/4 h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 focus:border-2 focus:border-gray-900 focus:border-t-transparent"
                  
                />
              
                <label
                  htmlFor="extraNormalPackets"
                  className="block text-sm font-medium text-gray-700 w-1/4"
                >
                  Extra Normal Packets
                </label>
                <input
                  id="extraNormalPackets"
                  className="w-3/4 h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 focus:border-2 focus:border-gray-900 focus:border-t-transparent"
                  
                />
              </div>
            </div>
            <div className="p-6 pt-0">
              <button
                className="block w-full select-none rounded-lg bg-[#003366] from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20"
                type="button"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CapacityForm;
