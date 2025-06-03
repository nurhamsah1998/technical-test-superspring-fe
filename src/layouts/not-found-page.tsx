function NotFoundPage() {
  return (
    <div className="h-dvh w-full flex justify-center items-center">
      <div className="flex justify-center flex-col items-center">
        <p className="text-2xl font-black text-slate-500">
          Ups! Page Not Found !!
        </p>
        <p className="text-slate-500">Check your URL path</p>
        <button
          onClick={() => (window.location.pathname = "/")}
          className={`mt-5 bg-[#319EEE] cursor-pointer font-semibold md:w-[418px] w-[80%] p-3 rounded-md text-white`}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;
