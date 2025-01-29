import DeleteBtn from "./DeleteBtn"
export default function Card() {

    return (
      <>
      <div className="p-4">
        <div className="bg-gray-200 text-center p-2 rounded-md shadow-md hover:scale-105 duration-300 transition-all cursor-pointer">
            <h2 className="font-medium">This is the note title</h2>

            <span className="text-gray-500">This is the note content</span>

            <DeleteBtn></DeleteBtn>
        </div>
      </div>
      </>
    )
  }
