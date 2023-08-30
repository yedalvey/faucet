'use client'
import { FC } from "react"
import { ConnectKitButton } from "src/components/ConnectKitButton"
import { Table } from 'antd'
import Image from 'next/image'

interface IProps {

}

const Header = () =>
    <div className="w-full h-[60px] px-5 py-2.5 justify-end items-center gap-[12px] inline-flex">
        <ConnectKitButton />
        <div className="w-10 h-10 px-2 py-[11px] bg-neutral-900 rounded border border-neutral-700 justify-center items-center gap-2.5 inline-flex">
            <Image src='/Arbitrum.svg' alt="icon" width={20} height={20} />
        </div>
    </div>

const Title = () => <div className="w-[1400px] h-[123px] pt-6 pb-9 justify-start items-center gap-3">
    <div className="w-[1400px] text-white text-[32px] font-normal">Super Referral</div>
    <div className="w-[1400px] text-zinc-400 text-[13px] font-normal">Updated on August 01 at 8:00 (UTC+8)</div>
</div>

const Content = () => <div className="w-[332px] h-[116px] px-6 py-4 bg-[#121418] rounded-xl flex-col justify-start items-end gap-4 inline-flex">
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

    const handleExport = () => {

    }

    return <div className="mx-[100px] my-[50px]">
        <Header />
        <Title />
        <div className='flex gap-6 mb-6'>
            <Content />
            <Content />
            <Content />
            <Content />
        </div>

        <div className="w-[1400px] h-auto px-6 py-4 bg-[#121418] rounded-2xl flex-col justify-start">
            <div className="w-[1352px] h-9 py-0.5 rounded-xl justify-between items-center inline-flex">
                <div className="text-white text-base font-semibold capitalize">Rebates distribution history</div>
                <div className="w-[75px] px-4 py-[11px] bg-[#121418] rounded-lg border border-neutral-700 justify-center items-center gap-2 flex">
                    <div className="justify-center items-center gap-1 flex">
                        <div className="text-white text-sm font-normal" onClick={() => handleExport()}>Export</div>
                    </div>
                </div>
            </div>
            <div className="mt-[7px]">
                <Table bordered={false} columns={columns} dataSource={new Array(20).fill(1).map(() => ({ ...mockData }))} pagination={{ showQuickJumper: true }}></Table>
            </div>
        </div>
    </div>
}

export default ConnectedArea