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
        <div className="w-auto h-10 px-2 py-[11px] bg-neutral-900 rounded border border-neutral-700 justify-center items-center gap-2.5 inline-flex">
            <Image src='/Arbitrum.svg' alt="icon" width={20} height={20} />
        </div>
    </div>

const Title = () => <div className="w-full h-[123px] pt-6 pb-9 justify-center items-center text-center gap-3 sm:text-start">
    <div className="w-auto text-white text-[32px] font-normal">Super Referral</div>
    <div className="w-auto text-zinc-400 text-[13px] font-normal">Updated on August 01 at 8:00 (UTC+8)</div>
</div>

const Content = () => <div className="w-auto flex-auto sm:flex-1 h-auto px-6 py-4 bg-color_10 rounded-xl flex-col justify-start items-end gap-4 inline-flex">
    <div className="self-stretch rounded-xl justify-start items-center gap-1 inline-flex">
        <div className="text-white text-sm font-normal capitalize">Total Traders Referred</div>
    </div>
    <div className="self-stretch h-12 flex-col justify-start items-start flex">
        <div className="justify-center items-center inline-flex">
            <div className="text-white text-xl font-semibold capitalize">888</div>
        </div>
        <div className="justify-start items-center gap-1 inline-flex">
            <div className="text-[#78808E] text-sm font-normal capitalize">+2 in the last Day</div>
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

    return <div className="lg:mx-24 lg:my-12 mx-3 my-2">
        < Header />
        <Title />
        <div className='flex gap-6 mb-6 flex-col sm:flex-row'>
            <Content />
            <Content />
            <Content />
            <Content />
        </div>

        <div className="w-full h-auto sm:px-6 sm:py-4 bg-color_10 rounded-2xl flex-col justify-start ">
            <div className="w-full py-0.5 rounded-xl justify-between items-center inline-flex">
                <div className="w-auto text-white text-base font-semibold capitalize">Rebates distribution history</div>
                <div className="px-4 py-[11px] bg-color_10 rounded-lg border border-neutral-700 items-center gap-2 flex">
                    <div className="justify-center items-center gap-1 flex">
                        <div className="text-white text-sm font-normal" onClick={() => handleExport()}>Export</div>
                    </div>
                </div>
            </div>
            <div className="mt-[7px]">
                <Table bordered={false} columns={columns} dataSource={new Array(20).fill(1).map(() => ({ ...mockData }))} pagination={{ showQuickJumper: true }} scroll={{ x: 'auto', y: 300 }}></Table>
            </div>
        </div>
    </div >
}

export default ConnectedArea