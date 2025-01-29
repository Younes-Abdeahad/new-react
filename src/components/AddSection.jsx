export default function AddSection() {

    return (
      <>
      <div className="p-4 w-1/2 mx-auto rounded-md bg-amber-400 my-6">
        <h2 className="font-semibold">Add a Note</h2>

        <form action="" method="post">
        <textarea name="Note" className="w-full border p-2 rounded-lg my-4 outline-none focus:ring-1 focus:ring-indigo-700 transition-all duration-300" placeholder="Write a note here" id="" cols="30" rows="10"></textarea>

        <div className="flex items-center justify-end">
            <button type="submit" className="bg-indigo-500 p-2 rounded-lg text-white">Add Note</button>
        </div>
        </form>

      </div>
      </>
    )
  }
