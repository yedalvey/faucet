import { CustomButton } from 'src/components/CustomConnectButton'
import ConnectedArea from './main'
import { Connected } from 'src/components/Connected'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Page = () =>{

  // const router = useRouter()

  // router.push('/home', { scroll: false })
  return (
    <div>
      <Connected flag={false}>
        <div className="h-screen w-screen flex items-center justify-center">
          <div className='text-white text-center font-semibold text-7xl'>
            Super Referral
            <div className='flex items-center gap-3 justify-center mt-6'>
              <div className="w-10 h-10 px-2 py-[11px] bg-neutral-900 rounded border border-neutral-700 justify-center items-center gap-2.5 inline-flex">
                <Image src='/Arbitrum.svg' alt="icon" width={20} height={20} />
              </div>
              <CustomButton />
              {/* <div className="text-center text-white text-2xl font-normal">I'm sorry, you do not have the authorization.</div> */}
            </div>
          </div>
        </div>
      </Connected>
      <Connected>
        {/* <NetworkSwitcher /> */}
        {/* <Account /> */}
        <ConnectedArea />
      </Connected>
    </div>
  )
}

export default Page
