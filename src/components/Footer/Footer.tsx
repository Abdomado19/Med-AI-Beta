import { LocationEdit, MessageCircle, PhoneIcon } from "lucide-react"
import Link from "next/link"


function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10">
      <div>
        <div className="flex items-center gap-2 mb-5">
        <span className="w-8 h-8 text-xl flex items-center justify-center bg-black rounded-md text-white mr-2">M</span><span className="text-lg font-bold">Med.AI</span>
        </div>
        <p className="text-sm text-gray-700">Medical AI assistant provides in-depth answers to medical related questions.</p>
        <div className="mt-3 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <LocationEdit className="text-gray-600"/>
            <p className="text-sm font-medium text-gray-600">123 Shop Street, Octoper City, DC 12345</p>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="text-gray-600"/>
            <p className="text-sm font-medium text-gray-600">(+20) 01093333333</p>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="text-gray-600"/>
            <p className="text-sm font-medium text-gray-600">support@MedAI.com</p>
          </div>
        </div>
      </div>

      

   
      <div>
        <h2 className="text-lg font-bold mb-5">CUSTOMER SERVICE</h2>
        <ul className="flex flex-col gap-2">
          <li className="text-gray-700"> <Link href={""}>Contact Us</Link> </li>
          <li className="text-gray-700"> <Link href={""}>Help Center</Link> </li>
          <li className="text-gray-700"> <Link href={""}>Track Your Progress</Link> </li>
        </ul>
      </div>

           <div>
        <h2 className="text-lg font-bold mb-5">ABOUT</h2>
        <ul className="flex flex-col gap-2">
          <li className="text-gray-700"> <Link href={""}>About Med.AI</Link> </li>
          <li className="text-gray-700"> <Link href={""}>Careers</Link> </li>
          <li className="text-gray-700"> <Link href={""}>Press</Link> </li>
          <li className="text-gray-700"> <Link href={""}>Investor Relations</Link> </li>
          <li className="text-gray-700"> <Link href={""}>Sustainability</Link> </li>
        </ul>
      </div>

                <div>
        <h2 className="text-lg font-bold mb-5">POLICIES</h2>
        <ul className="flex flex-col gap-2">
          <li className="text-gray-700"> <Link href={""}>Privacy Policy</Link> </li>
          <li className="text-gray-700"> <Link href={""}>Terms of Service</Link> </li>
          <li className="text-gray-700"> <Link href={""}>Cookie Policy</Link> </li>
          <li className="text-gray-700"> <Link href={""}>Refund Policy</Link> </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer