import { FC } from "react"
import { ConnectKitButton } from "src/components/ConnectKitButton"
import { Table } from 'antd'
interface IProps {

}

const Header = () =>
    <div className="w-[1600px] h-[60px] px-5 py-2.5 justify-between items-center gap-[200px] inline-flex">
        <div />
        <div className="justify-end items-center gap-3 flex">
            <div className="w-[159px] px-4 py-[11px] bg-neutral-900 rounded-lg border border-neutral-700 justify-center items-center gap-2 flex">
                <div className="w-6 h-6 justify-center items-center gap-2.5 flex">
                    <img className="w-6 h-6 origin-top-left rotate-180 rounded-full" src="https://via.placeholder.com/24x24" />
                </div>
                <div className="justify-center items-center gap-1 flex">
                    <ConnectKitButton />
                </div>
            </div>
            <div className="w-10 px-2 py-[11px] bg-neutral-900 rounded border border-neutral-700 justify-center items-center gap-2.5 flex">
                <div className="w-6 h-6 px-[1.31px] origin-top-left rotate-180 justify-center items-center flex">
                    <div className="w-[21.38px] h-6 relative">
                    </div>
                </div>
            </div>
        </div>
    </div>

const Title = () => <div>
    <div className="w-[1400px] text-white text-[32px] font-normal">Super Referral</div>
    <div className="w-[1400px] text-zinc-400 text-[13px] font-normal">Updated on August 01 at 8:00 (UTC+8)</div>
</div>

const Content = () => <div className="w-[332px] h-[116px] px-6 py-4 bg-neutral-900 rounded-xl flex-col justify-start items-end gap-4 inline-flex">
    <div className="self-stretch rounded-xl justify-start items-center gap-1 inline-flex">
        <div className="text-white text-sm font-normal capitalize">Total Traders Referred</div>
    </div>
    <div className="self-stretch h-12 flex-col justify-start items-start flex">
        <div className="justify-center items-center inline-flex">
            <div className="text-white text-xl font-semibold capitalize">888</div>
        </div>
        <div className="justify-start items-center gap-1 inline-flex">
            <div className="text-slate-500 text-sm font-normal capitalize">+2 in the last Day</div>
        </div>
    </div>
</div>
const ConnectedArea: FC<IProps> = (props) => {
    const columns = [
        {
            title: 'Date',
            width: '30%',
            dataIndex: 'date',
            // render: (timestamp: number) => {
            //     // return formatTime(timestamp)
            //     return timestamp
            // },
        },
        {
            title: 'Total Volumn',
            width: '30%',
            dataIndex: 'totalVolumn',
        },
        {
            title: 'Total Rebates',
            width: '40%',
            dataIndex: 'totalRebates',
            align: 'right',
        },
        {
            title: 'Amount',
            width: '30%',
            dataIndex: 'amount',
        },
    ]

    const mockData = {
        date: '12312391283',
        totalVolumn: '12312391283',
        totalRebates: '12312391283',
        amount: '1231239128',
    }
    return <div className="mx-[100px] my-[50px]">
        <Header />
        <Title />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Table columns={columns} dataSource={new Array(20).fill(1).map(() => ({ ...mockData }))} pagination={{ showQuickJumper: true }}></Table>
    </div>
}

export default ConnectedArea