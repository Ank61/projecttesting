import './App.css';

function App() {
  return (
    <>
    <div className="flex w-32 xl:w-64 md-44 border mx-auto my-12 h-12  place-content-center  shadow-xl rounded-lg py-2 hover:bg-[#c6b4ef] hover:text-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
      <span className="mx-2">Download</span>
    </div>
    <button className="flex hover:bg-[#c6b4ef] xl:w-64 md-44  hover:text-white border w-32 mx-auto h-12 place-content-center rounded-lg shadow-xl py-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
</svg>
Login</button>


<div class="table w-6/12 mx-auto my-12 border-2 animate-pulse">
  <div class="table-header-group">
    <div class="table-row">
      <div class="table-cell text-left ...">Song</div>
      <div class="table-cell text-left ...">Artist</div>
      <div class="table-cell text-left ...">Year</div>
    </div>
  </div>
  <div class="table-row-group">
    <div class="table-row">
      <div class="table-cell ...">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
      <div class="table-cell ...">Malcolm Lockyer</div>
      <div class="table-cell ...">1961</div>
    </div>
    <div class="table-row">
      <div class="table-cell ...">Witchy Woman</div>
      <div class="table-cell ...">The Eagles</div>
      <div class="table-cell ...">1972</div>
    </div>
    <div class="table-row">
      <div class="table-cell ...">Shining Star</div>
      <div class="table-cell ...">Earth, Wind, and Fire</div>
      <div class="table-cell ...">1975</div>
    </div>
  </div>
</div>
<div className="grid grid-rows-2/5 grid-column: 2/4 gap-2">
  <div className="bg-slate-200">Submit</div>
  <div className="bg-slate-200">Login</div>
  <div className="bg-slate-200">Sign Up</div>
  <div className="bg-slate-200">Forgot Password?</div>
</div>

<div className="flex">
  <div className="bg-slate-200 basis-2/4">Submit</div>
  <div className="bg-slate-200 basis-1/4">Login</div>
  <div className="bg-slate-200 basis-1/4">Sign Up</div>
  <div className="bg-slate-200 basis-2/4">Forgot Password?</div>
</div>



    </>
  );
}

export default App;
