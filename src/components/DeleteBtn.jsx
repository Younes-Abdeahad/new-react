export default function DeleteBtn() {
    return (
      <>
            <div className="my-2" id="btn">
                <button id="delete" className="flex justify-center  p-2 mx-auto rounded-lg bg-white text-rose-500 font-medium hover:bg-rose-500 hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

                    Delete
                </button>
            </div>
      </>
    )
  }
