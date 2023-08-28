import { CustomButton } from 'src/components/CustomConnectButton'
// import { Account } from '../components/Account'
// import { Balance } from '../components/Balance'
// import { BlockNumber } from '../components/BlockNumber'
import { ConnectKitButton } from '../components/ConnectKitButton'
import { NetworkSwitcher } from '../components/NetworkSwitcher'
import { UnConnected } from 'src/components/UnConnected'
import ConnectedArea from './main'
import { Connected } from 'src/components/Connected'
import Head from 'next/head';

export function Page() {
  return (
    <div>
      <Head><link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
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
