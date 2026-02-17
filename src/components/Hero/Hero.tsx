import Link from "next/link"
import { Button } from "../ui/button"


function Hero() {
  return (
    <div className="py-20 h-[80vh] flex flex-col gap-10 justify-center items-center">
      <h2 className="text-6xl font-bold">Welcome to Med.AI</h2>
      <p className="text-lg w-[50%] text-center">Medical AI assistant provides in-depth answers to medical related questions.</p>
      <div className="flex items-center gap-10">
        <Button className="py-5 px-10"><Link href={"/chat"}>Start Now</Link></Button>
        <Button variant="outline" className="py-5 px-10"><Link href={"/register"}>Try For Free</Link></Button>
      </div>
    </div>
  )
}

export default Hero