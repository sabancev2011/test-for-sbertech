'use client'

import { ArrowUturnLeftIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";

import { lusitana } from "../fonts";

export default function Repo({ repo }: any) {

    const router = useRouter()
    
    return (
        <div className="flex w-full flex-col md:col-span-4">
            <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                {repo['full_name']}
            </h2>
            <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
                <div className="bg-white px-6">
                    <div
                        key={repo['id']}
                        className='flex flex-row items-center justify-between py-4'>
                        <div className="flex items-center">
                            <div className="min-w-0">
                                <p className="truncate text-sm font-semibold md:text-base">
                                    {repo['name']}
                                </p>
                                <p className="hidden text-sm text-gray-500 sm:block">
                                    {repo['default_branch']}
                                </p>
                            </div>
                        </div>
                        <p className={`${lusitana.className} truncate text-sm font-medium md:text-base`}>
                            {repo['url']}
                        </p>
                    </div>
                </div>
                <button onClick={() => router.back()} className="flex items-center pb-2 pt-6">
                    <ArrowUturnLeftIcon className="h-5 w-5 text-gray-500" />
                    <h3 className="ml-2 text-sm text-gray-500 ">Go back</h3>
                </button>
            </div>
        </div>
    );
}