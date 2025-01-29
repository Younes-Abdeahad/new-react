import Header from "./layouts/Header"
import Footer from "./layouts/Footer"
import Card from "./components/card"
import AddSection from "./components/AddSection"
import NewMain from "./layouts/NewMain"
function App() {

  return (
    <>
      <Header></Header>
{/*       <AddSection></AddSection>
      <div className="flex w-full justify-between">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      </div> */}

      <h2 className="text-right text-red-500 p-6 font-bold text-4xl">Students</h2>

      <NewMain name="Younes" age={27}></NewMain>
      <NewMain name="Alireza" age={20}></NewMain>


      <Footer></Footer>
    </>
  )
}

export default App
