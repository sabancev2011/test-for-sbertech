import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import { lusitana } from '../fonts';

export default function SearchLogo() {
    return (
        <div
            className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
        >
            <p className="text-[44px] inline-block mr-4">User search</p>
            <MagnifyingGlassIcon className="h-12 w-12" />
        </div>
    );
}