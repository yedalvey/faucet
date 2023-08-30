import { CustomButton } from 'src/components/CustomConnectButton'
// import { Account } from '../components/Account'
// import { Balance } from '../components/Balance'
// import { BlockNumber } from '../components/BlockNumber'
import { ConnectKitButton } from '../components/ConnectKitButton'
import { NetworkSwitcher } from '../components/NetworkSwitcher'
import ConnectedArea from './main'
import { Connected } from 'src/components/Connected'

export function Page() {
  return (
    <div>
      <Connected flag={false}>
        <div className="h-screen w-screen flex items-center justify-center">
          <div className='text-white text-center font-semibold text-7xl'>
            Super Referral
            <div>
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
